import { Dispatch, SetStateAction, useCallback, useEffect, useMemo } from "react"
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { DailyAnalyticsBank } from "./Main";
import axios from "axios";

interface Props {
    bank: DailyAnalyticsBank;
    setBank: Dispatch<SetStateAction<DailyAnalyticsBank>>
}

export default function DayAnalytics({bank, setBank}:Props) {

    const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"))

    const analytics = useMemo(() => bank.data[date]?.data, [date, bank])

    const updateDayAnalytics = useCallback(async (date:string) => {
        try {
            const {data: {analytics}} = await axios({
                method: "GET",
                url: `/api/admin/analytics/${date}`
            })

            setBank({data: {...bank.data, [date]: {
                status: "updated",
                timeUpdated: dayjs(),
                data: analytics
            }}})
        } catch (e) {
            console.log(e)
        }
    }, [bank])

    useEffect(() => {

        if (bank.data[date]) return

        setBank({data: {...bank.data, [date]: {...bank.data[date], status: "updating"}}})

        updateDayAnalytics(date)

    }, [date])

    console.log(analytics)

    return (
        <Box maxWidth={800}>
            <Paper>
                <Box p={3}>
                    <Box my={3}>
                        <Grid container alignItems="end" spacing={3}>
                            <Grid item>
                                <TextField type="date" InputLabelProps={{shrink: true}}
                                value={date} onChange={(e) => setDate(e.target.value)} />
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">
                                    Analytics
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}
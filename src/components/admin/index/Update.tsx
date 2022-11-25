import { Box, Grid, Typography } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";
import { BeigePrimaryDenseButton } from "../../misc/buttons";

interface Props {
    onClick: () => void;
    lastUpdated: Dayjs;
}

export default function Update({onClick, lastUpdated}:Props) {

    const minutesAgo = useMemo(() => {
        if (!lastUpdated) {
            return 0
        }
        return dayjs().diff(lastUpdated, "minutes")
    }, [lastUpdated])

    return (
        <Box>
            <Grid container spacing={3} alignItems="center">
                <Grid item>
                    <BeigePrimaryDenseButton onClick={() => onClick()}>
                        Update
                    </BeigePrimaryDenseButton>
                </Grid>
                <Grid item>
                    <Typography variant="body1">
                        Last updated {minutesAgo} minutes ago
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
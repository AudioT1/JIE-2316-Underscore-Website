import { Box, Typography, Grid, Paper } from "@mui/material";
import dayjs from "dayjs";
import { useMemo } from "react";
import { C_ContactMessage } from "../../../database/interfaces/ContactMessage";

interface Props {
    contactMessages: C_ContactMessage[];
}

export default function Main({contactMessages}:Props) {

    const dates = useMemo(() => (
        contactMessages.map(msg => dayjs(msg.data.time['@ts']))
    ), [contactMessages])

    return (
        <Box ml={3}>
            <Grid container height="98px" alignItems="center" >
                <Grid item>
                    <Typography variant="h4">
                        Contact Messages
                    </Typography>
                </Grid>
            </Grid> 
            <Box>
                {contactMessages.map((msg, i) => (
                    <Box maxWidth="sm" mb={6}>
                        <Paper elevation={3}>
                            <Box p={3}>
                                <Box>
                                    <Typography variant="h6">
                                        {msg.data.first} {msg.data.last}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">
                                        {msg.data.email}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1">
                                        Sent on {dates[i].format('MMMM D')} at {dates[i].format('h A')}
                                    </Typography>
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="body1">
                                        {msg.data.message}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
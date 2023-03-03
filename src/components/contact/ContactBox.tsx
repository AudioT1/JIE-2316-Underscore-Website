import { Box, Paper, useTheme, useMediaQuery } from "@mui/material";
import InfoSidebar from "./InfoSidebar"
import MessageForm from "./MessageForm"

export default function ContactBox() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box sx={{
            backgroundColor: 'background.default',
            py: 12,
        }}>
            <Paper sx={{ 
                elevation: 10,
                mx: 'auto',
                maxWidth: 'xl',
            }}>
                <Box sx={{ 
                    display: 'flex',
                    borderRadius: '70%'
                }}>
                    <InfoSidebar/>
                    <MessageForm/>
                </Box>
            </Paper>
        </Box>
    )
}
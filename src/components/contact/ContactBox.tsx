import { Box, useTheme, useMediaQuery } from "@mui/material";
import InfoSidebar from "./InfoSidebar"
import MessageForm from "./MessageForm"

export default function ContactBox() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Box sx={{
            backgroundColor: 'background.default',
            pt: 6,
            pb: 6,
            pl: 20,
            pr: 20,
            height: 1000
        }}>
            <Box sx={{ 
                display: 'flex',
            }}>
                <InfoSidebar/>
                <MessageForm/>
            </Box>
        </Box>
    )
}
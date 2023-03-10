import { Box, Typography, useMediaQuery, useTheme, NoSsr, Grid } from "@mui/material";
import { useRef,useState } from "react";
import { RedOrangeLargeIconButton } from "../misc/buttons";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function ComponentsModels() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))
    const xsmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const xlScreen =  useMediaQuery(theme.breakpoints.down('xl'))

    const vidRef = useRef<HTMLVideoElement>(null)

    const [showPlayBtn, setShowPlayBtn] = useState(true)

    const onVidClick = () => {
        if (vidRef.current?.paused) {
            vidRef.current?.play()
            setShowPlayBtn(false)
        }
    }

    return ()
}
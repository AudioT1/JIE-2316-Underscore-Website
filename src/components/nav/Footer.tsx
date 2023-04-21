import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {

    return (
        <Box bgcolor="background.paper">
            <Box my={1} textAlign="center">
                <Typography variant="body1">
                    <Link href="/news">
                        Find us on LinkedIn!
                    </Link>
                </Typography>
            </Box>
        </Box>
    )
}
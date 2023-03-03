import { Formik, Form, FormikHelpers } from "formik"
import { Box, FormGroup, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { object, string } from "yup"
import FormikTextField from "../formik/TextField"
import { OrangePrimaryButton } from "../misc/buttons"
import axios, { AxiosError } from "axios";
import Router from "next/router"

interface FormVals {
    first: string;
    last: string;
    email: string;
    message: string;
}

export default function ContactBox() {

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    const initialValues = {
        first: "",
        last: "",
        email: "",
        message: ""
    }

    const onSubmit = async (vals:FormVals, actions:FormikHelpers<FormVals>) => {
        console.log(vals);
        console.log(actions);
    }

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
                <Box sx={{
                    backgroundColor: 'secondary.main',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography py={0} sx={{ fontWeight: 'bold', letterSpacing: 1 }} variant={smallScreen ? 'h4' : 'h2'} color="primary.main">
                        CONTACT US
                    </Typography>
                    <Box sx={{ 
                        backgroundImage: 'url(/vector_chicken.svg)',
                        height: 300,
                        width: 260,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        position: 'relative',
                        margin: 'auto'}}>
                    </Box>
                    <Typography>
                        Get in touch!
                    </Typography>
                    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <Box sx={{ 
                                backgroundImage: 'url(/location.svg)',
                                margin: 'auto',
                                height: 30,
                                width: 30,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                position: 'relative'}}>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>
                                AudioT Corporate Headquarters
                            </Typography>
                            <Typography>
                                Atlanta, GA
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ 
                                backgroundImage: 'url(/mail.svg)',
                                margin: 'auto',
                                height: 30,
                                width: 30,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                position: 'relative'}}>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>
                                contact@audiot.com
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ 
                                backgroundImage: 'url(/phone.svg)',
                                margin: 'auto',
                                height: 30,
                                width: 30,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                position: 'relative'}}>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>
                                123-456-7890
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    backgroundColor: '#FFFFFF'
                }}>
                    <Formik validationSchema={object({
                        first: string().required("Please enter your first name."),
                        last: string().required("Please enter your last name."),
                        email: string().required("Please enter your email."),
                        message: string().required("Please enter a message.")
                    })} initialValues={initialValues} 
                    onSubmit={(values, actions) => onSubmit(values, actions)}>
                        {({isSubmitting, isValidating}) => (
                            <Form>
                                <Box sx={{ display: 'flex' }} my={3}>
                                    <FormGroup>
                                        <FormikTextField name="first" label="First Name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormikTextField name="last" label="Last Name" />
                                    </FormGroup>
                                </Box>
                                <Box my={3}>
                                    <FormGroup>
                                        <FormikTextField name="email" label="Email" />
                                    </FormGroup>
                                </Box>
                                <Box my={3}>
                                    <FormGroup>
                                        <FormikTextField name="message" label="Message" />
                                    </FormGroup>
                                </Box>
                                <Box my={3} maxWidth={200} mx="auto" textAlign="center">
                                    <OrangePrimaryButton fullWidth type="submit" 
                                        disabled={isSubmitting || isValidating}>
                                        Send Message
                                    </OrangePrimaryButton>
                                </Box>
                            </Form> 
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    )

}
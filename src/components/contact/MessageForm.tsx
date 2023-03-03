import { Formik, Form, FormikHelpers } from "formik"
import { Box, FormGroup, useTheme, useMediaQuery } from "@mui/material";
import { object, string } from "yup"
import FormikTextField from "../formik/TextField"
import { OrangePrimaryButton } from "../misc/buttons"

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
    )
}
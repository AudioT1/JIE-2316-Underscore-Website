import { Formik, Form, FormikHelpers } from "formik"
import { Box, FormGroup } from "@mui/material";
import { object, string } from "yup"
import FormikTextField from "../formik/TextField"
import { OrangePrimaryButton } from "../misc/buttons"
import axios, { AxiosError } from "axios";
import Router from "next/router"

interface FormVals {
    email: string;
    message: string;
}

export default function ContactBox() {

    const initialValues = {
        email: "",
        message: ""
    }

    const onSubmit = async (vals:FormVals, actions:FormikHelpers<FormVals>) => {
        console.log(vals);
        console.log(actions);
    }

    return (
        <Box sx={{height: 300}}>
            <Box/>
            <Box sx={{backgroundColor: '#FFFFFF'}}>
                <Formik validationSchema={object({
                    email: string().required("Please enter your email."),
                    message: string().required("Please enter a message.")
                })} initialValues={initialValues} 
                onSubmit={(values, actions) => onSubmit(values, actions)}>
                    {({isSubmitting, isValidating}) => (
                        <Form>
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
    )

}
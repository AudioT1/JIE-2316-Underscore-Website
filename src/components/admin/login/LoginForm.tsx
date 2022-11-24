import { Formik, Form } from "formik"
import { Box, FormGroup } from "@mui/material";
import { object, string } from "yup"
import FormikTextField from "../../formik/TextField"
import FormikPasswordField from "../../formik/PasswordField";
import { BeigePrimaryButton } from "../../misc/buttons"

export default function LoginForm() {

    const initialValues = {
        username: "",
        password: ""
    }

    return (
        <Box>
            <Formik validationSchema={object({
                username: string().required("Please enter your username."),
                password: string().required("Please enter your password.")
            })} initialValues={initialValues} onSubmit={(values, actions) => {}}>
                {({isSubmitting, isValidating}) => (
                    <Form>
                        <Box my={3}>
                            <FormGroup>
                                <FormikTextField name="username" label="Username" />
                            </FormGroup>
                        </Box>
                        <Box my={3}>
                            <FormGroup>
                                <FormikPasswordField name="password" label="Password" />
                            </FormGroup>
                        </Box>
                        <Box my={3} maxWidth={200} mx="auto" textAlign="center">
                            <BeigePrimaryButton fullWidth type="submit" 
                                disabled={isSubmitting || isValidating}>
                                Login
                            </BeigePrimaryButton>
                        </Box>
                    </Form> 
                )}
            </Formik>
        </Box>
    )
}
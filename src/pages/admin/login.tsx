import Head from "next/head";
import styles from "../../styles/pages/HeaderOnly.module.css"
import Main from "../../components/admin/login/Main"

export default function Login() {

    return (
        <>
            <Head>
                <title>Admin Login</title>   
            </Head> 
            <div className={styles.root}>
                <div>
                    admin header
                </div>
                <div>
                    <Main />
                </div>
            </div>
        </>
    )
}
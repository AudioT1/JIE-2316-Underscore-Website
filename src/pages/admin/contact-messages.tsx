import Head from "next/head";
import styles from "../../styles/pages/HeaderSidebar.module.css"
import AdminSidebar from "../../components/nav/AdminSidebar";
import AdminHeader from "../../components/nav/AdminHeader";
import Main from "../../components/admin/contactMessages/Main"

export default function ContactMessages() {

    return (
        <>
            <Head>
                <title>Admin Contact Messages</title>
            </Head> 
            <div className={styles.root}>
                <AdminHeader />
                <AdminSidebar />
                <div>
                    <Main />
                </div>
            </div>
        </>
    )
}
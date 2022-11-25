import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Head from "next/head";
import { C_Admin } from "../../database/interfaces/Admin";
import { getAdmin } from "../../utils/admin-auth";
import styles from "../../styles/pages/HeaderSidebar.module.css"
import AdminSidebar from "../../components/nav/AdminSidebar";

interface Props {
    admin: C_Admin;
}

export default function Admin({admin}:Props) {

    return (
        <>
            <Head>
                <title>Admin Dashboard</title>     
            </Head> 
            <div className={styles.root}>
                <div>
                </div>
                <AdminSidebar />
                <div>
                    main
                </div>
            </div>
        </>
    )
}

export const getServerSideProps:GetServerSideProps = async (ctx:GetServerSidePropsContext) => {

    const {admin, redirect} = await getAdmin(ctx)

    if (redirect) {
        return redirect
    }

    return {props: {
        admin: JSON.parse(JSON.stringify(admin))
    }}
}
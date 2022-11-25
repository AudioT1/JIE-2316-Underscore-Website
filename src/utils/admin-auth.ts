import { GetServerSidePropsContext} from "next";
import { parseCookies } from "nookies";
import { C_AdminData } from "../database/interfaces/Admin";
import jwt from "jsonwebtoken"
import { getAdminFromUsername } from "../database/operations/admin";

export async function getAuthToken(ctx:GetServerSidePropsContext) {

    const auth = parseCookies(ctx)["admin-auth"]

    if (!auth) return null

    return new Promise<C_AdminData|null>((resolve, reject) => {
        jwt.verify(auth, process.env.JWT_TOKEN_SIGNATURE, (err, decoded) => {
            if (!err && decoded) resolve(decoded as C_AdminData)
            resolve(null)
        })
    })
}

export async function mustNotBeAuthenticated(ctx:GetServerSidePropsContext) {

    const token = await getAuthToken(ctx)

    if (!token) {
        return null
    }

    return {props: {}, redirect: {destination: "/admin"}}
}

export async function getAdmin(ctx:GetServerSidePropsContext) {

    const token = await getAuthToken(ctx)

    if (!token) {
        return {admin: null, redirect: {
            props: {},
            redirect: {destination: "/admin/login"}
        }}
    }

    try {

        const admin = await getAdminFromUsername(token.username)

        if (!admin) {
            throw new Error("No Admin found!")
        }

        return {admin, redirect: null}
    } catch (e) {
        return {admin: null, redirect: {
            props: {},
            redirect: {destination: "/admin/login"}
        }}
    }
}
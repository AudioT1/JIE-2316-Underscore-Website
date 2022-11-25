import { GetServerSidePropsContext} from "next";
import { parseCookies } from "nookies";
import { C_AdminData } from "../database/interfaces/Admin";
import jwt from "jsonwebtoken"

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
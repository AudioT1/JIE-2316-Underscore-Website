import client from "../fauna"
import {query as q} from "faunadb"
import { AdminData, S_Admin } from "../interfaces/Admin"

export async function createAdmin(data:AdminData) {

    const admin:S_Admin = await client.query(
        q.Create(q.Collection('admins'), {data})
    )

    return admin
}
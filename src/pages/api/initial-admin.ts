import { NextApiRequest, NextApiResponse } from "next";
import { AdminData } from "../../database/interfaces/admin";
import { createAdmin } from "../../database/operations/admin";

export default async function InitialAdmin(req:NextApiRequest, res:NextApiResponse) {

    const data:AdminData = {
        username: "AudioT_Root",
        email: "audiot.development@gmail.com",
        password: process.env.ADMIN_ROOT_PASSWORD
    }

    await createAdmin(data)

    return res.json({msg: "hi"})
}
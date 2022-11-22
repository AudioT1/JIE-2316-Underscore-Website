import { NextApiRequest, NextApiResponse } from "next";
import { AdminData } from "../../database/interfaces/admin";
import { createAdmin } from "../../database/operations/admin";

export default async function InitialAdmin(req:NextApiRequest, res:NextApiResponse) {

    const data:AdminData = {
        username: "test",
        email: "test",
        password: "test"
    }

    await createAdmin(data)

    return res.json({msg: "hi"})
}
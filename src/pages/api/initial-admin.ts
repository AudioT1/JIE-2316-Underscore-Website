import { NextApiRequest, NextApiResponse } from "next";
import { createInitialAdmin } from "../../utils/initialAdminCreation";

export default async function InitialAdmin(req:NextApiRequest, res:NextApiResponse) {

    createInitialAdmin()

    return res.json({msg: "hi"})
}
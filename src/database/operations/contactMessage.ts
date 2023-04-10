import client from "../fauna"
import {query as q} from "faunadb"
import { ContactMessageData, S_ContactMessage } from "../interfaces/ContactMessage"

export async function addContactMessage(data:ContactMessageData) {

    let copy:any = {...data}
    copy.time = q.Now()

    return await client.query(
        q.Create(q.Collection('contactMessages'), {data: copy})
    )
}

export async function getInitialRecentContactMessages() {

    return (await client.query(
        q.Map(
            q.Paginate(
                q.Match(q.Index('contactMessages_sorted_by_time')),
                {size: 2}
            ),
            q.Lambda('item', q.Get(q.Select(1, q.Var('item'))))
        )
    ) as {data: S_ContactMessage[]}).data
}
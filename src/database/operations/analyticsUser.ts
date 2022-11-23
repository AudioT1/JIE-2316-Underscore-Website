import client from "../fauna"
import { query as q } from "faunadb"

function getAnalyticsUserInnerQuery(randomId:string) {
    return q.If(
        q.Exists(q.Match(q.Index("analyticsUsers_by_randomId"), randomId)),
        q.Get(q.Match(q.Index("analyticsUsers_by_randomId"), randomId)),
        q.Create(q.Collection("analyticsUsers"), {data: {
            randomId,
            lastVist: q.Now(),
            pageVisitFrequencies: {}
        }})
    )
}

export async function incrementPageVisited(randomId:string, page:string) {

    return await client.query(
        q.Let(
            {
                user: getAnalyticsUserInnerQuery(randomId)
            },
            q.Update(q.Select("ref", q.Var("user")), {data: {
                pageVisitFrequencies: {
                    [page]: q.If(
                        q.ContainsField(page, q.Select(["data", "pageVisitFrequencies"], q.Var("user"))),
                        q.Add(q.Select(["data", "pageVisitFrequencies", page], q.Var("user")), 1),
                        1
                    ),
                },
                lastVisit: q.Now()
            }})
        )
    )
}
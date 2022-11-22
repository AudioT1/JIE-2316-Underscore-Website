import { AdminData } from "../database/interfaces/admin"
import { createAdmin } from "../database/operations/admin"

export async function createInitialAdmin() {

    const data:AdminData = {
        username: "test",
        email: "test",
        password: "test"
    }

    await createAdmin(data)
}

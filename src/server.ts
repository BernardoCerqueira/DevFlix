import express from "express"
import {prisma} from "./database"

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    try {
        await prisma.$connect()
        console.log("DB connection successful.")
    } catch (error) {
        console.error("DB connection failed: ", error)
    }

    console.log(`Server started successfully at port ${PORT}`)
})
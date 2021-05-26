import express, { Application, Request, Response } from "express"
import morgan from "morgan"
import dotenv from "dotenv"
const app: Application = express()
const port: number = 3001

dotenv.config()

//body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(morgan("dev"))

//test dotenv
console.log(process.env.TEST)


app.get("/", (req: Request, res: Response) => {
    res.send("okay")
})

app.listen(port, (): any => { console.log(`App Running on http://localhost:${port}`) })


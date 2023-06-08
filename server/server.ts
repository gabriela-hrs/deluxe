const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
import { json } from 'express'
import { userRouter } from './routers/userRouter'
import {userReservations} from "./routers/userReservations";
require('dotenv').config()

const app = express()
app.use(json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONT_END_ORIGIN],
    credentials: true
}))
app.use(userRouter)
app.use(userReservations)

app.listen(process.env.BACK_END_PORT, () => {
    console.log(`Listening...`)
});
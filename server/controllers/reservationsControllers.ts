import { Request, Response } from "express"
import { DB } from "../core/DB"

const db = new DB()

export const scheduleAppointment = (req: Request, res: Response) => {
    const scheduleAppointment = "INSERT INTO reservations (`username`, `date`, `hour`,`service`) VALUES (?)"
    const reservationInfo = [
        req.body.username,
        req.body.date,
        req.body.hour,
        req.body.service,
    ]
    db.conn.query(scheduleAppointment, [reservationInfo], (error: any, result: any) => {
        if(error) return res.json({Error: "Failed to schedule appointment..."})
        return res.json({Status: "Successfully scheduled appointment!"})
    })
}
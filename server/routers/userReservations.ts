import { Router } from "express";
import { scheduleAppointment } from "../controllers/reservationsControllers";

export const userReservations = Router()

userReservations.post('/scheduleAppointment', scheduleAppointment)


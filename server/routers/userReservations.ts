import { Router } from "express";
import {getReservations, scheduleAppointment} from "../controllers/reservationsControllers";

export const userReservations = Router()

userReservations.post('/scheduleAppointment', scheduleAppointment)
userReservations.get("/user-profile", getReservations)

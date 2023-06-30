import {Router} from "express"
import { getRandomPerson } from "../controllers/person.controller"

const personRouter = Router()

personRouter.get("/person",getRandomPerson)

export default personRouter

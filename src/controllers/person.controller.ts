import { Request, Response } from "express";
import personService from "../services/person-services";
import httpStatus from "http-status";



export async function getRandomPerson(req:Request,res:Response){
try{
const person = await personService.getRandomPersonService();
res.status(httpStatus.OK).send(person);
}catch(err){
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}
}


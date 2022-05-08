import {Router} from "express";
import nodemailer from "nodemailer";
import {createFeedbackUseCase} from "./UseCases/CreateFeedback";

const router = Router();



router.post('/feedbacks', async (req, res)=>{
    const { type, comment, screenshot } = req.body;

    await createFeedbackUseCase.execute({type, comment, screenshot})

    /**/

    return res.status(201).send()
})


export {router}

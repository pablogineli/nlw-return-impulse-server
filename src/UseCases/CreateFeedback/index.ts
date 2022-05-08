import {PrismaFeedbackRepository} from "../../repositories/prisma/PrismaFeedbackRepository";
import {CreateFeedbackUseCase} from "./CreateFeedbackUseCase";
import {NodeMailService} from "../../services/nodemailer/NodeMailService";


const prismaFeedbackRepository = new PrismaFeedbackRepository();
const nodeMailerMailService = new NodeMailService()
const createFeedbackUseCase = new CreateFeedbackUseCase(prismaFeedbackRepository, nodeMailerMailService );


export {createFeedbackUseCase}

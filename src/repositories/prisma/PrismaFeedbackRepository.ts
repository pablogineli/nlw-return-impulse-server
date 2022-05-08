import {FeedbacksRepository, FeedbackCreateData} from "../FeedbacksRepository";
import {prisma} from "../../prisma";

export class PrismaFeedbackRepository implements FeedbacksRepository{
    async create(data: FeedbackCreateData){
        const {type, comment, screenshot} = data
         await prisma.feedback.create({
            data:{
                type,
                comment,
                screenshot,
            }
        })
    }
}

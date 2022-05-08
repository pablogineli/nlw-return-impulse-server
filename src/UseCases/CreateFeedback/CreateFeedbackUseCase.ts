import {FeedbacksRepository} from "../../repositories/FeedbacksRepository";

import {MailService} from "../../services/MailService";

interface SubmitFeedbackUseCaseRequest{
    type: string;
    comment: string;
    screenshot?: string;
}

export class CreateFeedbackUseCase {
    constructor(
       private feedbackRepository: FeedbacksRepository,
       private mailService: MailService
    ) {}

    async execute(request: SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshot} = request;

        if (!type){
            throw new Error("Type is required.")
        }

        if (!comment){
            throw new Error("Comment is required.")
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')){
            throw new Error("Invalid screenshot format")
        }
         await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })
        await this.mailService.sendMail({
            subject: "Novo FeedBack",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do Feedback: ${type}</p>`,
                `<p> Comentario: ${comment}</p>`,
                screenshot ? `<img src="${screenshot}" /> `: ``,
                `</div>`
            ].join('\n')
        })
    }
}

import {CreateFeedbackUseCase} from "./CreateFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const createFeedback = new CreateFeedbackUseCase(
    {create: createFeedbackSpy},
    {sendMail: sendMailSpy}
)
describe("Submit feedback", ()=>{
    it('should be able to submit a feedback', async function () {

        await expect(createFeedback.execute({
            type: "BUG",
            comment: "Example comment",
            screenshot: "data:image/png;base64,"
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to created feedback without type', async function () {

        await expect(createFeedback.execute({
            type: "",
            comment: "Example comment",
            screenshot: "data:image/png;base64,lsdnbfansdlkfmaçkjsdgfçajbsdf"
        })).rejects.toThrow();
    });

    it('should not be able to created feedback without comment', async function () {

        await expect(createFeedback.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64,lsdnbfansdlkfmaçkjsdgfçajbsdf"
        })).rejects.toThrow();
    });

    it('should not be able to created feedback with an invalid screenshot', async function () {

        await expect(createFeedback.execute({
            type: "BUG",
            comment: "Example comment",
            screenshot: "teste.png"
        })).rejects.toThrow();
    });
})

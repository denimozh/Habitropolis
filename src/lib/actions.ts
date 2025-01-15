import { authFormSchema } from "./auth-schema";
import { executeAction } from "./executeAction"
import prisma from "./prisma";

export const signUp = async (formData: FormData) => {
    return executeAction({
        actionFn: async () => {
            const email = formData.get("email");
            const password = formData.get("password");
            const validatedData = authFormSchema.parse({ email, password });
            await prisma.user.create({
                data: {
                    email: validatedData.email.toLocaleLowerCase(),
                    password: validatedData.password,
                }
            })
        },
        successMessage: "Signed up successfully",
    })
}
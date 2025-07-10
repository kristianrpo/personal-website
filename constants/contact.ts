export const personalEmail = "krestrepoo@eafit.edu.co";
export const subject = "Nuevo mensaje de contacto";
export const from = "Tu Portafolio <onboarding@resend.dev>";

export interface ContactHtmlParams {
  name: string;
  email: string;
  message: string;
}

export const htmlFunction: (
  name: ContactHtmlParams["name"],
  email: ContactHtmlParams["email"],
  message: ContactHtmlParams["message"]
) => string = (name, email, message) => `
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Mensaje:</strong><br/>${message}</p>
`;

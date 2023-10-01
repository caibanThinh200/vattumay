// import { decodeEmail } from "@/utils/helpers";
import Mailjet from "node-mailjet";
import styleTailwind from "../../../tailwindstyle.json";

export async function POST(req: Request) {
  const publicKey = process.env.MAILJET_KEY_PUBLIC || "";
  const privateKey = process.env.MAILJET_KEY_PRIVATE || "";
  const data = await req.text();
  const templateData = JSON.parse(data);
  // if (!publicKey || !privateKey) {
  //   return res.status(500).json({ error: "Could not obtain Mailjet keys. " });
  // }
  const mailjet = Mailjet.apiConnect(publicKey, privateKey);
  //   const { name, email, message, phone } = req;
  const mailjetTemplateID = 3466776;
  const subject = "Website Contact Form Submission ";
  const recipient = "thinhdev20@gmail.com";
  const config = {
    Messages: [
      {
        From: {
          Email: "thinhdev20@gmail.com",
          name: "Vật tư máy",
        },
        To: [
          {
            Email: recipient,
            Name: "Thịnh",
          },
          {
            Email: "tranngocthevinh60@gmail.com",
            Name: 'Vinh'
          }
        ],
        Subject: subject,
        TextPart:
          "Thank you for getting in touch! We appreciate you contacting us. One of our colleagues will get back in touch with you soon!Have a great day!",
        HTMLPart: templateData?.template, 
      },
    ],
  };

  try {
    const request = (await mailjet
      .post("send", { version: "v3.1" })
      .request(config)) as any;

    return new Response("oke");
    // .status(request.response.status || 200)
    // .json({ success: true, data: request.data });
  } catch (error: any) {
    return new Response(error.statusCode || 500);
  }
}

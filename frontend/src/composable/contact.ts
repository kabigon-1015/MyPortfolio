import { init, send } from "@emailjs/browser";

const USER_ID = "mohaHhCmlcuRx7UeB";
const SERVICE_ID = "myportfolio-service";
const TEMPLATE_ID = "myportfolio-template";
export const submit = async (name: string, mail: string, content: string) => {
  if (USER_ID && SERVICE_ID && TEMPLATE_ID) {
    init(USER_ID);
    const params = {
      from_name: name,
      from_mail: mail,
      message: content,
    };
    try {
      await send(SERVICE_ID, TEMPLATE_ID, params);
      return "送信しました!";
    } catch (error) {
      return "送信できませんでした。";
    }
  }
};

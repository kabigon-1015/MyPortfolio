import { init, send } from "@emailjs/browser";

const USER_ID = "mohaHhCmlcuRx7UeB";
const SERVICE_ID = "myportfolio-service";
const TEMPLATE_ID = "myportfolio-template";
export type ResponseMessage = {
  isError: boolean;
  message: string;
};

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
      const response: ResponseMessage = {
        isError: false,
        message: "送信しました!",
      };
      return response;
    } catch (error) {
      const response: ResponseMessage = {
        isError: true,
        message: "送信できませんでした。",
      };
      return response;
    }
  }
};

export const inVaildText = (text: string) => {
  const response: ResponseMessage =
    text.trim().length === 0
      ? {
          isError: true,
          message: "すべての項目を入力してください",
        }
      : {
          isError: false,
          message: "",
        };
  return response;
};

export const inVaildMail = (mail: string) => {
  const response: ResponseMessage = !mail.match(/.+@.+\..+/)
    ? {
        isError: true,
        message: "正しいメールアドレスを入力してください",
      }
    : {
        isError: false,
        message: "",
      };
  return response;
};

export const vaildForm = (name: string, mail: string, content: string) => {
  if (inVaildText(name).isError) {
    return inVaildText(name);
  }
  if (inVaildText(mail).isError) {
    return inVaildText(mail);
  }
  if (inVaildText(content).isError) {
    return inVaildText(content);
  }
  if (inVaildMail(mail).isError) {
    return inVaildMail(mail);
  }
  return false;
};

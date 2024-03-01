import { useState } from "react";
import { ResponseMessage, submit, vaildForm } from "../composable/contact";
import { NowLoading } from "../components/common/NowLoading";
import { AlertSuccess } from "../components/common/AlertSuccess";
import { AlertError } from "../components/common/AlertError";

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<ResponseMessage>();
  const submitContact = async () => {
    setIsLoading(true);
    const errorMassageFromVaild = vaildForm(name, email, content);
    if (errorMassageFromVaild !== false) {
      setResponseMessage(errorMassageFromVaild);
      setIsLoading(false);
      return false;
    }
    console.log(responseMessage?.isError);
    const message = await submit(name, email, content);
    setIsLoading(false);
    message && setResponseMessage(message);
  };
  return (
    <>
      <h1 className="block mb-1 text-2xl font-semibold text-gray-900 dark:text-white p-3">
        ご意見・お問い合わせなど
      </h1>
      <div className="rounded-xl p-10 relative bg-orange-50">
        {responseMessage && !isLoading ? (
          responseMessage.isError ? (
            <AlertError message={responseMessage.message}></AlertError>
          ) : (
            <AlertSuccess message={responseMessage.message}></AlertSuccess>
          )
        ) : (
          <></>
        )}
        {isLoading ? (
          <NowLoading loadingWords="ご意見・お問い合わせ内容を送信しています"></NowLoading>
        ) : (
          <>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">お名前</div>
              <div className="md:w-2/3">
                <div className="indicator">
                  <span className="indicator-item badge">Required</span>
                  <input
                    type="text"
                    placeholder="xxxx"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">メールアドレス</div>
              <div className="md:w-2/3">
                <div className="indicator">
                  <span className="indicator-item badge">Required</span>
                  <input
                    type="text"
                    placeholder="xxxx@examle.com"
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">内容</div>
              <div className="md:w-2/3">
                <div className="indicator">
                  <span className="indicator-item badge">Required</span>
                  <textarea
                    className="textarea textarea-bordered h-48 w-96"
                    placeholder="ご意見やお問い合わせをご記入ください"
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              className="btn btn-wide btn-accent"
              onClick={() => submitContact()}
            >
              送信
            </button>
          </>
        )}
      </div>
    </>
  );
};

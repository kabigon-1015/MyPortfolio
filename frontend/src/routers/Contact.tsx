import { useState } from "react";
import { submit } from "../composable/contact";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const submitContact = () => {
    const massage = submit(name, email, content);
    console.log(massage);
  };
  return (
    <>
      <h1 className="block mb-1 text-2xl font-semibold text-gray-900 dark:text-white p-3">
        ご意見・お問い合わせなど
      </h1>
      <div className="rounded-xl p-10 relative bg-orange-50">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">お名前</div>
          <div className="md:w-2/3">
            <input
              type="text"
              placeholder="xxxx"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">メールアドレス</div>
          <div className="md:w-2/3">
            <input
              type="text"
              placeholder="xxxx@examle.com"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">内容</div>
          <div className="md:w-2/3">
            <textarea
              className="textarea textarea-bordered h-48 w-96"
              placeholder="ご意見やお問い合わせをご記入ください"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button
          className="btn btn-wide btn-accent"
          onClick={() => submitContact()}
        >
          送信
        </button>
      </div>
    </>
  );
};

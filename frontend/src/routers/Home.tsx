import { useEffect, useState } from "react";
import { Tech } from "../models/tech";
import { client } from "../composable/experiences";
import { UsingTechBadge } from "../components/products/UsingTechBadge";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

const offset = 0;
const limit = 20;
export const Home = () => {
  const heroUrl = new URL(`../assets/hero.jpg`, import.meta.url).href;
  const githubUrl = "https://github.com/kabigon-1015";
  const [techData, setTechData] = useState<Tech[]>();
  useEffect(() => {
    (async () => {
      const tech = await client
        .get<any>({
          endpoint: "tech",
          queries: {
            limit,
            offset,
          },
        })
        .catch((err) => {
          throw Error(`Reponse failed: ${err}`);
        });
      setTechData(tech.contents);
    })();
  }, []);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={heroUrl} className="max-w-sm rounded-lg shadow-2xl ml-5" />
        <div>
          <h1 className="text-5xl font-bold">Welcome!</h1>
          <p className="py-6">
            大阪に住んでいる修士1年です。エンジニアを目指して活動しています。
          </p>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">名前：</div>
            <div className="md:w-3/5">
              <p>酒部健太郎（さかべけんたろう）</p>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">所属：</div>
            <div className="md:w-3/5">
              <p>同志社大学大学院 理工学研究科 情報工学専攻</p>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">研究テーマ：</div>
            <div className="md:w-3/5">
              <p>
                Generating Interior Images with Latent User Preferences through
                GANs
              </p>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">主なスキル：</div>
            <div className="md:w-3/5">
              {techData &&
                techData.map((tech: Tech) => {
                  return (
                    <UsingTechBadge tech={tech} key={tech.id}></UsingTechBadge>
                  );
                })}
              <br></br>．．．など
            </div>
          </div>
          <div className="ml-80 flex">
            <IconContext.Provider value={{ size: "50px" }}>
              <div className="p-2">
                <a href={githubUrl}>
                  <FaGithub></FaGithub>
                </a>
              </div>
              <div className="p-2">
                <a href="/contact">
                  <BiMailSend></BiMailSend>
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

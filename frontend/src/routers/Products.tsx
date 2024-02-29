import { useEffect, useRef, useState } from "react";
import { client } from "../composable/experiences";
import { Product } from "../models/products";
import { NowLoading } from "../components/common/NowLoading";
import { FaGithub } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { ProductDetailDialog } from "../components/products/ProductDetailDialog";

export const Products = () => {
  const [productsData, setProductsData] = useState<Product[]>();
  const [forcusProduct, setForcusProduct] = useState<Product>();
  const isProductDetailOpen = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    (async () => {
      const products = await client
        .get<any>({
          endpoint: "products",
        })
        .catch((err) => {
          throw Error(`Reponse failed: ${err}`);
        });
      setProductsData(products.contents);
    })();
  }, []);
  const openProductDetailDialog = (itemId: string) => {
    isProductDetailOpen.current?.showModal();
    const target = productsData?.find((item: Product) => item.id === itemId);
    target && setForcusProduct(target);
  };
  return (
    <>
      <dialog className="modal w-full" ref={isProductDetailOpen}>
        <ProductDetailDialog
          forcusProduct={forcusProduct}
        ></ProductDetailDialog>
      </dialog>
      <h1 className="block mb-1 text-2xl font-semibold text-gray-900 dark:text-white p-3">
        これまでの制作物
      </h1>
      <div className="rounded-xl p-10 relative bg-cyan-50 flex flex-wrap">
        {productsData ? (
          productsData.map((item: Product) => {
            return (
              <div className="p-5">
                <div className="card w-80 h-[26rem] bg-base-100 shadow-xl">
                  <div className="avatar">
                    <div className="w-80 h-40 rounded-xl">
                      <img src={item.image.url} />
                    </div>
                  </div>
                  <div className="card-body">
                    <h2 className="card-title">{item.title}</h2>
                    <div className="flex flex-wrap">
                      <div className="badge badge-outline">default</div>
                      <div className="badge badge-primary badge-outline">
                        primary
                      </div>
                      <div className="badge badge-secondary badge-outline">
                        secondary
                      </div>
                      <div className="badge badge-accent badge-outline">
                        accent
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <IconContext.Provider value={{ size: "50px" }}>
                        <a href={item.github}>
                          <FaGithub></FaGithub>
                        </a>
                      </IconContext.Provider>
                      <button
                        className="btn btn-primary"
                        onClick={() => openProductDetailDialog(item.id)}
                      >
                        詳細
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <NowLoading loadingWords="これまでの制作物を読み込んでいます"></NowLoading>
        )}
      </div>
    </>
  );
};

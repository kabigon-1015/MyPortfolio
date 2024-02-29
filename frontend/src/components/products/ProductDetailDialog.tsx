import { Product } from "../../models/products";

export const ProductDetailDialog = ({
  forcusProduct,
}: {
  forcusProduct?: Product;
}) => {
  return (
    <div className="modal-box">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <div className="rounded-xl mt-6 pb-6">
        <img src={forcusProduct?.image.url} />
      </div>
      <h3 className="font-bold text-2xl">{forcusProduct?.title}</h3>
      <p className="py-4 whitespace-pre-wrap">{forcusProduct?.content}</p>
    </div>
  );
};

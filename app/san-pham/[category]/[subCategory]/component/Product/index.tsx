import Header from "@/app/components/Header";
import TableHeader from "./Header";

interface IProductProps {}

const Product: React.FC<IProductProps> = (props) => {
  return <div className="rounded-xl border border-bright-gray overflow-hidden">
    <TableHeader/>
  </div>;
};

export default Product;

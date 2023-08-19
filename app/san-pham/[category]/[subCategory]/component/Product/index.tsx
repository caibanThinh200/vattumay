import Header from "@/app/components/Header";
import TableHeader from "./Header";
import RowList from "./RowList";

interface IProductProps {}

const Product: React.FC<IProductProps> = (props) => {
  return (
    <div className="rounded-xl border border-bright-gray overflow-hidden">
      <TableHeader />
      <RowList />
    </div>
  );
};

export default Product;

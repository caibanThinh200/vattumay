import Header from "@/app/components/Header";
import TableHeader from "./Header";
import RowList from "./RowList";
import { IProductField } from "@/app/interface/product";

interface IProductProps {
  result?: IProductField[]
}

const Product: React.FC<IProductProps> = (props) => {
  return (
    <div className="rounded-xl border border-bright-gray overflow-hidden">
      <TableHeader result={props.result} />
      <RowList result={props.result} />
    </div>
  );
};

export default Product;

import Banner from "./components/Product/Banner";
import HightLight from "./components/Product/Highlight";
import ListDiscountProduct from "./components/Product/DiscountList";
import Sidebar from "./components/Sidebar";
import List from "./components/Product/List";

export default function Home() {
  return (
    <div className="flex gap-10">
      <div className="w-3/12">
        <Sidebar />
      </div>
      <div className="w-9/12 flex flex-col gap-[44px]">
        <Banner />
        <HightLight />
        <ListDiscountProduct />
        <List />
      </div>
    </div>
  );
}

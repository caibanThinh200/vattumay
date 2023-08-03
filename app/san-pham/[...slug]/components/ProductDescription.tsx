"use-client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./product-description.scss"
import "react-tabs/style/react-tabs.css";

interface IProductDescription {}

const ProductDescription: React.FC<IProductDescription> = (props) => {
  return (
    <Tabs className="bg-white">
      <TabList className="border-b border-bright-gray px-[44px] pt-[24px]">
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ProductDescription;

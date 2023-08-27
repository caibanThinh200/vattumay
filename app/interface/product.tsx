import { IImageField, ISubCategoryField } from "./category";

export interface IProductField {
  id?: string;
  title?: {
    rendered?: string;
  };
  acf?: {
    sub_category?: ISubCategoryField;
    code?: string;
    image?: IImageField[];
  };
  date?: string;
}

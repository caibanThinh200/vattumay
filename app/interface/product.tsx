import { IImageField, ISubCategoryField } from "./category";
import { IFilterParamsField } from "./filter";

export interface IParameterField {
  code?: string;
  image?: IImageField;
}
export interface IProductField {
  id?: string;
  title?: {
    rendered?: string;
  };
  acf?: {
    sub_category?: ISubCategoryField & { post_title?: string; ID?: string };
    code?: string;
    image?: IImageField[];
    filterParams?: IFilterParamsField;
    material_drawing?: IImageField;
    parameter?: IParameterField[];
  };
  date?: string;
}

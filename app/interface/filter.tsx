import { ISubCategoryField } from "./category";

export interface IFilterWidgetField {
  id?: string;
  title?: {
    rendered?: string;
  };
  acf?: {
    sub_category?: ISubCategoryField & { post_title?: string; ID?: string };
  };
  date?: string;
}

export interface IFilterParamsField {
  id?: string;
  title?: {
    rendered?: string;
  };
  acf?: {
    filter?: IFilterWidgetField & { post_title?: string; ID?: string };
  };
  date?: string;
}

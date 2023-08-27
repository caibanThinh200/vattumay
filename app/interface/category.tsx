export interface IImageField {
  id?: string;
  alt?: string;
  url?: string;
}

export interface ISubCategoryField {
  id?: string;
  name?: string;
  title?: {
    rendered?: string;
  };
  acf?: {
    category?: string;
    code?: string;
    image?: IImageField;
  };
}

export interface ICategoryField {
  id?: string;
  title?: {
    rendered?: string;
  };
  acf?: {
    sub_categories?: ISubCategoryField[];
    code?: string;
    image?: {
      id?: string;
      alt?: string;
      url?: string;
    };
  };
  date?: string;
}

export interface IProduct {
  id?: number;
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images: string[];
  count?: number;
}

export type MyProps = Record<string, never>;

export interface FormInputProps {
  message: string;
}

export interface IFormCard {
  firstName: string;
  secondName: string;
  country: string;
  sex: string;
  birthday: string;
  agree: string;
  image: string;
  id: number;
  [key: string]: string | number | FormDataEntryValue | File;
}
export interface IFormCardProps {
  firstName?: string;
  secondName?: string;
  country?: string;
  sex: string;
  birthday?: string;
  agree?: string;
  image?: string;
}
export interface ErrorArray {
  isValid: boolean;
  message: string;
}

export interface IErrorObject {
  firstName?: Array<ErrorArray>;
  secondName?: Array<ErrorArray>;
  country?: Array<ErrorArray>;
  sex?: Array<ErrorArray>;
  birthday?: Array<ErrorArray>;
  agree?: Array<ErrorArray>;
  image?: Array<ErrorArray>;
}

export const errorObject = {
  firstName: [],
  secondName: [],
  country: [],
  sex: [],
  birthday: [],
  agree: [],
  image: [],
};

export interface IValidation {
  message: string;
  isValid: MyFunction;
}
export interface IValidatedData {
  message: string;
  isValid: boolean;
}

type MyFunction = (a: string) => boolean;

import { ReactElement } from "react";

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

interface AB {
  [key: string]:
    | string
    | number
    | FormDataEntryValue
    | File
    | boolean
    | FileList
    | File
    | Blob
    | MediaSource;
}

export interface IFormCard {
  firstName: string;
  secondName: string;
  country: string;
  sex: string;
  birthday: string;
  agree: string;
  image: string;
  id?: number;
  file?: AB;
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

export interface InputProps {
  label: string;
  name: string;
  register: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
  type: string;
  error?: boolean;
  helperText?: string | undefined;
  value?: string;
  country_list?: string[];
}
export interface SelectProps {
  label: string;
  name: string;
  register: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLSelectElement> &
    React.InputHTMLAttributes<HTMLSelectElement>;
  type?: string;
  error?: boolean;
  helperText?: string | undefined;
  value?: string;
  country_list?: string[];
}

export interface SearchFormData {
  search: string | null;
}

export interface PopUpProps {
  status: boolean;
  setPopUP: (status: boolean) => void;
  children?: ReactElement;
}

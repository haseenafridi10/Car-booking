import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit'
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string | null) => void;
}

export interface CarSpecs {
  fuel_type_primary: string | null;
  drive_type: string | null;
  transmission_style: string | null;
  engine_number_of_cylinders: string | null;
  number_of_seats: string | null;

  // allow all other spec fields safely
  [key: string]: string | null;
}

export interface CarTrim {
  id: number;
  name: string;
  description: string;
  msrp: number;
  invoice: number;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

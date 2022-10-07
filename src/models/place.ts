import { IAddress } from "./address";
import { ICompany } from "./company";
import { IResponsible } from "./responsible";

export type IPlace = {
  id: string;
  name: string;
  address: IAddress;
  company: ICompany;

  responsibles: IResponsible[]
}

export type ICreatePlaceFormData = {
  cep: string;
  city: string;
  state: string;
  neighborhood: string;
  street: string;
  number: number;
  complement: string;
  name: string;
  companyId: string;
  emailToUser: string;
};
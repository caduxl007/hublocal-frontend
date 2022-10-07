import { IPlace } from "./place";
import { IResponsible } from "./responsible";

export type ICreateCompanyFormData = {
  name: string;
  cnpj: string;
  description: string;
}

export type ICompany = {
  id: string;
  name: string;
  cnpj: string;
  description: string;

  places: IPlace[]
  responsibles: IResponsible[]
};

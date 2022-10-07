export type IResponsible = {
  id: string;
  name: string;
  telephone: string;
  isMain: boolean;
};

export type ICreateResponsibleFormData = {
  cep: string;
  city: string;
  state: string;
  neighborhood: string;
  street: string;
  number: number;
  complement: string;
  name: string;
  isMain: boolean;
  telephone: string;
  companyId: string | null;
  placeId: string | null;
};

import { IAddress } from './address';
import { IPlace } from './place';
import { IUser } from './user';

export enum StatusTicketEnum {
  CONCLUIDO = 'CONCLUIDO',
  PENDENTE = 'PENDENTE',
  PROGRESSO = 'PROGRESSO',
}

export type ITicket = {
  id: string;
  title: string;
  status: StatusTicketEnum;

  address: IAddress;

  fromUser: IUser;
  toUser: IUser;

  place: IPlace;
};

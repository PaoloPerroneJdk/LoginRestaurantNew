import { Users } from "./Users";

export class Restaurant implements Users {
  constructor(
    public email: string,
    public password: string,
    public ruolo: string,
    public isNew: boolean,
    public name?: string,
    public position?: string,
    public deliveryRange?: string,
    public salary?: number,
    public time?: string,
    public mobile?: number
  ) {}
}

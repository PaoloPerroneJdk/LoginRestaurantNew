import { Users } from './Users';

export class Restaurant implements Users {

    id: number;
    name: string;
    position: string;
    deliveryRange:string;
    salary:number;
    time: string;
    mobile:number;
    email:string;
    password:string;

}
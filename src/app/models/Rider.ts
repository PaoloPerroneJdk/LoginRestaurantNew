import { Users } from './Users';

export class Rider implements Users{

    constructor(
        public email:string,
        public password: string,
        public id: number,
        public isNewRider: boolean,

        public nome?:string,
        public cognome?: string,
        public eta?: number,
        public foto?: string,
        public residenza?: string,
        public mezzo?: string,
        public orario?: string,
        public disponibilita?: string,
        public nTelefono?: number,
        public curriculum?: string,
        public descrizione?: string,
        public valutazioni?: number,
        

    ){}
}
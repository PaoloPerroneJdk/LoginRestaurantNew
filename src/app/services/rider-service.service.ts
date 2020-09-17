import { Injectable } from "@angular/core";
import { Rider } from '../models/Rider';

@Injectable({
  providedIn: "root",
})
export class RiderServiceService {
  listaRider: Array<Rider> = new Array(
    new Rider(
      "a@email.it",
      "0000",
      0,
      true,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      
    ),
    new Rider(
      "b@email.com",
      "1111",
      1,
      false,
      "Mohamed",
      "Addul",
      23,
      null,
      "Via F.",
      "Beverly",
      "AM",
      "IMMEDIATA",
      3331234567,
      null,
      null,
      70,
      
    )
  );

  constructor() {}

  salvaRider(rider: Rider): number {
    this.listaRider.push(rider);
    return rider.id;
  }

  modificaDatiRider(rider: Rider) {
    for (let index = 0; index < this.listaRider.length; index++) {
      if (rider.id == this.listaRider[index].id) {
        this.listaRider.splice(index, 1, rider);
      }
    }

    return rider.id;
  }

  getRider(id: number) {
    let appoRider: Rider;
    for (let rider of this.listaRider) {
      if (rider.id == id) {
        appoRider = rider;
      }
    }
    return appoRider;
  }
}

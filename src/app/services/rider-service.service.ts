import { Injectable } from "@angular/core";
import { Rider } from '../model/Rider';

@Injectable({
  providedIn: "root",
})
export class RiderServiceService {
  listaRider: Array<Rider> = new Array(
    new Rider(
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
      "a@email.it",
      "0000"
    ),
    new Rider(
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
      "b@email.com",
      "1111"
    )
  );

  constructor() {}

  salvaRider(rider: Rider): number {
    this.listaRider.push(rider);
    return rider.idRider;
  }

  modificaDatiRider(rider: Rider) {
    for (let index = 0; index < this.listaRider.length; index++) {
      if (rider.idRider == this.listaRider[index].idRider) {
        this.listaRider.splice(index, 1, rider);
      }
    }

    return rider.idRider;
  }

  getRider(id: number) {
    let appoRider: Rider;
    for (let rider of this.listaRider) {
      if (rider.idRider == id) {
        appoRider = rider;
      }
    }
    return appoRider;
  }
}

import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Users } from '../models/Users';
@Injectable()
export class StorageServiceService {

  userArray: Users[] = [];

  constructor(private storege: Storage) {}

  salvaUser(user: Users): string {
    let appoArray = this.checkIsExist(user);

    if (appoArray != null) {
      throw new Error("Utente gia presente");
    } else {
    
      this.userArray.push(user);
      console.log(this.userArray);

      this.storege.set("userArray", JSON.stringify(this.userArray)).then(
        res => console.log(res)
      )
    }

    return user.email;
  }

  checkIsExist(user: Users) {
    this.storege.get("userArray").then((res) => {
      this.userArray = res;

      let appoArray = this.userArray.find((res) => {
        if (res.email == user.email) {
          return res;
        } 
      });
      return appoArray;
    });
  }
  
}

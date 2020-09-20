import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { Users } from "../models/Users";
//import { UserService } from "./user.service";
@Injectable()
export class StorageServiceService {
  /*obj2: Users = {
    email: "2@email.com",
    password: "2",
    isRestaurant: false
  };

  obj1: Users = {
    email: "1@email.com",
    password: "1",
    isRestaurant: false
  };

  obj3: Users = {
    email: "user@email.com",
    password: "0000",
    isRestaurant: false
  };
  arrayObject: Users[] = [this.obj1, this.obj2, this.obj3];*/

  userArray: Users[] = []; 

  constructor(private storege: Storage) {}

  public salvaUser(user: Users): string {
    let appoArray;
    this.checkIsExist(user).then((res) => {
      appoArray = res;
      console.log(appoArray); 
      if (appoArray != null) {
        throw new Error("Utente gia presente");
      } else {
        this.userArray.push(user);
        console.log(this.userArray);
        this.storege.set("userArray", JSON.stringify(this.userArray));
        this.storege.set(user.email, user);
      }
    });

    return user.email;
  }

  public login(user: Users): Users{
    /*let appoArray;
    this.checkIsExist(user).then(res => {
      appoArray = res;
     
      for(let appoUser of appoArray){
        if(user.email != appoUser.email){
          throw new Error("Utente non trovato");
        }
      }
      
    });*/

    let appoUser;
    this.storege.get("userArray").then((res) => {
      this.userArray = JSON.parse(res);
      console.log(this.userArray);

     appoUser = this.userArray.find(function (res) {
       return  res.email == user.email;
      });

      if(appoUser == null){
        throw new Error("Utente non presente.")
      }
      
    });

    return appoUser;

  }

   private checkIsExist(user: Users) :Promise<any>{

    return this.storege.get("userArray").then((res) => {
      this.userArray = JSON.parse(res);
      console.log(this.userArray);

      let appoArray = this.userArray.find(function (res) {
       return  res.email == user.email;
      });
      console.log(appoArray);
      return new Promise((resolve, reject) => {
        resolve(appoArray);
      });
    });
  }

  /*salvaUser(user: Users){
    this.storege.set("arrayObj", JSON.stringify(this.arrayObject));

    this.storege.get("arrayObj").then(
      res => console.log(JSON.parse(res))
    )
  }*/
}

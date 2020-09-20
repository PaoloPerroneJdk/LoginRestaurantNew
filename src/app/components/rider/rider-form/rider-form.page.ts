import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Rider } from 'src/app/models/Rider';
import { StorageServiceService } from 'src/app/services/storage-service.service';
//import { RiderServiceService } from 'src/app/services/rider-service.service';

@Component({
  selector: 'app-rider-form',
  templateUrl: './rider-form.page.html',
  styleUrls: ['./rider-form.page.scss'],
})
export class RiderFormPage implements OnInit {
  rider: Rider;
  formRider: FormGroup;
  isModifica: boolean = false;
  headerTitle: string = "rider account";
  riderEmail: string;
  img: string;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    public toastController: ToastController,
    private store: StorageServiceService
  ) { }

  ngOnInit(): void {

    this.activateRouter.params.subscribe((param) => this.riderEmail = param.riderEmail);
    this.rider = new Rider(this.riderEmail,null, null, null);

    this.rider = this.store.login(this.rider);

    this.formRider = new FormGroup({
      nome: new FormControl(this.rider.nome, [Validators.required]),
      cognome: new FormControl(this.rider.cognome, [Validators.required]),
      eta: new FormControl(this.rider.eta , [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.min(18), Validators.max(70)]),
      residenza: new FormControl(this.rider.residenza, [Validators.required]),
      telefono: new FormControl(this.rider.nTelefono, [Validators.required, Validators.minLength(9), Validators.maxLength(10)]),
      mezzo: new FormControl(this.rider.mezzo, [Validators.required]),
      email: new FormControl(this.rider.email, [Validators.required]),
      password: new FormControl(this.rider.password, [Validators.required, Validators.minLength(4), Validators.maxLength(9)]),
      //orario: new FormControl(this.rider.orario)
      descrizione: new FormControl(this.rider.descrizione, [Validators.maxLength(500)])
    });

    this.rider.isNew ? this.img = "../../assets/img/user_null.png" : this.img = this.rider.foto;

  }

  public scegliOrario(orario: string) {
    this.rider.orario = orario;
  }

  public scegliDisponibilita(element: any) {
    element.checked ?
      this.rider.disponibilita = "IMMEDIATA" :
      this.rider.disponibilita = null;
  }

  public salva(){
    this.rider = this.formRider.value;
    this.rider.isNew = false;

    //id!=null? this.salvaToast(): null
    this.router.navigate(["riderhome/", this.riderEmail]);
  }

  public modifica(){
   //id!=null? this.modificaToast(): null
    this.router.navigate(["riderhome/", this.riderEmail]);
  }

  async salvaToast() {
    const toast = await this.toastController.create({
      message: 'Il rider ' + this.rider.nome + ", " + this.rider.cognome + " è stato salvato con successo.",
      duration: 2000
    });
    toast.present();
  }

  async modificaToast() {
    const toast = await this.toastController.create({
      message: 'Il rider ' + this.rider.nome + ", " + this.rider.cognome + " è stato modificato con successo.",
      duration: 2000
    });
    toast.present();
  }

}





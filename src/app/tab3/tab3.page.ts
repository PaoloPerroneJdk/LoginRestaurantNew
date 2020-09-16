import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RiderServiceService } from '../services/rider-service.service';
import { Rider } from '../model/Rider';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  rider: Rider;
  formRider: FormGroup;
  isModifica: boolean = false;
  headerTitle: string = "rider account";
  idRider: number;
  img: string;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private riderService: RiderServiceService,
    public toastController: ToastController
  ) { }

  ngOnInit(): void {

    this.activateRouter.params.subscribe((param) => this.idRider = param.idRider);

    this.rider = this.riderService.getRider(this.idRider);
    this.rider.isNewRider ? this.img = "./../assets/user_null.png" : this.img = this.rider.foto;

    this.formRider = new FormGroup({
      idRider: new FormControl(this.rider.idRider),
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
    this.rider.isNewRider = false;
    let id = this.riderService.salvaRider(this.rider);
    id!=null? this.salvaToast(): null
    this.router.navigate(["riderhome/", id]);
  }

  public modifica(){
   let id = this.riderService.modificaDatiRider(this.rider);
   id!=null? this.modificaToast(): null
    this.router.navigate(["riderhome/", id]);
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

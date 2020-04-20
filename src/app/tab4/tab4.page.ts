import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private geolocation:Geolocation, private loadingCtrl:LoadingController ) { }

ngOnInit() {
  this.loadMap();
  }
  
  async loadMap(){
    const loading = await this.loadingCtrl.create();
    loading.present();
    //obtiene la posicion actual
    const rta= await this.geolocation.getCurrentPosition();
    const myLatLng ={
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    // carga mapa
    const map = new google.maps.Map(mapEle, {
    center: myLatLng,
    zoom: 12
    });

    google.maps.event
    .addListenerOnce(map, 'idle', () => {
      loading.dismiss();
      //crea el marcador
      const marker = new google.maps.Marker({
        position: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        map: map,
        title: 'Hello World!'
      });
    });
    
  }

  

}
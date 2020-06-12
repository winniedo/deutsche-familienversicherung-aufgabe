import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api-service.service';


class VertragModel {
  mainContractId: string;
  vsnr: string;
  vertragsbegin: string;
  verstragsPersonen: PersonModel[];
  versionen: Version[];
}

class PersonModel {
  vorname: string;
  nachname: string;
  strasse: string;
  hausnummer: string;
  plz: string;
  zusazt: string;
}

class Version {
  vertragVersionId: string;
  versand: string;
  umsetzung: string;
  ergaenzung: string;
  beitrag: string;
  produkt: string;
  leistungen: Leistung[];
}

class Leistung {
  LEISTUNGSDYNAMIK: string;
  EINMALLEISTUNG_UNFALL: string;
  AMBULANT1: string;
  AMBULANT2: string;
  AMBULANT3: string;
  AMBULANT4: string;
  AMBULANT5: string;
  STATIONAER1: string;
  STATIONAER2: string;
  STATIONAER3: string;
  STATIONAER4: string;
  STATIONAER5: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public  allData = new Object();
  public products;
  public versions;
  public persons;
  public vertrag;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    /*this.apiService.receiveData().subscribe(
      data => {
        this.data = data;
        //alert(JSON.stringify(data));
        console.log(data);
      });*/
    this.allData = this.apiService.alldata;
    this.products = Object.assign(new Leistung(), this.allData);
    this.versions = Object.assign(new Version(), this.allData);
    this.persons = Object.assign(new PersonModel(), this.allData);
    this.vertrag = Object.assign(new VertragModel(), this.allData);
    console.log(this.products);
    console.log(this.versions);
    console.log(this.persons);
    console.log(this.vertrag);
    console.log(this.allData);
    // const test = JSON.parse(this.allData.toString());
    // console.log(test.verstragsPersonen);
  }


}

import { Component, OnInit } from '@angular/core';
import {ApiService} from '../service/api-service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  public  allData = new Object();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.allData = this.apiService.alldata;
    console.log(this.allData);
  }

}

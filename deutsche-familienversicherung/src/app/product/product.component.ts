import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserData, Person, VertragsPersonen, Leistungen, Version } from '../data'
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class ProductComponent implements OnInit {

  @Input() userData: UserData;
  @Output() userMessageEvent = new EventEmitter<String>();
  vnr: string;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.vnr = params['vnr'];
      console.log("zzzzzzzzzzzzzzzzzzzzzz + " + this.vnr); // Print the parameter to the console. 
    });
  }

  select(product) {
    console.log("wwwwwwwwwww  --  " + product)
    console.log("yyyyyyyyyyyyyyyyyyy  --  " + this.vnr)
    this.apiService.register(this.vnr, product).subscribe((data: any) => {
      if (data) {
        if (data.status=="success"){
          console.log("change was successful")
          this.userMessageEvent.emit("Glückwünsch! Die Änderung von dem Vertrag " + product + " wurde erfolgreich durchgeführt!!");
        }
        else{
          console.log("change was not successful")
        }
      }
      console.log(data)
    },
      (error) => {
        console.log("ERROR")
        console.log("change was not successful")
      });
  }

  flip1: string = 'inactive';
  flip2: string = 'inactive';

  toggleFlip1() {
    this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
  }

  toggleFlip2() {
    this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
  }

}

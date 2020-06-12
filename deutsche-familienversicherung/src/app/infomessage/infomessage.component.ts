import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api-service.service';
import { BehaviorSubject, Subject, Observable, Subscription } from 'rxjs';
import { UserData, Person, VertragsPersonen, Leistungen, Version} from '../data';


@Component({
  selector: 'app-infomessage',
  templateUrl: './infomessage.component.html',
  styleUrls: ['./infomessage.component.css']
})
export class InfomessageComponent implements OnInit {

  @Input() message: string;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }


}

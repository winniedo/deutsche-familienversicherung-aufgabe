import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api-service.service';
import { BehaviorSubject, Subject, Observable, Subscription } from 'rxjs';
import { UserData, Person, VertragsPersonen, Leistungen, Version} from '../data'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userData: UserData;
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }


}

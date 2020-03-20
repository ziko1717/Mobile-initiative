import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  email: string;
  constructor(private dataService: DataServiceService) { }
  
  ngOnInit() {
   this.email = this.dataService.email;
  }

}

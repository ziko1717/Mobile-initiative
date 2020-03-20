import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private router: Router, private dataService: DataServiceService) { }

  ngOnInit() {}
  
  gotoProfilDisplay() {
    if(this.email == "amine@orange.com" && this.password == "root") {
      this.dataService.email = this.email;
      this.messageEvent.emit(this.email);
      this.router.navigateByUrl('profil');
    }
    else {
      console.log("Authentification failed");
    }
    
}

}

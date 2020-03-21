import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

email: string;

  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit() {}

  gotoProfil() {
    this.dataService.email = this.email;
      this.router.navigateByUrl('profil');
  }

}

import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  name ="";
  constructor(private _mainService:MainService, private _router:Router ) { }

  onSubmit(){    
    this._mainService.createUser(this.name);
    this.name = "";
    this._router.navigate(['']);
  }

  ngOnInit() {
  }

}

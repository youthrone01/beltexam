import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  question={
    text:"",
    desc:"",
    user:"",
  }
  constructor(private _mainService:MainService, private _router:Router) { 
    this.question.user = this._mainService.loginUser;
  }

  onSubmit(){
    this._mainService.createQuestion(this.question);
    this._router.navigate(['']);
    this.question={
      text:"",
      desc:"",
      user:"",
    }
  }


  cancel(){
    this._router.navigate(['']);
    this.question={
      text:"",
      desc:"",
      user:"",
    }
  }

  logout(){
    this._mainService.logout();
    this._router.navigate(['index']);
  }
  ngOnInit() {
    if(this.question.user==""){
      this._router.navigate(['index']);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginUser;
  questions;
  search="";
  constructor(private _mainService:MainService, private _router:Router) {
    this.loginUser = this._mainService.loginUser;
   }

  logout(){
     this._mainService.logout();
     this._router.navigate(['index']);
   }
   getAll(){
    this._mainService.allQuestions( (res)=>{
      this.questions = res;      
    })
   } 
   search_que(){
    this._mainService.newsearch(this.search, (res)=>{
      this.questions = res;
    });
    this.search = "";
   }

  ngOnInit() {
    if(this.loginUser==""){
      this._router.navigate(['index']);
    }else{
    this._mainService.allQuestions( (res)=>{
      this.questions = res;      
    })
  }
  }
}

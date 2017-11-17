import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  que_id;
  the_que;
  answers;
  constructor(private _mainService:MainService, private _router:Router, private _route: ActivatedRoute) { }
  like(id){
    this._mainService.updateLike(id,(res)=>{
      console.log(res);
      this._mainService.getQuestion(this.que_id,(res)=>{
        this.the_que = res;
        this.answers = res.answers;
        this.answers.sort(function(a,b){
          return a.likes < b.likes;
        })
      })
    })
  }

  logout(){
    this._mainService.logout();
    this._router.navigate(['index']);
  }
  ngOnInit() {
    if(this._mainService.loginUser==""){
      this._router.navigate(['index']);
    }else{
    this._route.paramMap.subscribe((params)=>{
      this.que_id = params.get('id');
      this._mainService.getQuestion(this.que_id,(res)=>{
        this.the_que = res;
        this.answers = res.answers;
        this.answers.sort(function(a,b){
         return  a.likes < b.likes;
        })
      })
    })
  }
  }
}

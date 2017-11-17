import { Component, OnInit } from '@angular/core';
import { MainService } from './../main.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  que_id;
  the_que;
  answer={
    text:"",
    support:"",
    user:"",
    que_id:null,
  }
  constructor(private _mainService:MainService, private _router:Router, private _route: ActivatedRoute) { 
    this.answer.user = this._mainService.loginUser;
  }
  logout(){
    this._mainService.logout();
    this._router.navigate(['index']);
  }
  onSubmit(){
    this._mainService.createAnswer(this.answer);
    this._router.navigate(['question',this.que_id]);
    this.answer={
      text:"",
      support:"",
      user:"",
      que_id:null,
    }
  }

  cancel(){
    this._router.navigate(['question',this.que_id]);
    this.answer={
      text:"",
      support:"",
      user:"",
      que_id:null,
    }
  }


  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      this.que_id = params.get('id');
      this.answer.que_id = this.que_id;
      this._mainService.getQuestion(this.que_id,(res)=>{
        this.the_que = res;
      })
    })
  }

}

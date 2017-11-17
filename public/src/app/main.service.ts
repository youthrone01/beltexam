import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainService {
loginUser="";
  constructor(private _http:Http) { }

createUser(name){
  this.loginUser = name;
  this._http.post("/users", {name:name}).subscribe(
    (res)=>{
      console.log('success 1');
    },
    (error)=>{
      console.log("error 2 ");
    }
  )
}

createQuestion(question){
  if(this.loginUser != ""){
    this._http.post("/questions", question).subscribe(
      (res)=>{
        console.log('success 3');
      },
      (error)=>{
        console.log("error 4 ");
      }
    )
  }
}

allQuestions(callback){
  this._http.get("/questions").subscribe(
    (res)=>{
      console.log('success 2');
      callback(res.json());
    },
    (error)=>{
      console.log("error 3 ");
    }
  )
}

getQuestion(id, callback){
  this._http.get("/questions/"+id).subscribe(
    (res)=>{
      console.log('success 4');
      callback(res.json());
    },
    (error)=>{
      console.log("error 5 ");
    }
  )
}

updateLike(id, callback){
  this._http.post("/answers/like/"+id,{}).subscribe(
    (res)=>{
      console.log('success 5');
      callback(res.json());
    },
    (error)=>{
      console.log("error 6 ");
    }
  )
}

createAnswer(answer){
  this._http.post("/answers", answer).subscribe(
    (res)=>{
      console.log('success 6');      
    },
    (error)=>{
      console.log("error 7 ");
    }
  )
}
newsearch(text, callback){
  this._http.post("/questions/search", {search:text}).subscribe(
    (res)=>{
      console.log('success 7');
      callback(res.json());      
    },
    (error)=>{
      console.log("error 8 ");
    }
  )
}

logout(){
  this.loginUser = "";
}

}

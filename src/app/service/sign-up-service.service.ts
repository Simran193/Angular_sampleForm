import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpServiceService {

  constructor() { }
  addUsers(user:any){
    let users:any=[];
    if(localStorage.getItem('User')){
      users=JSON.parse(localStorage.getItem('User') as string);
      users=[user,...users];
    }
    localStorage.setItem("User",JSON.stringify(users));
  }
}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  loginUser(user:any){
    let userArray=[];
    if(localStorage.getItem('User')){
      userArray=JSON.parse(localStorage.getItem('User')as string);
    }
    return userArray.find((ele:any)=> ele.email===user.email && ele.password==user.password)
  }
}
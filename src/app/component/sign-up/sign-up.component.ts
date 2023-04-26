import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SignUpServiceService } from '../../service/sign-up-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private service:SignUpServiceService , private fb: FormBuilder, private http: HttpClient, private router:Router) { }
  
  userForm!: FormGroup<any>;



  ngOnInit(): void {
    this.userForm = this.fb.group({
    firstName: new FormControl(null,[Validators.required]),
    lastName: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl(null,[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    dob: new FormControl(null,[Validators.required]),
    gender: new FormControl(null,[Validators.required]),
    phone: new FormControl('',[Validators.required,Validators.pattern('[0-9]*')])
    })
  }


  onSubmit(){
    this.service.saveUserData(this.userForm.value).subscribe((result) =>{
      console.log(result);
    });
    
    this.userForm.reset();
    this.gotoList();
  }
 
  gotoList(){
    this.router.navigate(['/user-list']);
  }
  
  
  get firstName(){
    return this.userForm.get('firstName');
  }
  get lastName(){
    return this.userForm.get('lastName');
  }
  get email(){
    return this.userForm.get('email');
  }
  get password(){
    return this.userForm.get('password');
  }
  get dob(){
    return this.userForm.get('dob');
  }
  get phone(){
    return this.userForm.get('phone');
  }
  get gender(){
    return this.userForm.get('gender');
  }
}

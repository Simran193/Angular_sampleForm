import { Component, OnInit } from '@angular/core';
import { SignUpServiceService } from '../../../service/sign-up-service.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private user:SignUpServiceService) { }
  dataSource: any=[] = [];
  ngOnInit(): void {
    this.user.getData().subscribe((data)=>{
      console.log(data);
      this.dataSource=data;
    })
  }
}

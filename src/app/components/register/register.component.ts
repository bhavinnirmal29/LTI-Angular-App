import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm,FormGroup, NgModel } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any=[];
  constructor() { }

  ngOnInit(): void {
  }

  RegisterData(regForm:NgForm):void{
    console.log(regForm.value);
  }
}

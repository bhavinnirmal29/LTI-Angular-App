import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray, FormBuilder, Validators, ValidatorFn, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.fb.group({
      username:new FormControl('',[Validators.required]),
      txtpwd:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.minLength(4),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$%&]).*$")]),
      remember:new FormControl('False')
    });
  }
  RegisterData():void{
    console.log(this.regForm.value); 
  }

}

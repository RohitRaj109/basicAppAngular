import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
form:FormGroup= this.myForm()

constructor(private fb:FormBuilder){
  
}
myForm(){
  return this.fb.group({
 name:['',[Validators.required]],
 email:['',[]],
 phone:['',[]],
 userName:['',[]],
 passoword:['',[]],
 cPassword:['',[]]
  })
}
ngOnInit(){
  this.myForm()
}
  onSubmit(){
    if(this.form.invalid){
      return;
    }
  }
}

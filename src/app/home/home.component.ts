import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerService } from '../provider/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
form:FormGroup= this.myForm()
  allData:any=[];

constructor(private fb:FormBuilder,public server:ServerService){
  
}
myForm(){
  return this.fb.group({
 name:['',[Validators.required]],
 email:['',[]],
 phone:['',[]],
 userName:['',[]],
 password:['',[]],
 cPassword:['',[]]
  })
}
ngOnInit(){
  this.myForm()
}
get f(){
  return this.form.controls;
}
  onSubmit(){
    if(this.form.invalid && (this.form.value.passoword != this.form.value.cPassword)){
      return;
    }

    var data = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone: this.form.value.phone,
      userName:this.form.value.userName,
      password:this.form.value.password,
    
    }
    this.allData.push(data)
    this.server.postData('/register',data).subscribe((res:any)=>{
     
      if(res.success ==true){
        console.log(res)
        alert(res.message)
      }
    })
    console.log(data)
  }
}

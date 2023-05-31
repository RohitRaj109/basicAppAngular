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
  allData:any=[];submitted:boolean = false

constructor(private fb:FormBuilder,public server:ServerService){
  
}
myForm(){
  return this.fb.group({
 name:['',[Validators.required]],
 email:['',[Validators.required]],
 phone:['',[Validators.required]],
 userName:['',[Validators.required]],
 password:['',[Validators.required]],
 cPassword:['',[Validators.required]]
  })
}
ngOnInit(){
  this.myForm()
}
get f(){
  return this.form.controls;
}
  onSubmit(){
    this.submitted = true;
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
   
    this.server.postData('/register',data).subscribe((res:any)=>{
      if(res.success ==true){
        this.allData.push(data)
        console.log(data)
        alert(res.message)
        this.submitted = false;
        this.form.reset();
      }else if(res.success ==false){
        alert(res.message)
      }
    },(error)=>{
      alert(error)
      console.log(data)
    })  
  }
}

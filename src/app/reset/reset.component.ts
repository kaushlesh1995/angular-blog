import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  resetForm: FormGroup;
  public msg = null;
  public error = null;
  public email = null;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private service: UserServiceService,
    private route : Router,
    private tostservice : ToastrService
    ) {
     
     }

  get f() { return this.resetForm.controls; }

  ngOnInit(): void {
    if(!this.service.data) {
      this.route.navigateByUrl("/login");
      return;
    }
     this.email = this.service.data.email;
    console.log( this.email);
    
    this.resetForm = this.formBuilder.group({
     otp : ['',Validators.compose( [Validators.required, Validators.maxLength(6)])],
     password : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
     confirm_password : ['', [Validators.required , Validators.minLength(8), Validators.maxLength(9)]],
       });
  }
   reset(){
    this.msg = null;
    this.error = null;
    this.submitted = true;
    if (this.resetForm.valid) {
      if(this.service.data.otp == this.resetForm.value.otp) {
        this.tostservice.success("Passward reset successfully.");
        setTimeout(()=>{
          this.route.navigateByUrl("/login");
        },1000)
      } else {
        this.tostservice.error("Incorrect otp...");
      }
     
       
      }  else{
        this.tostservice.error("Passward is not reset");
      }
   
   }
}

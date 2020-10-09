import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  public msg = null;
  public error = null;
  loginForm: FormGroup;
  submitted = false;
  public currentUser : any;

  constructor(
    private userServiceService: UserServiceService,
    private route: Router ,
    private formBuilder: FormBuilder,
    private toasterService: ToastrService,
    ) { 

    }
    
    get f() { return this.loginForm.controls; }
  
   
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      remember : [true]
    });
    


  }

  login(){
       this.msg = null;
       this.error = null;
       this.submitted = true;
        if (this.loginForm.valid) {
            if (!this.loginForm.get("remember").value) {
                alert("Please make sure, you have agreed with the terms.");
                return;
            }
            let params = this.loginForm.value;
            this.userServiceService.loginUser(params).subscribe(
              (response:any) => {
                this.toasterService.success("Login success...")
                this.route.navigateByUrl("/blog_list");
              },
              (error:any) => {
                this.toasterService.error("Login error...")

              }
            )
        }
    
  }

  handleErrors(error) {
    if (error.error.errors) {
        this.error = error.error.errors.message;
        this.toasterService.error(error.error.errors.message)
    } else {
        this.toasterService.error("Something went wrong!")
    }
}

logout() {
  window.localStorage.clear();
  this.route.navigate(['/login']);
}
  
}

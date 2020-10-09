import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-pin',
  templateUrl: './forgot-pin.component.html',
  styleUrls: ['./forgot-pin.component.css']
})
export class ForgotPinComponent implements OnInit {

  forgotForm: FormGroup;
  public msg = null;
  public error = null;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private service: UserServiceService,
    private toasterService: ToastrService,
    private route: Router) { }

  get f() { return this.forgotForm.controls; }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });

  }

  sendOTP() {
    this.msg = null;
    this.error = null;
    this.submitted = true;
    
    if (this.forgotForm.valid) {
      this.toasterService.success("OTP send successfully");
      setTimeout(() => {
        this.route.navigate(['/reset/password'])
      }, 1000)
    }
    else {
      this.toasterService.error("Somthing went wrong");
    }
  }

  ngOnDestroy() {
    var randomOTP = Math.floor(100000 + Math.random() * 900000);
    this.service.data = {
      email: this.forgotForm.value.email,
      otp: randomOTP
    }
    console.log(" destroy called...", this.service.data);
  }
}

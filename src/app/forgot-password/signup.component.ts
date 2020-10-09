import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
 
    registerForm: FormGroup

    public msg = null;
    public error = null;
    submitted = false;
    public passwordStrength = null;

    constructor(private userServiceService: UserServiceService, private route: Router ,private formBuilder: FormBuilder) { }

    get f() { return this.registerForm.controls; }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['',[ Validators.required,Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
            password_confirmation: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
            acceptTerms: [true]
        });
        
        
        this.registerForm.get("password").valueChanges.subscribe(selectedValue => {
            if(this.isWeak(selectedValue)){
                this.passwordStrength = "Weak";
            } else if(this.isStrong(selectedValue)) {
                this.passwordStrength = "Strong";
            } else {
                this.passwordStrength = "Normal";
            }
        });
     }
    

    isStrong(input){
        return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(input) && /[^\w\-]/.test(input) && /\d/.test(input);
    }

    isWeak(input) {
        return (!isNaN(parseFloat(input)) && isFinite(input)) || /^[a-zA-Z]+$/.test(input);
    }
 
    register() {
        this.msg = null;
        this.error = null;
       this.submitted = true;
        if (this.registerForm.valid) {
            if (!this.registerForm.get("acceptTerms").value) {
                alert("Please make sure, you have agreed with the terms.");
                return;
            }
            this.userServiceService.createUser(this.registerForm.value).subscribe(

                data=>{
                    console.log(data),
                    this.msg = "Registration Successful";
                    window.localStorage.setItem("token", data.token);
                    console.log(data.token);
                    
                    setTimeout(()=>{
                        this.route.navigate(['/blog_create']);
                      } , 2000)
                },
                error=>{
                   this.handleErrors(error);
                });
       } 
    }

    handleErrors(error) {
        if (error.error.errors.email) {
            this.error = error.error.errors.email;
        } else if (error.error.errors.password) {
            this.error = error.error.errors.password;
        }
    }

}


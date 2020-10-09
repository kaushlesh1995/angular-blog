import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {CreateBlogComponent} from './BlogComponent/create-blog/create-blog.component';
import {BlogListComponent} from './BlogComponent/blog-list/blog-list.component';
import {BlogDeatilsComponent} from './BlogComponent/blog-deatils/blog-deatils.component';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { ResetComponent } from './reset/reset.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'blog_create',          component: CreateBlogComponent },
    {path:'blog_list',               component:BlogListComponent},
    {path:'blog_details/:blogId',               component:BlogDeatilsComponent},
    {path:'blog_update/:blogId',               component:CreateBlogComponent},
    {path:'blog_delete/:blogId',               component:BlogDeatilsComponent},
    {path:'forgot',               component:ForgotPinComponent},
    {path:'reset/password',               component:ResetComponent},
    {path:'pipe/example',               component:PipeexampleComponent},
    
    { path: '', redirectTo: 'register', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
    routes
  ],
})
export class AppRoutingModule { }

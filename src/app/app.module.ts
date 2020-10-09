import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { CreateBlogComponent } from './BlogComponent/create-blog/create-blog.component';
import { BlogListComponent } from './BlogComponent/blog-list/blog-list.component';
import { BlogDeatilsComponent } from './BlogComponent/blog-deatils/blog-deatils.component';
import { FilterPipe } from './filter.pipe';
import { ForgotPinComponent } from './forgot-pin/forgot-pin.component';
import { ResetComponent } from './reset/reset.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { StatusTransfromPipe } from './pipes/status-transfrom.pipe';
import { TitleCasePipe } from '@angular/common';
import { UnderscorePipe } from './pipes/underscore.pipe';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    CreateBlogComponent,
    BlogListComponent,
    BlogDeatilsComponent,
    FilterPipe,
    ForgotPinComponent,
    ResetComponent,
    TooltipDirective,
    StatusTransfromPipe,
    UnderscorePipe,
    PipeexampleComponent,
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [ TitleCasePipe],
  exports: [ TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

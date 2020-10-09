import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blogService/blog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  createForm: FormGroup
  public msg = null;
  submitted = false;
  public blogId;
  constructor(
    private blogService : BlogService,
    private formBuilder: FormBuilder,
    private toasterService: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
     // Find the Current User Id [blogId]
      this.blogId = this.route.snapshot.paramMap.get('blogId');
     if (this.blogId) {
      
      console.log('blog id: ', this.blogId)
     }
    this.createForm = this.formBuilder.group({
      title: ['',[ Validators.required,Validators.minLength(5)]],
      sort_description: ['', [Validators.required]],
      description: ['', [Validators.required]],
    
  });
  }
  get f() { return this.createForm.controls; }
  blogCreate(){
    this.submitted = true;
  this.blogService.createBlog(this.createForm.value).subscribe(
    data=>{
        console.log(data),
        this.toasterService.success('Blog created successfully');
   },
    );
  }

  update(){
    console.log("Form value" , this.createForm.value);
    
    this.submitted = true;
    this.blogService.updateDetails(this.blogId, this.createForm.value).subscribe(
      data=>{
        console.log(data),
        this.toasterService.success('Blog Update successfully');
   },
    );
  }

  goToDetails(id) {
    console.log('id', id)
    this.router.navigateByUrl(`/blog_update/${id}`);
  }

}

import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blogService/blog.service';
import { Router } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})


export class BlogListComponent implements OnInit {

 
  blogs = [];
   
  
  constructor(private blogService:BlogService, private router : Router) { }
  

  ngOnInit(): void {
    
    this.getBlogData();
   
  }

  getBlogData(){
    this.blogService.getblogList().subscribe((data: any) => {
      this.blogs = data || [];
      
    });
  }

  goToDetails(id) {
    console.log('id', id)
    this.router.navigateByUrl(`/blog_details/${id}`);
  }



  //for Filter start
 
  //for Filter end 

}

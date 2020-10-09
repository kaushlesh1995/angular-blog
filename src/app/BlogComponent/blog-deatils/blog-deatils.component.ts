import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blogService/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-deatils',
  templateUrl: './blog-deatils.component.html',
  styleUrls: ['./blog-deatils.component.css']
})
export class BlogDeatilsComponent implements OnInit {
   
  public blog = null;
  constructor(
    private blogService:BlogService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Find the Current User Id [blogId]
    const blogId = this.route.snapshot.paramMap.get('blogId');
    console.log(blogId);
    this.getBlogDetails(blogId);
  }

  getBlogDetails(blogId){
    this.blogService.getDetails(blogId).subscribe((response: any) => {
      this.blog = response.data || null;
      console.log('blog details : ', this.blog)
    });
  }

  logout() {
    window.localStorage.clear();
    this.router.navigate(['/login']);
 }
 
  gotoEdit() {
    this.router.navigateByUrl(`/blog_update/${this.blog.id}`);
  }

  gotoDelete() {
    this.router.navigateByUrl(`/blog_delete/${this.blog.id}`);
  }

  delete(){
   
    
  }

  
}

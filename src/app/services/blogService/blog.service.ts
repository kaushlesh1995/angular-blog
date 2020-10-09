import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentUser : any;

  constructor(private http: HttpClient) { }

  createBlog(data): Observable<any> {
    return this.http.post(
      'http://127.0.0.1:8000/api/blog/create',
      data,
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("token")
        })
      });
  }

  getblogList() {
   return this.http.get('http://127.0.0.1:8000/api/blog/blogList', {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        Accept: 'X-Auth-Token'
      })
      
    });
  }

  getDetails(id){
   
    return this.http.get('http://127.0.0.1:8000/api/blog/blogDetails/' + id, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        Accept: 'X-Auth-Token'
      })
    });
  }

  updateDetails(id , data){
    console.log(id);
    
      return this.http.put('http://127.0.0.1:8000/api/blog/update/' + id , data, {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
          Accept: 'X-Auth-Token'
        })
      });
  }


  deleteBlog(id){
    return this.http.put('http://127.0.0.1:8000/api/blog/delete/' + id ,  {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
        Accept: 'X-Auth-Token'
      })
    });
  }
   
    

}

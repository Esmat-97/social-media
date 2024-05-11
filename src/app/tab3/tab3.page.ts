import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private cookieService:CookieService , private http:HttpClient) {}

  name:string='';
  id:string='';
  email:string='';
  imageuser:string='';
selectedpost:any=[];

  ngOnInit(){

     this.name = this.cookieService.get('name');
     this.id= this.cookieService.get('id');
   this.email = this.cookieService.get('email');
    this.imageuser = this.cookieService.get('image');

    console.log(this.id)

      this.http.get(`http://192.168.1.6/api/posts/select/${this.id}`).subscribe((res:any)=>{
        this.selectedpost=res
        console.log(this.selectedpost)
        },
        (error) => {
          console.error('Error fetching posts:', error);
        }
      )

  }


}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HOST_NAME } from '../constant';


@Component({
  selector: 'app-showprofile',
  templateUrl: './showprofile.page.html',
  styleUrls: ['./showprofile.page.scss'],
})
export class ShowprofilePage implements OnInit {

  constructor(private cookieService:CookieService ,
     private activatedRoute:ActivatedRoute ,
    private http:HttpClient) { }

  
  name:string='';
  id:string='';
  email:string='';
  imageuser:string='';

  selectedposts:any=[];
  selectedpeople:any={};

  ngOnInit() {

const id= this.activatedRoute.snapshot.params['id']

   this.http.get(`${HOST_NAME}/api/posts/select/${id}`).subscribe((res:any)=>{
    this.selectedposts=res
    console.log(this.selectedposts)
    })
 
    this.http.get(`${HOST_NAME}/api/users/${id}`).subscribe((res:any)=>{
      this.selectedpeople=res
      console.log(this.selectedpeople)
      })

  }

}

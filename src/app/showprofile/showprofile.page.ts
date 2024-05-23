import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HOST_NAME } from '../constant';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-showprofile',
  imports:[RouterLink , IonicModule , CommonModule],
  standalone:true,
  templateUrl: './showprofile.page.html',
  styleUrls: ['./showprofile.page.scss'],
})
export class ShowprofilePage implements OnInit {

  constructor(private cookieService:CookieService ,
     private activatedRoute:ActivatedRoute ,
    private http:HttpClient ,
  private rot:Router) { }

  
  name:string='';
  id:string='';
  email:string='';
  imageuser:string='';
  commentnum:string='';
  likesnum:string='';

  selectedposts:any=[];
  selectedpeople:any={};

  ngOnInit() {

const id= this.activatedRoute.snapshot.params['id']

this.id= this.cookieService.get('id');

   this.http.get(`${HOST_NAME}/api/posts/select/${id}`).subscribe((res:any)=>{
    this.selectedposts=res
    console.log(this.selectedposts)
    })


 
    this.http.get(`${HOST_NAME}/api/users/${id}`).subscribe((res:any)=>{
      this.selectedpeople=res
      console.log(this.selectedpeople)
      })


      /*     */
      
      this.http.get(`${HOST_NAME}/api/posts/count/${this.id}`).subscribe((res:any)=>{
        this.commentnum= res.comment_count    
      console.log(this.commentnum)
      })


      this.http.get(`${HOST_NAME}/api/user/${this.id}/likes`).subscribe((res:any)=>{
        this.likesnum= res.count 
      console.log(this.likesnum)
      })
  }


  
  goBack() {
    this.rot.navigate(['/tabs']);
  }

}

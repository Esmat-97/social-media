import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { HOST_NAME } from '../constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private cookieService:CookieService ,
     private http:HttpClient ,
     private rot:Router) {}



  name:string='';
  id:string='';
  email:string='';
  imageuser:string='';
  posts:any=[];

  

  /*  GET  */

  ngOnInit(){  

     this.name = this.cookieService.get('name');
     this.id= this.cookieService.get('id');
     this.email = this.cookieService.get('email');
    this.imageuser = this.cookieService.get('image');
  
    this.http.get(`${HOST_NAME}/api/posts/allposts`).subscribe((res:any)=>{
      this.posts=res
      console.log(this.posts)
      })

      
  }



  /*  photo */


  selectedFile: File | null = null; 
  imagename:string='';
  products:any={};


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0]; // Get the first file selected by the user
    if (this.selectedFile) {
     this.imagename = this.selectedFile.name; // Extract the file name
     console.log(this.imagename)
    }
  }




  /* POST */
  
  formdata(main:any){

    this.products=main.value
      this.products.image=this.imagename
      this.products.user_id=this.id
  
  console.log(this.products);
  
this.http.post(`${HOST_NAME}/api/posts`,main.value).subscribe((res:any)=>{
console.log(res)
})


  }


  nav(id:any){
    // console.log(id)
    this.rot.navigate(['/showpost',id])
    
    }

}

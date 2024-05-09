import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private http:HttpClient ,private rot:Router) { }

  ngOnInit() {
  }

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


  formdata(main:any){

    this.products=main.value

    if (this.selectedFile) {
      this.products.image=this.imagename
     }
  
  console.log(this.products);
  
this.http.post('http://192.168.1.2/api/register',main.value).subscribe((res:any)=>{
console.log(res)
})

this.rot.navigate(['/login'])
  }



  

}

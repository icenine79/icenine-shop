import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }



register(name:string,email:string,password:string){
  const credentials={
    name:name,
    email:email,
    password:password
  }
  this.http.post<{message:string}>('http://localhost:3000/api/user/signup', credentials)
  .subscribe(response=>{
    console.log(response.message)
  })
}

login(email:string, password:string){
  let credentials={
    email:email,
    password:password
  }
  this.http.post<{token:string, fetchedUser:any}>('http://localhost:3000/api/user/login', credentials)
  .pipe(map(res=>{
    return {
      id: res.fetchedUser._id
    }
  }))
}


}
/*

  } */

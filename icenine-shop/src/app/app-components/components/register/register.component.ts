import { AuthService } from './../../../modules/shared/services/auth.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
registerForm:FormGroup;
error:boolean=false;
successMessage:boolean=false;

  constructor(private fb:FormBuilder, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  this.registerForm = this.fb.group({
      name:['',Validators.required],
      email:['', Validators.required],
      password:[null, Validators.required]
    });
    // tslint:disable-next-line: align


        setTimeout(()=>{                           //<<<---using ()=> syntax
          this.router.navigate(['/shop'])

        }, 4000);
      }



get name(){return this.registerForm.get('name')}
get email(){return this.registerForm.get('email')}
get password(){return this.registerForm.get('password')}


onSubmit(){
  this.auth.register(this.name.value,this.email.value,this.password.value);
  this.registerForm.reset();

}
}

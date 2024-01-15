import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private accountService:AccountService, private router:Router){}

  loginForm:FormGroup = new FormGroup(
    {
      username:new FormControl('fatmanur',Validators.required),
      password:new FormControl('',[Validators.required, Validators.minLength(6)])
    }
  );

  login(){
    let formValue = this.loginForm.value;
    this.accountService.login(formValue.username, formValue.password).subscribe(data=>{
      if (!data) {
        alert('Kullanıcı bilgileri yanlış');
        return;
      } 
      this.router.navigateByUrl('/products');
    })
  }

}

import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import {
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-register",
  standalone: false,  
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss"
})
export class RegisterComponent {
  registerForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    // this.authService
    //   .register(
    //     this.registerForm.value.username,
    //     this.registerForm.value.password
    //   )
    //   .subscribe(
    //     () => this.router.navigate(["/login"]),
    //     err => console.error(err)
    //   );
  }
}

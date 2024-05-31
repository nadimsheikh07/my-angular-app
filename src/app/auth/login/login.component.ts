import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss"
})
export class LoginComponent {
  loginForm;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value)
        .subscribe(
          () => this.router.navigate(["/"]),
          err => console.error(err)
        );
    }
  }
}

import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SnackbarService } from "../../services/snackbar.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  standalone: false,
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss"
})

export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  private createLoginForm(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('response', response)
          const { firstName } = response;
          this.snackbarService.showMessage(`${firstName} login successfully`);

          this.router.navigate(['/admin'])
        },
        error: (error: any) => {
          console.log('error', error)
          const { message } = error.error;
          this.snackbarService.showMessage(message);
        }
      });
    } else {
      console.log('Invalid invalid', this.loginForm);
    }
  }

}

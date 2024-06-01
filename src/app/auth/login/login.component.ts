import { Component } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    private readonly router: Router
  ) {}

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
        next: () => this.router.navigate(['/']),
        error: (error: any) => console.error(error)
      });
    } else {
      console.log('Invalid invalid',this.loginForm.get('password')?.invalid);      
      console.log('Invalid dirty',this.loginForm.get('password')?.dirty);      
      console.log('Invalid touched',this.loginForm.get('password')?.touched);      
      console.log('Invalid form',this.loginForm.get('password')?.errors?.['required']);      
    }
  }

}

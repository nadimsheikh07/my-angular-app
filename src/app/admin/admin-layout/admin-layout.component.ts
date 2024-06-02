import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-admin-layout",
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: "./admin-layout.component.html",
  styleUrl: "./admin-layout.component.scss"
})
export class AdminLayoutComponent {
  constructor(private readonly authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}

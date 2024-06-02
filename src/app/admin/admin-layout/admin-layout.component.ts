import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { RouterModule, RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-admin-layout",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterModule,
    MatSidenavModule,    
  ],
  templateUrl: "./admin-layout.component.html",
  styleUrl: "./admin-layout.component.scss"
})
export class AdminLayoutComponent {
  events: string[] = [];
  opened: boolean = false;

  constructor(private readonly authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}

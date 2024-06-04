import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { MatSidenavModule } from "@angular/material/sidenav";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@Component({
  selector: "app-admin-layout",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: "./admin-layout.component.html",
  styleUrl: "./admin-layout.component.scss"
})
export class AdminLayoutComponent {
  events: string[] = [];
  opened: boolean = true;

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
  }
  openWebsite(): void {
    this.router.navigate(["/"]);
  }
}

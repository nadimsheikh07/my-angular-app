import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatListModule,
    RouterModule
  ],
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.scss'
})
export class WebsiteLayoutComponent {

}

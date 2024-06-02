import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./admin/admin-layout/admin-layout.component";
import { WebsiteLayoutComponent } from "./website/website-layout/website-layout.component";
import { LoginComponent } from "./admin/login/login.component";

export const routes: Routes = [
  {
    path: "admin",
    component: AdminLayoutComponent,
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  { path: "admin/login", component: LoginComponent },
  {
    path: "",
    component: WebsiteLayoutComponent,
    loadChildren: () =>
      import("./website/website.module").then(m => m.WebsiteModule)
  }
];

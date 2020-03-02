import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { RootComponent } from "./root/root.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

export const routes: Routes = [
  {
    path: "dashboard",
    component: RootComponent,
    children: [
      {
        path: "signin",
        component: SigninComponent,
        data: {
          breadcrumb: "Sign In"
        }
      },
      {
        path: "signup",
        component: SignupComponent,
        data: {
          breadcrumb: "Sign Up"
        }
      },
      {
        path: "",
        component: IndexComponent
      }
    ]
  }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export class AppRouting {}

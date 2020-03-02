import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GridsterModule } from "angular-gridster2";
import { FormsModule } from "@angular/forms";
import { ProjectComponent } from "./project/project.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { IndexComponent } from "./index/index.component";
import { RootComponent } from "./root/root.component";
import { RouterModule } from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    BreadcrumbComponent,
    SigninComponent,
    SignupComponent,
    IndexComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    GridsterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

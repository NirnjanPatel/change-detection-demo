import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { UserService } from "./services/user.service";
import { ChildComponent } from "./components/child/child.component";

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    exports: [],
    bootstrap: [AppComponent],
    providers: [UserService]
})

export class AppModule { }
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildComponent } from "./components/child/child.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
    {
        path: '',
        // redirectTo: 'dashboard',
        // pathMatch: 'full'
        component: AppComponent
    },
    // {
    //     path: 'child',
    //     component: ChildComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule],
})

export class AppRoutingModule { };
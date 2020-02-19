import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HSKMenuComponent} from "./hsk-menu/hsk-menu.component";
import { ModeMenuComponent} from "./mode-menu/mode-menu.component";
import { PracticeComponent } from "./practice/practice.component";
import { PracticeStartComponent } from "./practice/practice-start/practice-start.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "hsk-menu", component: HSKMenuComponent },
    { path: "mode-menu", component: ModeMenuComponent },
    { path: "practice", component: PracticeComponent },
    { path: "practice-start", component: PracticeStartComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

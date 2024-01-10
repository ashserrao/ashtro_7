import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import {routes} from './app.routes';

@NgModule({
    declarations: [
        
    ],
    imports: [
        BrowserModule,
        AppComponent,
        RouterModule.forRoot(routes),
    ],
    bootstrap:[AppModule]
})

export class AppModule {}
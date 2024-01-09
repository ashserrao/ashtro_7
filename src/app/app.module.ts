import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppComponent,
    RouterModule, // Include RouterModule
    // Add other modules here
  ],
  bootstrap: [],
})
export class AppModule { }

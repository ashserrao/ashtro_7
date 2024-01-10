import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { app } from '../../server';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  numberone: number = 1;
  numbertwo: number = 2;
  togglestate: boolean = true;
  favoriteAnimal:string = "Lion";
  imgsrc: string = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"

  constructor(){
    this.title="Ashlin";
  }
}

// for app.module --------------------------

// // main.ts
// import { bootstrapApplication } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// bootstrapApplication(AppModule)
//   .catch(err => console.error(err));

// app.component.ts-----------------------------------

// import { Component } from '@angular/core';
// // Import other necessary modules if needed

// @Component({
//   selector: 'app-root',
//   // standalone: true, // Remove this line
//   // imports: [CommonModule, RouterOutlet], // Remove this line
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'], // Use styleUrls instead of styleUrl
// })
// export class AppComponent {
//   title = 'strike-pack';
// }


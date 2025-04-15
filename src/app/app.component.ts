import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService} from './userService';
import { user } from './interface/userInterface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [UserService]
})
export class AppComponent {
  title = 'train-application-angular';
  http: any;
  resoursesService: any;
  responseData!: user;

  constructor(private userService: UserService) {}

  getAll() {
    this.userService.getAllUser().subscribe({
      next: (response) => {
        this.responseData = response;
        console.log('Success:', this.responseData);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

    

}

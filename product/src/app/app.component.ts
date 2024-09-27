import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from "./components/list/list.component";
import { UploadComponent } from "./components/upload/upload.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, UploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'product';
}

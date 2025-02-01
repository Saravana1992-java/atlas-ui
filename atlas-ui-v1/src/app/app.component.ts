import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeftPaneComponent } from './left-pane/left-pane.component';
import { TopPaneComponent } from './top-pane/top-pane.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, LeftPaneComponent, TopPaneComponent]
})
export class AppComponent { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{HeaderComponent} from './header/header.component'
import{MainSecComponent} from './main-sec/main-sec.component'
import{SidebarComponent} from './sidebar/sidebar.component'
import{FooterComponent} from './footer/footer.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainSecComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dogsnshows';
}

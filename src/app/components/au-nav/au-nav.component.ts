import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-au-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './au-nav.component.html',
  styleUrl: './au-nav.component.scss'
})
export class AuNavComponent {

}

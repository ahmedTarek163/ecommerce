import { AuthService } from './../../core/services/auth.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-blank-nav',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './blank-nav.component.html',
  styleUrl: './blank-nav.component.scss'
})
export class BlankNavComponent {

    readonly _AuthService = inject(AuthService)

}

import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterOutlet } from '@angular/router';
import { BlankNavComponent } from "../../components/blank-nav/blank-nav.component";
import { AuNavComponent } from "../../components/au-nav/au-nav.component";

@Component({
  selector: 'app-auth-layoyt',
  standalone: true,
  imports: [ FooterComponent, RouterOutlet, BlankNavComponent, AuNavComponent],
  templateUrl: './auth-layoyt.component.html',
  styleUrl: './auth-layoyt.component.scss'
})
export class AuthLayoytComponent {

}

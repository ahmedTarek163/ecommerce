import { Component } from '@angular/core';
import { BlankNavComponent } from "../../components/blank-nav/blank-nav.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-blank-layoyt',
  standalone: true,
  imports: [BlankNavComponent, RouterOutlet, FooterComponent],
  templateUrl: './blank-layoyt.component.html',
  styleUrl: './blank-layoyt.component.scss'
})
export class BlankLayoytComponent {

}

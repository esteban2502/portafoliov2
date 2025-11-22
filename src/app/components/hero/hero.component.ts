import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name = 'Juan Esteban Buriticá García';
  title = 'Full Stack Developer';
  bio = 'Desarrollador de software con experiencia en el desarrollo de aplicaciones para el sector bancario en Colombia. Mi trabajo se ha enfocado en construir soluciones robustas tanto en el backend como en el frontend.';
  location = 'Colombia';
  email = 'juanes9001@gmail.com';
  github = 'esteban2502';
  linkedin = 'juan-esteban-buritica-garcia/';
}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations: Education[] = [
    {
      degree: 'Tecnología en Desarrollo de Software',
      institution: 'Universidad Católica de Pereira',
      period: '2023 - 2025',
      description: ''
    },
    {
      degree: 'Ultimate JavaScript',
      institution: 'Udemy',
      period: '2024',
      description: 'Certificación en desarrollo con JavaScript'
    },
    {
      degree: 'Curso de Spring Framework y Spring Boot',
      institution: 'Código Facilito',
      period: '2024',
      description: 'Certificación en desarrollo con Spring Framework y Spring Boot'
    }
  ];
}


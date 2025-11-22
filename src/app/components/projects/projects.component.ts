import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  linkedin?: string;
  image?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  formatNumber(num: number): string {
    return String(num).padStart(2, '0');
  }

  projects: Project[] = [
    {
      title: 'Gestión de pruebas psicológicas (MoCA)',
      description: 'Plataforma web para administrar, calificar y almacenar evaluaciones MoCA, con autenticación  y panel de resultados.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL','JWT','Spring Security', 'Bootstrap'],
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7390427067483590656/'
    },
    {
      title: 'Invictus App',
      description: 'Aplicación móvil para consultar precios de criptomonedas en tiempo real, realizar conversiones, conversar con agente IA y ver noticias en tiempo real.',
      technologies: ['React Native', 'Expo', 'Gemini API'],
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7345594357573427200/'
    },
    {
      title: 'Gestión de Proyectos Personales ',
      description: 'Sistema CRUD para organizar proyectos, tareas y tiempos, con autenticación por JWT y panel administrativo.',
      technologies: ['Spring Boot 3', 'MySQL', 'Spring Security', 'JWT','JavaScript', 'HTML5','Bootstrap'],
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7265476389716324353/'
    }
  ];
}


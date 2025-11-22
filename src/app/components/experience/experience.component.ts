import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Full Stack Programmer',
      company: 'Indesap S.A.S.',
      period: 'Marzo 2025 - Presente',
      description: [
        'Desarrollo de aplicaciones web escalables usando Angular y Spring Boot',
        'Implementación de APIs RESTful y arquitectura de microservicios',
        'Gestion de bases de datos PostgreSQL, diseñando esquemas relacionales, estableciendo relaciones y creando consultas para soportar las funcionalidades del sistema.',
        'Estandaricé procesos y enfoques en la resolución de problemas técnicos, los cuales han sido adoptados como referencia en otros proyectos desarrollados para la misma entidad bancaria, contribuyendo a la mejora continua y coherencia entre equipos.'
        
      ],
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker', 'RabbitMQ', 'Git']
    },
    {
      title: 'Full Stack Developer',
      company: 'Universidad Católica de Pereira',
      period: '2024 - presente',
      description: [
        'Lidero el proyecto “Plataforma web para la gestión de pruebas psicológicas MoCA”, dirigida al programa de Psicología de la universidad.',
        'Mi rol abarca la identificación de requerimientos, diseño y desarrollo de la plataforma utilizando Java y Spring Boot 3.',
        'Implemento Spring Data JPA para la persistencia en una base de datos relacional.'
       
      ],
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL']
    },
    {
      title: 'University Researcher',
      company: 'Universidad Católica de Pereira',
      period: '2024 - presente',
      description: [
        'Ponente en INNOVUS, Universidad Católica de Manizales.',
        'Ponente en RREDSI durante el XV Encuentro Departamental de Semilleros de Investigación de Risaralda, Universidad Libre.',
        'Ponente en RREDSI durante el XV Encuentro Regional de Semilleros de Investigación de Risaralda, Universidad de Manizales.'
      ],
      technologies: []
    }
  ];
}


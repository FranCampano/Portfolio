import { Component } from '@angular/core';
import { SafeUrlPipe } from './SafeUrlPipe.pipe';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [SafeUrlPipe, NgIf],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects: Project[] = [
    {
      title: 'Restastock',
      description: 'Aplicación para la gestión de un restaurante.',
      imageUrl: 'restastock.png',
      videoUrl: 'https://www.youtube.com/embed/y0DuOjmE1ME', // <-- YouTube embed link
      link: 'https://github.com/FranCampano/RestaStock',
      showVideo: false
    },
    {
      title: 'Página web Angular',
      description: 'Pagina web para cliente desarrollada en Angular.',
      imageUrl: 'logoIvan.png',
      linkWeb: 'https://ivan-campano-web.netlify.app/',
      showVideo: false
    },
    {
      title: 'Iberdrola',
      description: 'App móvil de Iberdrola creada mediante lenguaje kotlin.',
      imageUrl: 'iberdrola.png',
      link: 'https://github.com/FranCampano/Proyecto_Iberdrola',
      showVideo: false
    },
  ]
}

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  linkWeb?: string; // Optional property for website link
  videoUrl?: string; // Optional property for YouTube video link
  showVideo?: boolean; // <-- nuevo campo
}
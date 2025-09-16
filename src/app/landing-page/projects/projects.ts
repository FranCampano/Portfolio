import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects: Project[] = [
    {
      title: 'Restastock',
      description: 'Aplicación para la gestión de un restaurante.',
      imageUrl: 'proyecto.png',
      link: 'https://github.com/FranCampano/RestaStock'
    },
    {
      title: 'Iberdrola',
      description: 'App móvil de Iberdrola creada mediante lenguaje kotlin.',
      imageUrl: 'proyecto.png',
      link: 'https://github.com/FranCampano/Proyecto_Iberdrola'
    },
    {
      title: 'Página web Angular',
      description: 'Pagina web para cliente desarrollada en Angular.',
      imageUrl: 'proyecto.png',
      link: 'https://ivan-campano-web.netlify.app/'
    }
  ]

}


interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}
import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { Footer } from './footer/footer';

@Component({
  selector: 'app-landing-page',
  imports: [Hero, About, Projects,Contact,Footer],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}

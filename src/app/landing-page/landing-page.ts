import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { About } from "./about/about";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-landing-page',
  imports: [Hero, About, Projects,Contact],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {

}

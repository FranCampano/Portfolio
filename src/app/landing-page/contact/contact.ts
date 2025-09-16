import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 importa esto

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log("Formulario enviado:", this.formData);
    alert("¡Gracias por tu mensaje! 🚀");
    this.formData = { name: '', email: '', message: '' };
  }

}

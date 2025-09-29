import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Envía el correo
      emailjs.send(
        'service_a9u5peo',
        'template_ojq7dj5',
        {
          name: form.value.name,
          email: form.value.email,
          message: form.value.message
        },
        'LALaFCksXABS8xW3x'
      ).then(() => {
        alert('Mensaje enviado correctamente');
        form.resetForm();
      }, (error) => {
        console.error('Error al enviar el mensaje:', error);
        alert('Hubo un error al enviar tu mensaje, inténtalo de nuevo');
      });
    } else {
      alert('Por favor completa todos los campos correctamente');
    }
  }
}

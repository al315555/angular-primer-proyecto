import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { ComponenteUsuario }    from '../model/Usuario/componente';


@Component({
    selector: 'login-form',
    templateUrl: 'template/loginForm/componente.html'
})

export class FormComponent {
    model = new ComponenteUsuario('introducir email', 'introducir clave', false);
    submitted = false;
    onSubmit() { this.submitted = true; }
}
import { Component } from '@angular/core';
@Component({
    selector: 'hola-angular',
    template: '<h1> {{ saludo }} </h1>'
})

export class AppComponent {
    saludo: string = "HOLA MUNDO";
}
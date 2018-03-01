import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from '../componente';
import { FormComponent } from '../formularioLogin/componente'



@NgModule({
    imports: [ BrowserModule , FormsModule],
    declarations: [ AppComponent ,  FormComponent ],
    bootstrap: [ AppComponent , FormComponent ]
})
export class LoginFormComponent { }
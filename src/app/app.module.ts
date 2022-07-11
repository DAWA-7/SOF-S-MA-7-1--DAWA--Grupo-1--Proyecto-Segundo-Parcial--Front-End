import { MostrarCatalogoComponent } from './catalogo/mostrar-catalogo/mostrar-catalogo.component';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRouterModule} from './app-router.module';
import {MaterialModule} from './material/material.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AgregarUserComponent} from './user/agregar-user/agregar-user.component';
import {ListarUserComponent} from './user/listar-user/listar-user.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RegisterComponent} from './auth/register/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import {MatGridListModule} from '@angular/material/grid-list';
import { DetalleLibroComponent } from './catalogo/detalle-libro/detalle-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ListarUserComponent,
    AgregarUserComponent,
    RegisterComponent,
    MostrarCatalogoComponent,
    DetalleLibroComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRouterModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,MatGridListModule
  ],
  entryComponents: [LoginComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

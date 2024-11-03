import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerPrincipalComponent } from './components/banner-principal/banner-principal.component';
import { AboutComponent } from './components/about/about.component';
import { SistemasComponent } from './components/sistemas/sistemas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AsesoramientoComponent } from './components/asesoramiento/asesoramiento.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { FooterComponent } from './components/footer/footer.component';
import { SadmimComponent } from './components/sistemas/sadmim/sadmim.component';
import { SadmipComponent } from './components/sistemas/sadmip/sadmip.component';
import { SadmitComponent } from './components/sistemas/sadmit/sadmit.component';
import { ServiDescComponent } from './components/servicios/servi-desc/servi-desc.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BannerPrincipalComponent,
    AboutComponent,
    SistemasComponent,
    ServiciosComponent,
    AsesoramientoComponent,
    ClientesComponent,
    FooterComponent,
    SadmimComponent,
    SadmipComponent,
    SadmitComponent,
    ServiDescComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

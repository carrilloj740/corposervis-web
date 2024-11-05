import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ServiDescComponent } from './components/servicios/servi-desc/servi-desc.component';
import { SadmipComponent } from './components/sistemas/sadmip/sadmip.component';
import { SadmimComponent } from './components/sistemas/sadmim/sadmim.component';
import { SadmitComponent } from './components/sistemas/sadmit/sadmit.component';
import { SistemasComponent } from './components/sistemas/sistemas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'sadmim', component: SadmimComponent },
  { path: 'sadmip', component: SadmipComponent },
  { path: 'sadmit', component: SadmitComponent },
  { path: 'servicios', component: ServiDescComponent },
  { path: 'sistemas', component: SistemasComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

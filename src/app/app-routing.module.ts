import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SadmimComponent } from './components/sistemas/sadmim/sadmim.component';
import { SadmipComponent } from './components/sistemas/sadmip/sadmip.component';
import { SadmitComponent } from './components/sistemas/sadmit/sadmit.component';
import { ServiDescComponent } from './components/servicios/servi-desc/servi-desc.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  {path: 'sadmim', component: SadmimComponent},
  {path: 'sadmip', component: SadmipComponent},
  {path: 'sadmit', component: SadmitComponent},
  {path: 'servicios', component: ServiDescComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

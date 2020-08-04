import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { TiendaComponent} from './components/tienda/tienda.component';
import { ContactanosComponent} from './components/contactanos/contactanos.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent},
  { path: 'tienda', component: TiendaComponent},
  { path: 'contactanos', component: ContactanosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

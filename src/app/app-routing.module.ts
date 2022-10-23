import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'siswa',
    loadChildren: () => import('./siswa/siswa.module').then(m=>m.SiswaModule)
  },
  {
    path: 'guru',
    loadChildren: () => import('./guru/guru.module').then(m=>m.GuruModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

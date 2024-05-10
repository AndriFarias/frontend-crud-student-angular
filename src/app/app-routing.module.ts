import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
import { AlunoListComponent } from './alunos/aluno-list/aluno-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: AlunoListComponent},
  {path:'new', component: AlunoFormComponent},
  {path:'edit/:id', component: AlunoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

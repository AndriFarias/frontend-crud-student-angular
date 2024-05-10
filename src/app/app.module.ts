import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoListComponent } from './alunos/aluno-list/aluno-list.component';
import { AlunoListItemComponent } from './alunos/aluno-list-item/aluno-list-item.component';
import { AlunoFormComponent } from './alunos/aluno-form/aluno-form.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AlunoListComponent,
    AlunoListItemComponent,
    AlunoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

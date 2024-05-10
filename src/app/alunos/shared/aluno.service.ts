import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from "./aluno";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Aluno[]>(`${environment.api}/alunos`);
  }

  getById(id:string){
    return this.http.get<Aluno>(`${environment.api}/alunos/${id}`);
  }

  save(aluno: Aluno){
    const alunoBody = {
      nome : aluno.nome,
      sobrenome : aluno.sobrenome,
      cpf: aluno.cpf,
      matricula: aluno.matricula,
      dataNascimento: aluno.dataNascimento,
      curso: aluno.curso,
      status: aluno.status
    }
    if (aluno._id) {
      return this.http.put<Aluno>(`${environment.api}/alunos/${aluno._id}`,alunoBody);
     }else{
      return this.http.post<Aluno>(`${environment.api}/alunos`,alunoBody);

  }
  }
  delete(id:string){
    return this.http.delete(`${environment.api}/alunos/${id}`);
  }
}

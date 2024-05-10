import { AlunoService } from './../shared/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from "../shared/aluno";

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {
  alunos: Aluno[] = [];


  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.alunoService.getAll().subscribe(alunos =>{
      this.alunos = alunos;
    });
  }
  onAlunoDeleted(aluno: Aluno){
    if(aluno){
      const index =  this.alunos.findIndex((alunoItem) => alunoItem._id == aluno._id);
      this.alunos.splice(index,1);
    }
  }
}

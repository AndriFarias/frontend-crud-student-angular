import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Aluno } from "../shared/aluno";
import { AlunoService } from '../shared/aluno.service';

@Component({
  selector: 'app-aluno-list-item',
  templateUrl: './aluno-list-item.component.html',
  styleUrls: ['./aluno-list-item.component.css']
})
export class AlunoListItemComponent implements OnInit {
  @Input()
  aluno:Aluno

  @Output()
  onDeleteAluno = new EventEmitter()

  constructor(private alunoSevice:AlunoService) { }

  ngOnInit(): void {
  }

  remove(aluno: Aluno){
    this.alunoSevice.delete(aluno._id).subscribe(()=>{
      this.onDeleteAluno.emit(aluno)
    });
  }

  onStatusCheckChange(aluno:Aluno){
    this.alunoSevice.save(aluno).subscribe(aluno =>{
      console.log(aluno);

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../shared/aluno';
import { AlunoService } from '../shared/aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  aluno:Aluno = new Aluno;
  title:string = 'Novo aluno';

  constructor(
    private activatedRoute:ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.alunoService.getById(id).subscribe(aluno => {
        this.aluno = aluno;
        this.title = 'Editar aluno';
      });

    }
  }

  onsubmit(){
    this.alunoService.save(this.aluno).subscribe(aluno => {
      this.router.navigate(['']);
    });

  }

}

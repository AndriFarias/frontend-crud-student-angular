import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoListItemComponent } from './aluno-list-item.component';

describe('AlunoListItemComponent', () => {
  let component: AlunoListItemComponent;
  let fixture: ComponentFixture<AlunoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlunoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

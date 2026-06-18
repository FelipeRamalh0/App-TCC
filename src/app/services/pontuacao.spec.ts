import { TestBed } from '@angular/core/testing';

import { Pontuacao } from './pontuacao';

describe('Pontuacao', () => {
  let service: Pontuacao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pontuacao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {

  constructor(    
    private router: Router,    
    private ref:MatDialogRef<CadastrarComponent>
  ) { }

  Retornar(){
    this.ref.close();
    this.router.navigate(['/home']);
  }
}


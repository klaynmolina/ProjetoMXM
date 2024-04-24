import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-modal',
  templateUrl: './atualizar-modal.component.html',
  styleUrls: ['./atualizar-modal.component.css']
})
export class AtualizarModalComponent {

  constructor(    
    private router: Router,    
    private ref:MatDialogRef<AtualizarModalComponent>
  ) { }

  Retornar(){
    this.ref.close();
    this.router.navigate(['/home']);
  }

}
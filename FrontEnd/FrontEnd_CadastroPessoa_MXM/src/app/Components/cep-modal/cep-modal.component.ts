import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cep-modal',
  templateUrl: './cep-modal.component.html',
  styleUrls: ['./cep-modal.component.css']
})
export class CepModalComponent {

  constructor(    
    private router: Router,    
    private ref:MatDialogRef<CepModalComponent>
  ) { }

  Retornar(){
    this.ref.close();
  }

}

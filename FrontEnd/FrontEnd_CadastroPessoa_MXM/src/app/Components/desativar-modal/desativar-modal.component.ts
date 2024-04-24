import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desativar-modal',
  templateUrl: './desativar-modal.component.html',
  styleUrls: ['./desativar-modal.component.css']
})
export class DesativarModalComponent {
  constructor(    
    private router: Router,    
    private ref:MatDialogRef<DesativarModalComponent>
  ) { }

  Retornar(){
    this.ref.close();
    this.router.navigate(['/home']);
  }
}

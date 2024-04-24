import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ativar-modal',
  templateUrl: './ativar-modal.component.html',
  styleUrls: ['./ativar-modal.component.css']
})
export class AtivarModalComponent {

  constructor(    
    private router: Router,    
    private ref:MatDialogRef<AtivarModalComponent>
  ) { }

  Retornar(){
    this.ref.close();
    this.router.navigate(['/home']);
  }

}

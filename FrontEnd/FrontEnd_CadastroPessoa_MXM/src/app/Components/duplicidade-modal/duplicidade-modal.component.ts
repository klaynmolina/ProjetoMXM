import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duplicidade-modal',
  templateUrl: './duplicidade-modal.component.html',
  styleUrls: ['./duplicidade-modal.component.css']
})
export class DuplicidadeModalComponent {
  constructor(    
    private router: Router,    
    private ref:MatDialogRef<DuplicidadeModalComponent>
  ) { }

  Retornar(){
    this.ref.close();
  }
}

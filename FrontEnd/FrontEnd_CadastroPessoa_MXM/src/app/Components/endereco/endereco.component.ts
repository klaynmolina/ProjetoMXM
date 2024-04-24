import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/Models/Pessoa';
import { PessoaService } from 'src/app/Services/pessoa.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  
  
  id: number = 0;
  pessoa!: Pessoa;
  
  constructor (
    private pessoaService: PessoaService, 
    private route: ActivatedRoute,    
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.pessoaService.GetPessoas().subscribe(
      (info) => {
        this.pessoa = info.dados.find(x => x.id == Number(id))!;        
      }
    )    
  }

  Retornar(){
    this.router.navigate(['/home']);
  }
}

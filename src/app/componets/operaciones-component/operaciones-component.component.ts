import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperacionesService } from '../../servicies/operaciones.service';

@Component({
  selector: 'app-operaciones-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './operaciones-component.component.html',
  styleUrl: './operaciones-component.component.scss'
})
export class OperacionesComponentComponent {
  num1:number =0
  num2:number =0
  ope:string = ''
  resultado:number = 0
  constructor(private servicioOpe:OperacionesService){}
  listOperaciones:{num1:number,operacion:string,num2:number,resul:number}[] = []
  
  newOperacion(num1:number,num2:number,ope:string){
    console.log(ope)
    if(this.ope='+'){
      this.resultado=this.servicioOpe.sum(this.num1,this.num2)
      this.limpiarCampos
    }else if(this.ope='-'){
      this.resultado=this.servicioOpe.rest(this.num1,this.num2)
      this.limpiarCampos
    }else if(this.ope='*'){
      this.resultado=this.servicioOpe.multip(this.num1,this.num2)
      this.limpiarCampos
    }else if(this.ope='/'){
      this.resultado=this.servicioOpe.divis(this.num1,this.num2)
      this.limpiarCampos
    }else{
      alert('Operacion ivalida')
    }
  }

  limpiarCampos(){
    this.num1=0
    this.num2=0
    this.ope =''
    
   
  }
}

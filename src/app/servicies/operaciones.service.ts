import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {

  constructor() { }
  operaciones : {num1:number,operacion:string,num2:number,resul:number}[] =[]
  
  cargarOperciones():{num1:number,operacion:string,num2:number,resul:number}[]{
    this.operaciones = JSON.parse(localStorage.getItem('listaOperaciones') || '[]');
    return this.operaciones
  }

  newOperacion(num1:number,operacion:string,num2:number,res:number){
    let ope = {num1:num1,operacion:operacion,num2:num2,resul:res}
    this.operaciones.push(ope)
    localStorage.setItem('listaOperaciones', JSON.stringify(this.operaciones))
  }

  deleteCurso(ope:{num1:number,operacion:string,num2:number,resul:number}){
    const index = this.operaciones.indexOf(ope);
    if (index !== -1) {
      this.operaciones.splice(index, 1);
      console.log(this.operaciones)
      localStorage.setItem('listaOperaciones', JSON.stringify(this.operaciones));
    }
  }
  sum(nume1:number,nume2:number):number{
    const res:number = nume1+nume2
    this.newOperacion(nume1,'+',nume2,res)
    return res
  }
  rest(nume1:number,nume2:number):number{
    const res:number = nume1-nume2
    
    this.newOperacion(nume1,'-',nume2,res)
    return res
  }
  multip(nume1:number,nume2:number):number{
    const res:number = nume1*nume2
    this.newOperacion(nume1,'+',nume2,res)
    return res
  }
  divis(nume1:number,nume2:number):number{
    const res:number = nume1/nume2
    this.newOperacion(nume1,'+',nume2,res)
    return res
  }
}

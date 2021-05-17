import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  newPost: FormGroup;
  constructor(private blogService: BlogService) {
    this.newPost = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.newPost.value);
    const resultado = this.blogService.agregarPost(this.newPost.value);
    return resultado
    //console.log(resultado);


  }

}

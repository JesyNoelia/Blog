import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../interfaces/post.interface';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  posts: Post[];
  newPost: FormGroup;

  categorias: string[];

  constructor(private blogService: BlogService) {

    this.newPost = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required, Validators.maxLength(600)]),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl('2021', Validators.required),
      categoria: new FormControl('General'),
    })
  }

  ngOnInit(): void {
    this.categorias = this.blogService.getCategoria()
  }

  onSubmit() {
    //console.log(this.newPost.value);
    const resultado = this.blogService.agregarPost(this.newPost.value);
    return resultado
    //console.log(resultado);
  }

  checkControl(control, validatorName) {
    return this.newPost.get(control).hasError(validatorName) && this.newPost.get(control).touched
  }

}

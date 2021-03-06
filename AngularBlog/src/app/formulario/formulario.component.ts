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
  lastId: any;

  constructor(private blogService: BlogService) {

    this.newPost = new FormGroup({
      id: new FormControl('', [Validators.required]),
      titulo: new FormControl('', [Validators.required]),
      texto: new FormControl('', [Validators.required, Validators.maxLength(600)]),
      categoria: new FormControl('', [Validators.required]),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl('2021', [Validators.required]),
      subtitulo: new FormControl('', Validators.required),

    })
  }

  ngOnInit() {
    this.categorias = this.blogService.getCategoria();
    this.lastId = this.blogService.getLastPost();
    //console.log(this.lastId);


  }

  onSubmit() {
    //console.log(this.newPost.value);
    const resultado = this.blogService.agregarPost(this.newPost.value);
    this.newPost.reset();
    alert('Thank you for helping us grow. Your post is now available!')
    return resultado



    //console.log(resultado);
  }

  checkControl(control, validatorName) {
    return this.newPost.get(control).hasError(validatorName) && this.newPost.get(control).touched
  }

}

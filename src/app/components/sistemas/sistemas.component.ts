import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css'],
})
export class SistemasComponent {
  titleSistema: string = '';
  tituloSistemaUno: string = ''; 
  descSistemaUno: string = ''; 
  tituloSistemaDos: string = ''; 
  descSistemaDos: string = '';
  tituloSistemaTres: string = ''; 
  descSistemaTres: string = ''; 

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        // Extraemos el título
        if (response.items && response.items.length > 0) {
          // Titulo sección
          const titleSistemaValue =
            response.items[0].fields.tituloSistemas.content[0].content[0].value;
          this.titleSistema = titleSistemaValue;

          // Sistema Uno
          const titleSistemaUnoValue =
            response.items[0].fields.sadmim.content[0].content[0].value;
          this.tituloSistemaUno = titleSistemaUnoValue;

          const descripcionSistemaUno = response.items[0].fields.descripcionSadmim.content[0].content[0]
              .value;
              this.descSistemaUno = descripcionSistemaUno;

          // Sistema Dos
          const titleSistemaDosValue =
            response.items[0].fields.sadmip.content[0].content[0].value;
          this.tituloSistemaDos = titleSistemaDosValue;

          const descripcionSistemaDos = response.items[0].fields.descripcionSadmip.content[0].content[0]
          .value;
          this.descSistemaDos = descripcionSistemaDos;

          // Sistema Tres
          const titleSistemaTresValue =
            response.items[0].fields.sadmit.content[0].content[0].value;
          this.tituloSistemaTres = titleSistemaTresValue;

          const descripcionSistemaTres = response.items[0].fields.descripcionSadmit.content[0].content[0]
          .value;
          this.descSistemaTres = descripcionSistemaTres;
        }
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}

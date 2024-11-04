import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ContenfulService } from 'src/app/services/contenful.service';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css'],
})
export class SistemasComponent {
  titleSistema: string = ''; // Título del contenido
  tituloSistemaUno: string = ''; //Título del primer sistema
  descSistemaUno: string = ''; // Descripcion primer sistema

  tituloSistemaDos: string = ''; //Título del segundo sistema
  descSistemaDos: string = ''; // Descripcion segundo sistema

  tituloSistemaTres: string = ''; //Título del tercer sistema
  descSistemaTres: string = ''; // Descripcion tercer sistema

  constructor(
    private apiService: ApiService,
    private contenfulService: ContenfulService
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

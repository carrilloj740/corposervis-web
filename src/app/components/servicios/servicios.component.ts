import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent {
  tituloServicio: string = ''; // Título del contenido
  tituloServicioUno: string = ''; // Título del contenido
  tituloServicioDos: string = ''; // Título del contenido 2
  tituloServicioTres: string = ''; // Título del contenido 2
  descripcionPrimerServicio: string = ''; // descripción del contenido
  descripcionSegundoServicio: string = ''; // descripción del contenido
  descripcionTercerServicio: string = ''; // descripción del contenido
  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        // Extraemos el título
        if (response.items && response.items.length > 0) {
          // Titulo de la sección
          // Imprimirá "Nuestros Servicios"
          const tituloServicio =
            response.items[0].fields.tituloServicio.content[0].content[0].value;
          this.tituloServicio = tituloServicio;

          //PRIMER SERVICIO
          // Imprimirá "Desarrollo de software"
          const tituloDescripcionUno =
            response.items[0].fields.tituloDescripcion.content[0].content[0]
              .value;
          this.tituloServicioUno = tituloDescripcionUno;

          // Accede a Descripción de Servicio1
          const descripcionServicioUno =
            response.items[0].fields.descripcionServicio1.content[0].content[0]
              .value;
          this.descripcionPrimerServicio = descripcionServicioUno;

          // SEGUNDO SERVICIO
          //Titulo servicio1
          // Imprimirá "Desarrollo de web"
          const tituloDescripcionDos =
            response.items[0].fields.tituloServicio2.content[0].content[0]
              .value;
          this.tituloServicioDos = tituloDescripcionDos;

          // Accede a Descripción de Servicio2
          const descripcionServicioDos =
            response.items[0].fields.descripcionServicio2.content[0].content[0]
              .value;
          this.descripcionSegundoServicio = descripcionServicioDos;

          // Tercer SERVICIO
          //Titulo servicio1
          // Imprimirá "Servidores"
          const tituloDescripcionTres =
            response.items[0].fields.tituloServicio3.content[0].content[0]
              .value;
          this.tituloServicioTres = tituloDescripcionTres;

          // Accede a Descripción de Servicio3
          const descripcionServicioTres =
            response.items[0].fields.descripcionServicio3.content[0].content[0]
              .value;
          this.descripcionTercerServicio = descripcionServicioTres;
        }
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}

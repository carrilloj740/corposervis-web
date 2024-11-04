import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ContenfulService } from 'src/app/services/contenful.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent {
  titleSeccionCliente: string = ''; // Título asesoramiento
  descriptionAsesoramiento: string = ''; // descripción asesoramiento
  titleDesCorta: string = ''; //Descripción corta
  descripcionClientes: string = ''; //Descripción clientes
  constructor(
    private apiService: ApiService,
    private contenfulService: ContenfulService
  ) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        // Extraemos el título
        if (response.items && response.items.length > 0) {
          const titleClienteValue =
            response.items[0].fields.tituloClientes.content[0].content[0].value;
          this.titleSeccionCliente = titleClienteValue;

          // TituloClientes2
          const titleClientesDos =
            response.items[0].fields.tituloClientes2.content[0].content[0]
              .value;
          this.titleDesCorta = titleClientesDos;

          // DescripcionClientes
          // TituloClientes2
          const titleClientesTres =
            response.items[0].fields.descripcionClientes.content[0].content[0]
              .value;
          this.descripcionClientes = titleClientesTres;
        }
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}

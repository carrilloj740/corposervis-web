import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ContenfulService } from 'src/app/services/contenful.service';

@Component({
  selector: 'app-asesoramiento',
  templateUrl: './asesoramiento.component.html',
  styleUrls: ['./asesoramiento.component.css']
})
export class AsesoramientoComponent {
  titleAsesoramiento: string = ''; // Título asesoramiento
  descriptionAsesoramiento: string = ''; // descripción asesoramiento

  constructor(
    private apiService: ApiService,
    private contenfulService: ContenfulService
  ) {}


  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        // Extraemos el título
        if (response.items && response.items.length > 0) {
          const titleAsesoramientoValue = response.items[0].fields.tituloAsesoramiento.content[0].content[0].value;
          this.titleAsesoramiento = titleAsesoramientoValue;
          
          // Descripcion
          const descriptionAsesoramientoValue = response.items[0].fields.descripcionAsesoramiento.content[0].content[0].value;
          this.descriptionAsesoramiento = descriptionAsesoramientoValue;
        }
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sadmit',
  templateUrl: './sadmit.component.html',
  styleUrls: ['./sadmit.component.css']
})
export class SadmitComponent {

  tituloSadmit: string = ''; //Título del sistema
  descSadmit: string = ''; // Descripcion del sistema

  constructor(
    private apiService: ApiService,
  ) {}


  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        // Extraemos el título
        if (response.items && response.items.length > 0) {
          // Titulo sección
          
          // Sistema Uno
          const titleSadmimValue =
            response.items[0].fields.sadmit.content[0].content[0].value;
          this.tituloSadmit = titleSadmimValue;

          const descSadmimValue = response.items[0].fields.descripcionSadmit.content[0].content[0]
              .value;
              this.descSadmit = descSadmimValue;
        }
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }

}

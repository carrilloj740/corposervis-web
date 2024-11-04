import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sadmim',
  templateUrl: './sadmim.component.html',
  styleUrls: ['./sadmim.component.css']
})
export class SadmimComponent {


  tituloSadmim: string = ''; //Título del sistema
  descSadmim: string = ''; // Descripcion del sistema


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
            response.items[0].fields.sadmim.content[0].content[0].value;
          this.tituloSadmim = titleSadmimValue;

          const descSadmimValue = response.items[0].fields.descripcionSadmim.content[0].content[0]
              .value;
              this.descSadmim = descSadmimValue;
        }
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sadmip',
  templateUrl: './sadmip.component.html',
  styleUrls: ['./sadmip.component.css']
})
export class SadmipComponent {


  tituloSadmip: string = ''; //Título del sistema
  descSadmip: string = ''; // Descripcion del sistema


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
            response.items[0].fields.sadmip.content[0].content[0].value;
          this.tituloSadmip = titleSadmimValue;

          const descSadmimValue = response.items[0].fields.descripcionSadmip.content[0].content[0]
              .value;
              this.descSadmip = descSadmimValue;
        }
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
  
}

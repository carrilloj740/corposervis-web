import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-banner-principal',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.css'],
})
export class BannerPrincipalComponent {
  items = [];
  title: string = ''; // Título del contenido
  description: string = ''; // descripción

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        // Extraemos el título
        if (response.items && response.items.length > 0) {
          const titleValue = response.items[0].fields.tituloBanner;
          this.title = titleValue;
          
          const descriptionValue = response.items[0].fields.descripcionBanner.content[0].content[0].value;
          this.description = descriptionValue;
        }
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}

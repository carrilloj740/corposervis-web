import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ContenfulService } from 'src/app/services/contenful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  about: string = ''; // Título del contenido

  constructor(
    private apiService: ApiService,
    private contenfulService: ContenfulService
  ) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        // Extraemos el título
        if (response.items && response.items.length > 0) {
          
          const aboutValue = response.items[0].fields.about.content[0].content[0].value;
          this.about = aboutValue;
        }
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}

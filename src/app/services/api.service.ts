import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl =
  'https://preview.contentful.com/spaces/ae1vl7smhntt/environments/master/entries?access_token=_IP_IyGNfdX3Zzu1rlLaOxG8KtGFN5eTmIcbr_ju0Vg&content_type=corposervis';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

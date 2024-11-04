import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
@Injectable({
  providedIn: 'root',
})
export class ContenfulService {
  private client = createClient({
    space: 'ae1vl7smhntt',
    accessToken: 'dS-ovniQMA0Pl1vZm9z0qSfv8ijzm6XEANXdniTZfY4',
  });
  constructor() {}

  getImage(imageId: string, p0: { width: number; height: number; },) {
    return this.client.getAsset(imageId)
      .then((asset: any) => asset.fields.file.url);
  }
}
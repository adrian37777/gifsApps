import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../Interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class gifsService {
  private _historial: string[] = [];

  private apiKey: string = 'S13ezZ7KAq6nzFNBKhw7PKdbXJ5m6KM1';
  private servicioUrl: string='https://api.giphy.com/v1/gifs';

  //TODO cambiar any por su tipo correspondiente
  public resultados: Gif[] =[];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {

     this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
     this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscarGif(query: string = '') {
    query = query.toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    const params = new HttpParams().set('api_key',this.apiKey).set('limit','10').set('q',query);


    this.http
      .get<SearchGifsResponse>(
        `${this.servicioUrl}/search`,{params}
      )
      .subscribe((resp)=>{
          this.resultados = resp.data;

          localStorage.setItem('resultados', JSON.stringify(this.resultados))
      });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  URL = 'https://api-ssl.bitly.com/v4/shorten';
  token = 'e51b3039d324cce18946eec27fa8d9924c5ddcb5';
  constructor(private http: HttpClient) {}

  getUrlShort(nombreUrl: string): Observable<any> {
    // const tokenHeader = new HttpHeaders({
    //   Authorization: 'Bearer ' + this.token,
    // });
    const body = {
      long_url: nombreUrl,
    };

    return this.http.post(this.URL, body);
  }
}

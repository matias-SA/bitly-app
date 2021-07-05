import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css'],
})
export class ShortUrlComponent implements OnInit {
  nombreUrl: string = '';
  urlShort: string = '';
  urlProcesada: boolean = false;
  loading: boolean = false;
  mostrarError: boolean = false;
  textError: string = '';
  constructor(private shortSvc: ShortUrlService) {}

  ngOnInit(): void {}

  precesarUrl() {
    if (this.nombreUrl === '') {
      this.mostrarError = true;
      this.textError = 'Por favor ingrese una URL';
      setTimeout(() => {
        this.mostrarError = false;
      }, 4000);
      return;
    }
    this.urlProcesada = false;
    this.loading = true;
    this.shortSvc.getUrlShort(this.nombreUrl).subscribe(
      (data) => {
        this.loading = false;
        this.urlProcesada = true;
        this.urlShort = data.link;
      },
      (error) => {
        this.loading = false;
        this.nombreUrl = '';
        if (error.error.description === 'The value provided is invalid.') {
          this.error('Ingrese una URL valida');
        }
      }
    );
  }

  error(value: string) {
    this.mostrarError = true;
    this.textError = value;
    setTimeout(() => {
      this.mostrarError = false;
    }, 4000);
  }
}

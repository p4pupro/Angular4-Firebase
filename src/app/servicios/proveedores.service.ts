import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProveedoresService {

  provURL = 'https://appcompras-be0f7.firebaseio.com/proveedores.json';
  proURL = 'https://appcompras-be0f7.firebaseio.com/proveedores';

  constructor(private http: Http ) { }

  postProveedores(proveedores: any) {
    const newpres = JSON.stringify(proveedores);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post( this.provURL, newpres, {headers})
    .map( res => {
      console.log(res.json());
      return res.json();
    })
  }

  getProveedores() {
    return this.http.get(this.provURL)
          .map(
            res => res.json()
          )
  }


  getProveedore(id$: string) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.get(url)
    .map( res => res.json());

  }

  putProveedores(proveedores: any, id$: string) {
    const newpre = JSON.stringify(proveedores);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.proURL}/${id$}.json`;
    return this.http.put( url, newpre, {headers})
      .map ( res => {
        console.log(res.json());
        return res.json();
      })
  }


  delProveedor(id$: string) {
    const url = `${this.proURL}/${id$}.json`;
    return this.http.delete( url )
    .map ( res => res.json() );
  }


  getProveedoresSearch(busqueda: string) {
    const url = `${ this.provURL }?orderBy="nombre"&startAt="${ busqueda }"&endAt="${ busqueda }\uf8ff"`;
    return this.http.get(url)
       .map (res => res.json());
  }

}


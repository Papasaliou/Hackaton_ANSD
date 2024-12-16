import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CoordonneArret} from "../../Models/CoordonneArret";

@Injectable({
  providedIn: 'root'
})
export class CoordonneService {

  constructor(private http: HttpClient) { }
  getCoordonnees(adresse:string){
   return  this.http.get<CoordonneArret>("https://api.openweathermap.org/data/2.5/weather?q="+adresse+"&appid=b44985dae5099520f7d2ecd741e5fa91");
  }
}

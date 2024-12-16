import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apiconfig} from "../../apiConfig/Apiconfig";
import {Arrets} from "../../Models/Arrets";

@Injectable({
  providedIn: 'root'
})
export class ArretsService {

  constructor(private http: HttpClient)  { }
  listeArrets(idLigne:number) {
    return  this.http.get<Arrets[]>(Apiconfig.gatewayUrl+Apiconfig.ligneService+"/arrets/ligne/"+idLigne);
  }
}

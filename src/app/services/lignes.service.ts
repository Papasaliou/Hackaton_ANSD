import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Apiconfig} from "../../apiConfig/Apiconfig";
import {Lignes} from "../../Models/Lignes";

@Injectable({
  providedIn: 'root'
})
export class LignesService {

  constructor(private http: HttpClient) { }

  listLignes(idmoderateur:number){
    return this.http.get<Lignes[]>(Apiconfig.gatewayUrl+Apiconfig.ligneService+"moderateur?"+idmoderateur);
  }

  uneLigne(idModerateur:number){
    return this.http.get<Lignes>(Apiconfig.gatewayUrl+Apiconfig.ligneService+"moderateur/"+idModerateur,{})
  }





}

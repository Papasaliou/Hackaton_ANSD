import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lignes} from "../../Models/Lignes";
import {Apiconfig} from "../../apiConfig/Apiconfig";
import {Moderateur} from "../../Models/Moderateurs";

@Injectable({
  providedIn: 'root'
})
export class GerantsService {

  constructor(private http: HttpClient) { }
  listModerateur(idGerant:number){
    return this.http.get<Moderateur[]>(Apiconfig.gatewayUrl+Apiconfig.userService+"moderateursbyGerant/"+idGerant);
  }
}

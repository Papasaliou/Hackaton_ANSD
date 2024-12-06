import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Moderateur} from "../../Models/Moderateurs";
import {Apiconfig} from "../../apiConfig/Apiconfig";

@Injectable({
  providedIn: 'root'
})
export class ModerateurService {

  constructor(private http: HttpClient)  { }
  listModerateurs(idGerant:number){
    return this.http.get<Moderateur[]>(Apiconfig.gatewayUrl+Apiconfig.userService+"moderateursbyGerant/"+idGerant);
  }
}

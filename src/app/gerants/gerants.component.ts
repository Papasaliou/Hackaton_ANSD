import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Lignes} from "../../Models/Lignes";
import {LignesService} from "../services/lignes.service";
import {GerantsService} from "../services/gerants.service";
import {Moderateur} from "../../Models/Moderateurs";
// import _default from "chart.js/dist/plugins/plugin.tooltip";
// import numbers = _default.defaults.animations.numbers;

@Component({
  selector: 'app-gerants',
  templateUrl: 'gerants.component.html',
  styleUrl: './gerants.component.css'
})
export class GerantsComponent implements OnInit {

  lignes: Array<Lignes>= [];
  moderateurs: Array<Moderateur> =[];
  ligne!: Lignes;
  idGerant =1;

  constructor(private lignesservice: LignesService,
              private moderateur:GerantsService,
              private http: HttpClient ) {
  }

  ngOnInit(): void {
    this.moderateur.listModerateur(this.idGerant).subscribe({
      next: result => {
       this.moderateurs = result;
       console.log(this.moderateurs);
      },
      error: error => {
        console.log(error);
      }
      }
    )

    for(let item of this.moderateurs){
      this.lignes.push(this.uneLigneC(item.id))
      console.log(item)
    }
    console.log(this.lignes);
  }

  uneLigneC(moderateurId:number):Lignes{
    this.lignesservice.uneLigne(moderateurId).subscribe({
      next: data => {
        this.ligne=data
      },
      error:err => {
        console.log(err)
      }
    })
    return this.ligne
  }


  // detailsligne(ligne: Lignes) {
  //   this.lignesservice.uneLigne(ligne.id).subscribe({
  //     next: data => {
  //       this.ligne = data;
  //       console.log(data.toString());
  //     },
  //     error: error => {
  //       console.error(error);
  //     }
  //   })
  //
  // }
}

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModerateurService} from "../services/moderateur.service";
import {Moderateur} from "../../Models/Moderateurs";
import {GerantsService} from "../services/gerants.service";
import {LignesService} from "../services/lignes.service";

@Component({
  selector: 'app-moderateur',
  templateUrl: './moderateur.component.html',
  styleUrl: './moderateur.component.css'
})
export class ModerateurComponent implements OnInit {
  moderateurs:Array<Moderateur>=[];
  idModerateur=1;
  constructor(private router: Router,
              private moderateurService: ModerateurService,
              private gerantsService: GerantsService,
              private lignesservice: LignesService) {
  }


  ngOnInit(): void {
    this.moderateurService.listModerateurs(this.idModerateur).subscribe({
      next: data => {
        this.moderateurs = data;
        console.log(this.moderateurs);
      },
      error:err => {
        console.log(err);
      }
    })
  }


  editerModerateur(id:number) {

  }

  supprimerModerateur(id:number) {

  }
}


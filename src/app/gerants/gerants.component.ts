import { Component, OnInit } from '@angular/core';
import { Lignes } from "../../Models/Lignes";
import { LignesService } from "../services/lignes.service";
import { GerantsService } from "../services/gerants.service";
import { Moderateur } from "../../Models/Moderateurs";
import { forkJoin } from 'rxjs';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gerants',
  templateUrl: 'gerants.component.html',
  styleUrl: './gerants.component.css'
})
export class GerantsComponent implements OnInit {
  lignes: Lignes[] = [];
  moderateurs: Moderateur[] = [];
  idGerant: number = 1;

  constructor(
    private lignesService: LignesService,
    private moderateurService: GerantsService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.moderateurService.listModerateur(this.idGerant).subscribe({
      next: (moderateurs) => {
        this.moderateurs = moderateurs;

        // Use forkJoin to handle multiple async requests
        const ligneRequests = moderateurs.map(moderateur =>
          this.lignesService.uneLigne(moderateur.id)
        );

        forkJoin(ligneRequests).subscribe({
          next: (lignesResults) => {
            this.lignes = lignesResults;
            console.log(this.lignes);

            console.log('Raw Lignes Results:', lignesResults); // Log raw results
            console.log('Processed Lignes:', this.lignes); // Log processed lines

            // Additional detailed logging
            this.lignes.forEach((ligne, index) => {
              console.log(`Ligne ${index} details:`, JSON.stringify(ligne));
            });
          },
          error: (error) => {
            console.error('Error fetching lines', error);
          }
        });
      },
      error: (error) => {
        console.error('Error fetching moderateurs', error);
      }
    });
  }

  navigateToDetails(ligneId: number) {
    this.router.navigate(['/details-ligne', ligneId]);
  }
}

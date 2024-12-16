import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LignesService } from '../services/lignes.service';
import { ArretsService } from '../services/arrets.service';
import { ActivatedRoute } from '@angular/router';
import { Lignes } from '../../Models/Lignes';
import { Arrets } from '../../Models/Arrets';
import * as L from 'leaflet';
import {CoordonneArret} from "../../Models/CoordonneArret";
import {CoordonneService} from "../services/coordonne.service";
import {forkJoin} from "rxjs"; // Importation de Leaflet

@Component({
  selector: 'app-details-ligne',
  templateUrl: './details-ligne.component.html',
  styleUrls: ['./details-ligne.component.css'],
})
export class DetailsLigneComponent implements OnInit, AfterViewInit {
  ligne!: Lignes;
  arrets: Arrets[]=[];
  coord!:CoordonneArret[];
  map!: L.Map; // Instance de la carte

  constructor(
    private lignesService: LignesService,
    private arretsService: ArretsService,
    private route: ActivatedRoute,
    private coordonneService: CoordonneService
  ) {}

  getRandomColor(index: number): string {
    const colors = [
      '#3B82F6', // Blue
      '#10B981', // Green
      '#EF4444', // Red
      '#F59E0B', // Amber
      '#6366F1', // Indigo
      '#8B5CF6', // Purple
    ];
    return colors[index % colors.length];
  }

  ngOnInit(): void {
    // Récupérer l'ID de la ligne à partir de l'URL
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      // Charger les détails de la ligne
      this.lignesService.uneLigne(id).subscribe({
        next: (ligne) => {
          this.ligne = ligne;
          console.log('Ligne Details:', this.ligne);
        },
        error: (error) => {
          console.error('Error fetching ligne details', error);
        },
      });

      // Charger les arrêts associés
      this.arretsService.listeArrets(id).subscribe({
        next: (arrets) => {
          this.arrets = arrets;
          console.log('Liste des arrêts:', this.arrets);
          for (let item of arrets) {
            this.coordonneService.getCoordonnees(item.adresse).subscribe({
              next: (coordonne) => {
                this.coord.push(coordonne)
              },
              error: (error) => {
                console.error('Error fetching coordonnee', error);
              }
            })
          }


          // Ajouter les arrêts sur la carte si la carte est déjà initialisée
          if (this.map) {
            this.addArretsToMap();
          }
        },
        error: (err) => {
          console.error('Error fetching arrets liste', err);
        },
      });
    });
    // const coordrequests = this.arrets.map(a => {
    //   this.coordonneService.getCoordonnees(a.adresse)
    // });


  }

  ngAfterViewInit(): void {
    // Initialiser la carte après que la vue soit rendue
    this.initMap();
  }

  initMap(): void {
    this.map = L.map('map').setView([14.6928, -17.4467], 12); // Vue centrée sur Dakar

    // Ajouter une couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Ajouter les arrêts sur la carte si disponibles
    if (this.arrets && this.arrets.length > 0) {
      this.addArretsToMap();
    }
  }

  addArretsToMap(): void {
    // Supprimer les anciens marqueurs si nécessaire
    this.map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        this.map.removeLayer(layer);
      }
    });


    //Ajouter un marqueur pour chaque arrêt
    this.coord.forEach((coor, index) => {
      const marker = L.marker([coor.latitude, coor.longitude], {
        title: "Dakar",
      });

      marker.addTo(this.map).bindPopup(`<b>Dakar</b>`);
    });
  }
}

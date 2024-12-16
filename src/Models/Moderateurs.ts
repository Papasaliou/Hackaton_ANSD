import {Lignes} from "./Lignes";

export class Moderateur {
  id!:number;
  prenom!: string;
  nom!: string;
  email!: string;
  telephone!: string;
  password!:string;
  lignes!: Lignes;
}

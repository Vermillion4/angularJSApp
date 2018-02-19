import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CollegueService {

    constructor( private http:HttpClient ) { 
       
    }

    listerCollegues():Promise<Collegue[]> {
        return  this.http.get<Collegue[]>("http://localhost:8080/collegues").toPromise().catch(undefined);
    }

    trouverCollegue(nom:string):Promise<Collegue> {
        let resultat;//undefined.
        try{
            resultat=this.http.get<Collegue>("http://localhost:8080/collegues").toPromise()
            .then((collegue:Collegue)=>{if(collegue.nom==nom){return collegue;}});
        }catch(e){
            resultat=undefined;
        }
        return resultat;
    }

    sauvegarder(newCollegue:Collegue):Promise<Collegue> {
        return this.http.post<Collegue>("http://localhost:8080/collegues",newCollegue).toPromise();
    }

    aimerUnCollegue(unCollegue:string):Promise<Collegue> {
        return this.http.patch<Collegue>("http://localhost:8080/collegues/"+unCollegue,unCollegue).toPromise(); 
    }

    detesterUnCollegue(unCollegue:string):Promise<Collegue> {
        return this.http.patch<Collegue>("http://localhost:8080/collegues/"+unCollegue,unCollegue).toPromise(); 
    }

}

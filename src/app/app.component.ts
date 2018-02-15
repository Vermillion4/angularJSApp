import { Component } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	collegues : Collegue [];
	affichageSubmit : string = 'hidden';
	ngOnInit() {
		console.log("tto");
		this.collegues=[new Collegue('Dragunov','http://www.fightersgeneration.com/nz4/char/tekken7/dragnov-tekken7-render-official.png',100),
		new Collegue('Lei','http://vignette3.wikia.nocookie.net/tekkenpedia/images/b/b8/Lei_Wulong_T5DR_CG_Infobox.png/revision/latest/scale-to-width-down/300?cb=20150528122824&path-prefix=fr',120),
		new Collegue('Law','http://www.fightersgeneration.com/nz4/char/tekken7/law-tekken7-render-official.png',83),
		new Collegue('Nina','https://cdn1.vox-cdn.com/thumbor/UPsYNbkxgL4LR8fzT8ILX_kU260=/cdn0.vox-cdn.com/uploads/chorus_asset/file/5969717/tekken_7_nina_artwork.0.jpg',76),
		new Collegue('Fran','http://images2.fanpop.com/images/photos/3100000/Final-Fantasy-XII-Fran-final-fantasy-12-3118598-890-1200.jpg',40),
		new Collegue('Penelo','penelo.jpg',100),
		new Collegue('Cid','http://orig12.deviantart.net/42f7/f/2013/341/3/8/final_fantasy_xiii_cid_raines_by_armachamcorp-d6x1qa3.jpg',84)];
	}

    add(pseudo:HTMLInputElement, imageUrl: HTMLInputElement) {
		this.collegues.push(new Collegue(pseudo.value,imageUrl.value,100));
		pseudo.value="";
		imageUrl.value="";
		this.affichageSubmit = 'visible';
		return false; 
	}

}

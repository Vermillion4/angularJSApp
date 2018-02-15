export class Collegue {
	
	private _nom = "Pseudo";
	private _urlImg = "URL Image";
	private _note = 50;

	constructor(nom:string, urlImg:string, note:number){
		this._nom = nom;
		this._urlImg = urlImg;
		this._note = note;
	}

	get nom(){
		return this._nom;
	}

	get urlImg(){
		return this._urlImg;
	}

	get note(){
		return this._note;
	}

	changeNote(difference:number){
		this._note+=difference;
	}
}

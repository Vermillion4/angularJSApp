import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-detail',
  templateUrl: './nav-detail.component.html',
  styleUrls: ['./nav-detail.component.css']
})
export class NavDetailComponent implements OnInit {


  ngOnInit(){
    
  }

  constructor(private router: Router) {
  
  }
  
  changerDePage() {
    this.router.navigate(['/classique']);
  }
  
}



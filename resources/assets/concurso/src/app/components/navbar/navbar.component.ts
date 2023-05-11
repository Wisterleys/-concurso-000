import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() hasImageHeader:boolean=true;
  public isMenuOpen:boolean = false;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const routeName = event.urlAfterRedirects.split('/').pop()?.replace(/\s/g,"");
        console.log(routeName)
        if(routeName==="concurso"){
          this.hasImageHeader=false;
        }else this.hasImageHeader=true;
      
        document.querySelectorAll('.nav-item').forEach((el) => {
          const element = el as HTMLElement;
          let div = element.querySelector('div');
          if(element.dataset.routename==routeName){
            div!.style.display = 'block';
          }else{
            div!.style.display = 'none';
          }
          
        });
        
      }
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
 
  
}

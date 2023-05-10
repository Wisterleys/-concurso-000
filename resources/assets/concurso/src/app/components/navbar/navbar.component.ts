import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() hasImageHeader:boolean=true;
  public isMenuOpen:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  selected(event:Event){
    document.querySelectorAll('.nav-item').forEach(el=>{
      let div = el.querySelector('div');
      div!.style.display='none';
    })
    let classes = (<HTMLLIElement>event.target).parentNode as HTMLLIElement;
    let div = (<HTMLLIElement>event.target).parentNode?.querySelector('div');
    div!.style.display='block';
    (classes.className.search("no-header-bg")>-1)?this.hasImageHeader=false:this.hasImageHeader=true;
    
  }
}

import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  @Input() showSnacbar?:EventEmitter<string>;
  public seconds:number=5;
  public isShow:boolean=false;
  public message:string=''

  constructor() { }

  ngOnInit(): void {
   
    this.showSnacbar?.subscribe(
      (value:string)=>{
        this.message=value;
        this.show();
        console.log(this.message,this.isShow)
      }
    );
  }
  show(){
    this.isShow=true;
    setTimeout(()=>{
      this.isShow=false;
    },this.seconds*1000);
  }

}

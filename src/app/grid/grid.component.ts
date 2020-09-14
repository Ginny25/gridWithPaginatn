import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent  {
  currentPage=0;
  startIndex = 0;
  endIndex = 10;
  defaultPageType:number = 10; 
  disabled : boolean = false;
  @Input() header;
  @Input() content;
  @Input() pagination : number[];

  constructor(){
    // this.endIndex = this.defaultPage
  }

  getArray(length) {

    return new Array(Math.ceil(length/this.defaultPageType))

  }

  updateIndex(index) {
    this.startIndex = (index * this.defaultPageType)
   //console.log(this.startIndex = (index * this.defaultPage))
    this.endIndex = this.startIndex + (this.defaultPageType)
   // console.log(this.endIndex = this.startIndex + this.defaultPage)
    this.currentPage = index
    //console.log(index)
  }

  pageTypeChange(val:number){
    this.defaultPageType = +val;
    this.currentPage = 0;
   // console.log(val)

    if(val==5){
      this.startIndex = 0
      this.endIndex = 5
      this.currentPage = 0
    }

    if(val==10){
      this.startIndex = 0
      this.endIndex = 10
      this.currentPage = 0
    }
    
    if(val==20){
      this.startIndex = 0
      this.endIndex = 20
      this.currentPage = 0
    }
   
  

  }

  next(){
    

    
    if(this.currentPage<Math.ceil(this.content.length / this.defaultPageType)){
      this.currentPage +=1;
    this.updateIndex(this.currentPage)
  
    }
    // else{
    //   this.disabled = true
    // }

    
  }

  previous(){

    
    if(this.currentPage>0 ){

      this.currentPage -=1;
      
    this.updateIndex(this.currentPage)
   
    }
    // else{
    //   this.disabled = true
    // }

  }


  }



















 









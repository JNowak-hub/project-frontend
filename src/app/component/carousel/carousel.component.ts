import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  activeSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  prevSlide(): void {
    if (this.activeSlide === 0){
      this.activeSlide = 2;
    }
    else {
      this.activeSlide --;
    }
  }

  nextSlide(): void {
    if (this.activeSlide === 2) {
      this.activeSlide = 0;
    }
    else {
      this.activeSlide ++;
    }
  }

}

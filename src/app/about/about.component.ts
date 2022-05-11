import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() svgcolor: string = '';
  @Input() isSmallscreen: boolean = false;

  lastScroll = 0;
  @ViewChild('body', {static: true}) body:any;

  slogan = "";
  sloganCount = 0;
  writing:any;
  constructor() { }

  ngOnInit(): void {
    var count = 0;    
    document.onscroll = (e) => {
      let actualScroll = window.pageYOffset || document.documentElement.scrollTop;      
      if(actualScroll < this.lastScroll){ // scrolled up.
        if (count > 1){
          count--;
        }
      } else if (actualScroll > this.lastScroll){ // scrolled down
        if(count < 255){
          count++;
        }
      }
    }
    this.writeSlogan(document.getElementById('slogan'));
    // setInterval(this.writeSlogan,100);
  }

  writeSlogan(sloganPlace: HTMLElement|null){
    for(let i = 0; i <= this.slogan.length; i++){
      this.slogan[this.sloganCount] && this.slogan[this.sloganCount] != ' '? sloganPlace!.innerText += this.slogan[this.sloganCount]: sloganPlace!.innerText += '⠀';
      this.sloganCount = this.sloganCount + 1;
      // if(sloganPlace!.innerText.length == this.slogan.length){
      //   clearInterval(writing);
      // }
      // break;
    }
  }

}

import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kbrweb'
  svgcolor = "#c2c2c2";
  rhombs = [1,1,1,1]; // 5
  rhombs_section = [1,1,1]; // 3

  ngOnInit(){
    if (window.innerWidth < 1200) {
      this.rhombs = [1,1,1,1] // 5
    } else if (window.innerWidth > 1200){
      this.rhombs = [1,1,1,1,1] // 5
    } else if (window.innerWidth > 1440){
      this.rhombs = [1,1,1,1,1,1] // 7
    }
    this.windowResize();
  }
  windowResize(){
    window.onresize = () => {
      if (window.innerWidth < 1200) {
        this.rhombs = [1,1,1,1] // 5
      } else if (window.innerWidth > 1200){
        this.rhombs = [1,1,1,1,1] // 6
      } else if (window.innerWidth > 1440){
        this.rhombs = [1,1,1,1,1,1] // 7
      }
    }
  }
}

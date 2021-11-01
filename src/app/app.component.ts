import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kbrweb'
  svgcolor = "#c2c2c2";
  rhombs = [1, 1, 1, 1]; // 5
  rhombs_section = [1, 1, 1]; // 3
  show = [
    {
      label: 'plugins',
      show: false
    },
    {
      label: 'samples',
      show: false
    },
    {
      label: 'about',
      show: false
    },
  ];


  ngOnInit() {
    if (window.innerWidth < 1200) {
      this.rhombs = [1, 1, 1, 1] // 5
    } else if (window.innerWidth > 1200) {
      this.rhombs = [1, 1, 1, 1] // 5
    } else if (window.innerWidth > 1440) {
      this.rhombs = [1, 1, 1, 1, 1] // 7
    }
    this.windowResize();
    this.scrollReveal();

  }
  windowResize() {
    window.onresize = () => {
      if (window.innerWidth < 1200) {
        this.rhombs = [1, 1, 1, 1] // 5
      } else if (window.innerWidth > 1200) {
        this.rhombs = [1, 1, 1, 1] // 6
      } else if (window.innerWidth > 1440) {
        this.rhombs = [1, 1, 1, 1, 1] // 7
      }
    }
  }
  scrollReveal() {
    var revealPoint = 150;
    var revealElement = document.querySelectorAll(".sr");
    for (var i = 0; i < revealElement.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = revealElement[i].getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        revealElement[i].classList.add("sra");
      } else {
        revealElement[i].classList.remove("sra");
      }
    }
    window.addEventListener("scroll", this.scrollReveal);
  }

  entryViewport(label: string) {
    this.show.find(x => x.label == label)!.show = true;
  }


}

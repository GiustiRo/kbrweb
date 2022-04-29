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
  isSmallscreen = window.innerWidth < 1024;
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
      label: 'tech',
      show: false
    },
    {
      label: 'about',
      show: false
    },
  ];

  ngOnInit() {
    
    // console.log(this.isSmallscreen);
    
    if (window.innerWidth < 1200) {
      this.rhombs = [1, 1, 1, 1] // 5
    } else if (window.innerWidth > 1200) {
      this.rhombs = [1, 1, 1, 1] // 5
    } else if (window.innerWidth > 1440) {
      this.rhombs = [1, 1, 1, 1, 1] // 7
    }
    this.windowResize();
    this.scrollReveal();
    if(!this.isSmallscreen){
      this.revealCursor();
    }

    window.addEventListener('scroll', function () {
      var height = document.body.scrollHeight - this.innerHeight;
      var scrolledPixels = this.scrollY;
      var width = ((scrolledPixels / height) * 100).toFixed(2);
      (<HTMLElement>document.querySelector('#scroll')!).style.width = width + '%';
    });
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

  revealCursor() {
    (function () {

      const link = document.querySelectorAll('.hover-this');
      const cursor: HTMLDivElement | null = document.querySelector('.cursor');

      const animateit = function (e:any)  {
            const span: HTMLSpanElement | any = document.querySelector('span');
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = document.body,

            move = 5,
            xMove = x / width * (move * 4) - move,
            yMove = y / height * (move * 2) - move;

            span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === 'mouseleave') span.style.transform = '';
      };

      const editCursor = (e:any) => {
            const { clientX: x, clientY: y } = e;
            cursor!.style.left = x + 'px';
            cursor!.style.top = y + 'px';
      };

      link.forEach(b => b.addEventListener('mousemove', animateit));
      link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);

})();
  }

  entryViewport(label: string) {
    this.show.find(x => x.label == label)!.show = true;
  }




}

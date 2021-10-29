import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit, AfterViewInit{
  @Input() svgcolor: string = '';
  plugins = [
    {
      title: 'kbrAirBoost',
      cont: {
        subtitle: 'Compresor y excitador 9kHz',
        desc: `
        Un plugin enfocado en vocales, para regular el nivel de volumen con una compresión suave y realzar la banda de frecuencias al rededor de los 9.000Hz con un filtro de tipo High-Shelf.
        <br>
        <br>
        Interfaz gráfica simple con dos sliders rotativos de fácil uso y un medidor de salida de ganancia.
        `
      },
      img: './../../assets/plugins/kbrAirBoost/kbrAirBoost_snap.png',
      dimensions: [700, 300],
      bg_size: 80
    },
    {
      title: 'kbrVerb',
      cont: {
        subtitle: 'Reverberación paralela',
        desc: `
        Un plugin enfocado en vocales, para regular el nivel de volumen con una compresión suave y realzar la banda de frecuencias al rededor de los 9.000Hz con un filtro de tipo High-Shelf.
        <br>
        <br>
         Interfaz gráfica simple con dos sliders rotativos de fácil uso y un medidor de salida de ganancia.
        `
      },
      img: './../../assets/plugins/kbrVerb/rev_test.jpg',
      dimensions: [350, 800],
      bg_size: 40
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log('viewchecked.');
    this.parallax();
  }
  parallax(){
      Array.from(document.getElementsByClassName('parallax') as HTMLCollectionOf<HTMLElement>).forEach(el => {
        el.addEventListener("mousemove", parallax)
      // Magic happens here
      function parallax(e: any) {
          let _w = el.offsetWidth/2;
          let _h = el.offsetHeight/2;
          let _mouseX = e.clientX;
          let _mouseY = e.clientY;
          let starter = 50;
          let _depth1 = `${starter - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${starter - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.1}%`;
        let _depth3 = `${starter - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth2}`;
        console.log(x);
        // elem.style.backgroundPosition = x;
          // let x = `${_depth1}`;
          // console.log(x);
          Array.from(el.getElementsByClassName('plugin-img') as HTMLCollectionOf<HTMLElement>)[0].style.backgroundPosition = x;
          // Array.from(el.getElementsByClassName('plugin-img') as HTMLCollectionOf<HTMLElement>)[0].style.right = _depth2;
      }
    });
  }
}

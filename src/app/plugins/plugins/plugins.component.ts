import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {
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
      img: './../../assets/plugins/kbrAirBoost/kbrAirBoost_snap.png'
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
      img: './../../assets/plugins/kbrAirBoost/kbrAirBoost_snap.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

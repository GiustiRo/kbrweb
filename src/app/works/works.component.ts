import { Component, Input, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input() svgcolor: string = '';
  @Input() isSmallscreen: boolean = false;
  embedVideos = [
    {
      src: 'https://www.youtube.com/embed/ej-wXprhzgo',
      san: null
    },
    {
      src: 'https://www.youtube.com/embed/Swq6EcugQ94',
      san: null
    },
    {
      src: 'https://www.youtube.com/embed/pxgy0wiir_k',
      san: null
    },
    {
      src: 'https://www.youtube.com/embed/ZLcJo2HsCMQ',
      san: null
    },
  ]
  constructor(
    private sanit: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.embedVideos.forEach(vid => {
      vid.san = this.sanit.bypassSecurityTrustResourceUrl(vid.src) as any;
    })
  }

}

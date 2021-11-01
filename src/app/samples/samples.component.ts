import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {
  @Input() svgcolor: string = '';
  samples = [
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: 'https://cdn.shopify.com/s/files/1/0993/3800/products/TheBestTrapSamples_700x700.jpg?v=1603794959',
      show: true
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: 'https://melomanners.com/wp-content/uploads/2017/12/Ultimate.png',
      show: true
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: 'https://cv-samples.com/wp-content/uploads/2018/04/Box-for-web-2.jpg',
      show: true
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: 'https://cv-samples.com/wp-content/uploads/2018/03/Box-for-web.jpg',
      show: false
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: 'https://producersources.com/wp-content/uploads/2017/04/Trap-Dreams_Artwork.jpg',
      show: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  entryViewport(label: string) {
    // this.show.find(x => x.label == label)!.show = true;
  }

}

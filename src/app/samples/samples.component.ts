import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {
  @Input() svgcolor: string = '';
  @Input() isSmallscreen: boolean = false;

  samples = [
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: './../../assets/samples/sample_holder.jpg',
      show: false
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: './../../assets/samples/sample_holder.jpg',
      show: false
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: './../../assets/samples/sample_holder.jpg',
      show: false
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: './../../assets/samples/sample_holder.jpg',
      show: false
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: './../../assets/samples/sample_holder.jpg',
      show: false
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: './../../assets/samples/sample_holder.jpg',
      show: false
    },
    {
      title: 'Card Title',
      desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
      img: './../../assets/samples/sample_holder.jpg',
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

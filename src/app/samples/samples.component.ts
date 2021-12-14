import { Component, Input, OnInit } from '@angular/core';
import { NftportService } from '../services/nftport.service';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {
  @Input() svgcolor: string = '';
  @Input() isSmallscreen: boolean = false;
  loadingSamples: boolean = true;

  samples: any[] = [1,1,1,1]
    // {
    //   title: 'Card Title',
    //   desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   img: './../../assets/samples/sample_holder.jpg',
    //   show: false
    // },
    // {
    //   title: 'Card Title',
    //   desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   img: './../../assets/samples/sample_holder.jpg',
    //   show: false
    // },
    // {
    //   title: 'Card Title',
    //   desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   img: './../../assets/samples/sample_holder.jpg',
    //   show: false
    // },
    // {
    //   title: 'Card Title',
    //   desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   img: './../../assets/samples/sample_holder.jpg',
    //   show: false
    // },
    // {
    //   title: 'Card Title',
    //   desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   img: './../../assets/samples/sample_holder.jpg',
    //   show: false
    // },
    // {
    //   title: 'Card Title',
    //   desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   img: './../../assets/samples/sample_holder.jpg',
    //   show: false
    // },
    // {
    //   title: 'Card Title',
    //   desc: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    //   img: './../../assets/samples/sample_holder.jpg',
    //   show: false
    // },
  // ]

  constructor(
    private nft: NftportService
  ) { }

  ngOnInit(): void {
    // this.nft.getAllFromCreator('0x2cecf1b9e358bd9b213533b45ea04d8c7032ddd4').subscribe(x => {
    //   console.log(x);
    //   this.samples = x.nfts;
    //   this.samples.map(x => x.show = false)
    //   this.loadingSamples = false;
      
    // })
    this.nft.getSearch('minimal').subscribe(x => {
      console.log(x);
      this.samples = x.search_results;
      this.loadingSamples = false
    })
  }

  entryViewport(label: string) {
    // this.show.find(x => x.label == label)!.show = true;
  }

}

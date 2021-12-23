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

  samples: any[] = [{id: 1},{id: 2},{id: 3},{id: 4}]

  constructor(
    private nft: NftportService
  ) { }

  ngOnInit(): void {
    this.nft.getSearch('minimal element').subscribe(x => {
      // console.log(x);
      this.samples = x.search_results
      this.loadingSamples = false
    })
  }

  entryViewport(label: string) {
    // this.show.find(x => x.label == label)!.show = true;
  }

}

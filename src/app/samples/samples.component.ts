import { Component, Input, OnInit } from '@angular/core';
import { audio } from '../services/data/data'

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.scss']
})
export class SamplesComponent implements OnInit {
  @Input() svgcolor: string = '';
  @Input() isSmallscreen: boolean = false;
  loadingSamples: boolean = true;

  samples: any[] = [{id: 1, title:'Sample Pack'},{id: 2},{id: 3},{id: 4}]

  constructor() { 
    this.samples = audio.samples[0].files.slice(0,2);    
  }

  ngOnInit(): void {
  this.loadingSamples = false;
  this.samples.forEach(s => s.show = false)
  }

  entryViewport(label: string) {
    // this.show.find(x => x.label == label)!.show = true;
  }

}

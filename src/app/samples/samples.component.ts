import { Component, Input, OnInit } from '@angular/core';
import { audio } from '../services/data/data'
import { FirebaseService } from '../services/firebase/firebase.service';

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

  constructor(
    private fire: FirebaseService
  ) { 
    this.samples = audio.samples[0].files.slice(0,1);  
  }

  ngOnInit(): void {
  this.loadingSamples = false;
  this.samples.forEach(s => s.show = false);
  this.samples.forEach(async sample => {
    sample.dwn = await this.downloadSample(sample.src);
  })
  }

  entryViewport(label: string) {
    // this.show.find(x => x.label == label)!.show = true;
  }

  async downloadSample(dwn: any) {
    return await this.fire.getDownloadUrl(dwn);
  }

}

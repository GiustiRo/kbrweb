import { Component, OnInit } from '@angular/core';
import { AudioctxService } from 'src/app/services/audioctx.service';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  constructor(
    private audioctx: AudioctxService
  ) { }

  ngOnInit(): void {
    this.audioctx.audioSub.subscribe(x => {
      console.log('AudioSUb');
      console.log(x);
    });
    // this.audioctx.selected$.subscribe(x => {
    //   console.log('Subject');
    //   console.log(x);
    // });
  }

  getAudio() {
    this.audioctx.getAudio();
  }
  getSound(){
    this.audioctx.loadSound('plugins', 0, 1);
  }

}

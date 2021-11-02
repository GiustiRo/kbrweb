import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AudioctxService } from 'src/app/services/audioctx.service';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  audioSrc!: any;
  audioTrack!: any; // store actual audio.
  @ViewChild('audio', { static: false }) audioRef!: ElementRef;

  constructor(
    private acsv: AudioctxService
  ) {}

  ngOnInit(): void {}

  toggleState(){

  }

  async getSound() {
    this.acsv.loadSample('plugins/airBoost/synth_test.wav').toPromise().then(x => {
      console.log('audio player init');
      console.log(x);
      this.audioSrc = x;

    }).catch(e => {
      console.log(e);
    }).finally(() => {
      console.log('finally');
      console.log(this.audioRef);
      if (!(this.audioTrack == undefined)) {
        this.audioTrack = this.acsv.ac.createMediaElementSource(this.audioRef.nativeElement);
        this.audioTrack.connect(this.acsv.ac.destination);
      }
    });
    if (this.acsv.ac.state === 'suspended') {
      console.log('was suspended...');

      this.acsv.ac.resume();
    }
    if (this.audioRef.nativeElement.paused) {
      this.audioRef.nativeElement.play();
    } else if (!this.audioRef.nativeElement.paused) {
      this.audioRef.nativeElement.pause();
    }

  }


}

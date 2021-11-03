import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AudioctxService } from 'src/app/services/audioctx.service';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  audioSrc!: any; //url from firebase to trieve audio.
  media!: any; // store actual audio.
  mediaState: boolean = false; // play/pause.
  @Input() audioPath: string = '';
  @ViewChild('audio', { static: false }) audioRef!: ElementRef;

  constructor(
    private acsv: AudioctxService
  ) { }

  ngOnInit(): void {
    this.getSound();
  }

  play(){
    console.log('hoo');
  }

  initMedia() {
    try {
      console.log('initMedia');
      this.media = this.acsv.ac.createMediaElementSource(this.audioRef.nativeElement);
      this.media.connect(this.acsv.ac.destination);
    } catch (error) {
      console.log(error);
    }
  }

  async getSound() {
    this.acsv.loadSample(this.audioPath).toPromise().then(x => {
      console.log('audio player init');
      this.audioSrc = x;
    }).catch(e => {
      window.alert(e); // Create and move custom toast service.
    }).finally(() => {
      this.initMedia();
    });
  }

  // playSource() {
  //   if (this.media != undefined && this.audioSrc) {
  //     this.toggleState();
  //   } else {
  //     this.getSound();
  //   }
  // }

  // toggleState() {
  //   if (this.acsv.ac.state === 'suspended') {
  //     console.log('was suspended...');
  //     this.acsv.ac.resume();
  //   }

  //   if (this.audioRef.nativeElement.paused) {
  //     this.audioRef.nativeElement.play();
  //   } else if (!this.audioRef.nativeElement.paused) {
  //     this.audioRef.nativeElement.pause();
  //   }
  //   this.mediaState = !this.mediaState;
  // }
  
}

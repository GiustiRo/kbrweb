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
  @Input() audioPath_wet: string = '';
  @Input() audioPath_dry: string = '';
  @ViewChild('audio', { static: false }) audioRef!: ElementRef;
  samplesLoaded: any = {
    dry: undefined,
    wet: undefined
  };
  selectedDW = 'dry';
  dryWet = [
    {
      label: 'dry',
      active: true,
    },
    {
      label: 'wet',
      active: false
    }
  ]

  constructor(
    private acsv: AudioctxService
  ) { }

  ngOnInit(): void {
    this.getSound('dry');

  }

  play(){    
    // this.initMedia();
    this.acsv.ac.resume();
    
  }
  pause(){    
    this.acsv.ac.suspend();
  }

  switch(drywet:any) {
    this.selectedDW = drywet.label;
    this.dryWet.forEach(e => e.active = false);
    drywet.active = true;
    this.getSound(drywet.label);

  }

  initMedia() {
    try {
      // console.warn(this.media);
      if(this.media == undefined) {
        this.media = this.acsv.ac.createMediaElementSource(this.audioRef.nativeElement);
        this.media.connect(this.acsv.ac.destination);
        this.acsv.ac.resume();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getSound(drywet:string) {
    if(drywet == 'dry' && this.samplesLoaded.dry == undefined || drywet == 'wet' && this.samplesLoaded.wet == undefined){
    this.acsv.loadSample(drywet == 'dry'? this.audioPath_dry : this.audioPath_wet).toPromise().then((x:any) => {
      // console.log('audio player init');
      if(drywet == 'dry' && this.samplesLoaded.dry == undefined){
        this.samplesLoaded.dry = x
      }
      if(drywet == 'wet' && this.samplesLoaded.wet == undefined){
        this.samplesLoaded.wet = x
      }
      // this.audioSrc = x;
    }).catch(e => {
      window.alert(e); // Create and move custom toast service.
    }).finally(() => {
      document.addEventListener('scroll', () => {
        this.initMedia();
      })
    });
    }
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

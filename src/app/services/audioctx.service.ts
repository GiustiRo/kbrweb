import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { audio } from './data/data';

@Injectable({
  providedIn: 'root'
})
export class AudioctxService {
  audio: object = {};
  selected$: Subject<any> = new Subject();
  selected: any;
  audioSub: Observable<any> = new Observable();

  constructor() { 
    this.audioSub = this.selected$.asObservable();
  }
  getAudio() {
    // get audio db from source.
    this.audio = audio;
    console.log(this.audio);
    
  }
  loadSound(db: 'plugins'| 'samples', id: number, fileId: number){
    Object.entries(this.audio).find(x => {
      // console.log(x);
      if(x[0] == db){
        let index = x[1].find((i:any) => i.id == id);
        console.log(index);
        
        if(index){
          let willPlay = index.files.filter((s:any) => s.id == fileId);
          if(willPlay) {
            this.selected$.next(willPlay);
          } 
        }
      }
    });
  }

}

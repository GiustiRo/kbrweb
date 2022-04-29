import { Injectable } from '@angular/core';
import { Observable, of, Subject, Subscription } from 'rxjs';
import { audio } from './data/data';

import { FirebaseService } from './firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AudioctxService {
  audio: object = {};
  selected$: Subject<any> = new Subject();
  selected!: any;
  audioSub: Observable<any> = new Observable();
  ac = new AudioContext();

  constructor(
    private fire: FirebaseService
  ) { 
    this.audioSub = this.selected$.asObservable();
    if (this.ac.state === 'suspended') {
      this.ac.resume();
    } else {
      this.ac.suspend();
    }
    this.ac = new AudioContext();
  }

  loadSample(route: string): Observable<any>{
    // const ref = fire.ref(route);
    // this.selected = ref.getDownloadURL();
    return of(this.fire.getDownloadUrl(route))
    return this.selected;
  }
}

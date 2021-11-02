import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { audio } from './data/data';

import { AngularFireStorage } from '@angular/fire/compat/storage';

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
    private storage: AngularFireStorage
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
    const ref = this.storage.ref(route);
    this.selected = ref.getDownloadURL();
    return this.selected;
  }
}

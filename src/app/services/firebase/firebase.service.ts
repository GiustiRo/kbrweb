import { Injectable } from '@angular/core';
import * as fire from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  fireApp = fire.initializeApp(environment.firebaseConfig);

  constructor() { }

  async getDownloadUrl(dwn:string): Promise<string> {
    // Create a reference to the file we want to download
    const storage = getStorage(this.fireApp);
    const starsRef = ref(storage, dwn);
    // Get the download URL
    return await getDownloadURL(starsRef);
  }
}

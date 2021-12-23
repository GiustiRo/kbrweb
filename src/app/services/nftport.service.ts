import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpParamsOptions} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NftportService {
  headers: HttpHeaders = new HttpHeaders({
    'Authorization': environment.nftPort.apiKey,
    // 'Content-type': 'text/javascript'
  })
  constructor(
    private http: HttpClient,
  ) { }

  getAllFromCreator(account: string, chain: string = 'ethereum'): Observable<any> {
    let url = 'https://api.nftport.xyz/v0/accounts/' + account
    const params = new HttpParams().set('chain', chain).set('include', 'metadata')
    return this.http.get(url, {headers: this.headers, params: params})
  }

  getSearch(search: string, chain: string = 'ethereum'): Observable<any> {
    let url = 'https://api.nftport.xyz/v0/search';
    const params = new HttpParams().set('text', search).set('chain', chain).set('page_number', '1').set('page_size', 4)

    return this.http.get(url, {headers: this.headers, params: params})
  }
}

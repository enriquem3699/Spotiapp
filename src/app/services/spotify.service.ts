import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('Spotify listo')
  }

  getQuery (query:string){
    const url= `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer QBGsELjc6qmKFIgTxh7WKFOy2fo1bAbHbRf6OMuG3_-mVCYx3YKUAeEYOnvzcjv3tekr1WVhtxlnmIvuBA'
    });

    return this.http.get(url,{headers});
  }
  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
              .pipe(map(data => data['albums'].items ));
  }

  getArtistas(termino:string){  
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data => data['artists'].items ));

  }
  getArtista(id:string){  
    return this.getQuery(`artists/${id}`);
    // console.log
    // .pipe(map(data => data['artists'].items ));

  }


  getTopTracks(id:string){  
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
    // console.log
    .pipe(map(data => data['tracks']));

  }






}

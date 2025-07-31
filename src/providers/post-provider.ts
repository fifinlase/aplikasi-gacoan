import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PostProvider {
  server: string = 'https://fifigacoan.aplikasi.blog/'; // Ganti sesuai alamat server kamu

  constructor(public http: HttpClient) {}

  postData(body: any, file: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.server + file, JSON.stringify(body), { headers }).pipe(
      map(res => res)
    );
  }
}

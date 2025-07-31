import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class Tab3Page implements OnInit {
  penjualans: any[] = [];
  limit = 10;
  start = 0;

  // ✅ Ganti IP ini dengan IP lokal/server kamu jika perlu
  serverUrl = 'https://fifigacoan.aplikasi.blog/action.php';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.start = 0;
    this.penjualans = [];
    this.loadPenjualans();
  }

  doRefresh(event: any) {
    this.start = 0;
    this.penjualans = [];
    this.loadPenjualans().then(() => event.target.complete());
  }

  loadPenjualans(): Promise<boolean> {
    return new Promise(resolve => {
      const body = {
        aksi: 'get_penjualan',
        limit: this.limit,
        start: this.start
      };

      this.http.post(this.serverUrl, body).subscribe(
        (res: any) => {
          if (res.success && res.result) {
            for (let data of res.result) {
              this.penjualans.push(data);
            }
          }
          resolve(true);
        },
        error => {
          console.error('Gagal mengambil data:', error);
          resolve(false);
        }
      );
    });
  }

  loadMoreData(event: any) {
    this.start += this.limit;
    this.loadPenjualans().then(() => event.target.complete());
  }
}

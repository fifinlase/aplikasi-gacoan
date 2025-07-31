import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class Tab4Page implements OnInit {

  appInfo: any = {
    nama: 'Mie Gacoan App',
    versi: '1.0.0',
    deskripsi: 'Aplikasi ini memudahkan pelanggan untuk melakukan pemesanan menu makanan dan minuman secara digital di outlet Mie Gacoan.',
    fitur: [
      '🛒 Pemesanan menu digital',
      '📦 Riwayat pesanan',
      '📊 Dashboard statistik',
      '💳 Pembayaran via QRIS dan Transfer Bank'
    ],
    developer: {
      nama: 'Tim Developer Gacoan',
      email: 'support@gacoanapp.com',
      website: 'https://www.gacoanapp.com'
    }
  };

  constructor() {}

  ngOnInit() {
    // Bisa tambahkan logika jika nanti ingin ambil data dari backend
  }

  // Fungsi untuk mengambil emoji dari string fitur
  getFeatureEmoji(fitur: string): string {
    return fitur.split(' ')[0]; // Mengambil emoji pertama
  }

  // Fungsi untuk mengambil teks fitur tanpa emoji
  getFeatureText(fitur: string): string {
    return fitur.substring(fitur.indexOf(' ') + 1); // Mengambil teks setelah emoji
  }

  // Fungsi untuk memberi rating aplikasi
  rateApp() {
    // Implementasi untuk rating app
    console.log('Rating Mie Gacoan App...');
    // Bisa redirect ke play store atau app store
  }

  // Fungsi untuk membagikan aplikasi
  shareApp() {
    // Implementasi untuk share app
    if (navigator.share) {
      navigator.share({
        title: this.appInfo.nama,
        text: this.appInfo.deskripsi,
        url: this.appInfo.developer.website
      });
    } else {
      console.log('Sharing Mie Gacoan App...');
      // Fallback untuk browser yang tidak support Web Share API
    }
  }

  // Fungsi untuk membuka email
  openEmail() {
    window.open(`mailto:${this.appInfo.developer.email}?subject=Feedback ${this.appInfo.nama}`);
  }

  // Fungsi untuk membuka website
  openWebsite() {
    window.open(this.appInfo.developer.website, '_blank');
  }

  // Fungsi untuk menampilkan informasi tambahan
  showMoreInfo() {
    console.log('Menampilkan informasi lebih lanjut...');
    // Bisa implementasi modal atau navigasi ke halaman detail
  }
}
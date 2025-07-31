import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class Tab1Page implements OnInit {

  totalPesanan: number = 0;
  totalPembayaran: number = 0;
  totalPorsi: number = 0;
  pelangganUnik: number = 0;

  isLoading: boolean = true;

  // ✅ Ubah URL ini sesuai dengan lokasi backend kamu
  serverUrl: string = 'https://fifigacoan.aplikasi.blog/action.php';

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadDashboardStats();
  }

  // 🔄 Ambil statistik dari server
  async loadDashboardStats() {
    this.isLoading = true;

    const body = { aksi: 'get_stats' };

    this.http.post(this.serverUrl, body).subscribe(
      async (res: any) => {
        this.isLoading = false;

        if (res.success) {
          this.totalPesanan = res.total_pesanan ?? 0;
          this.totalPembayaran = res.total_pembayaran ?? 0;
          this.totalPorsi = res.total_porsi ?? 0;
          this.pelangganUnik = res.pelanggan_unik ?? 0;
        } else {
          await this.showToast('⚠️ Gagal memuat data statistik: ' + (res.message || 'Data tidak ditemukan'));
          console.warn('Respon gagal:', res);
        }
      },
      async error => {
        this.isLoading = false;
        console.error('Terjadi error:', error);
        await this.showToast('❌ Terjadi kesalahan saat mengambil data');
      }
    );
  }

  // 📢 Menampilkan toast
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'top',
      color: 'danger'
    });
    await toast.present();
  }

  // ✅ Navigasi ke Tab Tambah Pesanan
  goToTab2() {
    this.navCtrl.navigateRoot('/tabs/tab2');
  }

  // ✅ Navigasi ke Tab Lihat Pesanan
  goToTab3() {
    this.navCtrl.navigateRoot('/tabs/tab3');
  }

  goToTab4() {
    this.navCtrl.navigateRoot('/tabs/tab4');
  }

}

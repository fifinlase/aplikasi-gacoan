import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostProvider } from '../../providers/post-provider';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule],
  providers: [PostProvider]
})
export class Tab2Page {
  nama = '';
  nohp = '';
  email = '';
  menu = '';
  jumlah: number | null = null;
  level = '';
  pembayaran = '';
  catatan = '';

  constructor(private postPvdr: PostProvider) {}

  submitForm() {
    const data = {
      aksi: 'add_pesanan',
      nama: this.nama,
      nohp: this.nohp,
      email: this.email,
      menu: this.menu,
      jumlah: this.jumlah,
      level: this.level,
      pembayaran: this.pembayaran,
      catatan: this.catatan
    };

    console.log('📝 Data dikirim:', data);

    this.postPvdr.postData(data, 'action.php').subscribe({
      next: (res) => {
        console.log('✅ Response:', res);
        if (res.success) {
          alert(res.msg);
          this.resetForm();
        } else {
          alert('❌ Gagal: ' + res.msg);
        }
      },
      error: (err) => {
        console.error('❌ Error:', err);
        alert('❌ Terjadi kesalahan saat mengirim data');
      }
    });
  }

  resetForm() {
    this.nama = '';
    this.nohp = '';
    this.email = '';
    this.menu = '';
    this.jumlah = null;
    this.level = '';
    this.pembayaran = '';
    this.catatan = '';
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 🔽 Tambahkan ini
import { HttpClientModule } from '@angular/common/http';
import { PostProvider } from '../providers/post-provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule // 🔥 Tambahkan ini agar HttpClient berfungsi
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    PostProvider // 🔥 Tambahkan PostProvider sebagai service
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

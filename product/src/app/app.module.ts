import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component'; 
import { UploadComponent } from './components/upload/upload.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,  
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
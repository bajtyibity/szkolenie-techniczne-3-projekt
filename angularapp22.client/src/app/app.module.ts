import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule or ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaprawaComponent } from './naprawa/naprawa.component';
import { AddNaprawaComponent } from './add-naprawa/add-naprawa.component';
import { DeleteNaprawaComponent } from './delete-naprawa/delete-naprawa.component';

@NgModule({
  declarations: [
    AppComponent,
    NaprawaComponent,
    AddNaprawaComponent,
    DeleteNaprawaComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    FormsModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

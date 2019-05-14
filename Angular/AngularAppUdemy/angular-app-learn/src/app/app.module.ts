import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ExampleComponent } from './components/example.component';
//import { ExampleTestComponent } from './components/example/example-test/example-test.component';

@NgModule({
  declarations: [
    AppComponent,
    //ExampleComponent,
    //ExampleTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

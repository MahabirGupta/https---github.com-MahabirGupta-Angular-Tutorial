import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
    // Add other components if any
  ],
  imports: [
    BrowserModule,
    
    // Add other modules if any
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

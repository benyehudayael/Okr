import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MainComponent } from './components/main/main.component';
import { ObjectiveFilterComponent } from './components/objective-filter/objective-filter.component';
import { ObjectiveItemComponent } from './components/objective-item/objective-item.component';
import { NewObjectiveFormComponent } from './components/new-objective-form/new-objective-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendInterceptor } from './interceptors/mock-backend';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainComponent,
    ObjectiveFilterComponent,
    ObjectiveItemComponent,
    NewObjectiveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

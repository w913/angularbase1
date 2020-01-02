import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { PlaygroundComponent } from './components/playground/playground.component';
import { YahooApiService } from './services/yahoo-api/yahoo-api.service';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [CommonModule, NgbModule, HttpClientModule, HttpClientJsonpModule],
  exports: [PlaygroundComponent],
  providers: [YahooApiService]
})
export class SharedModule {}

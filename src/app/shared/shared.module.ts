import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { PlaygroundComponent } from './components/playground/playground.component';

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [CommonModule, NgbModule],
  exports: [PlaygroundComponent]
})
export class SharedModule {}

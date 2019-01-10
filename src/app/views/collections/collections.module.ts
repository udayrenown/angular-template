import { NgModule } from '@angular/core';
import {CollectionsRoutingModule} from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [CollectionsComponent],
  imports: [
    CollectionsRoutingModule,
    ModalModule.forRoot()
  ]
})
export class CollectionsModule { }

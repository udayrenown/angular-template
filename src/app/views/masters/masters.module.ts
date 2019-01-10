import { NgModule } from '@angular/core';
import { MastersRoutingModule } from './masters-routing.module';
import { LoneesComponent } from './lonees/lonees.component';
import { CollectorsComponent } from './collectors/collectors.component';
import { VillagesComponent } from './villages/villages.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { LoneeAddComponent } from './lonees/lonee-add/lonee-add.component';
import { LoneeListComponent } from './lonees/lonee-list/lonee-list.component';
import {ModalModule} from 'ngx-bootstrap';
import { RouteComponent } from './route/route.component';
import { CityComponent } from './city/city.component';
import { PaymodeComponent } from './paymode/paymode.component';

@NgModule({
  declarations: [LoneesComponent, CollectorsComponent, VillagesComponent, LoneeAddComponent, LoneeListComponent, RouteComponent, CityComponent, PaymodeComponent],
  imports: [
    MastersRoutingModule,
    TabsModule,
    ModalModule.forRoot()
  ]
})
export class MastersModule { }

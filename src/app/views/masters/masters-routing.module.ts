import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoneesComponent} from './lonees/lonees.component';
import {CollectorsComponent} from './collectors/collectors.component';
import {VillagesComponent} from './villages/villages.component';
import {LoneeAddComponent} from './lonees/lonee-add/lonee-add.component';
import {LoneeListComponent} from './lonees/lonee-list/lonee-list.component';
import {CityComponent} from "./city/city.component";
import {RouteComponent} from "./route/route.component";
import {PaymodeComponent} from "./paymode/paymode.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Masters'
    },
    children: [
      {
        path: '',
        redirectTo: 'lonees'
      },
      {
        path: 'lonees',
        component: LoneesComponent,
        data: {
          title: 'Lonees'
        },
        children: [
          {
            path: '',
            redirectTo: 'loneeslist'
          },
          {
            path: 'loneeslist',
            component: LoneeListComponent,
            data: {
              title: 'Total list'
            }
          },
          {
            path: 'newlonee',
            component: LoneeAddComponent,
            data: {
              title: 'New Lonee'
            }
          }
        ]
      },
      {
        path: 'paymodes',
        component: PaymodeComponent,
        data: {
          title: 'Paymodes'
        }
      },
      {
        path: 'collectors',
        component: CollectorsComponent,
        data: {
          title: 'Collectors'
        }
      },
      {
        path: 'routes',
        component: RouteComponent,
        data: {
          title: 'Routes'
        }
      },
      {
        path: 'villages',
        component: VillagesComponent,
        data: {
          title: 'Villages'
        }
      },
      {
        path: 'cities',
        component: CityComponent,
        data: {
          title: 'Cities'
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }

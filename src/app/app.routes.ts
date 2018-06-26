/**
 * Created by adu on 2018/6/26.
 */
// import {Routes} from '@angular/router';
import { DashbordeComponent, DeviceParamComponent, OtaComponent, ProjectComponent, DeviceComponent, ParamComponent, UserComponent,MalfunctionComponent } from './container';
import { Routes } from "@angular/router";
export const routes: Routes = [ // Routes类型的数组
  {
    path     : 'container/dashbord',
    component: DashbordeComponent
  }, {
    path     : 'container/deviceParam/:id',
    component: DeviceParamComponent
  }, {
    path     : 'container/ota/:id',
    component: OtaComponent
  }, {
    path     : 'container/project/:id',
    component: ProjectComponent
  }, {
    path     : 'container/device/:id',
    component: DeviceComponent
  }, {
    path     : 'container/params/:id',
    component: ParamComponent
  }, {
    path     : 'container/user/:id',
    component: UserComponent
  }, {
    path     : 'container/malfunction/:id',
    component: MalfunctionComponent
  },{
    path      : '',
    redirectTo: '/container/dashbord',
    pathMatch : 'full'
  }
];

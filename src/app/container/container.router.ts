import { Routes } from '@angular/router';
import { ContainerComponent } from './container.component';

import { DashboradComponent } from './dashboard/dashborad.component';
import { DeviceParamComponent } from './device-param-management/deviceParam.component';
import { OtaComponent } from './ota-management/ota.component';
import { ProjectComponent } from './project-management/project.component';
import { DeviceComponent } from './device-management/device.component';
import { ParamComponent } from './param-management/param.component';
import { UserComponent } from './user-management/user.component';
import { MalfunctionComponent } from './malfunction-management/malfunction.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '', component: ContainerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/container/dashboard' },
      { path: 'dashboard', component: DashboradComponent },
      { path: 'deviceParam', component: DeviceParamComponent },
      { path: 'ota', component: OtaComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'device', component: DeviceComponent },
      { path: 'params', component: ParamComponent },
      { path: 'user', component: UserComponent },
      { path: 'malfunction', component: MalfunctionComponent }
    ]
  }
];
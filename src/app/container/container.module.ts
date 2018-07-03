/**
 * Created by adu on 2018/6/26.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container.component';

import { DashboradComponent } from './dashboard/dashborad.component';
import { DeviceParamComponent } from './device-param-management/device-param.component';
import { OtaComponent } from './ota-management/ota.component';
import { ProjectComponent } from './project-management/project.component';
import { DeviceComponent } from './device-management/device.component';
import { ParamComponent } from './param-management/param.component';
import { UserComponent } from './user-management/user.component';
import { MalfunctionComponent } from './malfunction-management/malfunction.component';

import { ROUTER_CONFIG } from './container.router';
import { RouterModule } from '@angular/router';

@NgModule({ // @NgModule 用来定义模块用的装饰器
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule.forChild(ROUTER_CONFIG) // 封装路由相关的组件指令等
  ],// 导入当前模块所需要的其他模块
  providers: [], 
  declarations: [
    ContainerComponent,
    DashboradComponent,
    DeviceParamComponent,
    OtaComponent,
    ProjectComponent,
    DeviceComponent,
    ParamComponent,
    UserComponent,
    MalfunctionComponent // 导入模块所依赖的组件、指令等
  ]
})
export class ContainerModule {
}

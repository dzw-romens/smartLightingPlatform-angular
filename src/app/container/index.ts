/**
 * Created by adu on 2018/6/26.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashbordeComponent } from './dashbord';
import { DeviceParamComponent } from './device.param.component';
import { OtaComponent } from './ota.component';
import { DeviceComponent } from './device.component';
import { CommonModule } from "@angular/common";
import { AppService } from "../service/app.service";
import { ParamComponent } from "./param.component";
import { ProjectComponent } from "./project.component";
import { UserComponent } from "./user.component";
import { MalfunctionComponent } from "./malfunction.component";

@NgModule({ // @NgModule 用来定义模块用的装饰器
  declarations: [DashbordeComponent, DeviceParamComponent, OtaComponent, ProjectComponent, DeviceComponent, ParamComponent, UserComponent,MalfunctionComponent], // 导入模块所依赖的组件、指令等
  imports     : [
    RouterModule, // 封装路由相关的组件指令等
    CommonModule // 封装一些常用的内置指令和内置管道等
  ], // 导入当前模块所需要的其他模块
  providers   : [AppService], // 服务的创建者
  exports     : [DashbordeComponent, DeviceParamComponent, OtaComponent, ProjectComponent, DeviceComponent, ParamComponent, UserComponent,MalfunctionComponent] // 模块的公开API
})
export class IndexModule { }
export { DashbordeComponent, DeviceParamComponent, OtaComponent, ProjectComponent, DeviceComponent, ParamComponent, UserComponent,MalfunctionComponent }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// App is our top level component
import { LoginComponent } from './container/login/login.component'
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
// Application wide providers
const APP_PROVIDERS = [];

/**
 * `AppModule` is the main entry point into Angular4's bootstraping process
 */
@NgModule({ // @NgModule 用来定义模块用的装饰器
  imports: [
    BrowserModule, //包含了commonModule和applicationModule模块,封装在浏览器平台运行时的一些工具库
    FormsModule,  // 表单相关的组件指令等，包含了[(ngModel)]
    BrowserAnimationsModule,
    RouterModule.forRoot(routes,{useHash: false}),// RouterModule.forRoot()方法来创建根路由模块
  ],// 导入当前模块所需要的其他模块
  declarations: [ // 导入模块所依赖的组件、指令等,用于指定这个模块的视图类
    AppComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]// 标记出引导组件
  //把这个AppComponent标记为引导 (bootstrap) 组件。当Angular引导应用时，它会在DOM中渲
  //染AppComponent，并把结果放进index.html的元素内部。
})
export class AppModule {
}

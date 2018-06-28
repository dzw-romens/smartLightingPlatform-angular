import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
// import { environment } from './environments';
import { AppModule } from './app';

//　生产环境下的加载方式
// if (environment.production) {
//   enableProdMode(); //暂时禁用
//   //todo:
// }


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
// platformBrowserDynamic().bootstrapModule()方法来编译启用AppModule模块
// 根据当前的运行环境，如操作系统、浏览器，来初始化一个运行环境，然后从这个环境里面运行AppModule。
import { Component } from "@angular/core";

@Component({
  selector   : 'app-root', // 该组件(根目录)的DOM元素名称
  templateUrl: '<router-outlet></router-outlet>', // 组件需要的模版
  styleUrls  : ['./app.component.less'] // 组件需要的样式
})
export class AppComponent {
  // Component 为组件模块，通过@Component装饰器来告诉Angular怎样创建这个组件
  constructor() {
    
  }
}

/**
 * Created by adu on 2018/6/26.
 */
import { Routes } from "@angular/router";
import { ContainerModule } from './container/index'
export const routes: Routes = [ // Routes类型的数组
  {
    path      : '',
    redirectTo: 'container/dashboard',
    pathMatch : 'full'
  }
  // ,{ 
  //   path: 'login', 
  //   component: 'login/login' 
  // }
  ,{ 
    path: 'container', 
    // loadChildren: './container/container.module#ContainerModule' 
    loadChildren: () => ContainerModule 
  }
];

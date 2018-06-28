/**
 * Created by adu on 2018/6/26.
 */
import { Routes } from "@angular/router";
export const routes: Routes = [ // Routes类型的数组
  {
    path      : '',
    redirectTo: '/container/dashbord',
    pathMatch : 'full'
  }
  // ,{ 
  //   path: 'login', 
  //   component: 'login/login' 
  // }
  // ,{ 
  //   path: 'container', 
  //   loadChildren: 'app/container/container.module#ContainerModule' 
  // }
];

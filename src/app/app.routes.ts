/**
 * Created by adu on 2018/6/26.
 */
import { Routes } from "@angular/router";
import { ContainerModule } from './container/index'
import { LoginComponent } from './container/login/login.component'
export const routes: Routes = [ // Routes类型的数组
  {
    path      : '',
    // redirectTo: 'container/dashboard',
    redirectTo: 'login',
    pathMatch : 'full'
  }
  ,{ 
    path: 'login', 
    component: LoginComponent
  }
  ,{ 
    path: 'container', 
    // loadChildren: './container/container.module#ContainerModule' 
    loadChildren: () => ContainerModule 
  }
];

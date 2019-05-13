import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ZhangComponent } from './zhang/zhang.component';
import { WeiComponent } from './wei/wei.component';
import { ZhiComponent } from './zhi/zhi.component';
import { ParentComponent } from './parent/parent.component';
import { NewsComponent } from './news/news.component';
import { MyformComponent } from './myform/myform.component';

const routes: Routes = [
  {path: '', redirectTo: '/zhi', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'zhang', component: ZhangComponent},
  {path: 'wei', component: WeiComponent},
  {path: 'zhi', component: ZhiComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'news', component: NewsComponent},
  {path: 'myform', component: MyformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

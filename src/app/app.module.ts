// NgModule是我们组织Angular应用所必须的核心模块
import { NgModule } from '@angular/core';
// 提供了启动和运行浏览器应用的那些基本的服务提供商//浏览器的解析模块
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
// 引入路由模块
import {AppRoutingModule} from './app-routing.module';
// 所有组件
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {MessagesComponent} from './messages/messages.component';
import {CardComponent} from './card/card.component';
import {ElModule} from 'element-angular';
import {ZhangComponent} from './zhang/zhang.component';
import {WeiComponent} from './wei/wei.component';
import { ZhiComponent } from './zhi/zhi.component';

// 引入并且配置服务
import { StorageService } from './services/storage.service';
import { HttpServiceService } from './services/http-service.service';
import { ParentComponent } from './parent/parent.component';
import { ChildsComponent } from './childs/childs.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './news/news.component';
import { MyformComponent } from './myform/myform.component';

// 用于定义模块用的装饰器 告诉angular如何编译启动项目
// 用来导入当前模块所需的其他模块。
@NgModule({
  // 模块，依赖注入，指令，服务，组件，原数据，模板，数据绑定
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ElModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}
    )
  ],

  // 新的组件加入到我们的根模板里面//声明导入模块依赖的组件、指令等
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    CardComponent,
    ZhangComponent,
    WeiComponent,
    ZhiComponent,
    ParentComponent,
    ChildsComponent,
    FooterComponent,
    NewsComponent,
    MyformComponent
  ],
  // 引入后在这里配置服务 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
  providers: [StorageService, HttpServiceService],
   // 只有在主模块 AppModule 会使用到.
  bootstrap: [AppComponent]
})
 // 根模块不需要到处任何东西，因为其他组件不需要导入根模块
export class AppModule {
}

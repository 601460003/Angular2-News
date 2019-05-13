
/**从 Angular 核心库中导入 Component 符号
 * 引入装饰器，和生命周期函数,并为组件类加上 @Component 装饰器
 */
import { Component, OnInit } from '@angular/core';

// 引入hero模块
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({               // @Component 是个装饰器函数
  selector: 'app-heroes',  // 组件的选择器（CSS 元素选择器）
  templateUrl: './heroes.component.html', // 组件模板文件的位置
  styleUrls: ['./heroes.component.css']   // 组件私有 CSS 样式表文件的位置。
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];


  // 1. 声明了一个私有 heroService 属性，
  // 2. 把它标记为一个 HeroService 的注入点。
  // constructor方法是由JavaScript引擎调用的，而不是Angular
  // 依赖注入就是在类的构造函数中传入另一个类，类实例化时包括其参数的类也会被实例化。
  // constructor适用场景==》主要作用是注入依赖  就可以作为类的属性被使用了。
  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit() {           //  生命周期函数==》在构造函数之后马上执行复杂的初始化逻辑
    this.getHeroes();   // 在 Angular 设置完输入属性之后，对该组件进行准备。
  }

  // subscribe 函数把这个英雄数组传给这个回调函数
  // void 代表（空类型）- 用在不返回任何值的函数中。
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
// 模块，依赖注入，指令，服务，组件，元数据，模板，数据绑定
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}

// 1.元数据：元数据告诉 Angular 如何处理一个类。元数据是处理类的一种方式。直到告诉Angular这是一个组件。
// 只要把 **元数据 *附加到这个类，就相当于告诉 Angular ： HeroListComponent是个组件。
// 想要把类变为组件，需要把元数据添加到这个类

// 2.NgModule模块：
// imports - 导入其他模块，就是要使用其他模块的功能，必须要导入。
// declarations - 声明全局通用组件。 Angular 有三种视图类：组件、指令和管道。
// exports - declarations 的子集，可用于其它模块的组件模板。
// providers -服务提供者，主要用来定义服务。自动将注册的服务体检到依赖注入实例中的constructor！
// bootstrap - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。

// 3.组件：组件在类中定义组件的应用逻辑，为视图提供支持。 组件通过一些由属性和方法组成的 API 与视图交互。

// 4.模板（html）：模板中可以任意使用自定义组件和原生HTML、模板语法（*ngFor、{{hero.name}}、(click)、[hero]）

// 5.数据绑定：{{hero.name}}插值表达式在  (click) 事件绑定 [hero]属性绑定把父组 [(ngModel)]="hero.name"> 双向数据绑定

// 6.指令：Angular 模板是动态的，结构型指令：*ngFor，*ngFor，动态修改数据

// 7.服务：组件本身不从服务器获得数据、不进行验证输入，也不直接往控制台写日志。 它们把这些任务委托给服务。
// 在创建服务时都使用// 我们所说的服务是指那些能够被其它的组件或者指令调用的单一的,可共享的代码块.
//  服务能够使我们提高代码的利用率,方便组件之间共享数据和方法,方便测试和维护.把其它琐事都委托给服务！

// 8.依赖注入:   依赖注入渗透在整个 Angular 框架中，被到处使用。
//  注入器 (injector) 是本机制的核心。注入器负责维护一个容器，用于存放它创建过的服务实例。
//   注入器能使用提供商创建一个新的服务实例。提供商是一个用于创建服务的配方。把提供商注册到注入器。
// ”依赖注入” ——，从字面意思上来说分为两个部分：一是依赖，二是注入。也就是说，当一个对象在建立时候，
// 需要依赖于另一个对象，这是代码层的一种依赖关系；当在代码中声明了依赖关系之后，Angular通过injector注入器
// 将所依赖的对象进行”注入”操作.


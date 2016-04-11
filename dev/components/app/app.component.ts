import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from '../home/home.component';
import {ShopComponent} from '../shop/shop.component';
import {FitnessComponent} from '../fitness/fitness.component';
import {EventComponent} from '../event/event.component';

@Component({
    selector: 'my-app',
    templateUrl: '../prod/components/app/app.html',
    styleUrls: ['../prod/components/app/app.css'], 
    directives: [ROUTER_DIRECTIVES,HeaderComponent]
})
@RouteConfig([
	{ path:'/' ,name: 'Home' ,component: HomeComponent ,useAsDefault: true },
	{ path:'/shop' ,name: 'Shop' ,component: ShopComponent },
	{ path:'/fitness' ,name: 'Fitness' ,component: FitnessComponent },
	{ path:'/event' ,name: 'Event' ,component: EventComponent }
])
export class AppComponent {


}

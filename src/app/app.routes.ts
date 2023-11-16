import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';


export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    {
        component:AboutComponent,
        path:'About'
    },
    {
        component:ContactComponent,
        path:'Contact'
    },
    {
        component:ProductsComponent,
        path:'Product'
    },

];

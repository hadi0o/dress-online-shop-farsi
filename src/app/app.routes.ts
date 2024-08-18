import { Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";

export const routes: Routes = [
   {path: '', component: HomeComponent},
   // {path: 'about', component: AboutComponent},
   // {path: 'comments', component: CommentsComponent},
   // {path: 'contact', component: ContactComponent},
   // {path: 'products', component: ProductsComponent},

    {path: '**', redirectTo: ''}
];

import { Routes } from '@angular/router';
import { AuthLayoytComponent } from './layouts/auth-layoyt/auth-layoyt.component';
import { BlankLayoytComponent } from './layouts/blank-layoyt/blank-layoyt.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductCartsComponent } from './components/product/product.carts.component';
import { CartsComponent } from './components/carts/carts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { homeGuard } from './core/guards/home.guard';
import { logenGuard } from './core/guards/logen.guard';
import { DetailsComponent } from './components/details/details.component';
import { ForgetpasswardComponent } from './components/forgetpassward/forgetpassward.component';
import { OrderComponent } from './components/order/order.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

export const routes: Routes = [

{path:'',component:AuthLayoytComponent,canActivate:[logenGuard] ,children:[
    {path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'forget',component:ForgetpasswardComponent},


]},


{path:'',component:BlankLayoytComponent,canActivate:[homeGuard] ,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'product',component:ProductCartsComponent},
{path:'cart',component:CartsComponent},
{path:'categories',component:CategoriesComponent},
{path:'brands',component:BrandsComponent},
{path:'details/:id',component:DetailsComponent},
{path:'order/:id',component:OrderComponent},
{path:'allorders',component:AllordersComponent},
{path:'wishlist',component:WishlistComponent},






]},
{path:'**',component:NotfoundComponent}

];

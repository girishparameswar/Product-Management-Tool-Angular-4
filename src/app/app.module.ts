import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './products/list/list.component';
import { ProdutPipe } from './products/produt.pipe';
import { RatingComponent } from './products/rating/rating.component';
import { HomeComponent } from './layout/home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';

import { ProductsService } from './products/products.service';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './auth/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth/auth.guard';
import { AuthinterceptorService } from './auth/authinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ProdutPipe,
    RatingComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    CreateComponent,
    EditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'home', component: HomeComponent,
        canActivate : [AuthGuard]
    },
      { path:'products', component: ListComponent,
        canActivate : [AuthGuard],
        children:[
          { path:'edit/:pId', component: EditComponent}
        ]  
      },
      { path:'create', component: CreateComponent,
        canActivate : [AuthGuard]
    },
      { path:'login', component: LoginComponent},
      { path:'', redirectTo:'home', pathMatch:'full'},
      { path:'**', component:PageNotFoundComponent }
    ])
  ],
  providers: [ProductsService, AuthService, CookieService, AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

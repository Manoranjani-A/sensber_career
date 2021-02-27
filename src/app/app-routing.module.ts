import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: ' Home', component:  HomeComponent },
  { path: 'AboutUs', component:  AboutUsComponent },
  { path: 'Home',   redirectTo: '/Home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component:  HomeComponent  },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

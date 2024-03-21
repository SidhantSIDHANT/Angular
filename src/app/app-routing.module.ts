import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessTravellingComponent } from './sheard/component/process-travelling/process-travelling.component';
import { CountryComponent } from './sheard/component/country/country.component';
import { PlansCardDetailsComponent } from './sheard/component/plans-card-details/plans-card-details.component';

const routes: Routes = [
  {
    path: '', 
    component: CountryComponent
  },
  {
    path: 'plains', 
    component: ProcessTravellingComponent
  },
  {
    path: "plan-details",
     component: PlansCardDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

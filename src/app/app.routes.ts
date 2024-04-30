import { Routes } from '@angular/router';
import { FeatureTogglerComponent } from './feature-toggler/feature-toggler.component';

export const routes: Routes = [
  { path: '', redirectTo: 'features', pathMatch: 'full' },
  { path: 'features',  component: FeatureTogglerComponent },
];

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateTrackerComponent } from './create-tracker/create-tracker.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'createTracker', component: CreateTrackerComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

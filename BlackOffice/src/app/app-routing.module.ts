import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { TypographyComponent } from './components/typography/typography.component';
import { IconsComponent } from './components/icons/icons.component';
import { MapsComponent } from './components/maps/maps.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'table-list', component: TableListComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'icons', component: IconsComponent },
  {path: 'maps', component: MapsComponent },
  {path: 'notifications', component: NotificationsComponent},
  {path: '**', pathMatch:'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {FruitTableComponent} from './fruit-challenge/components/fruit-table/fruit-table.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MessagingComponent} from './messaging-challenge/components/messaging/messaging.component';

const routes: Routes = [
  {
    path: 'fruit-table',
    component: FruitTableComponent,
  },
  {
    path: 'messaging',
    component: MessagingComponent
  },
  {
    path: '**',
    redirectTo: 'fruit-table',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

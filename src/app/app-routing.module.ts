import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTopicComponent } from './pages/edit-topic/edit-topic.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "edit-topic", component: EditTopicComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

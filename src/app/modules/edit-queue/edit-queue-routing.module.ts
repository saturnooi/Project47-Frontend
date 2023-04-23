import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditQueueComponent } from './edit-queue.component';

const routes: Routes = [{ path: '', component: EditQueueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditQueueRoutingModule { }

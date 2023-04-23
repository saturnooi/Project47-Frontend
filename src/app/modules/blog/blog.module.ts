import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { PaginationModule } from '../pagination/pagination.module';
import { FormsModule } from '@angular/forms';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, PaginationModule, FormsModule],
})
export class BlogModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [PostComponent],
  imports: [CommonModule, PostRoutingModule, QuillModule.forRoot()],
})
export class PostModule {}

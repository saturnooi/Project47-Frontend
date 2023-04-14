import { Component, NgModule, ViewChild } from "@angular/core";
// import { ModalComponent } from "../modal/modal.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalComponent } from "src/app/modal/modal.component";
import { ModalModule } from "src/app/modal/modal.module";



@Component({
  selector: 'app-create-accessory',
  templateUrl: './take-in-out-accessory.component.html',
})
export class TakeInOutComponent {
  @ViewChild('modalComponent') modal:
    | ModalComponent<TakeInOutComponent>
    | undefined;

  async createRecord(): Promise<void> {
    await this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
  ],
  declarations: [TakeInOutComponent],
})
export class NewsletterComponentModule { }

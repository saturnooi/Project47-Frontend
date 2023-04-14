import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { accessoryLists } from 'src/app/constants/defaultValue';
import { IAccessories } from 'src/app/models/user/accessories';
import { ModalService } from 'src/app/services/modal/modal-service.service';
// import { ModalComponent } from '@app/_components/modal/modal.component';
// import { IAccessories } from '@app/_models/user/accessories';
// import { ModalService } from '@app/_services/modal/modal-service.service';
// import { accessoryLists } from '@app/constants/defaultValue';
 import { CreateAccessoryComponent as CreateAccessoryComponentType } from '../../../components/create-accessory/create-accessory.component';
 import { TakeInOutComponent as TakeInOutComponentType } from '../../../components/take-in-out-accessory/take-in-out-accessory.component';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
})
export class AccessoriesComponent implements OnInit {

  accessories: IAccessories[] = []
  paginationPageArray = [0, 1, 2, 3, 4];
  activeTab = 0;

  constructor(
    private router: Router,
    private modalService: ModalService<CreateAccessoryComponentType>,
    private modalTakeInOutService: ModalService<TakeInOutComponentType>
  ) { }

  ngOnInit(): void {
    this.accessories = accessoryLists;
  }

  onTabClickHandler = (step: number, mode: string) => {
    while (step !== 0) {
      this.activeTab += step > 0 ? 1 : -1
      step += mode === '-' ? 1 : -1
      if (this.activeTab <= 0) {
        this.activeTab = 0
        break
      } else if (this.activeTab >= this.paginationPageArray.length - 1) {
        this.activeTab = this.paginationPageArray.length - 1
        break
      }
    }
  }

  async showCreateAccessoryTab(): Promise<void> {
    const { CreateAccessoryComponent } = await import(
      '../../../../app/components/create-accessory/create-accessory.component'
    );

    await this.modalService.open(CreateAccessoryComponent);
  }

  async showTakeInOutTab(): Promise<void> {
    const { TakeInOutComponent } = await import(
      '../../../../app/components/take-in-out-accessory/take-in-out-accessory.component'
    );

    await this.modalTakeInOutService.open(TakeInOutComponent);
  }

  onItemClick(id?: string | number) {
    this.router.navigate(['user/accessories-details']);
  }
}

import { Component, OnInit } from '@angular/core';
import { accessoryDetailLists } from 'src/app/constants/defaultValue';
import { IAccessoryDetail } from 'src/app/models/user/accessories';


@Component({
  selector: 'app-accessories-details',
  templateUrl: './accessories-details.component.html',
})
export class AccessoriesDetailsComponent implements OnInit {

  accessoryDetailLists: IAccessoryDetail[] = []
  paginationPageArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  activeTab = 0;

  ngOnInit(): void {
    this.accessoryDetailLists = accessoryDetailLists
  }

  formatDate(date: Date | string): string | undefined {
    if (!date) return
    const d = new Date(date)
    return [d.getDate(), d.getMonth() + 1, d.getFullYear() + 543].join("/")
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

}

import { Component } from '@angular/core';
import { ISchedule } from '@app/_models/user/schedule';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
})
export class SchedulesComponent {
  waitConfirm = 5;
  schedules: ISchedule[] = [
    {
      name: "ณัฐวัฒน์ จันทร์วิสิทธิ์",
      illness: "เปลี่ยนเหล็กดัดฟัน",
      dentist: "ทพญ.รุ่งเรือง เหมาะธุลิน",
      time: "18:00",
      status: "ได้รับคำยืนยันจากคนไข้"
    },
    {
      name: "ณัฐวัฒน์ จันทร์วิสิทธิ์",
      illness: "เปลี่ยนเหล็กดัดฟัน",
      dentist: "ทพญ.รุ่งเรือง เหมาะธุลิน",
      time: "18:00",
      status: "ได้รับคำยืนยันจากคนไข้"
    },
    {
      name: "ณัฐวัฒน์ จันทร์วิสิทธิ์",
      illness: "เปลี่ยนเหล็กดัดฟัน",
      dentist: "ทพญ.รุ่งเรือง เหมาะธุลิน",
      time: "18:00",
      status: "ได้รับคำยืนยันจากคนไข้"
    },
    {
      name: "ณัฐวัฒน์ จันทร์วิสิทธิ์",
      illness: "เปลี่ยนเหล็กดัดฟัน",
      dentist: "ทพญ.รุ่งเรือง เหมาะธุลิน",
      time: "18:00",
      status: "ได้รับคำยืนยันจากคนไข้"
    },
    {
      name: "ณัฐวัฒน์ จันทร์วิสิทธิ์",
      illness: "เปลี่ยนเหล็กดัดฟัน",
      dentist: "ทพญ.รุ่งเรือง เหมาะธุลิน",
      time: "18:00",
      status: "ได้รับคำยืนยันจากคนไข้"
    },
    {
      name: "ณัฐวัฒน์ จันทร์วิสิทธิ์",
      illness: "เปลี่ยนเหล็กดัดฟัน",
      dentist: "ทพญ.รุ่งเรือง เหมาะธุลิน",
      time: "18:00",
      status: "ได้รับคำยืนยันจากคนไข้"
    },
  ]
}

export interface ISchedule {
  name: string;
  illness: string;
  dentist: string;
  congenitalDisease?: string;
  drugAllergy?: string;
  time: Date | string;
  status: string;
}

export interface IDentist {
  name: string;
  skill?: string;
  picture: string;
  isFree: boolean;
}

export interface IDentistEducation {
  year: string;
  university: string;
  major: string;
}

export interface IDentistDetail {
  name: string;
  skill: string;
  branch: string;
  language: string;
  educations: IDentistEducation[];
}

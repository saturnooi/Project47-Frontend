import { IAccessories, IAccessoryDetail } from "../models/user/accessories"
import {
  IDentist,
  IDentistDetail,
  IDentistEducation,
} from '../models/user/dentist';
export const accessoryLists: IAccessories[] = [
  {
    name: 'amalgam well',
    company: '',
    category: 'เครื่องมืออุดฟัน',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 1,
  },
  {
    name: 'triple syrings',
    company: '',
    category: 'เครื่องมืออุดฟัน',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 99,
  },
  {
    name: 'syringe ยาชา',
    company: '',
    category: 'เครื่องมือศัลย์',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 102,
  },
  {
    name: 'bone fire',
    company: '',
    category: 'เครื่องมือศัลย์',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 24,
  },
  {
    name: 'amalgam well',
    company: '',
    category: 'เครื่องมืออุดฟัน',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 1,
  },
  {
    name: 'triple syrings',
    company: '',
    category: 'เครื่องมืออุดฟัน',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 99,
  },
  {
    name: 'syringe ยาชา',
    company: '',
    category: 'เครื่องมือศัลย์',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 102,
  },
  {
    name: 'bone fire',
    company: '',
    category: 'เครื่องมือศัลย์',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 24,
  },
  {
    name: 'syringe ยาชา',
    company: '',
    category: 'เครื่องมือศัลย์',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 102,
  },
  {
    name: 'bone fire',
    company: '',
    category: 'เครื่องมือศัลย์',
    pricePerUnit: undefined,
    unit: 'อัน',
    balance: 24,
  },
];

export const accessoryDetailLists: IAccessoryDetail[] = [
  {
    category: 'รับ',
    total: 10,
    balance: 10,
    date: new Date(),
    expired: undefined,
    detail: undefined,
  },
  {
    category: 'จ่าย',
    total: 1,
    balance: 5,
    date: new Date(),
    expired: undefined,
    detail: undefined,
  },
  {
    category: 'รับ',
    total: 3,
    balance: 0,
    date: new Date(),
    expired: undefined,
    detail: undefined,
  },
  {
    category: 'รับ',
    total: 4,
    balance: 2,
    date: new Date(),
    expired: undefined,
    detail: undefined,
  },
  {
    category: 'รับ',
    total: 7,
    balance: 2,
    date: new Date(),
    expired: undefined,
    detail: undefined,
  },
];

export const quillConfig = {
  'emoji-toolbar': true,
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],

    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],

    ['clean'],

    ['link', 'image', 'video'],
  ],
  blotFormatter: {},
};

export const dentistLists: IDentist[] = [
  {
    name: 'ผศ. ทพญ. วีระพร วีระประวัติ',
    skill: undefined,
    picture:
      'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg',
    isFree: true,
  },
  {
    name: 'ผศ. ทพญ. วีระพร วีระประวัติ',
    skill: 'ทันตกรรมหัตถการ',
    picture:
      'https://media.istockphoto.com/id/177373093/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=uCwm8TtG7w8TOzbESLA-xAe72LZtNPgxU-WtRuhwGmY=',
    isFree: true,
  },
  {
    name: 'ผศ. ทพญ. วีระพร วีระประวัติ',
    skill: 'ทันตกรรมหัตถการ',
    picture:
      'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg',
    isFree: false,
  },
  {
    name: 'ผศ. ทพญ. วีระพร วีระประวัติ',
    skill: undefined,
    picture:
      'https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?w=2000',
    isFree: false,
  },
  {
    name: 'ผศ. ทพญ. วีระพร วีระประวัติ',
    skill: 'ทันตกรรมหัตถการ',
    picture:
      'https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg',
    isFree: true,
  },
  {
    name: 'ผศ. ทพญ. วีระพร วีระประวัติ',
    skill: 'ทันตกรรมหัตถการ',
    picture:
      'https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg',
    isFree: false,
  },
  {
    name: 'ผศ. ทพญ. วีระพร วีระประวัติ',
    skill: 'ทันตกรรมหัตถการ',
    picture:
      'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg',
    isFree: true,
  },
];

export const dentistDetail: IDentistDetail = {
  name: 'ผศ. ทพญ. วีระพร วีระประวัติ',
  skill: 'ทันตกรรมหัตถการ',
  branch: '-',
  language: 'English, Thai',
  educations: [
    {
      year: '2546',
      university: 'จุฬาลงกรณ์มหาวิทยาลัย',
      major: 'Master os Science (Operative Dentistry)',
    },
    {
      year: '2546',
      university: 'The Dental Council of Thailand, Thailand',
      major: 'ทันตกรรมหัตถการ',
    },
    {
      year: '2539',
      university: 'มหาวิทยาลัยมหิดล',
      major: 'Graduate Diploma in Clinicak Sciences, Operative Dentistry',
    },
    {
      year: '2536',
      university: 'จุฬาลงกรณ์มหาวิทยาลัย',
      major: 'ทันตแพทย์ศาสตร์บัญทิต',
    },
  ],
};

export const educationList: IDentistEducation[] = [
  {
    year: '2546',
    university: 'จุฬาลงกรณ์มหาวิทยาลัย',
    major: 'Master os Science (Operative Dentistry)',
  },
  {
    year: '2546',
    university: 'The Dental Council of Thailand, Thailand',
    major: 'ทันตกรรมหัตถการ',
  },
  {
    year: '2539',
    university: 'มหาวิทยาลัยมหิดล',
    major: 'Graduate Diploma in Clinicak Sciences, Operative Dentistry',
  },
  {
    year: '2536',
    university: 'จุฬาลงกรณ์มหาวิทยาลัย',
    major: 'ทันตแพทย์ศาสตร์บัญทิต',
  },
];

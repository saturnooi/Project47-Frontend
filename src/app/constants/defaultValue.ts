import { IAccessories, IAccessoryDetail } from "../models/user/accessories"


export const accessoryLists: IAccessories[] = [
  {
    name: "amalgam well",
    company: "",
    category: "เครื่องมืออุดฟัน",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 1,
  },
  {
    name: "triple syrings",
    company: "",
    category: "เครื่องมืออุดฟัน",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 99,
  },
  {
    name: "syringe ยาชา",
    company: "",
    category: "เครื่องมือศัลย์",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 102,
  },
  {
    name: "bone fire",
    company: "",
    category: "เครื่องมือศัลย์",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 24,
  },
  {
    name: "amalgam well",
    company: "",
    category: "เครื่องมืออุดฟัน",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 1,
  },
  {
    name: "triple syrings",
    company: "",
    category: "เครื่องมืออุดฟัน",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 99,
  },
  {
    name: "syringe ยาชา",
    company: "",
    category: "เครื่องมือศัลย์",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 102,
  },
  {
    name: "bone fire",
    company: "",
    category: "เครื่องมือศัลย์",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 24,
  },
  {
    name: "syringe ยาชา",
    company: "",
    category: "เครื่องมือศัลย์",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 102,
  },
  {
    name: "bone fire",
    company: "",
    category: "เครื่องมือศัลย์",
    pricePerUnit: undefined,
    unit: "อัน",
    balance: 24,
  },
]

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
]

export const quillConfig = {
  'emoji-toolbar': true,
  'toolbar': [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],

    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean'],

    ['link', 'image', 'video'],
  ]
}

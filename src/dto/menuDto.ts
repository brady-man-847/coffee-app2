export interface MenuRs {
  name: string;
  code: string;
  price: number;
  stock: 0 | -1;
  unit: '원';
}

export interface MenuOptionRs {
  code: string;
  name: string;
  optionGroupList: OptionGroup[];
  stock: number;
  unitPrice: number;
}

export interface OptionGroup {
  name: string;
  selectMax: number;
  selectMin: number;
  optionList: OptionValue[];
}

export interface OptionValue {
  code: number;
  name: string;
  isOptionDefault: boolean;
  price: number;
}

export interface MenuCategoryRes {
  name: string;
  menuList: MenuRs[];
}

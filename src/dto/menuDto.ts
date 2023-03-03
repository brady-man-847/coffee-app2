export interface MenuRs {
  name: string;
  code: string;
  unitPrice: number;
  type: number;
  stock: 0 | -1;
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
  optionValueList: OptionValue[];
}

export interface OptionValue {
  code: number;
  name: string;
  optionDefault: boolean;
  price: number;
}

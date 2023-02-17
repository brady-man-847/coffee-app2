export interface OrderRq {
  menuCode: string;
  optionValueList: number[];
  phone: string;
  setDefault: boolean;
}

export interface OrderRs {
  menuName: string;
  name: string;
  optionNameList: string[];
}

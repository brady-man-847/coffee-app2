export interface OrderRq {
  menuCode: string;
  optionValueList: number[];
  phone: string;
  setDefault: boolean;
  menuName?: string;
}

export interface OrderRs {
  menuName: string;
  name: string;
  optionNameList: string[];
}

export interface OrderRq {
  menuCode: string;
  optionValueList: number[];
  optionNameList: string[];
  phone: string;
  setDefault: boolean;
  menuName?: string;
}

export interface OrderRs {
  menuName: string;
  name: string;
  optionNameList: string[];
}

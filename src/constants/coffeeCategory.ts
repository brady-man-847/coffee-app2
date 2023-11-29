// TODO @brady 'RECENT', 'FAVORITE' 카테고리 추가
export const COFFEE_CATEGORIES = ['COFFEE', 'NON-COFFEE', 'TEA', 'ADE & JUICE', 'FLATCCINO', 'BOTTLE', 'SNACK', 'S / W'] as const;
export type CoffeeCategory = (typeof COFFEE_CATEGORIES)[number];

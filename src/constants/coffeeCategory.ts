export const COFFEE_CATEGORIES = ['RECENT', 'COFFEE', 'NON-COFFEE', 'TEA', 'ADE & JUICE', 'FLATCCINO', 'BOTTLE', 'SNACK', 'S / W'] as const;
export type CoffeeCategory = (typeof COFFEE_CATEGORIES)[number];

/**
 * Leo Wear — size & color catalogs by category sizeGuide / name.
 */

export const ALL_COLORS: string[] = [
  'Black', 'White', 'Navy', 'Grey', 'Charcoal', 'Beige', 'Cream', 'Ivory',
  'Brown', 'Tan', 'Khaki', 'Olive', 'Maroon', 'Burgundy', 'Red', 'Wine',
  'Pink', 'Rose', 'Peach', 'Orange', 'Mustard', 'Yellow', 'Gold',
  'Green', 'Forest Green', 'Mint', 'Teal', 'Turquoise',
  'Blue', 'Sky Blue', 'Royal Blue', 'Indigo',
  'Purple', 'Lavender', 'Lilac',
  'Multi', 'Print', 'Striped', 'Checked'
];

export const APPAREL_SIZES: string[] = [
  'XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'
];

export const PANTS_SIZES: string[] = [
  '28', '30', '32', '34', '36', '38', '40', '42', '44', '46', '48'
];

export const KIDS_SIZES: string[] = [
  '0-3M', '3-6M', '6-12M', '12-18M', '18-24M',
  '2-3Y', '3-4Y', '4-5Y', '5-6Y', '6-7Y', '7-8Y',
  '8-9Y', '9-10Y', '10-11Y', '11-12Y', '12-13Y', '13-14Y'
];

export const ACCESSORY_SIZES: string[] = [
  'Free Size', 'One Size', 'S', 'M', 'L', 'XL'
];

export const FOOTWEAR_SIZES: string[] = [
  'UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'
];

export const MATERIALS: string[] = [
  '100% Cotton', 'Cotton Blend', 'Organic Cotton',
  'Polyester', 'Polyester blend', 'Moisture-wicking fabric',
  'Cotton Fleece', 'Cotton Twill with Elastane',
  'Denim', 'Stretch Denim', 'Viscose blend', 'Linen', 'Linen Blend',
  'Rayon', 'Nylon', 'Spandex blend', 'Wool blend', 'Silk blend'
];

export const FEATURES: string[] = [
  'Stretchable', 'Slim Fit', 'Regular Fit', 'Relaxed Fit', 'Oversized',
  'Pencil Cut', 'Tapered', 'Straight Fit', 'Bootcut',
  'Quick Dry', 'Anti-Odour', 'Breathable', 'Moisture Wicking',
  'Soft Touch', 'Wrinkle Resistant', 'Water Resistant',
  'Warm', 'Lightweight', 'Durable', 'Easy Wash',
  'Kangaroo Pocket', 'Ribbed Cuffs', 'Zip Closure', 'Button Closure'
];

export function sizesForGuide(sizeGuide?: string | null, categoryName?: string | null): string[] {
  const g = (sizeGuide || '').toUpperCase();
  const n = (categoryName || '').toLowerCase();
  if (g === 'PANTS' || n.includes('pant') || n.includes('jean') || n.includes('trouser') || n.includes('chino') || n.includes('short')) {
    return [...PANTS_SIZES];
  }
  if (g === 'KIDS' || n.includes('kid') || n.includes('boy') || n.includes('girl') || n.includes('child')) {
    return [...KIDS_SIZES];
  }
  if (g === 'ACCESSORY' || n.includes('access') || n.includes('belt') || n.includes('bag') || n.includes('scarf')) {
    return [...ACCESSORY_SIZES];
  }
  if (g === 'FOOTWEAR' || n.includes('shoe') || n.includes('footwear')) {
    return [...FOOTWEAR_SIZES];
  }
  return [...APPAREL_SIZES];
}

export function sizesForCategory(categoryName?: string | null): string[] {
  return sizesForGuide(null, categoryName);
}

export function colorsForCategory(_categoryName?: string | null): string[] {
  return [...ALL_COLORS];
}

export function isLeoWearBrand(brand?: string | null): boolean {
  if (!brand) return false;
  const b = brand.toLowerCase().replace(/\s+/g, '');
  return b === 'leowear' || b === 'leo' || b.includes('leowear');
}

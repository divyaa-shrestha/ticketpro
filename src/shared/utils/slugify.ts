/**
 * Converts a string to a URL-friendly slug
 * Examples:
 *   "Ääkköset & Café – Best in Töölö!" => "aakkoset-cafe-best-in-tooloo"
 *   "Tämä on testi!" => "tama-on-testi"
 */

export const slugify = (text: string): string => {
  return text
    .normalize("NFD") // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9\s-]/g, "") // Remove special characters
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/-+/g, "-") // Replace multiple - with single -
}

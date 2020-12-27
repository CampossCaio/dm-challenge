export default function convertStringToArray(string: string): string[] {
  const array = string.replace(/\s/g, '').split(',').sort();
  return array;
}

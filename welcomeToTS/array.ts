type TestArray = number[]; // จะเก็บเฉพาะตัวเลขที่เป็นประเภทนั้นๆเท่านั้น
type TestArray2 = Array<number>; // ทำได้สองวิธีการ แบบบนสะดวกกว่า (ใช้ first Cap)
type TestArray3 = [string, boolean, number]; // all lowwercase

const arr1: TestArray = [2, 4, 6];
const arr2: TestArray2 = [2, 3, 5];
const arr3: TestArray3 = ['dog', true, 7];

console.log(arr1, arr2, arr3)
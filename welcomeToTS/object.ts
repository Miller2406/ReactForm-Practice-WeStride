type TestObject = {
    id: number;
    name: string;
    status: boolean;
    power?: 'On' | 'Off';
}

const obj1: TestObject = {
    id: 1,
    name: 'one',
    status: true,
    power: "Off"
}
const obj2: TestObject = {
    id: 2,
    name: 'two',
    status: false
}

console.log(obj1, obj2)
const objectA: {
  readonly keyA: string; // readonly -> just read not modify
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Key A',
  keyB: 'Key B'
};

objectA.keyB = 'Value';
objectA.keyC = 'New Key';

console.log(objectA);

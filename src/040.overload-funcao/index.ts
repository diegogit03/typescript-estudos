type Adder = {
  (x: number): number,
  (x: number, y:number): number,
  (...arg: number[]): number
}

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if(args.length > 0) return args.reduce((s, y) => s + y, 0) + x + (y || 0);
  return x + (y || 0);
}

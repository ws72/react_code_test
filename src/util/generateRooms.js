export const repeat = (fn, n) => Array(n).fill(0).map(fn);
export const rand = () => (Math.floor(Math.random() * Math.floor(2)))?'GOLD':'MONSTER';
export const generatedRooms = n => repeat(() => repeat(rand, n), n);
 
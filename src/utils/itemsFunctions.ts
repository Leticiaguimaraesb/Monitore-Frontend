export const makeDateOutput = (date: string, sumYear?: number) => {
  const year = sumYear ? Number(date.slice(0, 4)) + sumYear : date.slice(0, 4);
  return `${date.slice(8, 10)}/${date.slice(5, 7)}/${year}`;
};

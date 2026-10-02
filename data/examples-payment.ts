export type Example = {
  id: string;
  name: string;
  quantity: number;
  amount: number;
};

export const examples: Example[] = [
  {
    id: "1",
    name: "ビーフカレー",
    quantity: 1,
    amount: 700,
  },
  {
    id: "2",
    name: "ポークカレー",
    quantity: 2,
    amount: 800,
  },
];

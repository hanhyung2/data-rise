export type ChartData = {
  x: string;
  y: number;
};

export type Series = {
  name: string;
  data: ChartData[];
}[];

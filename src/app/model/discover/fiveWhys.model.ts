export class FiveWhysModel {
  problem: string;
  whys: {why: string, rootCause: boolean}[];
  rootCause: string;
  solutions: string;
}

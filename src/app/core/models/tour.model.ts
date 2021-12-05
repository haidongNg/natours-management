export interface ITour {
  id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  price: number;
  summary: string;
  description: string;
  imageCover: string;
  ratingsAverage: string;
  ratingsQuantity: string;
  images?: string[];
  startDates?: Date[];
}

import { getLocaleDateFormat } from '@angular/common';

export interface BookModel {
  name: string;
  description: string;
  price: number;
  category: Category;
  createDate: number;
  isAvailable: boolean;
}

export enum Category {
  Fantasy,
  Mystery,
  Thriller,
  Romance,
  Westerns,
  Faritail,
  Poetry,
  Drama,
  Prose,
}

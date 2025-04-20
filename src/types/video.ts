export interface Comment {
  id: string;
  text: string;
  date: string;
  user: {
    id: string;
    name: string;
  };
}

export interface Category {
  id: string;
  name: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  category: Category;
  comments: Comment[];
  views: number;
  watchTime: number;
  receita?: string;
  proteinas?: number;
  carboidratos?: number;
  gorduras?: number;
  fibras?: number;
  favorita?: boolean;
}
export interface Movie {
  id: number;
  name: string;
  category: string;
  length: number;
  actors: Actor[];
}

export interface Actor {
  id: number;
  name: string;
  age: number;
  gender: string;
}

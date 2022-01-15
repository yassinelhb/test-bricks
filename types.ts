export interface User {
  email: string;
  role: string;
  id: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RequestError {
  data: any;
  status: number;
}

export type TLayout = {
  title: string;
  children: any;
};

export interface IBrick {
  image: string;
  title: string;
  stat: string;
  range: number;
  rangeText: string;
  rangeText2?: string;
}

export interface ICity {
  title: string;
  description: string;
  image: string;
  statText: string;
  statValue: string;
}


export interface IBiens {
  title: string;
  image: string;
  rendement: string;
  reverses: string;
  type: "buying" | "selling" | "cancel" | "offre" | "default";
  score?: number;
  sansCredit?: boolean;
  nbInvestors?: number;
  nbFunded?: number;
  nbOffre?: number;
}


export type AuthState = {
  user: User | null;
  token: string | null;
};

export interface Genres {
  id: number;
  name: string;
}

export interface Cast {
  cast_id?: number;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
}

export interface Crew {
  credit_id: string;
  department: string;
  gender: number | null;
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
}

export interface Genres {
  id: number;
  name: string;
}

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  profile_path: string;
}

export interface ProductionCompanies {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

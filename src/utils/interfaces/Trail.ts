export default interface ITrailData {
  id: number;
  title: string;
  image: string;
  info: string;
  difficulty: string;
  rating?: number;
  reviews?: number;
  length: number;
  time: string;
  description: string;
}
export interface LocData {
  id: number;
  area_name: string;
  created_at: string;
  goes: string;
  location: string;
  province: string;
  trail: number;
  updated_at: string;
}
export interface ImagesData {
  id: number;
  image: string;
  property: number;
}
export interface PropertiesData {
  id: number;
  distance: number;
  elevation_loss: number;
  evaluation_plan: number;
  images: ImagesData[];
  max_elevation: number;
  min_elevation: number;
  technical_difficulty: string;
  trail: number;
  trail_type: string;
}
export interface ITrailData1 {
  id: number;
  title: string;
  locations: LocData[];
  properties: PropertiesData[];
  description: string;
}
export interface TrailsCount {
  count: number;
  next: number;
  previous: number;
  results: ITrailData1[];
}

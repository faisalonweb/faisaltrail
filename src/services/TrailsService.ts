import http from 'src/http-common';
import ITrailData from 'src/utils/interfaces/Trail';

const getAll = () => {
  return http.get<Array<ITrailData>>('/trails');
};

const get = (id: any) => {
  return http.get<ITrailData>(`/trails/${id}`);
};

const create = (data: ITrailData) => {
  return http.post<ITrailData>('/trails', data);
};

const update = (id: any, data: ITrailData) => {
  return http.put<any>(`/trails/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/trails/${id}`);
};

const removeAll = () => {
  return http.delete<any>('/trails');
};

const findByTitle = (title: string) => {
  return http.get<Array<ITrailData>>(`/trails?title=${title}`);
};

const TrailsService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TrailsService;
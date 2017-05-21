import { IVideo } from '../model/IVideo';

export interface IVideoService {
    GetVideos() : Promise<IVideo[]>;
}
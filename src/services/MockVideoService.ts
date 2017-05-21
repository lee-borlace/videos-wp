import { IVideo } from '../model/IVideo';
import { IVideoService } from './IVideoService';

export class MockVideoService implements IVideoService {
    
    private _items: IVideo[] = [{ 
        Name: "Sample Video", 
        Description: "", 
        Url:"https://lee79.sharepoint.com/sites/dev/videos-wp/Videos/Sample%20Video/small.mp4", 
        ThumbnailUrl:"https://lee79.sharepoint.com/sites/dev/videos-wp/Videos/Sample%20Video/Preview%20Images/snapshot.png",
         IsPrimary: false }];

    public GetVideos(): Promise<IVideo[]> {
    
        return new Promise<IVideo[]>((resolve) => {
                resolve(this._items);
            });
    }

}
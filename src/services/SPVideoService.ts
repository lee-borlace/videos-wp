import { IVideo } from '../model/IVideo';
import { IVideoService } from './IVideoService';

import {
  IWebPartContext
} from '@microsoft/sp-webpart-base';

import {
  SPHttpClient,
  SPHttpClientResponse   
} from '@microsoft/sp-http';

// TODO - use concrete stuff.
export class SPVideoService implements IVideoService {

    private _context : IWebPartContext;

    private _items: IVideo[] = [{
        Id: 1,
        Name: "Sample Video",
        Description: "",
        Url: "https://lee79.sharepoint.com/sites/dev/videos-wp/Videos/Sample%20Video/small.mp4",
        ThumbnailUrl: "https://lee79.sharepoint.com/sites/dev/videos-wp/Videos/Sample%20Video/Preview%20Images/snapshot.png",
        IsPrimary: false
    }];

    // Constructor. Pass in SP context.
    constructor(context : IWebPartContext) {
        this._context = context;
    }

    public GetVideos(): Promise<IVideo[]> {

        this._context.spHttpClient.get(this._context.pageContext.web.absoluteUrl + `/_api/web/lists/GetByTitle('Videos')/items`, SPHttpClient.configurations.v1)
            .then((response: SPHttpClientResponse) => {
                console.log(response.json());
            });

        return new Promise<IVideo[]>((resolve) => {
            resolve(this._items);
        });
    }

}
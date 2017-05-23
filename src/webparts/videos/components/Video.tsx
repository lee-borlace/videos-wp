import * as React from 'react';
import { IVideo } from '../../../model/IVideo';

export interface IVideoProps {
    video: IVideo;
}

export interface IVideoState {
}

export class Video extends React.Component<IVideoProps, IVideoState> {

    constructor() {
        super();

        this.state = {
        };
    }

    componentDidMount() {
    }

    // TODO : Detect whether to render HTML 5 or Silverlight video.
    public render(): React.ReactElement<IVideoProps> {

        return (
            <video
                width="640"
                height="360"
                data-mediatitle="Sample Video"
                poster={this.props.video.ThumbnailUrl}
                src={this.props.video.Url}
                controls={true}
            >
                <source 
                    src={this.props.video.Url} 
                    data-label="Sample Video" 
                    type="video/mp4">
                </source>
            </video>
        );
    }

}
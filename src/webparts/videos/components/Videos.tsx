import * as React from 'react';
import styles from './Videos.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Spinner, SpinnerType } from 'office-ui-fabric-react/lib/Spinner';

import { Video } from './Video';

import { IVideo } from '../../../model/IVideo';
import { IVideoService } from '../../../services/IVideoService';

export interface IVideosProps {
  spVideoService : IVideoService;  
}

export interface IVideosState {
  primaryVideo: IVideo;
  secondaryVideos: IVideo[];
  isLoading: boolean;
}

export class Videos extends React.Component<IVideosProps, IVideosState> {

  constructor() {
    super();

    this.state = {
      primaryVideo: null,
      secondaryVideos: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.spVideoService.GetVideos().then(videos => {
      this.setState({
        primaryVideo: null,
        secondaryVideos: videos,
        isLoading: false
      });
    });
  }

  public render(): React.ReactElement<IVideosProps> {

    const videos = this.state.secondaryVideos.map((video) =>
      <Video
        key={video.Id}
        video={video}
      ></Video>
    );


    if (!this.state.isLoading) {
      return (
        <div>{videos}</div>
      );
    }
    else {
      return <Spinner type={SpinnerType.normal}></Spinner>;
    }

  }


}

import * as React from 'react';
import styles from './Videos.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { Spinner, SpinnerType } from 'office-ui-fabric-react/lib/Spinner';

import { IVideo } from '../../../model/IVideo';
import { MockVideoService } from '../../../services/MockVideoService';

export interface IVideosProps {

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
      new MockVideoService().GetVideos().then(videos => {
          this.setState({
              primaryVideo: null,
              secondaryVideos: videos,
              isLoading: false
          }); 
      });
  }

  public render() : React.ReactElement<IVideosProps> {
    
    if(!this.state.isLoading) {
      return (
        <div>Videos go here...</div>
      );
    }
    else {
      return <Spinner type={SpinnerType.normal}></Spinner>;
    }

  }


}

import { IWebPartContext } from '@microsoft/sp-webpart-base';

export interface IVideosProps {
  videosServerRelativeUrl: string;
  focusedVideoKeyword: string;
  primaryVideoKeyword: string;
  webPartContext: IWebPartContext;
}

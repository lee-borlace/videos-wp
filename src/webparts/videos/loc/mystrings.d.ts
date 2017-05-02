declare interface IVideosStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  
  VideosServerRelativeUrlFieldLabel: string;
  VideosServerRelativeUrlFieldDesc: string;
  
  FocusedVideoKeywordFieldLabel: string;
  FocusedVideoKeywordFieldDesc: string;
  
  PrimaryVideoKeywordFieldLabel: string;
  PrimaryVideoKeywordFieldDesc: string;
}

declare module 'videosStrings' {
  const strings: IVideosStrings;
  export = strings;
}
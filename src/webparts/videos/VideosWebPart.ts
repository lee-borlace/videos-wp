import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'videosStrings';
import { Videos, IVideosProps } from './components/Videos';
import { IVideosWebPartProps } from './IVideosWebPartProps';

import { IVideoService } from '../../services/IVideoService';

import { Factory } from '../../Factory';

export default class VideosWebPart extends BaseClientSideWebPart<IVideosWebPartProps> {

  constructor() {
    super();
  }

  public render(): void {

    const element: React.ReactElement<IVideosProps> = React.createElement(
      Videos,
      {
        spVideoService: Factory.GetVideoService(this.context)
      }
    );

    ReactDom.render(element, this.domElement);

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                 PropertyPaneTextField('videosServerRelativeUrl', {
                  label: strings.VideosServerRelativeUrlFieldLabel,
                  description: strings.VideosServerRelativeUrlFieldDesc
                }),
                PropertyPaneTextField('focusedVideoKeyword', {
                  label: strings.FocusedVideoKeywordFieldLabel,
                  description: strings.FocusedVideoKeywordFieldDesc
                }),
                PropertyPaneTextField('primaryVideoKeyword', {
                  label: strings.PrimaryVideoKeywordFieldLabel,
                  description: strings.PrimaryVideoKeywordFieldDesc
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

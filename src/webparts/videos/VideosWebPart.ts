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


export default class VideosWebPart extends BaseClientSideWebPart<IVideosWebPartProps> {

  public render(): void {
  
    const element: React.ReactElement<IVideosProps> = React.createElement(
      Videos,
      {
        
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

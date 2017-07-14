import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';

import {
  IWebPartContext
} from '@microsoft/sp-webpart-base';


import { IVideoService } from './services/IVideoService'
import { MockVideoService } from './services/MockVideoService'
import { SPVideoService } from './services/SPVideoService'

// Responsible for instantiating various interfaces.
export class Factory{

    // Gets an instance of IVideoService.
    static GetVideoService(context: IWebPartContext) : IVideoService{

        if(Environment.type === EnvironmentType.Local) {
            return new MockVideoService();
        }
        else if (Environment.type === EnvironmentType.SharePoint) {
            return new SPVideoService(context);
        }

    }


}

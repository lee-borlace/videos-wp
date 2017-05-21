import * as React from 'react';
import styles from './Videos.module.scss';
import { IVideosProps } from './IVideosProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Videos extends React.Component<IVideosProps, void> {
  public render(): React.ReactElement<IVideosProps> {
    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-themeDark ms-fontColor-white ${styles.row}`}>
            <div className="ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1">
              <span className="ms-font-xl ms-fontColor-white">Welcome to SharePoint!</span>
              <p className="ms-font-l ms-fontColor-white">Web Title : {escape(this.props.webPartContext.pageContext.web.title)}</p>
              <p className="ms-font-l ms-fontColor-white">videosServerRelativeUrl : {escape(this.props.videosServerRelativeUrl)}</p>
              <p className="ms-font-l ms-fontColor-white">focusedVideoKeyword : {escape(this.props.focusedVideoKeyword)}</p>
              <p className="ms-font-l ms-fontColor-white">primaryVideoKeyword : {escape(this.props.primaryVideoKeyword)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link, withRouter, RouteComponentProps, Switch } from 'react-router-dom';

import { TrackPage, trackPagesConfig } from '../../configs/trackPages';

type DrawerBarParams = {};

type DrawerBarProps = RouteComponentProps<DrawerBarParams> & {
  currentTrack: string
};

type DrawerBarState = {
  currentPage: string
};

const closeButton = require('assets/img/track-panel/times-solid.svg');

class DrawerBar extends Component<DrawerBarProps, DrawerBarState> {
  readonly state: DrawerBarState = {
    currentPage: ''
  };

  changePage(page: string) {
    this.setState({ currentPage: name });

    const { match, currentTrack } = this.props;

    this.props.history.push(`${match.path}/track/${currentTrack}/${page}`);
  }

  render() {
    const trackPages: TrackPage[] = trackPagesConfig[this.props.currentTrack];

    return (
      <div className="drawer-bar">
        <dl className="page-list">
          {
            trackPages &&
            trackPages.map((page: TrackPage, index: number) => (
              <dt key={`${page.name}--${index}`}>
                <button onClick={() => this.changePage(page.name)}>{page.label}</button>
              </dt>
            ))
          }
        </dl>
        <Link className="close" to="/app/speciesbrowser">
          <img src={closeButton} alt="close drawer" />
        </Link>
      </div>
    );
  }
}

export default withRouter((props: DrawerBarProps) => <DrawerBar {...props} />);

import bookmarkIcon from 'assets/img/track-panel/bookmark.svg';
import bookmarkSelectedIcon from 'assets/img/track-panel/bookmark-selected.svg';

import downloadIcon from 'assets/img/track-panel/download.svg';
import downloadSelectedIcon from 'assets/img/track-panel/download-selected.svg';

import searchIcon from 'assets/img/track-panel/search.svg';
import searchSelectedIcon from 'assets/img/track-panel/search-selected.svg';

import ownDataIcon from 'assets/img/track-panel/own-data.svg';
import ownDataSelectedIcon from 'assets/img/track-panel/own-data-selected.svg';

import shareIcon from 'assets/img/track-panel/share.svg';
import shareSelectedIcon from 'assets/img/track-panel/share-selected.svg';

export type TrackPanelBarItem = {
  description: string;
  icon: {
    default: string;
    selected: string;
  };
  name: string;
};

export const trackPanelBarConfig: TrackPanelBarItem[] = [
  {
    description: 'search',
    icon: {
      default: searchIcon,
      selected: searchSelectedIcon
    },
    name: 'search'
  },
  {
    description: 'bookmark',
    icon: {
      default: bookmarkIcon,
      selected: bookmarkSelectedIcon
    },
    name: 'bookmark'
  },
  {
    description: 'download',
    icon: {
      default: downloadIcon,
      selected: downloadSelectedIcon
    },
    name: 'download'
  },
  {
    description: 'own data',
    icon: {
      default: ownDataIcon,
      selected: ownDataSelectedIcon
    },
    name: 'own-data'
  },
  {
    description: 'share',
    icon: {
      default: shareIcon,
      selected: shareSelectedIcon
    },
    name: 'share'
  }
];

import React from 'react';
import { ComponentProps, ControlButton, WithControls, WithStylesProps } from 'smart-builder-sdk';

import { DataStructure } from '../types';
import { getContentType, getSongId } from '../util';
import { Panel } from './control-panel';
import { Placeholder } from './placeholder';
import { SettingsIcon } from './settings-icon';
import { Overlay, Wrapper } from './styled';

const SpotifyComponent = ({ data, mode }: ComponentProps<DataStructure, WithStylesProps>) => {
  const { src, compact } = data;
  const songId = getSongId(src);
  const contentType = getContentType(src);

  return (
    <Wrapper hasSrc={!!songId}>
      {mode.type === 'edit' && <Overlay compact={compact} data-testid="overlay" />}
      {songId ? (
        <iframe
          style={{ borderRadius: '12px' }}
          title="Spotify Player"
          src={`https://open.spotify.com/embed/${contentType}/${songId}?utm_source=generator`}
          width="100%"
          height={compact ? '80' : '380'}
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      ) : (
        <Placeholder />
      )}
    </Wrapper>
  );
};

const label = 'Spotify';

export default WithControls(SpotifyComponent, [
  {
    id: 'design',
    label: label,
    Button: (props) => (
      <ControlButton label={label} active={false} {...props}>
        <SettingsIcon />
      </ControlButton>
    ),
    Panel,
  },
]);

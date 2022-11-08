import React, { useEffect, useState } from 'react';
import { Label } from 'smart-builder-components';
import { ControlPanelProps } from 'smart-builder-sdk';

import { DataStructure } from '../types';
import { getSongId } from '../util';
import { ControlsContainer, Error, Info, StyledCheckbox, StyledInputField } from './styled';

export const Panel = ({ data, dispatch }: ControlPanelProps<DataStructure>) => {
  const { src, compact } = data;
  const [tempSrc, setTempSrc] = useState(src);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const urlError = tempSrc && !tempSrc.includes('open.spotify.com');
    const musicIdError = tempSrc && !getSongId(tempSrc);

    if (urlError) {
      setErrorMessage(`Oops! That URL doesn't look like a Spotify song or playlist link.`);
    } else if (musicIdError) {
      setErrorMessage(`Oops! That URL doesn't contain a Spotify song or playlist ID.`);
    } else {
      setErrorMessage('');
    }
  }, [tempSrc]);

  const onUrlChange = () => {
    if (errorMessage) return;

    dispatch((api) => {
      api.get('src').set(tempSrc);
    });
  };

  const toggleCompactPlayer = () => {
    dispatch((api) => {
      api.get('compact').set(!compact);
    });
  };

  return (
    <ControlsContainer>
      <Label>Spotify URL</Label>
      <StyledInputField
        data-testid="spotify-input"
        value={tempSrc}
        onChange={(e) => setTempSrc(e.currentTarget.value)}
        onBlur={onUrlChange}
        placeholder="https://open.spotify.com/track/4IqBIufFMOV1sSYhzIPDoj?si=ee9e5b896e7b47de"
        hasValue={!!tempSrc}
        type="text"
        minimal
      />
      {errorMessage && <Error>{errorMessage}</Error>}
      <Info>Enter the URL for a Spotify song, album or playlist</Info>
      <Label>Settings</Label>
      <StyledCheckbox label="Compact Player" checked={compact} onClick={toggleCompactPlayer} />
    </ControlsContainer>
  );
};

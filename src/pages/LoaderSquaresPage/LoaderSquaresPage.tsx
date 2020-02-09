import React, { useEffect, useState } from 'react';
import { css } from 'emotion';
import WindowSizeListener from 'react-window-size-listener'
import { range } from 'lodash';
import { useParams, useHistory } from 'react-router-dom';

import { LoaderSquaresRow } from './components/LoaderSquaresRow';

const containerStyle = css`
  background-color: #F0F0F0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const PANEL_SIZE = 140;

export const LoaderSquaresPage = () => {
  const { nextPath } = useParams();
  const history = useHistory();
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setTimeout(() => history.replace(`/${nextPath}`), 5500)
  });
  const handleResize = (windowSize: any) => {
    setWindowHeight(windowSize.windowHeight);
    setWindowWidth(windowSize.windowWidth);
  };
  const numOfRows = windowHeight / PANEL_SIZE - 1;
  const numOfPanelsPerRow = windowWidth / PANEL_SIZE - 1;
  return (
    <div className={containerStyle}>
      <WindowSizeListener onResize={handleResize} />
      {range(numOfRows).map((index) => <LoaderSquaresRow numberOfPanels={numOfPanelsPerRow} key={index} />)}
    </div>
  );
};

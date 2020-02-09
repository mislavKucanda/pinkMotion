import React from 'react';
import { range } from 'lodash';
import { css } from 'emotion';

import { Panel } from '../../../components/Panel';

const containerStyle = css`
  display: flex;
  flex-direction: row;
`;

export const LoaderSquaresRow = ({ numberOfPanels }: { numberOfPanels: number }) => {
  return (
    <div className={containerStyle}>
      {range(numberOfPanels).map((index) => <Panel key={index} animated />)}
    </div>
  );
};

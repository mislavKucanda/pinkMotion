import React from 'react';
import { css } from 'emotion';
import { motion } from 'framer-motion'

import { Panel } from '../components/Panel';

const containerStyle = css`
  background-color: #B3B3B3;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const contentStyle = css`
  height: 100vw;
  width: 100vw;
  padding: 40px;
  border-radius: 20px;
  background-color: #F0F0F0;
`;

export const AboutPage = () => {
  return (
    <div className={containerStyle}>
      <motion.div
        className={contentStyle}
        animate={{ width: 500, height: 500 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <Panel />
        <Panel />
        <Panel />
      </motion.div>
    </div>
  );
};

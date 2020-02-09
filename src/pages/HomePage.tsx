import React, { useState } from 'react';
import { css } from 'emotion';
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

import { Panel } from '../components/Panel';

const circleIcon = require('../icons/circle-icon@3x.png');
const squareIcon = require('../icons/square-icon@3x.png');
const triangleIcon = require('../icons/triangle-icon@3x.png');
const headerImage = require('../icons/logo@3x.png');
const circleToKitGif = require('../gifs/circle-to-kit-no-loop.gif');
const squareToDevelopGif = require('../gifs/square-to-develop-one-loop.gif');
const triangleToMaintainGif = require('../gifs/triangle-to-maintain-no-loop.gif');

const containerStyle = css`
  background-color: #B3B3B3;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const contentStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  background-color: #F0F0F0;
  padding: 30px;
`;

const headerStyle = css`
  font-size: 30px;
  margin: 35px 0;
  border-radius: 15px;
  transition: all 500ms ease;
  display: flex;
`;

const panelsContainerStyle = css`
  display: flex;
`;

const iconStyle = css`
  width: 40px;
  height: 40px;
`;

const gifStyle = css`
  width: 60px;
  height: 60px;
`;

const headerImageStyle = css`
  width: 300px;
`;

export const HomePage = () => {
  const history = useHistory();
  const [isFirst, setIsFirst] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);
  const [hasEnteredCircle, setHasEnteredCircle] = useState(false);
  const [hasEnteredSquare, setHasEnteredSquare] = useState(false);
  const [hasEnteredTriangle, setHasEnteredTriangle] = useState(false);
  const handleClick = () => {
    setIsFirst(true);
  };
  const variants = {
    first: { opacity: [0, 0] },
    second: { height: 100, width: 100, borderRadius: '50%', rotate: 180 },
    third: { scale: 10 },
  };
  return (
    <div className={containerStyle}>
      <motion.div
        className={contentStyle}
        animate={isSecond ? 'second' : (isThird ? 'third' : undefined)}
        variants={variants}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
        onAnimationComplete={() => {
          setIsThird(true);
          setIsSecond(false);
          setTimeout(() => history.push('/loading/about'), 800);
        }}
      >
        <motion.div
          className={headerStyle}
          whileTap={{ scale: 0.9 }}
          animate={isFirst ? 'first' : undefined}
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          variants={variants}
          onAnimationComplete={() => setIsSecond(true)}
        >
          <img className={headerImageStyle} src={headerImage} alt="presentation" />
        </motion.div>
        <motion.div
          className={panelsContainerStyle}
          animate={isFirst ? 'first' : undefined}
          transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          variants={variants}
        >
          <motion.div onMouseEnter={() => setHasEnteredCircle(true)} onMouseLeave={() => setHasEnteredCircle(false)}>
            <Panel onClick={handleClick} text="Design">
              {hasEnteredCircle ?
                <img className={gifStyle} src={circleToKitGif} alt="presentation" /> :
                <img className={iconStyle} src={circleIcon} alt="presentation" />}
            </Panel>
          </motion.div>
          <motion.div onMouseEnter={() => setHasEnteredSquare(true)} onMouseLeave={() => setHasEnteredSquare(false)}>
            <Panel onClick={handleClick} text="Development">
              {hasEnteredSquare ?
                <img className={gifStyle} src={squareToDevelopGif} alt="presentation" /> :
                <img className={iconStyle} src={squareIcon} alt="presentation" />}
            </Panel>
          </motion.div>
          <motion.div onMouseEnter={() => setHasEnteredTriangle(true)} onMouseLeave={() => setHasEnteredTriangle(false)}>
            <Panel onClick={handleClick} text="Maintenance">
              {hasEnteredTriangle ?
                <img className={gifStyle} src={triangleToMaintainGif} alt="presentation" /> :
                <img className={iconStyle} src={triangleIcon} alt="presentation" />}
            </Panel>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

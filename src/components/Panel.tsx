import React, { ReactNode, useState } from 'react';
import { css } from 'emotion';
import { motion } from 'framer-motion'

const containerStyle = css`
  width: 120px;
  display: flex;
  flex-direction: column;
`;

const panelStyle = animated => css`
  width: 90px;
  height: 90px;
  transition: all 800ms ease;
  border-radius: 20px;
  ${animated ? '' : 'cursor: pointer;'}
  :hover {
    box-shadow:
      -9px -9px 10px 0 rgb(255, 255, 255),
      9px 9px 10px 0 rgb(142, 142, 142, 0.75);
  }
  ${animated ? `
    box-shadow:
      -9px -9px 10px 0 rgb(255, 255, 255),
      9px 9px 10px 0 rgb(142, 142, 142, 0.75);
    opacity: 0;` : ''}
  margin: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const textStyle = css`
  min-height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: rgb(48,48,48);
  opacity: 0;
`;

interface IPanel {
  children?: ReactNode;
  hoverChild?: ReactNode;
  onClick?(): void;
  animated?: boolean;
  text?: string;
}

export const Panel = ({ children, onClick, animated, hoverChild, text }: IPanel) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={containerStyle}>
      <motion.div
        className={panelStyle(animated)}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96], delay: Math.random() * 3 }}
        animate={animated && Math.random() > 0.4 ? {
          opacity: [0, 1, 1, 0]
        } : undefined}
      >
        {isHovered ? (hoverChild || children) : children}
      </motion.div>
      {text && !isHovered && <motion.div className={textStyle} />}
      {text && isHovered && (
        <motion.div
          className={textStyle}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          animate={{ opacity: 1 }}
        >
          {text}
        </motion.div>)}
    </div>
  );
};

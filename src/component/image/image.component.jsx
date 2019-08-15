import React from 'react';
import { StyledImage } from './image.styled';

const Image = ({ src, alt, onClick }) => {
  return <StyledImage path={src} title={alt} onClick={() => onClick(src)} />;
};

export default Image;

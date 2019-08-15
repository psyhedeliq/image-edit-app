import React, { useEffect, useState } from 'react';
import data from './data';
import Image from '../image';
import { visionApiURL, API_KEY } from './image-collection.const';
import vision from 'react-cloud-vision-api';
import { StyledImageCollection } from './image-collection.styled';

const ImageCollection = () => {
  const [currentImage, setCurrentImage] = useState('');
  const { imageFiles } = data;
  // console.log(data);
  // console.log(imageFiles);

  useEffect(() => {
    console.log(visionApiURL);
    if (currentImage) {
      /**
       * Apparently this part requires Node.js for implementation and I will be happy to sharpen my skills with Node.js
       vision.init({ auth: API_KEY });
       const req = new vision.Request({
         image: new vision.Image(currentImage),
         features: [new vision.Feature('FACE_DETECTION', 4)]
       });
 
       vision.annotate(req).then(response => {
         console.log(response);
       });
       */
    }
  }, [currentImage]);

  const handleClick = path => {
    setCurrentImage(path);
  };

  /**
   *
   * @param {string} partialFilePath we will prefix this path with the storage domain from google
   * @param {string} type (path | alternative) we want either the path for our source ot the alternative for accessability
   */
  const getImage = (partialFilePath, type) =>
    type === 'path'
      ? `https://storage.googleapis.com/${partialFilePath}`
      : partialFilePath.split('/').pop();

  return (
    <div>
      <StyledImageCollection>
        {imageFiles
          .filter(imageFile =>
            ['jpg', 'png'].includes(
              imageFile
                .split('/')
                .pop()
                .split('.')[1]
            )
          )
          .map(imageFile => (
            <Image
              key={imageFile}
              src={getImage(imageFile, 'path')}
              alt={getImage(imageFile, 'alternative')}
              onClick={handleClick}
            />
          ))}
      </StyledImageCollection>
    </div>
  );
};

export default ImageCollection;

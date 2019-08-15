import React from 'react';
import { render } from 'react-dom';
import HelixApp from './component/app';

const selectDiv = document.querySelector('#react-will-render-here');

render(<HelixApp />, selectDiv);

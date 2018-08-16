import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Swatch from './Swatch';

storiesOf('Swatch', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Swatch title="Pantone" color="#f6dbd8" colorName="Rose Water" />
  ))
  .add('with link', () => (
    <Swatch title="Spotify" color="#1DB954" colorName="Green" link="https://www.google.com"/>
  ));

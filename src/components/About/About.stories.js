import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import About from './About';

storiesOf('About', module)
  .addDecorator(StoryRouter())
  .add('default', () => <About />);

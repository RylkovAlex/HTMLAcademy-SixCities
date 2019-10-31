import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';
import {MemoryRouter} from 'react-router';
import {offerCardForTests} from '../../prop-types/prop-types';
import {createNodeMock} from '../../utils/utils';

jest.mock(`../offer-page/offer-page.jsx`, () => jest.fn().mockReturnValue(null));
jest.mock(`../main/main.jsx`, () => jest.fn().mockReturnValue(null));

it(`App correctly renders after relaunch`, () => {
  const props = {
    offerCards: [offerCardForTests]
  };

  const tree = renderer
    .create(
        <MemoryRouter>
          <App {...props}/>
        </MemoryRouter>,
        {createNodeMock}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
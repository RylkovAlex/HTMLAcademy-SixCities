import React from 'react';
import renderer from 'react-test-renderer';
import {OfferPage} from './offer-page';
import {offerCardForTests} from '../../prop-types/prop-types';

const copmponentsToMock = {
  OffersList: `../offers-list/offers-list.jsx`,
  ReviewsList: `../reviews-list/reviews-list.jsx`,
  Header: `../header/header.jsx`,
  Map: `../map/map.jsx`,
  OfferCard: `../offer-card/offer-card.jsx`,
};

// TODO: не работает
const modules = Object.values(copmponentsToMock);
for (let i = 0; i < modules.length; i++) {
  jest.mock(modules[i], () => jest.fn().mockReturnValue(null));
}
jest.mock(`../map/map.jsx`, () => jest.fn().mockReturnValue(null));

it(`OfferPage correctly renders after relaunch`, () => {
  const props = {
    offers: [offerCardForTests],
    reviews: [],
    match: {
      params: {
        id: `0`,
      }
    },
    changeActiveCard: jest.fn(),
  };

  const tree = renderer
    .create(<OfferPage {...props}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

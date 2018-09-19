import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';

describe('<Header />', () => {
  it('should render a NavBar', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find('NavBar').length).toEqual(1);
  });
});

import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Logo from '../Logo';

describe('<Logo />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer
      .create(<Logo src="http://example.com/test.jpg" alt="test" />)
      .toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const renderedComponent = mount(
      <Logo src="http://example.com/test.jpg" alt="test" />,
    );
    expect(renderedComponent.find('img').prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const renderedComponent = mount(
      <Logo src="http://example.com/test.jpg" alt="test" />,
    );
    expect(renderedComponent.find('img').prop('alt')).toEqual('test');
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = mount(
      <Logo src="http://example.com/test.jpg" attribute="test" alt="test" />,
    );
    expect(renderedComponent.find('img').prop('attribute')).toBeUndefined();
  });
});

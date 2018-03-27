import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Footer from '../../../app/components/Footer';

describe('<Footer />', () => {
  it('should be correct color style', () => {
    const tree = renderer.create(<Footer />).toJSON();

    expect(tree).toHaveStyleRule('color', '#5d5d5d');
  });
});

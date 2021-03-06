import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import {Header} from './header';
import {Clock} from 'app/components/clock/clock';

chai.use(require('chai-enzyme')());

describe('Header', () => {
  let header;

  beforeEach(() => {
    header = shallow(<Header/>);
  });

  it('should be a footer', () => {
    expect(header).to.have.tagName('header');
  });

  it('has proper styling', () => {
    expect(header.find('p')).to.have.className('title');
  });

  it('contains the proper title', () => {
    expect(header.find('p')).to.contain('Rocketrip Calendar');
  });

  it('includes a Clock', () => {
    expect(header).to.contain(<Clock/>);
  });
});

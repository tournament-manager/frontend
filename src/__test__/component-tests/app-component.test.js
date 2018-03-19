'use strict';
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from '../../components/app';


configure({adapter: new Adapter()});

describe('App tests', function (){

  describe('App shallow mount', () => {

    beforeAll(() => this.component = shallow(<App />));
    afterAll(() => this.component.unmount());

    it('should render an App component', () => {
      expect(this.component.length).toEqual(1);
      expect(this.component.find('main').length).toEqual(1);
      expect(this.component.find('h1').length).toEqual(1);
    });
  });
});
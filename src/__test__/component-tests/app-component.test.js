'use strict';

const shallow = require('enzyme');
const configure = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const App = require('../../components/app');


configure({adapter: new Adapter()});

describe('App tests', function (){

  describe('App shallow mount', () => {

    beforeAll(() => this.component = shallow(App));
    afterAll(() => this.component.unmount());

    it('should render an App component', () => {
      expect(this.component.length).toEqual(1);
      expect(this.component.find('main').length).toEqual(1);
      expect(this.component.find('h1').length).toEqual(1);
    });
  });
});

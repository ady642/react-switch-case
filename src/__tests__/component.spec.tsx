import * as React from "react";
import { Switch, Case } from "..";
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';

configure({adapter: new Adapter()});

let wrapper = null

const createWrapper = (componentName = '') => mount(<Switch componentName={componentName} defaultComponent={<div>Default component</div>}>
    <Case value={'HelloComponent'}><div>Hello</div></Case>
    <Case value={'ByeComponent'}><div>Bye</div></Case>
</Switch>);

describe("Component should show 'red' text 'Hello World'", () => {
    it('Switch should render Hello if HelloComponent is the componentName', () => {
        wrapper = createWrapper('HelloComponent')

        expect(wrapper.text()).toEqual('Hello')
    })
    it('Switch should render Bye if ByeComponent is the componentName', () => {
        wrapper = createWrapper('ByeComponent')

        expect(wrapper.text()).toEqual('Bye')
    })
    it('Switch should render the defaultComponent if the componentName does not match any Case', () => {
        wrapper = createWrapper('OtherComponent')

        expect(wrapper.text()).toEqual('Default component')
    })
});

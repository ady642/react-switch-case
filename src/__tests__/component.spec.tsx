import * as React from "react";
import { Switch, Case } from "..";
import {render} from "@testing-library/react";
import { describe, it, expect } from "vitest";

let wrapper = null

const createWrapper = (componentName = '') => render(<Switch componentName={componentName} defaultComponent={<div>Default component</div>}>
    <Case value={'HelloComponent'}><div>Hello</div></Case>
    <Case value={'ByeComponent'}><div>Bye</div></Case>
</Switch>);

describe("Component should show 'red' text 'Hello World'", () => {
    it('Switch should render Hello if HelloComponent is the componentName', () => {
        wrapper = createWrapper('HelloComponent')

        expect(wrapper.getAllByText('Hello')).toBeDefined()
    })
    it('Switch should render Bye if ByeComponent is the componentName', () => {
        wrapper = createWrapper('ByeComponent')

        expect(wrapper.getAllByText('Bye')).toBeDefined()
    })
    it('Switch should render the defaultComponent if the componentName does not match any Case', () => {
        wrapper = createWrapper('OtherComponent')

        expect(wrapper.getAllByText('Default component')).toBeDefined()
    })
});

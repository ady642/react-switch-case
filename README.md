# React Switch Case Module

Switch component to easy make conditional rendering

### First install the package:
```
npm install react-switch-case-module
```

### And import the module:
```
import { Switch, Case } from 'react-switch-case-module';
```

### Then you can use it:

```
<Switch 
    componentName={'HelloComponent'} 
    defaultComponent={<div>Default component</div>}
>
    <Case value={'HelloComponent'}><div>Hello</div></Case>
    <Case value={'ByeComponent'}><div>Bye</div></Case>
</Switch>
```

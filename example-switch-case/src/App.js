import { Switch, Case } from 'react-switch-case'

function App() {
  return (
    <div className="App">
      <Switch componentName={'HelloComponent'} defaultComponent={<div>Default component</div>}>
          <Case value={'HelloComponent'}>Hello</Case>
          <Case value={'ByeComponent'}>Bye</Case>
      </Switch>
    </div>
  );
}

export default App;

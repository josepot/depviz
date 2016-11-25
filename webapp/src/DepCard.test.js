import React from 'react';
import ReactDOM from 'react-dom';
import DepCard from './DepCard';


it('asana.com renders without crashing', () => {
  const svg = document.createElement('svg');
  ReactDOM.render(
    <DepCard
      cx={40} cy={30}
      host="asana.com"
      slug="asana.com/jbenet/depviz#1"
      title="depviz v0: single page rendering"
      href="https://asana.com/jbenet/depviz/issues/1"
      dependencies={5}
      related={1}
      dependents={20}
      done={false} />,
    svg
  );
});

it('github.com renders without crashing', () => {
  const svg = document.createElement('svg');
  ReactDOM.render(
    <DepCard
      cx={40} cy={30}
      host="github.com"
      slug="github.com/jbenet/depviz#1"
      title="depviz v0: single page rendering"
      href="https://github.com/jbenet/depviz/issues/1"
      dependencies={5}
      related={1}
      dependents={20}
      done={false} />,
    svg
  );
});

it('gitlab.com renders without crashing', () => {
  const svg = document.createElement('svg');
  ReactDOM.render(
    <DepCard
      cx={40} cy={30}
      host="gitlab.com"
      slug="gitlab.com/jbenet/depviz#1"
      title="depviz v0: single page rendering"
      href="https://gitlab.com/jbenet/depviz/issues/1"
      dependencies={5}
      related={1}
      dependents={20}
      done={false} />,
    svg
  );
});

it('example.com host crashes', () => {
  const svg = document.createElement('svg');
  expect(() => ReactDOM.render(
    <DepCard
      cx={40} cy={30}
      host="example.com"
      slug="example.com/jbenet/depviz#1"
      title="depviz v0: single page rendering"
      href="https://gitlab.com/jbenet/depviz/issues/1"
      dependencies={5}
      related={1}
      dependents={20}
      done={false} />,
    svg
  )).toThrowError('unrecognized host: example.com');
});

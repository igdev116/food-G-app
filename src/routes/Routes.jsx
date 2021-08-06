import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import routesConfig from "configs/routesConfig";

import styled from "styled-components";

const Loading = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 80px 30px 30px;
`;

function Routes() {
  return (
    <Suspense fallback={<Loading>Loading ... 🍔🍔🍔</Loading>}>
      <Switch>
        {routesConfig.map(({ exact, path, component }, index) => (
          <Route
            key={`route-${index}`}
            path={path}
            component={component}
            exact={exact}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

export default Routes;

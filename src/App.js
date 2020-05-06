import React from "react";
import { Reset } from "styled-reset";
import { Switch, Route } from "react-router-dom";

import {
  GlobalStyles
} from "./styles";
import Main from './views/Main/index.jsx';

const Routes = () => (
   <React.Fragment>
      <Reset />
      <GlobalStyles />
         <Switch>
            <Route exact component={Main} path="/" />
         </Switch>
    </React.Fragment>
)

export default Routes;
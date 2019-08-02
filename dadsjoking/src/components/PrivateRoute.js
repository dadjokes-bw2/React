import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function(props) {
    const {
        component: Component,
        ...rest
    } = props

    // rest === {exact: true, path: '/'}
  return (
    <Route {...rest}
      render={() => {
        // get a value that is currently saved in our browser's local storage
        const token = localStorage.getItem("token");

        return token
            ? <Component />// original component
            : <Redirect to = '/login'/>// redirect the user
      }}
    />
  );
}

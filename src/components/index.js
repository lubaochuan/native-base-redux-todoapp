import React, { Component } from "react";
import Container from "../AppContainer.js";
import TodoEdit from "./TodoEdit.js";
import { StackNavigator } from "react-navigation";
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';

export default (MainScreenNavigator = StackNavigator({
  Main: { screen: Container},
  Edit: { screen: withMappedNavigationAndConfigProps(TodoEdit) },
}));

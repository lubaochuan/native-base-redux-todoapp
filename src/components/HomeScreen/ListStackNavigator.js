import React, { Component } from "react";
import ListContainer from "./ListContainer.js";
import TodoEdit from "./TodoEdit.js";
import Detail from "./Detail.js";
import { StackNavigator } from "react-navigation";
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';

export default (ListStackNavigator = StackNavigator({
  Main: { screen: ListContainer},
  Edit: { screen: withMappedNavigationAndConfigProps(TodoEdit) },
  Detail: { screen: withMappedNavigationAndConfigProps(Detail) },
}));

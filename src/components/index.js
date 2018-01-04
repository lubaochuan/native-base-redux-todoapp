import React, { Component } from "react";
import Container from "../AppContainer.js";
import TodoEdit from "./TodoEdit.js";
import { StackNavigator } from "react-navigation";

export default (MainScreenNavigator = StackNavigator({
  Main: { screen: Container},
  Edit: { screen: TodoEdit },
}));

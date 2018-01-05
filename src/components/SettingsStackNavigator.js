import React, { Component } from "react";
import Settings from "./Settings.js";
import SettingsEdit from "./SettingsEdit.js";
import Detail from "./Detail.js";
import { StackNavigator } from "react-navigation";
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';

export default (SettingsStackNavigator = StackNavigator({
  Settings: { screen: Settings},
  SettingsEdit: { screen: withMappedNavigationAndConfigProps(SettingsEdit) }
}));

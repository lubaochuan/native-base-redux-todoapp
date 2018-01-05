import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import ListStackNavigator from './ListStackNavigator'
import SettingsStackNavigator from './SettingsStackNavigator'
import SubjectContainer from './SubjectContainer'

export default (MainTabNavigator = TabNavigator(
  {
    List: { screen: ListStackNavigator },
    Settings: { screen: SubjectContainer }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              transparent
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("List")}>
              <Icon name="list" />
            </Button>
            <Button
              transparent
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Settings")}>
              <Icon name="settings" />
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  }
));

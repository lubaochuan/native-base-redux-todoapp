import React, { Component } from "react";
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import MainScreenNavigator from './MainScreenNavigator';
import Settings from './Settings';

export default (MainTabNavigator = TabNavigator(
  {
    List: { screen: MainScreenNavigator },
    Settings: { screen: Settings }
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

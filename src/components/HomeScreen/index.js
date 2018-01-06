import React, { Component } from "react"

import ListStackNavigator from './ListStackNavigator'
import SubjectContainer from "../SubjectScreen/SubjectContainer.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";

const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: ListStackNavigator },
    Subjects: { screen: SubjectContainer },
  },
  {
    contentComponent: props => <SideBar {...props} />,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)

export default HomeScreenRouter

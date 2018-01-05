import React, { Component } from "react"
import SubjectContainer from './SubjectContainer'
import { StackNavigator } from "react-navigation"

const SubjectScreenRouter = StackNavigator({
  Subjects: { screen: SubjectContainer },
})

export default SubjectScreenRouter

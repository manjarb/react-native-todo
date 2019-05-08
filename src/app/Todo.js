import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  AppRegistry,
  StyleSheet,
  TouchableHighlight
} from 'react-native'

export default class Todo extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange = (value) => {
    this.setState({
      ...this.state,
      newTodo: value
    })
  }

  handlePress = () => {
    console.log(this.state.newTodo)
    const currentTodos = this.state.todos.slice();
    currentTodos.push(this.state.newTodo);
    this.setState({
      ...this.state,
      newTodo: '',
      todos: currentTodos
    })
  }

  render() {
    console.log(this.state, ' :statee ')

    return (
      <View>
        <TextInput
          value={this.state.newTodo}
          placeholder="Type here 2"
          onChangeText={this.handleChange}
        />
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Create</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo, index) => <Text key={todo + '-' + index}> {todo}</Text>)}
      </View>
    )
  }
}
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CEE0DC'
  },
  input: {
    height: 60,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 0,
    marginLeft: 10,
    backgroundColor: '#B9CFD4',
    textAlign: 'left',
    borderRadius: 2
  },
  button: {
    backgroundColor: '#A5243D',
    height: 60,
    width: 60,
    margin: 10,
    padding: 10,
    borderRadius: 2
  }
})

export default class SomethingToMeditateOn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onClick = (e) => {
      console.log(this.state.value)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, textAlign: 'center', color: '#B9CFD4'}}>
            Something to meditate on
          </Text>
        </View>
        <View style={{height: 60, marginBottom: 30}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'stretch'}}>
            <TextInput
              value={this.state.value}
              onChangeText={value => this.setState({value})}
              placeholder='Enter your response here'
              style={styles.input}
             />
            <View style={styles.button} onClick={this.onClick} />
          </View>
        </View>
      </View>
    )
  }
}

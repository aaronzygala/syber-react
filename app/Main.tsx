import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BubbleDV from './BubbleDV'; // Import the BubbleDV component
import BubbleEmitter from './BubbleEmitter'; // Import the BubbleEmitter class
import { requestPermissions } from 'react-native-permissions'; // Import the permissions library (replace with your chosen library)
import { NavigationContainer } from '@react-navigation/native'; // Import the navigation library (replace with your chosen library)

class MainActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      screenWidth: 0,
    };
    this.dv = new BubbleDV(); // Create an instance of the BubbleDV component
  }

  async componentDidMount() {
    await requestPermissions([
      'bluetoothConnect', // Replace with the appropriate permission string
      'bluetoothScan', // Replace with the appropriate permission string
    ]);

    const { height, width } = Dimensions.get('window');
    this.setState({ screenHeight: height, screenWidth: width });

    // You can initialize other components and states here
  }

  render() {
    const { screenHeight, screenWidth } = this.state;

    return (
      <NavigationContainer>
        <View style={styles.container}>
          {/* Render your components here */}
          <BubbleEmitter
            dv={this.dv}
            handler={this.handler}
            layout={this.layout}
          />

          <Text style={styles.titleText}>Your Title</Text>
          <Image source={require('./logo.png')} style={styles.logo} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    marginVertical: 10,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MainActivity;
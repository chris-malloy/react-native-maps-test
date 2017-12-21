/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import App from './App';

export default class MapExample extends Component {
	render() {
		return (
			<View>
				<Text style={styles.header}>City Runner</Text>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={styles.container}
					initialRegion={{
					latitude: 39.7392,
					longitude: -104.9903,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
					}}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		marginTop: 30,
		textAlign: 'center',
		fontSize: 40,
	},
	container: {
		height: '70%',
		width: '100%',
	}
});

AppRegistry.registerComponent('MapExample', () => MapExample);

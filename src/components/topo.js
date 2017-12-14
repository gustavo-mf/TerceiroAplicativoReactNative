import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const imagem = require('../../imgs/jokenpo.png');

const styles = StyleSheet.create({
	img: {
		alignSelf: 'stretch',
		width: undefined
	}
});

class Topo extends Component {
	render() {
		return (
			<View>
				<Image style={styles.img} source={imagem}/>
			</View>
		);
	}
}

export default Topo;

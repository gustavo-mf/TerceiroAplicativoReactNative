import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const images = {
	'pedra': require('../../imgs/pedra.png'),
	'papel': require('../../imgs/papel.png'),
	'tesoura': require('../../imgs/tesoura.png')
};

const styles = StyleSheet.create({
	icone: {alignItems: 'center'},
	escolhas: {
		marginTop: 10,
		fontSize: 18
	},
	imgEscolha: { marginTop: 10 }
});

class Icone extends Component {
	render() {
		if (this.props.escolha != '') {
			return (
				<View style={styles.icone}>
					<Text style={styles.escolhas}>Escolha do {this.props.jogador}</Text>
					<Image style={styles.imgEscolha} source={images[this.props.escolha]} />
				</View>
			);
		}
		return false;
	}
}

export default Icone;

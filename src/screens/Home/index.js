import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from './styles';
import { Input } from './styles'; 

import Header from '../../components/Header';

export default function Screen() {
    return (
        <Container>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="#472253"
            />
            <Header />
        </Container>
        <Input />
    );
}

Screen.navigationOptions = () => {
    return {
        header: null
    };
}
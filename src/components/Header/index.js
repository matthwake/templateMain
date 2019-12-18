import React from 'react';

import { Container, Top, Title, SubTitle } from './styles';

export default function Header() {
    return (
        <Container>
            <Top>
                <Title>Hello Template!</Title>
                <SubTitle>version 1.0</SubTitle>
            </Top>
        </Container>
    );
}
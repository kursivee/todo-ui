import React from 'react';
import { View, Text } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from '../components/home/Home';

const MainNavigation = () => (
    <Router>
        <Stack key="root">
            <Scene key="home" component={Home} title="Home" initial />
        </Stack>
    </Router>
)

export default MainNavigation;

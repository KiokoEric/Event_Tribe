import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

const Home = () => {
return (
    <ImageBackground source={require('../assets/Images/Home_Page.png')} style={{ display: 'flex', flexDirection: 'column', gap: 60, alignItems: 'center', justifyContent: 'center', margin: 'auto', height: 850, paddingHorizontal: 20,  width: 420 }}>
        <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 28, textAlign: 'center'}} >Welcome to the Event Tribe.</Text>
        <Text style={{ color: 'white', fontFamily: 'InstrumentSerif', fontSize: 20, textAlign: 'center'}} >Event Tribe is a user-friendly platform designed to streamline the process of discovering, booking, and managing events. Whether it's concerts, conferences, sports, festivals, or local gatherings, the app allows users to browse upcoming events as well as purchase necessary tickets.</Text>
        <Text style={{ backgroundColor: 'black', borderRadius: 5, color: 'white', fontFamily: 'InstrumentSerif', fontSize: 20, textAlign: 'center', minWidth: 180, paddingVertical: 10, paddingHorizontal: 10 }} >Get Started</Text>
    </ImageBackground>
)
}

export default Home

const styles = StyleSheet.create({

})
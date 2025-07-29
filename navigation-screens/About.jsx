import { View, Text } from 'react-native';
import React from 'react';

const About = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 30, fontWeight:'bold'}}>About</Text>
     <Text style={{ fontSize: 18, lineHeight: 26, color: '#004D40', backgroundColor: '#FFFFFF', padding: 15, borderRadius: 10, textAlign: 'center' }}>
        📘 <Text style={{ fontWeight: 'bold' }}>About This App:</Text> This application is designed to provide clear and concise explanations of complex tech terms. Whether you're learning programming or exploring new tech, this app simplifies it all with beautiful UI and instant definitions.
      </Text>

    </View>
  );
};

export default About;
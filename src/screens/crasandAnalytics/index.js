import React, {useEffect, useState} from 'react';
import {
  View,
  Button,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';
import {firebaseService} from '../../helpres/index';

export default function crasandAnalytic() {
  useEffect(() => {
    crashlytics().log('App mounted.');
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  return (
    <View>
      <Button title="Test Crashlytics" onPress={() => crashlytics().crash()} />
      <TouchableOpacity
        title="Add To cart"
        onPress={async () => {
          await analytics().logEvent('Lob', {
            id: 322750561,
            item: 'Still One',
            description: ['round neck', 'long sleeved'],
            size: 'XL',
          });
          console.log(await messaging().getToken());
        }}>
        <Text style={styles.text}>Analytics</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fotnsize: 20,
    height: 48,
    width: 328,
    padding: 10,
    left: 16,
    marginHorizontal: 130,
    marginTop: 20,
    margin: 5,
  },
});

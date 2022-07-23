import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import crashlytics from '@react-native-firebase/crashlytics';

Geolocation.setRNConfiguration({
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 10000,
});

export default function Maps() {
  const [position, setPosition] = useState({});
  const requestPermission = React.useCallback(async () => {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        const resRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        console.log(resRequest);
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  }, []);

  useEffect(() => {
    crashlytics().log('map error');
    requestPermission();
  }, [requestPermission]);

  Geolocation.getCurrentPosition(info => {
    setPosition({
      lat: info.coords.latitude,
      long: info.coords.longitude,
    });
  });

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: position.lat ?? -6.84516,
        longitude: position.long ?? 107.92035,
        latitudeDelta: 0.09,
        longitudeDelta: 0.04,
      }}
      style={{width: 500, height: 700}}>
      <Marker
        coordinate={{
          latitude: position.lat ?? -6.84516,
          longitude: position.long ?? 107.92035,
        }}
      />
    </MapView>
  );
}

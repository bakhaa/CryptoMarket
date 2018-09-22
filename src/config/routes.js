import { Navigation } from 'react-native-navigation';

import ScreenCrypto from '../screens/ScreenCrypto';
import ScreenItemCrypto from '../screens/ScreenItemCrypto';
import ScreenSettings from '../screens/ScreenSettings';

export default (store, Provider) => {
  Navigation.registerComponent('ScreenCrypto', () => ScreenCrypto, store, Provider);
  Navigation.registerComponent('ScreenItemCrypto', () => ScreenItemCrypto, store, Provider);
  Navigation.registerComponent('Settings', () => ScreenSettings, store, Provider);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Crypto',
        screen: 'ScreenCrypto',
        icon: require('../images/icon2.png'),
        selectedIcon: require('../images/icon2_selected.png'),
        title: 'Market Data',
      },
      {
        label: 'Settings',
        screen: 'Settings',
        icon: require('../images/icon1.png'),
        selectedIcon: require('../images/icon1_selected.png'),
        title: 'Settings',
      },
    ],
  });
};

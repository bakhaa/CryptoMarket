import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import ScreenCrypto from '../screens/ScreenCrypto';
import ScreenItemCrypto from '../screens/ScreenItemCrypto';
import ScreenSettings from '../screens/ScreenSettings';

async function prepareIcons() {
  const icons = await Promise.all([
    Icon.getImageSource('ios-git-network', 30),
    Icon.getImageSource('ios-options', 30),
  ]);
  const [home, options] = icons;
  return { home, options };
}

export default async (store, Provider) => {
  const icons = await prepareIcons();
  Navigation.registerComponent('ScreenCrypto', () => ScreenCrypto, store, Provider);
  Navigation.registerComponent('ScreenItemCrypto', () => ScreenItemCrypto, store, Provider);
  Navigation.registerComponent('Settings', () => ScreenSettings, store, Provider);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Crypto',
        screen: 'ScreenCrypto',
        icon: icons.home,
        title: 'Market Data',
      },
      {
        label: 'Settings',
        screen: 'Settings',
        icon: icons.options,
        title: 'Settings',
      },
    ],
  });
};

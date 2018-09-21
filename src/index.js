import { Navigation } from 'react-native-navigation';

import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import ScreenSettings from './screens/ScreenSettings';

export default () => {
  Navigation.registerComponent('Screen1', () => Screen1);
  Navigation.registerComponent('Screen2', () => Screen2);
  Navigation.registerComponent('Settings', () => ScreenSettings);

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Лента',
        screen: 'Screen1',
        icon: require('./images/icon2.png'),
        selectedIcon: require('./images/icon2_selected.png'),
        title: 'Лента'
      },
      {
        label: 'Настройки',
        screen: 'Settings',
        icon: require('./images/icon1.png'),
        selectedIcon: require('./images/icon1_selected.png'),
        title: 'Настройки'
      }
    ]
  });
};

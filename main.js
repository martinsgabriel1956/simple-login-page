import './public/styles/index';

import { Card } from './src/components/card';
import { SwitchThemeBtn } from './src/components/SwitchThemeBtn';

import { switchTheme } from './public/scripts/switch-theme';

const app = document.querySelector('#app');

const imgBg = document.createElement('img');

imgBg.classList.add('bg');

app.insertAdjacentHTML('beforeend', Card());
app.insertAdjacentElement('beforeend', imgBg);
app.insertAdjacentHTML('beforeend', SwitchThemeBtn());

switchTheme();
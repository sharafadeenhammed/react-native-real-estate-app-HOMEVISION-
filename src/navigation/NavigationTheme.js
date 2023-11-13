import react from 'react';

import colors from '../config/colors';
import {DefaultTheme} from '@react-navigation/native';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.neutral,
    card: colors.neutral,
    text: colors.primary,
  },
};

export default defaultTheme;

import {StyleSheet, Text, View} from 'react-native';

import colors from '../config/colors';
import Icon from './Icon';
const FlashMessage = ({style, message, type}) => {
  // check if type is error ...
  if (type === 'error')
    return (
      <View style={[styles.errorContainer, style]}>
        <Icon
          size={40}
          name="times-circle"
          color={colors.red}
          backgroundColor=""
        />
        <Text style={styles.errorText}>{message}</Text>
      </View>
    );

  // check if type is warning...
  if (type === 'warning')
    return (
      <View style={[styles.warningContainer, style]}>
        <Icon
          size={40}
          name="minus-circle"
          color={colors.darkYellow}
          backgroundColor=""
        />
        <Text style={styles.warningText}>FlashMessage</Text>
      </View>
    );

  // check if type is success...
  if (type === 'success')
    return (
      <View style={[styles.successContainer, style]}>
        <Icon
          size={40}
          name="check-circle"
          color={colors.green}
          backgroundColor=""
        />
        <Text style={styles.successText}>{message}</Text>
      </View>
    );
};

export default FlashMessage;

const styles = StyleSheet.create({
  errorContainer: {
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightRed,
  },
  errorText: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '600',
  },
  successContainer: {
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGreen,
  },
  successText: {
    color: colors.green,
    fontSize: 16,
    fontWeight: '600',
  },
  warningContainer: {
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.veryLightYellow,
  },
  warningText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '600',
  },
});

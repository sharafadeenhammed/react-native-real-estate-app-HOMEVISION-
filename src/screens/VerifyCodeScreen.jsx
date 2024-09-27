import { StyleSheet, View } from 'react-native';
import { useState, useRef } from 'react';

import colors from '../config/colors';
import routes from '../config/routes';
import ScroolScreen from '../components/ScrollScreen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import FlashMessage from '../components/FlashMessage';

const VerifyCodeScreen = ({ navigation }) => {
  const [ errorMessage, setErrorMesssage ] = useState('');
  const [ toPreviousInput, setToPreviousInput ] = useState(false);
  const [ inputValues, setInputValues ] = useState([ '', '', '', '', '', '' ]);
  const refs = [ useRef(), useRef(), useRef(), useRef(), useRef(), useRef() ];

  const handleSubmit = () => {
    setErrorMesssage('');
    // TODO: verify code
    const code = inputValues.join('');
    if (code.length < 6)
      return setErrorMesssage('Code must be at least 6 characters ');

    console.log('code: ', code);
    setInputValues([ '', '', '', '', '', '' ]);
    navigation.navigate(routes.AUTH.NEW_PASSWORD);
  };

  const requestNewCode = () => {
    //TODO: request for a new code to be sent to user email
    console.log('send new code to email...');
  };

  // function delegated to text change event
  const handleChangeText = (value, currentInputIndex, isToNextInput) => {
    if (value === '')
      return setInputValues(initialValues => {
        const currentValues = [ ...initialValues ];
        currentValues[ currentInputIndex ] = '';
        return currentValues;
      });
    if (value.length > 1) {
      setInputValues(initialValues => {
        const currentValues = [ ...initialValues ];
        currentValues[ currentInputIndex ] = value[ value.length - 1 ];
        return currentValues;
      });
      isToNextInput && refs[ currentInputIndex + 1 ].current.focus();
      return;
    }
    setInputValues(initialValues => {
      const currentValues = [ ...initialValues ];
      currentValues[ currentInputIndex ] = value;
      return currentValues;
    });
    isToNextInput && refs[ currentInputIndex + 1 ].current.focus();
  };

  // function delegated to key press event
  const handleKeyPressed = (nativeEvent, currentInputIndex, isToPrevInput) => {
    if (isToPrevInput == false) return;
    if (
      nativeEvent.key == 'Backspace' &&
      inputValues[ currentInputIndex ] === '' &&
      !toPreviousInput
    )
      return setToPreviousInput(true);
    if (
      nativeEvent.key == 'Backspace' &&
      inputValues[ currentInputIndex ] === '' &&
      toPreviousInput
    ) {
      setToPreviousInput(false);
      refs[ currentInputIndex - 1 ].current.focus();
    }
  };

  // function delegated to input focus event
  const handleFocus = currentInputIndex => {
    if (inputValues[ currentInputIndex ] === '') return setToPreviousInput(true);
    setToPreviousInput(false);
  };

  return (
    <ScroolScreen style={styles.container}>
      <AppText style={styles.header} text="Verification" />
      <AppText style={styles.tagLine} text="Enter verification code" />
      <View style={styles.codeContainer}>
        {/* first input value */}
        <AppTextInput
          fieldRef={refs[ 0 ]}
          value={inputValues[ 0 ]}
          onChangeText={value => handleChangeText(value, 0, true)}
          autoFocus
          inputStyle={styles.input}
          style={styles.inputContainer}
        />

        {/* second input value */}
        <AppTextInput
          fieldRef={refs[ 1 ]}
          value={inputValues[ 1 ]}
          onFocus={() => handleFocus(1)}
          onChangeText={value => handleChangeText(value, 1, true)}
          onKeyPress={({ nativeEvent }) => handleKeyPressed(nativeEvent, 1, true)}
          inputStyle={styles.input}
          style={styles.inputContainer}
        />

        {/* third input value */}
        <AppTextInput
          fieldRef={refs[ 2 ]}
          value={inputValues[ 2 ]}
          onFocus={() => handleFocus(2)}
          onChangeText={value => handleChangeText(value, 2, true)}
          onKeyPress={({ nativeEvent }) => handleKeyPressed(nativeEvent, 2, true)}
          inputStyle={styles.input}
          style={styles.inputContainer}
        />

        {/* fourth input value */}
        <AppTextInput
          fieldRef={refs[ 3 ]}
          value={inputValues[ 3 ]}
          inputStyle={styles.input}
          onFocus={() => handleFocus(3)}
          onChangeText={value => handleChangeText(value, 3, true)}
          onKeyPress={({ nativeEvent }) => handleKeyPressed(nativeEvent, 3, true)}
          style={styles.inputContainer}
        />

        {/* fifth input value */}
        <AppTextInput
          fieldRef={refs[ 4 ]}
          value={inputValues[ 4 ]}
          onFocus={() => handleFocus(4)}
          onChangeText={value => handleChangeText(value, 4, true)}
          onKeyPress={({ nativeEvent }) => handleKeyPressed(nativeEvent, 4, true)}
          inputStyle={styles.input}
          style={styles.inputContainer}
        />

        {/* sixth input value */}
        <AppTextInput
          fieldRef={refs[ 5 ]}
          value={inputValues[ 5 ]}
          onFocus={() => handleFocus(5)}
          onChangeText={value => handleChangeText(value, 5, false)}
          onKeyPress={({ nativeEvent }) => handleKeyPressed(nativeEvent, 5, true)}
          inputStyle={styles.input}
          style={styles.inputContainer}
        />
      </View>
      {errorMessage !== '' ? (
        <FlashMessage type="error" message={errorMessage} />
      ) : null}

      <View style={styles.signinContainer}>
        <AppText
          fontSize={18}
          color={colors.black}
          text="If you didn’t receive a code, "
        />
        <AppText
          onPress={requestNewCode}
          fontSize={18}
          fontWeight="700"
          color={colors.blue}
          text="Resend"
        />
      </View>
      <AppButton
        onPress={handleSubmit}
        style={styles.button}
        textColor={colors.neutral}
        text="SEND"
      />
    </ScroolScreen>
  );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: colors.primary,
    marginBottom: 20,
  },
  container: {
    backgroundColor: colors.neutral,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingBottom: 100,
  },
  codeContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  header: {
    textAlign: 'center',
    color: colors.dark,
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 40,
  },
  input: {
    fontSize: 30,
    fontWeight: '700',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    padding: 0,
    justifyContent: 'center',
  },
  inputContainer: {
    height: 55,
    width: 55,
    borderRadius: 27.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  tagLine: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 15,
  },
});

import {StyleSheet, View} from 'react-native';
import {useState, useRef} from 'react';

import colors from '../config/colors';
import ScroolScreen from '../components/ScrollScreen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import FlashMessage from '../components/FlashMessage';

const VerifyCodeScreen = () => {
  const [showError, setShowError] = useState(false);
  const [toPreviousInput, setToPreviousInput] = useState(false);
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [thirdValue, setThirdValue] = useState('');
  const [fourthValue, setFourthValue] = useState('');
  const [fifthValue, setFifthValue] = useState('');
  const [sixthValue, setSixthValue] = useState('');
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const handleSubmit = () => {
    const password =
      firstValue +
      secondValue +
      thirdValue +
      fourthValue +
      fifthValue +
      sixthValue;
    setShowError(false);
    if (password.length < 6) return setShowError(true);
    console.log(password);
  };
  return (
    <ScroolScreen style={styles.container}>
      <AppText style={styles.header} text="Verification" />
      <AppText style={styles.tagLine} text="Enter verification code" />
      <View style={styles.codeContainer}>
        <AppTextInput
          fieldRef={refs[0]}
          value={firstValue}
          onChangeText={value => {
            if (value === '') return setFirstValue('');
            if (value.length > 1) {
              setFirstValue(value[1]);
              // refs.forEach(item => item.current.blur());
              refs[1].current.focus();
              return;
            }
            setFirstValue(value);
            // refs.forEach(item => item.current.blur());
            refs[1].current.focus();
          }}
          autoFocus
          inputStyle={styles.input}
          style={styles.inputContainer}
        />
        <AppTextInput
          fieldRef={refs[1]}
          value={secondValue}
          onChangeText={value => {
            if (value === '') return setSecondValue('');
            if (value.length > 1) {
              setSecondValue(value[1]);
              // refs.forEach(item => item.current.blur());
              refs[2].current.focus();
              return;
            }
            setSecondValue(value);
            // refs.forEach(item => item.current.blur());
            refs[2].current.focus();
          }}
          onKeyPress={({nativeEvent}) => {
            if (
              nativeEvent.key == 'Backspace' &&
              secondValue === '' &&
              !toPreviousInput
            )
              return setToPreviousInput(true);
            if (
              nativeEvent.key == 'Backspace' &&
              secondValue === '' &&
              toPreviousInput
            ) {
              setToPreviousInput(false);
              console.log('back space pressed going... 2');
              // refs.forEach(item => item.current.blur());
              refs[0].current.focus();
            }
          }}
          inputStyle={styles.input}
          style={styles.inputContainer}
        />
        <AppTextInput
          fieldRef={refs[2]}
          value={thirdValue}
          onChangeText={value => {
            if (value === '') return setThirdValue('');
            if (value.length > 1) {
              setThirdValue(value[1]);
              // refs.forEach(item => item.current.blur());
              refs[3].current.focus();
              return;
            }
            setThirdValue(value);
            // refs.forEach(item => item.current.blur());
            refs[3].current.focus();
          }}
          onKeyPress={({nativeEvent}) => {
            if (
              nativeEvent.key == 'Backspace' &&
              thirdValue === '' &&
              !toPreviousInput
            )
              return setToPreviousInput(true);
            if (
              nativeEvent.key == 'Backspace' &&
              thirdValue === '' &&
              toPreviousInput
            ) {
              console.log('back space pressed going... 3');
              setToPreviousInput(false);
              // refs.forEach(item => item.current.blur());
              refs[1].current.focus();
            }
          }}
          inputStyle={styles.input}
          style={styles.inputContainer}
        />
        <AppTextInput
          fieldRef={refs[3]}
          value={fourthValue}
          inputStyle={styles.input}
          onChangeText={value => {
            if (value === '') return setFourthValue('');
            if (value.length > 1) {
              setFourthValue(value[1]);
              // refs.forEach(item => item.current.blur());
              refs[4].current.focus();
              return;
            }
            setFourthValue(value);
            // refs.forEach(item => item.current.blur());
            refs[4].current.focus();
          }}
          onKeyPress={({nativeEvent}) => {
            if (
              !toPreviousInput &&
              nativeEvent.key == 'Backspace' &&
              fourthValue === ''
            )
              return setToPreviousInput(true);
            if (
              nativeEvent.key == 'Backspace' &&
              fourthValue === '' &&
              toPreviousInput
            ) {
              setToPreviousInput(false);
              console.log('back space pressed going... 4');
              // refs.forEach(item => item.current.blur());
              refs[2].current.focus();
            }
          }}
          style={styles.inputContainer}
        />
        <AppTextInput
          fieldRef={refs[4]}
          value={fifthValue}
          onChangeText={value => {
            if (value === '') return setFifthValue('');
            if (value.length > 1) {
              setFifthValue(value[1]);
              // refs.forEach(item => item.current.blur());
              refs[5].current.focus();
              return;
            }
            setFifthValue(value);
            // refs.forEach(item => item.current.blur());
            refs[5].current.focus();
          }}
          onKeyPress={({nativeEvent}) => {
            if (
              !toPreviousInput &&
              nativeEvent.key == 'Backspace' &&
              fifthValue === ''
            )
              return setToPreviousInput(true);
            if (
              nativeEvent.key == 'Backspace' &&
              fifthValue === '' &&
              toPreviousInput
            ) {
              setToPreviousInput(false);
              console.log('back space pressed going... 5');
              // refs.forEach(item => item.current.blur());
              refs[3].current.focus();
            }
          }}
          inputStyle={styles.input}
          style={styles.inputContainer}
        />
        <AppTextInput
          fieldRef={refs[5]}
          value={sixthValue}
          onChangeText={value => {
            if (value === '') return setSixthValue('');
            if (value.length > 1) return setSixthValue(value[1]);
            setSixthValue(value);
          }}
          onKeyPress={({nativeEvent}) => {
            if (
              !toPreviousInput &&
              nativeEvent.key == 'Backspace' &&
              sixthValue === ''
            )
              return setToPreviousInput(true);
            if (
              nativeEvent.key == 'Backspace' &&
              sixthValue === '' &&
              toPreviousInput
            ) {
              console.log('back space pressed going... 6');
              setToPreviousInput(false);
              // refs.forEach(item => item.current.blur());
              refs[4].current.focus();
            }
          }}
          inputStyle={styles.input}
          style={styles.inputContainer}
        />
      </View>
      {showError ? (
        <FlashMessage type="error" message="code must be at least 6 digit" />
      ) : null}

      <AppText
        onPress={() => console.log('handle navigation to signin screen...')}
        fontSize={18}
        fontWeight="700"
        color={colors.gray}
        text="Sign In Instead"
        style={styles.signInInstead}
      />
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
  signInInstead: {
    textAlign: 'center',
    width: '100%',
    marginVertical: 30,
    textDecorationLine: 'underline',
  },
  tagLine: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 15,
  },
});

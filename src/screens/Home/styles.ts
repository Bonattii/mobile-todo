import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  mainContainer: { backgroundColor: '#1a1a1a', flex: 1 },
  backgroundSquare: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 178,
    backgroundColor: '#0D0D0D'
  },
  contentContainer: {
    flex: 1,
    padding: 24
  },
  logo: {
    alignSelf: 'center',
    marginTop: 52,
    marginBottom: 40
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 32
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#fdfcfe',
    padding: 16,
    marginRight: 4,
    fontSize: 18
  },
  inputFocused: {
    borderColor: '#5E60CE',
    borderWidth: 1
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    backgroundColor: '#1e6f9f',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fdfcfe',
    fontSize: 24
  },
  infoContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  }
})

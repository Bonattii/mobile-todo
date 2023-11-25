import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8
  },
  checkButton: {
    width: 17,
    height: 17,
    borderColor: '#4EA8DE',
    borderWidth: 1,
    borderRadius: 50
  },
  checkedButton: {
    width: 18,
    height: 18,
    backgroundColor: '#5E60CE',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14
  },
  doneTitle: {
    flex: 1,
    color: '#808080',
    fontSize: 14,
    textDecorationLine: 'line-through'
  }
})

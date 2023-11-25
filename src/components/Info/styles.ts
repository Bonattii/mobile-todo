import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  countContainer: {
    borderRadius: 50,
    backgroundColor: '#333333',
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  count: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fdfcfe'
  }
})

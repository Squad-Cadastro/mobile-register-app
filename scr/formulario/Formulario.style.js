import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth:1,
    borderColor:'#0b3cde'
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 4
  },
  container: {
    width: '80%',
    borderRadius: 10,
    marginBottom: 10
  },
  borderError: {
    borderWidth: 1,
    borderColor: 'rgba(200,0,50,1)'
  },
  errorMessage: {
    fontSize: 12,
    color: 'rgba(200,0,50,1)',
    textAlign: 'center',
    marginTop: 5
  }
})

export default styles
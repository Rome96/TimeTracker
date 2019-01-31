import React from 'react'
import { 
  View,
  ScrollView,
  StyleSheet
} from 'react-native'
import { v4 } from 'uuid'
import { AppLoading } from 'expo'
import Header from '@/components/Header'
import ToggleableTimerForm from '@/containers/ToggleableTimerForm'
import EditableTimer from '@/containers/EditableTimer'
import { cacheFonts, newTimer } from './src/utils'

class App extends React.Component {
  state = { 
    isReady: false,
    timers: [
      {
        id: v4(),
        title: 'Create weather app',
        project: 'Bootcamp',
        elapsed: 1277537,
        isRunning: true,
      },
      {
        id: v4(),
        title: 'Create timer app',
        project: 'Bootcamp',
        elapsed: 5460494,
        isRunning: false,
      },
      {
        id: v4(),
        title: 'Create instagram app',
        project: 'Bootcamp',
        elapsed: 120000,
        isRunning: false,
      }
    ]
  }

  _preloadAssets = async () => {
    const fontAssets = cacheFonts([
      { 'proxima-nova-semibold': require('./assets/fonts/proxima-nova-semibold.otf') }
    ])
    await Promise.all([...fontAssets])
  }

  _handleCreateTimer = (timer) => {
    const { timers } = this.state
    this.setState({ timers: [newTimer(timer), ...timers] })
  }

  _handleRemoveTimer = (id) => {
    const { timers } = this.state
    this.setState({ timers: timers.filter(timer => timer.id !== id) })
  }

  _handleEditTimer = (timer) => {
    const { timers } = this.state
    const { id, title, project } = timer

    this.setState({
      timers: timers.map(timer => {
        if ( timer.id === id) {
          const updatedTimer = {
            ...timer,
            title,
            project
          }
          return updatedTimer
        }
        return timer
      })
    })
  } 

  componentDidMount () {
    const TIME_INTERVAL = 1000
    this.intervalId = setInterval(() => {
      const { timers } = this.state
      this.setState({
        timers: timers.map(timer => {
          const { isRunning, elapsed } = timer
          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed
          }
        })
      })
    }, TIME_INTERVAL)
  }

  componentWillUnmount () {
    clearInterval( this.intervalId )
  }

  _toggleTimerRunning = ( id ) => {
    const { timers } = this.state
    this.setState({
      timers: timers.map(timer => {
        const { isRunning } = timer
        if ( timer.id === id ) {
          const updatedTimer = {
            ...timer,
            isRunning: !isRunning
          }
          return updatedTimer
        }
        return timer
      })
    })
  } 

  render() {
    const { isReady, timers } = this.state
    if ( !isReady ) {
      return (
        <AppLoading
          startAsync={ this._preloadAssets }
          onFinish={() => this.setState({ isReady: true })}
        />
      )
    } else {
        return (
          <View style={styles.container}>
            <Header title="Time Tracker"/>
            <ToggleableTimerForm 
              onFormSubmit={ this._handleCreateTimer }
            />
            <ScrollView style={styles.container}>
              {timers.map(({ id, title, project, isRunning, elapsed }) => (
                <EditableTimer
                  key={ id }
                  id={ id }
                  title={ title }
                  project={ project }
                  elapsed={ elapsed }
                  isRunning={ isRunning }
                  onFormSubmit={ this._handleEditTimer }
                  onRemovePress={ this._handleRemoveTimer }
                  onStartPress={ this._toggleTimerRunning } 
                  onStopPress={ this._toggleTimerRunning  }
                />
              ))}    
            </ScrollView>
          </View>
        )
      } 
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})


export default App
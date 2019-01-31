'use strict'
import { Font } from 'expo'
import { v4 } from 'uuid'

function cacheFonts ( fonts ) {
  return fonts.map(font => Font.loadAsync(font))
}

function milisecondsToHuman ( ms ) {
  const seconds = Math.floor((ms / 1000) % 60)
  const minutes = Math.floor((ms / 1000 / 60) % 60)
  const hours = Math.floor(ms / 1000 / 60 / 60)

  const humanized = [
    hours.toString().padStart(2, 0),
    minutes.toString().padStart(2, 0),
    seconds.toString().padStart(2, 0)
  ].join(':')

  return humanized
}

// const pad = (numberString, size) => {
//   let padded = numberString
//   while (padded.length < size) {
//     padded = `0${padded}`
//   }
//   return padded
// }

const newTimer = (attrs = {}) => {
  const timer = {
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    id: v4(),
    elapsed: 0,
    isRunning: false,
  };

  return timer
}

export {
  newTimer,
  cacheFonts,
  milisecondsToHuman
}
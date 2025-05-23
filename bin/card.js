#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Tyler Leonhardt /'),
  handle: chalk.cyan('@tylerleonhardt'),
  work: chalk.white('Software Engineer at Microsoft on VS Code'),
  bsky: chalk.cyan('https://bsky.app/profile/tylerleonhardt.dev'),
  twitter: chalk.cyan('https://twitter.com/TylerLeonhardt'),
  github: chalk.cyan('https://github.com/TylerLeonhardt'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/tylerjamesleonhardt'),
  web: chalk.cyan('https://TylerLeonhardt.com'),
  npx: chalk.white('npx tylerleonhardt'),
  labelWork: chalk.white.bold('      Work:'),
  labelBlueSky: chalk.white.bold('   BlueSky:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const bskying = `${data.labelBlueSky}  ${data.bsky}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading
  + newline
  + newline
  + working
  + newline
  + githubing
  + newline
  + bskying
  + newline
  + twittering
  + newline
  + linkedining
  + newline
  + webing
  + newline
  + newline
  + carding

console.log(chalk.green(boxen(output, options)))

#!/usr/bin/env node.
import { welcome } from '../src/cli.js';

export const greeeting = () => {
  console.log('Welcome to the Brain Games!');
  welcome();
};

export default greeeting;

#!/usr/bin/env node

const { spawn } = require('child_process');

process.env.NODE_ENV = 'test';

const command = 'jest';
const args = [];

const child = spawn(command, args, { stdio: 'inherit' });

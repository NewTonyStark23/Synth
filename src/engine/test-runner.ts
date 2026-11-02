#!/usr/bin/env node
// Test Runner - Execute all stress tests and generate detailed report

import { SynthAI } from './SynthEngine.js';

const synth = new SynthAI();
const results = [];
const categoryResults = new Map();

async function runTest(category, testName, input, expected, followUp = null, followUp2 = null) {
  try {
    let response = await synth.process(input);
    let output = response.response;
    
    if (followUp) {
      response = await synth.process(followUp);
      output = response.response;
    }
    
    if (followUp2) {
      response = await synth.process(followUp2);
      output = response.response;
    }
    
    const issues = [];
    let passed = true;
    
    for (const check of expected) {
      if (!output.toLowerCase().includes(check.toLowerCase())) {
        passed = false;
        issues.push(`Missing: "${check}"`);
      }
    }
    
    if (!output.includes('<!DOCTYPE html>') && expected.includes('<!DOCTYPE html>')) {
      passed = false;
      issues.push('No HTML generated');
    }
    
    const result = {
      category,
      testName,
      input,
      followUp,
      followUp2,
      expected,
      actual: output.substring(0, 300),
      passed,
      issues
    };
    
    results.push(result);
    
    if (!categoryResults.has(category)) {
      categoryResults.set(category, { passed: 0, failed: 0, tests: [] });
    }
    
    const catStats = categoryResults.get(category);
    if (passed) {
      catStats.passed++;
    } else {
      catStats.failed++;
    }
    catStats.tests.push(result);
    
    return result;
    
  } catch (error) {
    const result = {
      category,
      testName,
      input,
      followUp,
      followUp2,
      expected,
      actual: `ERROR: ${error.message}`,
      passed: false,
      issues: [`Exception: ${error.message}`]
    };
    
    results.push(result);
    
    if (!categoryResults.has(category)) {
      categoryResults.set(category, { passed: 0, failed: 0, tests: [] });
    }
    
    const catStats = categoryResults.get(category);
    catStats.failed++;
    catStats.tests.push(result);
    
    return result;
  }
}

async function runAllTests() {
  console.log('🚀 Starting Comprehensive Stress Test Suite...\n');
  
  // Category 1: Code Generation - Basic Components
  console.log('📝 Testing Code Generation - Basic Components (10 tests)...\n');
  await runTest('Code Generation', 'Calendar', 'build a calendar', ['<!DOCTYPE html', 'calendar']);
  await runTest('Code Generation', 'Timer', 'create a timer', ['<!DOCTYPE html', 'timer']);
  await runTest('Code Generation', 'Calculator', 'make a calculator', ['<!DOCTYPE html', 'calculator']);
  await runTest('Code Generation', 'Todo List', 'generate a todo list', ['<!DOCTYPE html', 'todo']);
  await runTest('Code Generation', 'Form', 'build a form', ['<!DOCTYPE html', 'form']);
  await runTest('Code Generation', 'Game', 'create a game', ['<!DOCTYPE html', 'game']);
  await runTest('Code Generation', 'Website', 'build a website', ['<!DOCTYPE html', 'website']);
  await runTest('Code Generation', 'Dashboard', 'create a dashboard', ['<!DOCTYPE html', 'dashboard']);
  await runTest('Code Generation', 'Chart', 'build a chart', ['<!DOCTYPE html', 'chart']);
  await runTest('Code Generation', 'Player', 'create a player', ['<!DOCTYPE html', 'player']);
  
  // Category 2: Theme Application
  console.log('🎨 Testing Theme Application (10 tests)...\n');
  await runTest('Theme Application', 'Beach Theme', 'build a beach calendar', ['<!DOCTYPE html', '#87CEEB']);
  await runTest('Theme Application', 'Dark Theme', 'build a dark timer', ['<!DOCTYPE html', '#0f0c29']);
  await runTest('Theme Application', 'Light Theme', 'build a light calculator', ['<!DOCTYPE html', '#f5f7fa']);
  await runTest('Theme Application', 'Colorful Theme', 'build a colorful todo', ['<!DOCTYPE html', '#667eea']);
  await runTest('Theme Application', 'Minimal Theme', 'build a minimal form', ['<!DOCTYPE html', '#f8f9fa']);
  await runTest('Theme Application', 'Modern Theme', 'build a modern game', ['<!DOCTYPE html', '#667eea']);
  await runTest('Theme Application', 'Retro Theme', 'build a retro website', ['<!DOCTYPE html', '#ffecd2']);
  await runTest('Theme Application', 'Futuristic Theme', 'build a futuristic dashboard', ['<!DOCTYPE html', '#0c0c0c']);
  await runTest('Theme Application', 'Nature Theme', 'build a nature chart', ['<!DOCTYPE html', '#56ab2f']);
  await runTest('Theme Application', 'Space Theme', 'build a space player', ['<!DOCTYPE html', '#000428']);
  
  // Category 3: Feature Detection
  console.log('✨ Testing Feature Detection (10 tests)...\n');
  await runTest('Feature Detection', 'Interactive', 'build an interactive calendar', ['<!DOCTYPE html', 'onclick']);
  await runTest('Feature Detection', 'Animated', 'build an animated timer', ['<!DOCTYPE html', 'animation']);
  await runTest('Feature Detection', 'Responsive', 'build a responsive calculator', ['<!DOCTYPE html', 'viewport']);
  await runTest('Feature Detection', 'Countdown', 'build a countdown timer', ['<!DOCTYPE html', 'countdown']);
  await runTest('Feature Detection', 'New Year', 'build a new year countdown', ['<!DOCTYPE html', 'new year']);
  await runTest('Feature Detection', 'Draggable', 'build a draggable form', ['<!DOCTYPE html', 'drag']);
  await runTest('Feature Detection', 'Searchable', 'build a searchable list', ['<!DOCTYPE html', 'search']);
  await runTest('Feature Detection', 'Filterable', 'build a filterable gallery', ['<!DOCTYPE html', 'filter']);
  await runTest('Feature Detection', 'Sortable', 'build a sortable table', ['<!DOCTYPE html', 'sort']);
  await runTest('Feature Detection', 'HTML Keyword', 'build an html calendar', ['<!DOCTYPE html', 'calendar']);
  
  // Category 4: Modification Context
  console.log('🔄 Testing Modification Context (10 tests)...\n');
  await runTest('Modification Context', 'Build then Modify', 'build a timer', ['<!DOCTYPE html'], 'make it beach themed');
  await runTest('Modification Context', 'Change Color', 'build a calendar', ['<!DOCTYPE html'], 'change the color to red');
  await runTest('Modification Context', 'Make Bigger', 'build a calculator', ['<!DOCTYPE html'], 'make it bigger');
  await runTest('Modification Context', 'Add Animation', 'build a todo list', ['<!DOCTYPE html'], 'add animations');
  await runTest('Modification Context', 'Make Dark', 'build a form', ['<!DOCTYPE html'], 'make it dark');
  await runTest('Modification Context', 'Multiple Mods', 'build a game', ['<!DOCTYPE html'], 'make it beach themed');
  await runTest('Modification Context', 'Theme then Size', 'build a website', ['<!DOCTYPE html'], 'make it dark', 'make it bigger');
  await runTest('Modification Context', 'Complex Mod', 'build a dashboard', ['<!DOCTYPE html'], 'make it beach themed and bigger');
  await runTest('Modification Context', 'Sequential Builds', 'build a calendar', ['<!DOCTYPE html'], 'build a timer');
  await runTest('Modification Context', 'Modify Last', 'build a timer', ['<!DOCTYPE html'], 'make it dark');
  
  // Category 5: Typo Handling
  console.log('🔤 Testing Typo Handling (10 tests)...\n');
  await runTest('Typo Handling', 'Simple Typo', 'buld a timer', ['<!DOCTYPE html', 'timer']);
  await runTest('Typo Handling', 'Missing Letter', 'buid a calendar', ['<!DOCTYPE html', 'calendar']);
  await runTest('Typo Handling', 'Extra Letter', 'buildd a calculator', ['<!DOCTYPE html', 'calculator']);
  await runTest('Typo Handling', 'Transposed', 'biuld a todo', ['<!DOCTYPE html', 'todo']);
  await runTest('Typo Handling', 'Wrong Word', 'build a tiemr', ['<!DOCTYPE html', 'timer']);
  await runTest('Typo Handling', 'Multiple Typos', 'buld a dbeach calender', ['<!DOCTYPE html', 'beach', 'calendar']);
  await runTest('Typo Handling', 'Missing Space', 'buildacalendar', ['<!DOCTYPE html', 'calendar']);
  await runTest('Typo Handling', 'Extra Space', 'build  a  timer', ['<!DOCTYPE html', 'timer']);
  await runTest('Typo Handling', 'Mixed Case', 'BUILD A CALENDAR', ['<!DOCTYPE html', 'calendar']);
  await runTest('Typo Handling', 'Complex Typos', 'buid a dbeach calender with animaton', ['<!DOCTYPE html', 'beach', 'calendar']);
  
  // Category 6: Edge Cases
  console.log('🎯 Testing Edge Cases (10 tests)...\n');
  await runTest('Edge Cases', 'Empty Input', '', ['help', 'build']);
  await runTest('Edge Cases', 'Single Word', 'build', ['help', 'calendar', 'timer']);
  await runTest('Edge Cases', 'Nonsense', 'asdfghjkl', ['help', 'build']);
  await runTest('Edge Cases', 'Very Long', 'build a calendar that has months and years and days and weeks and hours and minutes and seconds', ['<!DOCTYPE html', 'calendar']);
  await runTest('Edge Cases', 'Special Chars', 'build a @#$% calendar', ['<!DOCTYPE html', 'calendar']);
  await runTest('Edge Cases', 'Numbers Only', '12345', ['help', 'build']);
  await runTest('Edge Cases', 'Mixed Language', 'build un calendrier', ['calendar', 'help']);
  await runTest('Edge Cases', 'Contradictory', 'build a simple complex calendar', ['<!DOCTYPE html', 'calendar']);
  await runTest('Edge Cases', 'Ambiguous', 'make it better', ["don't have any code", 'help']);
  await runTest('Edge Cases', 'Very Short', 'hi', ['hello', 'help']);
  
  // Category 7: Multi-Turn Conversations
  console.log('💬 Testing Multi-Turn Conversations (10 tests)...\n');
  
  // Reset synth for multi-turn tests
  let multiTurnSynth = new SynthAI();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a timer');
    await multiTurnSynth.process('make it beach themed');
    await runTest('Multi-Turn', 'Triple Turn', 'add ocean waves', ['ocean', 'wave']);
  })();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a calendar');
    await multiTurnSynth.process('build a timer');
    await runTest('Multi-Turn', 'Multiple Builds', 'make it dark', ['dark']);
  })();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a calculator');
    await multiTurnSynth.process('make it beach themed');
    await runTest('Multi-Turn', 'Theme then Size', 'make it bigger', ['font-size']);
  })();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a todo list');
    await multiTurnSynth.process('add animations');
    await runTest('Multi-Turn', 'Feature then Theme', 'make it dark', ['dark']);
  })();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a form');
    await multiTurnSynth.process('change the color to red');
    await runTest('Multi-Turn', 'Color then Size', 'make it bigger', ['font-size']);
  })();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a website');
    await multiTurnSynth.process('make it dark');
    await multiTurnSynth.process('add animations');
    await runTest('Multi-Turn', 'Complex Workflow', 'make it bigger', ['font-size']);
  })();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a game');
    await multiTurnSynth.process('make it beach themed');
    await runTest('Multi-Turn', 'Back and Forth', 'make it dark', ['dark']);
  })();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a dashboard');
    await multiTurnSynth.process('make it beach themed');
    await multiTurnSynth.process('add animations');
    await runTest('Multi-Turn', 'Multiple Mods', 'make it bigger', ['font-size']);
  })();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a chart');
    await multiTurnSynth.process('make it beach themed');
    await runTest('Multi-Turn', 'Theme Switch', 'make it dark', ['dark']);
  })();
  
  await (async () => {
    multiTurnSynth = new SynthAI();
    await multiTurnSynth.process('build a player');
    await multiTurnSynth.process('add animations');
    await runTest('Multi-Turn', 'Feature Stack', 'make it responsive', ['responsive']);
  })();
  
  // Generate report
  generateReport();
}

function generateReport() {
  console.log('\n' + '='.repeat(80));
  console.log('📊 STRESS TEST REPORT');
  console.log('='.repeat(80) + '\n');
  
  const totalTests = results.length;
  const passedTests = results.filter(r => r.passed).length;
  const failedTests = totalTests - passedTests;
  const passRate = ((passedTests / totalTests) * 100).toFixed(1);
  
  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed: ${passedTests} (${passRate}%)`);
  console.log(`Failed: ${failedTests}\n`);
  
  console.log('Results by Category:');
  for (const [category, stats] of categoryResults.entries()) {
    const total = stats.passed + stats.failed;
    const rate = ((stats.passed / total) * 100).toFixed(1);
    const status = stats.passed === total ? '✅' : '❌';
    console.log(`  ${status} ${category}: ${stats.passed}/${total} (${rate}%)`);
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('Failed Tests:');
  console.log('='.repeat(80) + '\n');
  
  const failedResults = results.filter(r => !r.passed);
  failedResults.forEach((result, index) => {
    console.log(`${index + 1}. [${result.category}] ${result.testName}`);
    console.log(`   Input: "${result.input}"`);
    if (result.followUp) console.log(`   Follow-up: "${result.followUp}"`);
    if (result.followUp2) console.log(`   Follow-up 2: "${result.followUp2}"`);
    console.log(`   Expected: ${result.expected.join(', ')}`);
    console.log(`   Issues: ${result.issues.join(', ')}`);
    console.log(`   Actual: ${result.actual.substring(0, 150)}...\n`);
  });
  
  console.log('='.repeat(80));
  console.log('Test Complete!');
  console.log('='.repeat(80) + '\n');
  
  // Save to file
  const fs = await import('fs');
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: totalTests,
      passed: passedTests,
      failed: failedTests,
      passRate: passRate + '%'
    },
    categories: Object.fromEntries(categoryResults),
    results: results
  };
  
  fs.writeFileSync('stress-test-results.json', JSON.stringify(report, null, 2));
  console.log('📁 Results saved to: stress-test-results.json\n');
}

runAllTests().catch(console.error);

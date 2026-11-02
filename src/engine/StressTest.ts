// Synth-AI v6.0 - Comprehensive Stress Test System
// Tests all categories with 10+ tests each

import { SynthAI } from './SynthEngine';

interface TestResult {
  category: string;
  testName: string;
  input: string;
  expected: string[];
  actual: string;
  passed: boolean;
  issues: string[];
}

class StressTestSuite {
  private synth: SynthAI;
  private results: TestResult[] = [];
  private categoryResults: Map<string, {passed: number, failed: number}> = new Map();

  constructor() {
    this.synth = new SynthAI();
  }

  async runAllTests(): Promise<void> {
    console.log('🚀 Starting Comprehensive Stress Test Suite...\n');
    
    // Category 1: Code Generation - All Components
    await this.testCodeGeneration();
    
    // Category 2: Theme Application
    await this.testThemeApplication();
    
    // Category 3: Feature Detection
    await this.testFeatureDetection();
    
    // Category 4: Modification Context
    await this.testModificationContext();
    
    // Category 5: Typo Handling
    await this.testTypoHandling();
    
    // Category 6: Edge Cases
    await this.testEdgeCases();
    
    // Category 7: Multi-Turn Conversations
    await this.testMultiTurnConversations();
    
    // Generate final report
    this.generateReport();
  }

  private async testCodeGeneration(): Promise<void> {
    console.log('📝 Testing Code Generation (12 components)...\n');
    const category = 'Code Generation';
    this.categoryResults.set(category, {passed: 0, failed: 0});

    const tests = [
      { name: 'Calendar', input: 'build a calendar', expected: ['calendar', 'month', 'year'] },
      { name: 'Timer', input: 'create a timer', expected: ['timer', 'countdown', 'seconds'] },
      { name: 'Calculator', input: 'make a calculator', expected: ['calculator', 'button', 'display'] },
      { name: 'Todo List', input: 'generate a todo list', expected: ['todo', 'task', 'checkbox'] },
      { name: 'Form', input: 'build a form', expected: ['form', 'input', 'submit'] },
      { name: 'Game', input: 'create a game', expected: ['game', 'score', 'canvas'] },
      { name: 'Website', input: 'build a website', expected: ['website', 'header', 'section'] },
      { name: 'Dashboard', input: 'create a dashboard', expected: ['dashboard', 'stats', 'grid'] },
      { name: 'Chart', input: 'build a chart', expected: ['chart', 'canvas', 'data'] },
      { name: 'Player', input: 'create a player', expected: ['player', 'controls', 'audio'] },
      { name: 'Editor', input: 'build an editor', expected: ['editor', 'textarea', 'toolbar'] },
      { name: 'Gallery', input: 'create a gallery', expected: ['gallery', 'image', 'grid'] },
    ];

    for (const test of tests) {
      await this.runTest(category, test.name, test.input, test.expected);
    }
  }

  private async testThemeApplication(): Promise<void> {
    console.log('🎨 Testing Theme Application (10 themes)...\n');
    const category = 'Theme Application';
    this.categoryResults.set(category, {passed: 0, failed: 0});

    const tests = [
      { name: 'Beach Theme', input: 'build a beach calendar', expected: ['#87CEEB', 'beach', 'palm'] },
      { name: 'Dark Theme', input: 'build a dark timer', expected: ['#0f0c29', 'dark', 'night'] },
      { name: 'Light Theme', input: 'build a light calculator', expected: ['#f5f7fa', 'light', 'bright'] },
      { name: 'Colorful Theme', input: 'build a colorful todo', expected: ['#667eea', 'colorful', 'vibrant'] },
      { name: 'Minimal Theme', input: 'build a minimal form', expected: ['#f8f9fa', 'minimal', 'simple'] },
      { name: 'Modern Theme', input: 'build a modern game', expected: ['#667eea', 'modern', 'sleek'] },
      { name: 'Retro Theme', input: 'build a retro website', expected: ['#ffecd2', 'retro', 'vintage'] },
      { name: 'Futuristic Theme', input: 'build a futuristic dashboard', expected: ['#0c0c0c', 'futuristic', 'cyber'] },
      { name: 'Nature Theme', input: 'build a nature chart', expected: ['#56ab2f', 'nature', 'forest'] },
      { name: 'Space Theme', input: 'build a space player', expected: ['#000428', 'space', 'galaxy'] },
    ];

    for (const test of tests) {
      await this.runTest(category, test.name, test.input, test.expected);
    }
  }

  private async testFeatureDetection(): Promise<void> {
    console.log('✨ Testing Feature Detection (13 features)...\n');
    const category = 'Feature Detection';
    this.categoryResults.set(category, {passed: 0, failed: 0});

    const tests = [
      { name: 'Interactive', input: 'build an interactive calendar', expected: ['interactive', 'onclick'] },
      { name: 'Animated', input: 'build an animated timer', expected: ['animation', 'animated'] },
      { name: 'Responsive', input: 'build a responsive calculator', expected: ['responsive', 'viewport'] },
      { name: 'Real-time', input: 'build a real-time todo', expected: ['real-time', 'realtime'] },
      { name: 'Countdown', input: 'build a countdown timer', expected: ['countdown', 'timer'] },
      { name: 'New Year', input: 'build a new year countdown', expected: ['new year', 'newyear'] },
      { name: 'Draggable', input: 'build a draggable form', expected: ['drag', 'draggable'] },
      { name: 'Searchable', input: 'build a searchable list', expected: ['search', 'searchable'] },
      { name: 'Filterable', input: 'build a filterable gallery', expected: ['filter', 'filterable'] },
      { name: 'Sortable', input: 'build a sortable table', expected: ['sort', 'sortable'] },
      { name: 'Background', input: 'build a background calendar', expected: ['background', 'bg'] },
      { name: 'Tool', input: 'build a tool', expected: ['tool', 'utility'] },
      { name: 'HTML', input: 'build an html calendar', expected: ['html', '<!DOCTYPE'] },
    ];

    for (const test of tests) {
      await this.runTest(category, test.name, test.input, test.expected);
    }
  }

  private async testModificationContext(): Promise<void> {
    console.log('🔄 Testing Modification Context (10 scenarios)...\n');
    const category = 'Modification Context';
    this.categoryResults.set(category, {passed: 0, failed: 0});

    // Test 1: Build then modify theme
    await this.synth.process('build a timer');
    await this.runTest(category, 'Modify to Beach', 'make it beach themed', ['beach', '#87CEEB']);

    // Test 2: Build then modify color
    await this.synth.process('build a calendar');
    await this.runTest(category, 'Modify Color', 'change the color to red', ['red', 'color']);

    // Test 3: Build then modify size
    await this.synth.process('build a calculator');
    await this.runTest(category, 'Modify Size', 'make it bigger', ['font-size', 'bigger']);

    // Test 4: Build then add feature
    await this.synth.process('build a todo list');
    await this.runTest(category, 'Add Feature', 'add animations', ['animation', 'animated']);

    // Test 5: Build then make dark
    await this.synth.process('build a form');
    await this.runTest(category, 'Make Dark', 'make it dark', ['dark', '#0f0c29']);

    // Test 6: Multiple modifications
    await this.synth.process('build a game');
    await this.synth.process('make it beach themed');
    await this.runTest(category, 'Multiple Mods', 'add ocean waves', ['ocean', 'wave']);

    // Test 7: Modify without context
    this.synth = new SynthAI(); // Reset
    await this.runTest(category, 'No Context', 'make it beach themed', ["don't have any code"]);

    // Test 8: Modify theme then size
    await this.synth.process('build a website');
    await this.synth.process('make it dark');
    await this.runTest(category, 'Theme then Size', 'make it bigger', ['font-size', 'bigger']);

    // Test 9: Complex modification
    await this.synth.process('build a dashboard');
    await this.runTest(category, 'Complex Mod', 'make it beach themed and bigger', ['beach', 'font-size']);

    // Test 10: Sequential builds
    await this.synth.process('build a calendar');
    await this.synth.process('build a timer');
    await this.runTest(category, 'Sequential Builds', 'make it dark', ['dark', '#0f0c29']);
  }

  private async testTypoHandling(): Promise<void> {
    console.log('🔤 Testing Typo Handling (10 scenarios)...\n');
    const category = 'Typo Handling';
    this.categoryResults.set(category, {passed: 0, failed: 0});

    const tests = [
      { name: 'Simple Typo', input: 'buld a timer', expected: ['timer', 'countdown'] },
      { name: 'Missing Letter', input: 'buid a calendar', expected: ['calendar', 'month'] },
      { name: 'Extra Letter', input: 'buildd a calculator', expected: ['calculator', 'button'] },
      { name: 'Transposed Letters', input: 'biuld a todo', expected: ['todo', 'task'] },
      { name: 'Wrong Word', input: 'build a tiemr', expected: ['timer', 'countdown'] },
      { name: 'Multiple Typos', input: 'buld a dbeach calender', expected: ['beach', 'calendar'] },
      { name: 'Missing Space', input: 'buildacalendar', expected: ['calendar', 'month'] },
      { name: 'Extra Space', input: 'build  a  timer', expected: ['timer', 'countdown'] },
      { name: 'Mixed Case', input: 'BUILD A CALENDAR', expected: ['calendar', 'month'] },
      { name: 'Complex Typos', input: 'buid a dbeach calender with animaton', expected: ['beach', 'calendar', 'animation'] },
    ];

    for (const test of tests) {
      await this.runTest(category, test.name, test.input, test.expected);
    }
  }

  private async testEdgeCases(): Promise<void> {
    console.log('🎯 Testing Edge Cases (10 scenarios)...\n');
    const category = 'Edge Cases';
    this.categoryResults.set(category, {passed: 0, failed: 0});

    const tests = [
      { name: 'Empty Input', input: '', expected: ['help', 'build'] },
      { name: 'Single Word', input: 'build', expected: ['help', 'calendar', 'timer'] },
      { name: 'Nonsense', input: 'asdfghjkl', expected: ['help', 'build'] },
      { name: 'Very Long', input: 'build a calendar that has months and years and days and weeks and hours and minutes and seconds and milliseconds and microseconds and nanoseconds', expected: ['calendar'] },
      { name: 'Special Chars', input: 'build a @#$% calendar', expected: ['calendar'] },
      { name: 'Numbers Only', input: '12345', expected: ['help', 'build'] },
      { name: 'Mixed Language', input: 'build un calendrier', expected: ['calendar', 'help'] },
      { name: 'Contradictory', input: 'build a simple complex calendar', expected: ['calendar'] },
      { name: 'Ambiguous', input: 'make it better', expected: ["don't have any code", 'help'] },
      { name: 'Very Short', input: 'hi', expected: ['hello', 'help'] },
    ];

    for (const test of tests) {
      await this.runTest(category, test.name, test.input, test.expected);
    }
  }

  private async testMultiTurnConversations(): Promise<void> {
    console.log('💬 Testing Multi-Turn Conversations (10 scenarios)...\n');
    const category = 'Multi-Turn Conversations';
    this.categoryResults.set(category, {passed: 0, failed: 0});

    // Scenario 1: Build, modify, modify again
    this.synth = new SynthAI();
    await this.synth.process('build a timer');
    await this.synth.process('make it beach themed');
    await this.runTest(category, 'Triple Turn', 'add ocean waves', ['ocean', 'wave']);

    // Scenario 2: Build multiple components
    this.synth = new SynthAI();
    await this.synth.process('build a calendar');
    await this.synth.process('build a timer');
    await this.runTest(category, 'Multiple Builds', 'make it dark', ['dark']);

    // Scenario 3: Build, modify theme, modify size
    this.synth = new SynthAI();
    await this.synth.process('build a calculator');
    await this.synth.process('make it beach themed');
    await this.runTest(category, 'Theme then Size', 'make it bigger', ['font-size']);

    // Scenario 4: Build, add feature, modify theme
    this.synth = new SynthAI();
    await this.synth.process('build a todo list');
    await this.synth.process('add animations');
    await this.runTest(category, 'Feature then Theme', 'make it dark', ['dark']);

    // Scenario 5: Build, modify color, modify size
    this.synth = new SynthAI();
    await this.synth.process('build a form');
    await this.synth.process('change the color to red');
    await this.runTest(category, 'Color then Size', 'make it bigger', ['font-size']);

    // Scenario 6: Complex workflow
    this.synth = new SynthAI();
    await this.synth.process('build a website');
    await this.synth.process('make it dark');
    await this.synth.process('add animations');
    await this.runTest(category, 'Complex Workflow', 'make it bigger', ['font-size']);

    // Scenario 7: Back and forth
    this.synth = new SynthAI();
    await this.synth.process('build a game');
    await this.synth.process('make it beach themed');
    await this.runTest(category, 'Back and Forth', 'make it dark', ['dark']);

    // Scenario 8: Multiple modifications
    this.synth = new SynthAI();
    await this.synth.process('build a dashboard');
    await this.synth.process('make it beach themed');
    await this.synth.process('add animations');
    await this.runTest(category, 'Multiple Mods', 'make it bigger', ['font-size']);

    // Scenario 9: Theme switching
    this.synth = new SynthAI();
    await this.synth.process('build a chart');
    await this.synth.process('make it beach themed');
    await this.runTest(category, 'Theme Switch', 'make it dark', ['dark']);

    // Scenario 10: Feature stacking
    this.synth = new SynthAI();
    await this.synth.process('build a player');
    await this.synth.process('add animations');
    await this.runTest(category, 'Feature Stack', 'make it responsive', ['responsive']);
  }

  private async runTest(category: string, testName: string, input: string, expected: string[]): Promise<void> {
    try {
      const result = await this.synth.process(input);
      const actual = result.response.toLowerCase();
      
      const issues: string[] = [];
      let passed = true;

      // Check if all expected strings are present
      for (const exp of expected) {
        if (!actual.includes(exp.toLowerCase())) {
          passed = false;
          issues.push(`Missing: "${exp}"`);
        }
      }

      // Check if response is not generic
      if (actual.includes('i can generate interactive html') || 
          actual.includes("i don't have any code to modify") && !expected.some(e => e.includes("don't have"))) {
        passed = false;
        issues.push('Generic fallback response');
      }

      // Check if HTML is present when expected
      if (expected.some(e => e.includes('<!DOCTYPE') || e.includes('html')) && !actual.includes('<!doctype html>')) {
        passed = false;
        issues.push('No HTML generated');
      }

      const testResult: TestResult = {
        category,
        testName,
        input,
        expected,
        actual: result.response.substring(0, 200),
        passed,
        issues
      };

      this.results.push(testResult);

      const stats = this.categoryResults.get(category)!;
      if (passed) {
        stats.passed++;
        console.log(`  ✅ ${testName}`);
      } else {
        stats.failed++;
        console.log(`  ❌ ${testName}`);
        issues.forEach(issue => console.log(`     └─ ${issue}`));
      }

    } catch (error: any) {
      const testResult: TestResult = {
        category,
        testName,
        input,
        expected,
        actual: `ERROR: ${error.message}`,
        passed: false,
        issues: [`Exception: ${error.message}`]
      };

      this.results.push(testResult);
      const stats = this.categoryResults.get(category)!;
      stats.failed++;
      console.log(`  ❌ ${testName} - Exception: ${error.message}`);
    }
  }

  private generateReport(): void {
    console.log('\n' + '='.repeat(80));
    console.log('📊 STRESS TEST REPORT');
    console.log('='.repeat(80) + '\n');

    const totalTests = this.results.length;
    const passedTests = this.results.filter(r => r.passed).length;
    const failedTests = totalTests - passedTests;
    const passRate = ((passedTests / totalTests) * 100).toFixed(1);

    console.log(`Total Tests: ${totalTests}`);
    console.log(`Passed: ${passedTests} (${passRate}%)`);
    console.log(`Failed: ${failedTests}\n`);

    console.log('Results by Category:');
    for (const [category, stats] of this.categoryResults.entries()) {
      const total = stats.passed + stats.failed;
      const rate = ((stats.passed / total) * 100).toFixed(1);
      console.log(`  ${category}: ${stats.passed}/${total} (${rate}%)`);
    }

    console.log('\n' + '='.repeat(80));
    console.log('Failed Tests:');
    console.log('='.repeat(80) + '\n');

    const failedResults = this.results.filter(r => !r.passed);
    failedResults.forEach((result, index) => {
      console.log(`${index + 1}. [${result.category}] ${result.testName}`);
      console.log(`   Input: "${result.input}"`);
      console.log(`   Expected: ${result.expected.join(', ')}`);
      console.log(`   Issues: ${result.issues.join(', ')}`);
      console.log(`   Actual: ${result.actual.substring(0, 100)}...\n`);
    });

    console.log('='.repeat(80));
    console.log('Test Complete!');
    console.log('='.repeat(80) + '\n');
  }
}

// Run the stress test
const testSuite = new StressTestSuite();
testSuite.runAllTests().catch(console.error);

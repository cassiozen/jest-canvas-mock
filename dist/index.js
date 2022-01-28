import mockWindow from './window.js';

/**
 * Created by hustcc 17/12/25.
 * Contract: i@hust.cc
 */

// mock global window
// TODO: Force coverage to ignore this branch
if (typeof window !== 'undefined') {
  global.window = mockWindow(window);
}

const ver = '__VERSION__';

export { ver };

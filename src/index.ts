import { registerEventHandlers, unregisterEventHandlers } from './eventHandlers';
import { cleanUpRules, insertNeededRules } from './sheet';

let _isEnabled = false;

export const enable = ({ size } = { size: '10vmax' }) => {
  if (_isEnabled) return;

  insertNeededRules({ size })
  registerEventHandlers()

  _isEnabled = true;
};

export const disable = () => {
  if (!_isEnabled) return;

  unregisterEventHandlers()
  cleanUpRules()

  _isEnabled = false;
};

export const isEnabled = () => _isEnabled;

const handleUpdate = (x: number, y: number) => {
  document.documentElement.style.setProperty('--cursorX', x + 'px');
  document.documentElement.style.setProperty('--cursorY', y + 'px');
};

const handleMouseMove = (e: MouseEvent) => {
  handleUpdate(e.clientX, e.clientY);
};

const handleTouchMove = (e: TouchEvent) => {
  handleUpdate(e.touches[0].clientX, e.touches[0].clientY);
};

export const registerEventHandlers = () => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('touchmove', handleTouchMove);
}

export const unregisterEventHandlers = () => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('touchmove', handleTouchMove);
}
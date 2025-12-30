import { useState } from 'react';

const white = '#fff';
const black = '#000';
const darkGrey = '#333';
const lightGrey = '#f0f0f0';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);
  const background = isDark ? darkGrey : lightGrey;
  const color = isDark ? white : black;

  return (
    <button
      className={"themes-button"}
      onClick={() => setIsDark(!isDark)}
      style={{
        background,
        color,
      }}
    >
      {isDark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default DarkModeToggle;
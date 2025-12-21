
import { useRef } from 'react';

// Хук для отслеживания рендеров в консоли
export function useRenderCounter(name = 'Component') {
    const count = useRef(0);
    count.current++;
    console.log(`${name} render #${count.current}`);
    return count.current;
}
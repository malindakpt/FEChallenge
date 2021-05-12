import { useState } from 'react';

export const useForcedRender = (): (() => void) => {
    const [, setCount] = useState<number>(0);

    const reRender = () => setCount((prev: number) => prev + 1);

    return reRender;
};

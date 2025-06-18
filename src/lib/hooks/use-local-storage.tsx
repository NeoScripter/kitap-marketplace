import { useEffect, useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        try {
            const jsonValue = localStorage.getItem(key);
            if (jsonValue !== null) {
                return JSON.parse(jsonValue) as T;
            } else {
                localStorage.setItem(key, JSON.stringify(initialValue));
                return initialValue;
            }
        } catch (error) {
            console.error("Error reading localStorage", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }
    }, [value, key]);

    return [value, setValue];
}


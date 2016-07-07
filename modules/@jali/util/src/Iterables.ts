export function toMap<TKey, TValue>(sequence: Iterable<TValue>, keySelector: (value: TValue) => TKey) {
    let map = new Map<TKey, TValue>();
    
    for (const value of sequence) {
        map.set(keySelector(value), value);
    }

    return map;
}

export function has<T>(sequence: Iterable<T>): boolean {
    for (let element of sequence) {
        element; // This quiets the compiler error for `noUnusedLocals`.
        return true;
    }

    return false;
}

export function firstOrDefault<T>(sequence: Iterable<T>, value?: T): T | undefined {
    for (let element of sequence) {
        return element;
    }

    return value;
}

export function* where<T>(sequence: Iterable<T>, predicate: (element: T) => boolean): Iterable<T> {
    for (let element of sequence) {
        if (predicate(element)) {
            yield element;
        }
    }
}

export function toMap<TKey, TValue>(sequence: Iterable<TValue>, keySelector: (value: TValue) => TKey) {
    let map = new Map<TKey, TValue>();
    
    for (const value of sequence) {
        map.set(keySelector(value), value);
    }

    return map;
}

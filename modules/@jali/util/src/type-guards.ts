import * as Iterables from "./iterables";

export function isError(value: any): value is Error {
    return (value as Error).message !== undefined;
}

export function makeIsIterable<T>(
    elementTypeGuard: (element: any) => element is T):
        (value: any) => value is Iterable<T> {
    let predicate = (value: any) => {
        let iterable = value as Iterable<T>;

        if (iterable[Symbol.iterator] === undefined) {
            return false;
        }

        let element = Iterables.firstOrDefault(iterable);

        if (element === undefined) {
            return true;
        }

        return elementTypeGuard(element);
    };

    // Need type assertion: See https://github.com/Microsoft/TypeScript/issues/5951.
    return predicate as (value: any) => value is Iterable<T>;
}

export function isIterable<T>(value: any): value is Iterable<T> {
    return (value as Iterable<T>)[Symbol.iterator] !== undefined;
}


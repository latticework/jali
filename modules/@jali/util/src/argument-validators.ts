import * as TypeGuards from "./type-guards";

import ArgumentError from "./argument-error";
import ArgumentFalseError from "./argument-false-error";
import ArgumentFalsyError from "./argument-falsy-error";
import ArgumentNanError from "./argument-nan-error";
import ArgumentNullError from "./argument-null-error";
import ArgumentTypeError from "./argument-type-error";
import ArgumentUndefinedError from "./argument-undefined-error";
import ArgumentZeroError from "./argument-zero-error";

export function validateArgument<T>(name: string, value: T, test: (value: T) => boolean, message?: string): void | never {
    if (!test(value)) {
        throw new ArgumentError(name, message);
    }
}

export function validateBoolean(name: string, value: boolean, message?: string): void | never {
    if (typeof value !== "boolean") {
        throw new ArgumentTypeError("boolean", name, message);
    }
}

export function validateFunction(name: string, value: Object, message?: string): void | never {
    if (typeof value !== "function") {
        throw new ArgumentError(name, message);
    }
}

export function validateDefined<T>(name: string, value: T, message?: string): void | never {
    if (value === undefined) {
        throw new ArgumentUndefinedError(name, message);
    }
}

export function validateIterable<T>(name: string, value: Iterable<T>, message?: string): void | never {
    if (!TypeGuards.isIterable(value)) {
        throw new ArgumentError(name, message);
    }
}

export function validateNonEmpty(name: string, value: string, message?: string): void | never {
    if (value === "") {
        throw new ArgumentFalseError(name, message);
    }
}

export function validateNotNull<T>(name: string, value: T, message?: string): void | never {
    if (value === null) {
        throw new ArgumentNullError(name, message);
    }
}

export function validateNonZero(name: string, value: number, message?: string): void | never {
    if (value === 0) {
        throw new ArgumentZeroError(name, message);
    }
}

export function validateNumber(name: string, value: number, message?: string): void | never {
    if (typeof value !== "number") {
        throw new ArgumentTypeError("number", name, message);
    }

    if (value === NaN) {
        throw new ArgumentNanError(name, message);
    }
}

export function validateObject(name: string, value: Object, message?: string): void | never {
    if (typeof value !== "object") {
        throw new ArgumentTypeError("object", name, message);
    }
}

export function validateString(name: string, value: string, message?: string): void | never {
    if (typeof value !== "string") {
        throw new ArgumentTypeError("string", name, message);
    }
}

export function validateTrue(name: string, value: boolean, message?: string): void | never {
    if (value === false) {
        throw new ArgumentFalseError(name, message);
    }
}

export function validateTruthy<T>(name: string, value: T, loose: boolean = false, message?: string): void | never {
    if (!value) {
        if (loose) {
            throw new ArgumentFalsyError(name, message);
        }

        validateDefined(name, value, message);
        validateNotNull(name, value, message);
        if (typeof value === "boolean" ) { validateTrue(name, value as any as boolean, message) }
        if (typeof value === "string" ) { validateNonEmpty(name, value as any as string, message) }

        if (typeof value === "number" ) {
            validateNumber(name, value as any as number, message);
            validateNonZero(name, value as any as number, message);
        }
    }
}

//import * as UtilTypeGuards from "@jail/util/TypeGuards"
import * as UtilTypeGuards from '../../../../dist/packages-dist/util/TypeGuards'

import * as TypeGuards from "../TypeGuards"
import * as NotificationMessageIterables from "../NotificationMessageIterables";

import NotificationMessage from "./NotificationMessage";

export default class StructuredError extends Error {
    public readonly innerError: Error;

    constructor()
    constructor(message: NotificationMessage)
    constructor(messages: Iterable<NotificationMessage>)
    constructor(innerError: Error)
    constructor(message: NotificationMessage, innerError: Error)
    constructor(messages: Iterable<NotificationMessage>, innerError: Error)
    constructor(
        messageOrMessagesOrError: NotificationMessage | Iterable<NotificationMessage> | Error = undefined,
        innerError: Error = undefined) {
        super(resolveMessage(messageOrMessagesOrError))

        this.innerError = innerError;

        if (UtilTypeGuards.isError(messageOrMessagesOrError)) {
            this.innerError = messageOrMessagesOrError;
        }
    }
}

function resolveMessage(
        messageOrMessagesOrError: NotificationMessage | Iterable<NotificationMessage> | Error = undefined): 
        string {
    if (TypeGuards.isNotificationMessage(messageOrMessagesOrError)) {
        return messageOrMessagesOrError.message;
    }
    else if (UtilTypeGuards.makeIsIterable(TypeGuards.isNotificationMessage)(
            messageOrMessagesOrError)) {
        let error = NotificationMessageIterables.get_Error(messageOrMessagesOrError);

        if (error !== undefined) {
            return error.message;
        }
    }

    return undefined;
}

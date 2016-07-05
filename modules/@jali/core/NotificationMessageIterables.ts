//import * as Iterables from "@jail/util/Iterables";
import * as Iterables from "../../../dist/packages-dist/util/Iterables";

import MessageSeverity from "./src/MessageSeverity";
import NotificationMessage from "./src/NotificationMessage";

export function get_Error(messages: Iterable<NotificationMessage>) : NotificationMessage {
    return Iterables.firstOrDefault(get_Errors(messages));
}

export function get_Errors(messages: Iterable<NotificationMessage>) : Iterable<NotificationMessage> {
    return Iterables.where(messages, message => message.severity <= MessageSeverity.Error)
}

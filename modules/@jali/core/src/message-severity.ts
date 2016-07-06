/** 
 * Represents the severity of a notificaiton message.
 * @see [Microsoft.Extensions.Logging.LogLevel]{@link https://github.com/aspnet/Logging/blob/dev/src/Microsoft.Extensions.Logging.Abstractions/LogLevel.cs} 
 */
enum MessageSeverity {
    /**
     * Logs that describe an unrecoverable application or system crash, or a catastrophic failure tha
     * requires immediate attention.
     */
    Critical = 0,

    /**
     * Logs that highlight when the current flow of execution is stopped due to a failure. These should 
     * indicate a failure in the current activity, not an application-wide failure.
     */
    Error = 1,

    /**
     * Logs that highlight an abnormal or unexpected event in the application flow, but do not otherwise cause 
     * the application execution to stop.
     */
    Warning = 2,

    /**
     * Logs that track the general flow of the application. These logs should have long-term value.
     */
    Information = 3,

    /**
     * Logs that are used for interactive investigation during development.  These logs should primarily 
     * contain information useful for debugging and have no long-term value.
     */
    Debug = 4,

    /**
     * Logs that contain the most detailed messages. These messages may contain sensitive application data.
     * These messages are disabled by default and should never be enabled in a production environment.
     */
    Trace = 5,
}

export default MessageSeverity;
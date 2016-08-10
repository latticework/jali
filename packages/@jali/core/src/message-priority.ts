/**
 * Represents the priority of notification messages.
 */
enum MessagePriority {
  /** Specifies that a message must be communicated. */
  Mandatory = 0,

  /** Specifies high priority messages such as errors. */
  High = 1,

  /** Specifies normal priority messages such as warnings. */
  Normal = 2,

  /** Specifies low priority messages such as information messages. */
  Low = 3,

  /** Specifies very low priority messages such as debug messages. */
  VeryLow = 4,

  /** Specifies messages which should not be communicated, such as trace messages. */
  Restricted = 5,
}

export default MessagePriority;


## Example
```typescript
function jali_util_example_01(writer: ExampleWriter): void {
  writer.logIndented(1, `jali_util_example_01: Examples for module '@jali/util/errors'`);

  function functionWithParameters(
      notNullNumber: number, notWhitespaceString: string, truthyBoolean: boolean): void {
    Util.Errors.verifyNotNull('nonNullNumber', notNullNumber);
    Errors.verifyNotWhitespace('notWhitespaceString', notWhitespaceString);
    verifyTruthy('truthyBoolean', truthyBoolean);

    verifyArgument('notWhitespaceString', notWhitespaceString, arg => !arg.match(/\w/u));

    verifyArgument(
      'notNullNumber',
      notNullNumber,
      arg => arg >= 10 && arg < 20,
      arg => `Argument must be between 10 and 19. Yours is '${arg}'`)
  }


  writer.logIndented(2, `Example for function 'verifyNotNull'`);
  writer.logException(3, () => functionWithParameters(null as any as number, 'value', true));

  console.log();

  // U+1680	OGHAM SPACE MARK
  writer.logIndented(2, `Example for function 'verifyNotWhitespace'`);
  writer.logException(3, () => functionWithParameters(1, '\u{1680}', true));

  console.log();

  writer.logIndented(2, `Example for function 'verifyTruthy'`);
  writer.logException(3, () => functionWithParameters(1, 'value', NaN as any as boolean));

  console.log();

  writer.logIndented(2, `Example for function 'verifyArgument'`);
  writer.logException(3, () => functionWithParameters(1, 'value with spaces', true));

  console.log();

  writer.logIndented(2, `Example for function 'verifyArgument' with specified message function`);
  writer.logException(3, () => functionWithParameters(20, 'value', true));
}
```
## Output
```
  jali_util_example_01: Examples for module '@jali/util/errors'
    Example for function 'verifyNotNull'
      Error: Error in argument 'nonNullNumber': Argument must have a non-null
      value. Yours is 'null'

    Example for function 'verifyNotWhitespace'
      Error: Error in argument 'notWhitespaceString': Argument must contain
      non-whitespace characters. Yours has only whitespace

    Example for function 'verifyTruthy'
      Error: Error in argument 'truthyBoolean': Argument must have a truthy
      value. Yours is 'NaN'

    Example for function 'verifyArgument'
      Error: Error in argument 'notWhitespaceString'

    Example for function 'verifyArgument' with specified message function
      Error: Error in argument 'notWhitespaceString'
```
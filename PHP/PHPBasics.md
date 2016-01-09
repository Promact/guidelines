
> - Use 4 spaces for indenting, do not use tabs.
> - Lines should be 80 characters or less. should not contain more than 120
> - There must be one blank line after the namespace declaration and block of use declaration
> - Opening/closing braces for classes must go on the next line.
> - Opening braces for control structures(if,foreach,while  etc.) must go on the same line, and closing braces must go on the next line after the body.
> - Declare visibility on all properties and methods of classes; Do not depend on default visibilty. 
> -  ```abstract``` and ```final``` must be declared before the visibility; ```static``` must be declared after the visibility.

```
<?php
namespace Vendor\CacheLibrary;

use BaseCacheInterface;
use CacheClass as Cache;
use OtherVendor\OtherPackage\BaseClass;

class YourClass extends Cache implements BaseCacheInterface
{
    public function sampleFunction($arg1, $arg2 = null, $arg3 = true)
    {
        if ($arg1 === $var) {
            self::myStaticFunction();
        } elseif ($a > $b) {
            $foo->bar($arg2);
        } else {
            Cache::get($arg2, $arg3);
        }
    }

    final public static function myStaticFunction()
    {
        // method body comes here
    }
}

?>

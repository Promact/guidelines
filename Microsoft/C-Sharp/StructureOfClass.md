# Structure of A Class

A Class can be divided into following parts

1. Constructors
2. Destructors
3. Private readonly variables
4. Public properties
5. Static variables
6. Constants
7. Private variables
8. Private methods
9. Public methods

Each sections are encapsulated by #region..#endregion.

1. Constructors

```c#
namespace FooBarApplication
{    
    public class Foo
    {
        #region Constructors        
        public Foo()
        {
        }
        
        public Foo(string bar)
        {
        }
        #endregion
    }
}
```
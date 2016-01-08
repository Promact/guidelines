# Structure of A Class

A Class can be divided into following parts

1. Constructors
2. Destructors
3. Private variables
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

2. Destructors

```c#
namespace FooBarApplication
{    
    public class Foo
    {
        #region Destructors        
        ~Foo()
        {
        }                
        #endregion
    }
}
```

3. Private variables

In case of private variables. We hav 2 types of variables.
- Dependencies injected from constructors (readonly)
- private variables used inside class

```c#
namespace FooBarApplication
{
    public class Foo
    {
        #region Private Variables

        #region Dependencies

        private readonly ISomeService _someService;
        private readonly IOtherService _otherService;

        #endregion

        private string bar;
        private bool isInitialized;

        #endregion

        #region Constructors                

        public Foo(ISomeService someService, IOtherService otherService)
        {
            _someService = someService;
            _otherService = otherService;
        }
        #endregion        
    }    
}
```

4. Public properties

```c#
namespace FooBarApplication
{
    public class Foo
    {
        #region Private Variables

        #region Dependencies

        private readonly ISomeService _someService;
        private readonly IOtherService _otherService;

        #endregion

        private string bar;
        private bool isInitialized;

        #endregion

        #region Properties

        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }

        #endregion

        #region Constructors                

        public Foo(ISomeService someService, IOtherService otherService)
        {
            _someService = someService;
            _otherService = otherService;
        }
        #endregion
    }    
}
```
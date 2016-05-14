---
layout: page
---

# Structure of A Class

A Class can be divided into following parts

1. Constructors
2. Destructors
3. Private variables
4. Public properties
5. Static variables
6. Constants
7. Private methods
8. Public methods
9. Implemented/Overriden methods

Each sections are encapsulated by `#region`..`#endregion`.

### Constructors

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

### Destructors

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

### Private variables

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

### Public properties

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

### Static variables

In general we don't use static variables in a Web Application. If you are going to use it then follow the structure.

```c#
namespace FooBarApplication
{
    public class Foo
    {        
        #region Static Variables

        private static string _nameOfClass;
        public static string NameOfMethods;

        #endregion
    }
}
```

### Constants

Constants will be declared a private variable. If you need public constant use properties with private setter or no setter.

```c#
namespace FooBarApplication
{
    public class Foo
    {        
        #region Constants

        private const string KEY = "MasterKey";
        private const int MAX_AGE = 26;

        #endregion        
    }
}

```

### Private methods

```c#
namespace FooBarApplication
{
    public class Foo
    {        
        #region Private methods

        private void SaveUserData(string usernamee, string password)
        {
            
        }

        private void UpdateUserData(string usernamee, string password)
        {

        }
        #endregion
    }
}
```

### Public methods

```c#
namespace FooBarApplication
{
    public class Foo
    {        
        #region Public methods

        public void Save(string username, string password)
        {
            this.SaveUserData(username,password);
        }

        public void Update(string username, string password)
        {
            this.UpdateUserData(username,password);
        }
        #endregion        
    }    
}
```

### Implemented/Overridden methods

```c#
namespace FooBarApplication
{
    public class Foo : FooBase, IDisposable
    {        
        #region IDisposable methods
        public void Dispose()
        {
            throw new NotImplementedException();
        }
        #endregion

        #region FooBase methods

        public override void DoSomething()
        {
            base.DoSomething();
        }

        #endregion        
    }
}
```

### Entire class in proper order

You need to follow ordering as described below.

```c#
namespace FooBarApplication
{
    public class Foo : FooBase, IDisposable
    {
        //Private Variables

        //Properties
        
        //Static Variables

        //Constants

        //Constructors                        

        //Private methods

        //Public methods

        //IDisposable methods
        
        //FooBase methods

        //Destructors        
    }    
}
```


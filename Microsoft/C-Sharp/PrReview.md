# PR Review guidelines for C# #

## Loops ##

1. Do not use for loop unless absolutely necessary
2. Do not write expensive operations within a for loop. Some of the expensive operations are db calls, http requests or file system operations like reading or writting files.
3. Do not use Foreach extension method. It will break consistency. use regular foreach loop instead.

## General ##

1. Do not call **ToList()** on **IEnumerable** unnecessary. If a type returns an interator.
2. Don't call **FirstOrDefault()** on a list where you are certain to receieve one element. Use **First()**. It will save you from checking null before using it.
3. Don't use **Count()** in a conditional statement. Use **Any()** instead.

## Exceptions ##

1. Do not catch generic Exception. Always start with specific exception and continue moving towards generic.

```csharp
    public class Foo
    {
        public void Bar()
        {
            try
            {
                //This will result in ArithmaticException
                var result = 100 / Int32.Parse("0");
            }
            catch (Exception e) // Do not catch a generic exception
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
```

```csharp
    public class Foo
    {
        public void Bar()
        {
            try
            {
                //This will result in ArithmaticException
                var result = 100 / Int32.Parse("0");
            }
            catch (ArithmaticException e) // catch specific exception
            {
                Console.WriteLine(e);
                throw;
            }
            catch (Exception e) // Generic exception should be last
            {
                Console.WriteLine(e);
                throw;
            }
        }
    }
```

2. Don't return **null** from a method from which a value is expected. Try to throw a custom exception with a user friendly message.

```csharp
        public string GetEmployeeName(int id)
        {
            Employee result = dbContex.Employee.Where(x => x.Id == id).FirstOrDefault();
            if (result != null)
            {
                return result.Name;
            }
            else
            {
                return null;// Don't do this
            }
        }
```

```csharp
        public string GetEmployeeName(int id)
        {
            Employee result = dbContex.Employee.Where(x => x.Id == id).FirstOrDefault();
            if (result != null)
            {
                return result.Name;
            }
            else
            {
                throw new EmployeeNotFoundException($"employee with {id} not found"); //Define a custom exception which can help you understand logic better in case an exception is raised.
            }
        }
```
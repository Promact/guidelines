# Struct vs Class

**- struct is pass-by-copy and class is pass-by-reference**

**- pass-by-copy is preferrable to use in Swift as compared to pass-by-reference**

## Why use pass-by-copy (struct implementation)

##### One owner
##### No dependency
##### Easy to compare
##### Easy to copy

```Swift
class Dog
{
    private var name: String
    private var age : Int
    
    internal init(name: String, age: Int)
    {
        self.name = name
        self.age  = age
    }
    
    internal var getSetName: String
    {
       get
       {
         return self.name
       }
       set
       {
         self.name = newValue
       }
    }
    
    internal var getSetAge: Int
    {
        get
        {
            return self.age
        }
        set
        {
            self.age = newValue
        }
    }
}



struct Cat
{
    private var name: String
    private var age : Int
    
    internal var getSetName: String
    {
        get
        {
            return self.name
        }
        set
        {
            self.name = newValue
        }
    }
    
    internal var getSetAge: Int
    {
        get
        {
            return self.age
        }
        set
        {
            self.age = newValue
        }
    }
}



let dogOne = Dog(name: "Flurry", age: 5)

// Here this is pass-by-reference, so a change in dogTwo will also be reflected in dogOne
let dogTwo = dogOne

dogTwo.getSetName = "Hunter"
print(dogTwo.getSetName)
print(dogOne.getSetName)


let catOne = Cat(name: "Twinkle", age: 3)

// Here this is pass-by-copy, so a change in catTwo will NOT be reflected in catOne
var catTwo = catOne

catTwo.getSetName = "Flossy"
print(catTwo.getSetName)
print(catOne.getSetName)
```

**- In the above example dogOne and dogTwo are two different references to the same Dog object, so there are more than one owner here,
more than one owner leads to dependencies which can span among many references which inturn are hard to keep track off**

#### Few data-structures in Swift which are struct implementation

**- Array**
**- Dictionary**
**- Primitive types like String, Int, Float, Double, Character, Bool**

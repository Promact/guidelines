---
layout: page
title: Single Responsibility Principle
---

# SRP (Single Responsibility Principle)

**- SRP is about making a single method/function do specific task
  or a class/structure do a specific set of functionalities that defines that Type (i.e. class or struct)**


**Note:**
     ***I am using Swift, the flagship (now open-source) language of Apple Inc. to demonstrate the SRP principle.***
 

## SRP IN METHOD/FUNCTION     

**Example:**
     Taking the example of a Coffee and Tea making machine to explain SRP in method/function


#### Tea-maker

```Swift

struct TeaMaker
{
  internal func prepareTea()
  {
     // Prepare tea here
  }

  internal func addMilk()
  {
     // Add milk to tea
  }
}
```

#### Coffee-maker

```Swift

struct CoffeeMaker
{
  internal func prepareCoffee()
  {
     // Prepare Coffee here
  }

  internal func addMilk()
  {
     // Add milk to Coffee
  }

}
```

- It’s always a good idea to have a single task assigned to a single methods/functions.

 - Consider Tea which can be with milk or without it, now if we have only one method called prepareTea() with addMilk() method functionality inside it, then the
   tea will always be with milk.

```Swift

struct TeaMaker
{
  // Wrong way to implement a method which does more than one Task
  internal func prepareTea()
  {
     // Prepare tea here
     // Add milk to tea
  }

}
```

- Some people may ague over the point that using a condition factor we can control the addition of milk inside the prepareTea() method but then that leads to violation
   of another Software designing principle named DRY (Don’t Repeat Yourself).
     
 - Consider there is only one struct/class called HotDrinkMaker, now this can make both tea as well as coffee. Now if we write the addMilk() method inside prepareTea() and prepareCoffee() method
   then the addMilk functionality is repeated twice.


```Swift

struct HotDrinkMaker
{
  // Repetition of add milk functionality
  internal func prepareTea()
  {
     // Prepare tea here
     // Add milk to tea
  }

  // Repetition of add milk functionality
  internal func prepareCoffee()
  {
     // Prepare coffee here
     // Add milk to coffee
  }
}

```

- Implementing SRP to a method/function prevents violation of DRY.

```Swift

struct HotDrinkMaker
{
 
  internal func prepareTea(isBlack: Bool)
  {
     // Prepare tea here

        if !isBlack
        {
            addMilk()
        }
  }

  internal func prepareCoffee(isBlack: Bool)
  {
     // Prepare coffee here

        if !isBlack
        {
            addMilk()
        }
  }
 
  internal func addMilk()
  {
     // Add milk to Coffee
  }
}

```

- If we try to optimise this HotDrinkMaker struct further then I would prefer the below code.

``` Swift

enum Drinks
{
    case Tea
    case Coffee
}

enum Milk
{
    case Yes
    case No
}

struct HotDrinkMaker
{
    
    internal func prepareDrink(drink: Drinks, milk: Milk)
    {
        // Prepare drink here
        print("Drink prepared")
        
        if milk == Milk.Yes
        {
            addMilk()
        }
    }
        internal func addMilk()
    {
        // Add milk to Coffee
        print("Milk added")
    }
}

```

## SRP IN CLASS/STRUCT

- Classes/Structs must follow 2 things.

  - SRP
  - Cohesiveness


- SRP in class/struct deals with grouping of all the functionalities that defines that particular type.
- Cohesiveness is about having all the methods/functions whose functionalities are apt to the name of that class/struct.

Example:
     Taking the example of a Car to explain SRP in class/struct

``` Swift
struct Car
{
  internal func controlSteering()
  {
    // controls the steering of a car
  }

  internal func controlAcceleration()
  {
    // controls the acceleration of a car
  }

  internla func controlBrakes()
  {
    // controls the brakes of a car
  }

}
```

- All the methods above controlSteering(), controlAcceleration() and controlBrakes() does a specific Task and all the methods are apt to the name of the struct that its contained within.

- Consider I need a method called fillOil() but before that we need to decide few other factors.

  - Type of Oil (Petrol, Diesel, Water, Air… who knows about the future !!)
  - Categories of Oil (Power, Swift, Energy… etc etc)

- So all these are specific to Oil not to Car, so it can’t be a part of it… Thats what SRP is about in class/struct.
- The definition of methods within the Car struct aptly justifies the Type Car here, thats Cohesiveness.


``` Swift

enum Oils
{
    case Petrol
    case Diesel
}

enum OilTypes
{
    case Power
    case Swift
    case Energy
}


struct Oil
{
    private var oil: Oils?
    private var oilType: OilTypes?
    
    internal init(oil: Oils,oilType: OilTypes)
    {
        self.oil = oil
        self.oilType = oilType
    }
    
    internal var getOil: Oils?
    {
      get
      {
        return self.oil
      }
    }
    
    internal var getOilType: OilTypes?
    {
        get
        {
            return self.oilType
        }
    }
}

struct Car
{
    
    // use of composition principle to include the type (Oil) within a Type (Car) which is a part of it but not fits into its own structure(ie not fits in Car's struct)
    private var oil: Oils?
    
    internal func controlSteering()
    {
        // controls the steering of a car
    }
    
    internal func controlAcceleration()
    {
        // controls the acceleration of a car
    }
    
    internal func controlBrakes()
    {
        // controls the brakes of a car
    }
    
    internal fun fillOil()
    {
       // initialise the oil instance here according to the Car
    }
}

```
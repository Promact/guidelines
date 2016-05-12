# Project structure

We follow multi-project structure in which every project have specific responsibility. We will use example of **Employee Management** system.

## Projects:

### Web:

This is the startup/frontend project which will be responsible for holding all frontend related items such as views(cshtml), templates(html), client dependencies(javascript,css,scss). It will also have bootstrap code like registering routes, dependencies and configuring logs.

Directory structure:
```
├── EmployeeManagement.Web /
│   ├── App_Start
│   │   ├── AutofacConfig.cs
│   │   ├── RouteConfig.cs
│   │   ├── BundleConfig.cs
│   │   ├── LogConfig.cs
│   │   ├── AutomapperConfig.cs
│   ├── Content
│   │   ├── Javascript
│   │   ├── CSS
│   │   ├── Fonts
│   ├── Templates
│   ├── Views
│   ├── Startup.cs
```

### Core:

This project will hold **MVC controllers** as well as **WebAPI controllers**, **Action Filters**, **SignalR Hubs**. We keep client/server communication related code in this and don't keep any business logic.

Directory structure:
```
├── EmployeeManagement.Core /
│   ├── Controllers
│   │   ├── HomeController.cs
│   ├── ApiControllers
│   │   ├── ValueController.cs
│   ├── ActionFilters
│   │   ├── AuthorizeFilter.cs
│   ├── Hubs
│   │   ├── MainHub.cs
```

### Repository:

This project will hold all the business logic related to the application, where every logical module of application will have related repository. For, e.g, If you are working on User related module. You would create **IUserRepository.cs** and **UserRepository.cs**.

Directory structure:

```
├── EmployeeManagement.Repository /
│   ├── Impl
│   │   ├── UserRepository.cs
│   ├── Interface
│   │   ├── IUserRepository.cs
```

Alternate directory structure:

```
├── EmployeeManagement.Repository /
│   ├── User
│   │   ├── UserRepository.cs
│   │   ├── IUserRepository.cs
│   ├── Department
│   │   ├── IDepartmentRepository.cs
│   │   ├── DepartmentRepository.cs
```

### Util:

This project will hold common utility classes like Email, Encryption, SMS, PushNotification etc.

Directory structure:

```
├── EmployeeManagement.Util /
│   ├── Email
│   │   ├── IEmailUtility.cs
│   │   ├── EmailUtility.cs
```

Alternate directory structure (In this structure we can use static methods):

```
├── EmployeeManagement.Util /
│   ├── Email.cs
│   ├── Encryption.cs
```

### DomainModel:

This project will hold domain model classes, As well as it will contain Entity Framework related configurations and generic data repositories.

Directory structure:
```
├── EmployeeManagement.DomainModel /
│   ├── Models
│   │   ├── User.cs
│   │   ├── Department.cs
│   ├── Migrations
│   │   ├── Configuration.cs
```

### Globalization:

If we need i18n related key-string mappings and string constants, then we will use this project to define all keyvalue pairs as well as resource files related to globalization in this project.

### Core.Test

Unit test project for testing controllers, action filters, signalr hubs. (Unit tests for Core project classes)

### Repository.Test

Unit test project which will hold unit tests related to business logic of all the logical modules of the application. (Unit tests for Repository project classes)

## Dependencies between projects

### Web:

- Core
- DomainModel
- Globalization

### Core:

- Repository
- DomainModel

### Repository:

- Util
- DomainModel
 
### Util:

- N/A

### DomainModel:

- N/A

### Core.Test

- Core
- DomainModel

### Repository.Test

- Repository
- DomainModel


## Example

Suppose we are making new project for Employee management, its structure would go like below

Solution name would be EmployeeManagement.sln

Projects would be 

- EmployeeManagement.Web 
- EmployeeManagement.Core
- EmployeeManagement.Core.Test
- EmployeeManagement.Repository
- EmployeeManagement.Repository.Test
- EmployeeManagement.Util
- EmployeeManagement.Util.Test
- EmployeeManagement.DomainModel 
- EmployeeManagement.Globalization  



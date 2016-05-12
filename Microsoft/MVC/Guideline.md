# Basic MVC/WebApi Project structure

**We follow multiple project structure, In which every project have specific responsibility mentioned below**

## Projects:

### Web:

This is the startup project which will be responsible for holding all startup related logic as well as views, templates, client dependencies(javascripts).

### Core:

This project will hold MVC controllers as well as WebAPI controllers, Action Filters, SignalR Hubs.

We mostly put client server communication related code in this project, and don't put any business logic except that.

### Repository:

This project will hold all business logic related to application, in terms of {ModuleName}Repository.cs classes, where every logical module of application will have related repository.

### Util:

This project will hold basic utility classes which can be used for utilities like Email, Encryption, Sms etc.

### DomainModel:

This project will hold all domain model classes which are directly connected to database (as we are using code first approach), As well as it will contain Entity Framework related configurations and generic datarepositories.

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

Projects would be EmployeeManagement.Web, EmployeeManagement.Core, EmployeeManagement.Repository, EmployeeManagement.Util, EmployeeManagement.DomainModel, EmployeeManagement.Globalization, EmployeeManagement.Core.Test, EmployeeManagement.Repository.Test.


# Android Project Guidelines

This is general guideline and rules to follow for android application development.

## Follow Field Naming Conventions

- Non-public, non-static field names start with m.
- Static field names start with s. (if it is private static)
- Other fields start with a lower case letter.
- Public static final fields (constants) are ALL_CAPS_WITH_UNDERSCORES.

For example:
	
```java
public class MyClass {
    public static final int SOME_CONSTANT = 42;
    public int publicField;
    private static MyClass sSingleton;
    int mPackagePrivate;
    private int mPrivate;
    protected int mProtected;
}
```


## All the java files and XML files should have four (4) space indent, **NOT TABS.** 

- Use four (4) space indents for blocks and never tabs. When in doubt, be consistent with the surrounding code.
- Use eight (8) space indents for line wraps, including function calls and assignments. 

For example, this is correct:

```java
Instrument i =
        someLongExpression(that, wouldNotFit, on, one, line);
```

while this is not correct:

```java
Instrument i =
    someLongExpression(that, wouldNotFit, on, one, line);
```


## Limit Line Length

- Each line of code in your project must be 100 characters long. More code should be surrounded and the limit remains as 100 characters long.
- If comment line containt an example commands or URL longer then 100 characters, then that line may be longer than 100 characters
- Import lines may also go longer then 100 characters long


## Application log should be written in proper manner with proper declaration (ERROR, WARNING, INFORMATION, DEBUG and VERBOSE). Final Log should be written in separate file. So it is easy to manage it any time. Also use Log instead of native System.out.printf or printfln.

- ERROR: Use when something fatal has happened.
- WARNING: Use when something serious and unexpected happened.
- INFORMATIVE: Use to note inportant information that is required for application to trace and look for.
- DEBUG: Use for debug purposes. 
- VERBOSE: Use for everything else. This level will only be logged on debug builds and should be surrounded by an if (LOCAL_LOGV) block (or equivalent) so it can be compiled out by default. Any string building will be stripped out of release builds and needs to appear inside the if (LOCAL_LOGV) block.

```java
Log.v(String, String) (verbose)
Log.d(String, String) (debug)
Log.i(String, String) (information)
Log.w(String, String) (warning)
Log.e(String, String) (error)
```
For example:

```java
Log.i("MyActivity", "MyClass.getView() — get item number " + position);
```


## Don’t ignore Exceptions. Don’t catch generic Exceptions. 

Exceptions has to be well cached and well-handled for each exceptions. Exception should be globally handled.

Check below unproper example:
```java
void setServerPort(String value) {
    try {
        serverPort = Integer.parseInt(value);
    } catch (NumberFormatException e) { }
}
```

Aslo don't catch generic exception like below:

```java
try {
   someComplicatedIOFunction();        // may throw IOException
   someComplicatedParsingFunction();   // may throw ParsingException
   someComplicatedSecurityFunction();  // may throw SecurityException
   // phew, made it all the way
} catch (Exception e) {                // I'll just catch all exceptions
   handleError();                      // with one generic handler!
}

```

Use comment to explaing exception as below example:

```java
/** If value is not a valid number, original port number is used. */
void setServerPort(String value) {
    try {
        serverPort = Integer.parseInt(value);
    } catch (NumberFormatException e) {
        // Method is documented to just ignore invalid user input.
        // serverPort will just be unchanged.
    }
}
```

Note: Define one class with name Exceptionhandler.java and mention genaric method to call for all exception with in the app. With this, you will have once place to handled/manage all exceptions of the application.


## Java-doc standard comments should be used for explanation of the method, class and declaration whenever required.

Every class and nontrivial public method you write must contain a Javadoc comment with at least one sentence describing what the class or method does. This sentence should start with a third person descriptive verb.

Examples:

```java

/** Returns the correctly rounded positive square root of a double value. */
static double sqrt(double a) {
    ...
}
```

or

```java
/**
 * Constructs a new String by converting the specified array of
 * bytes using the platform's default character encoding.
 */
public String(byte[] bytes) {
    ...
}
```
	

## Listener used in the activity has to be implemented first and then used its override methods in same activity. If there are more than 2-3 fields included with listener with in same activity then that should be handled by Switch-case, else normal if-else condition should be used.



## Project Structure and files arrangement should be in such a way that can be identified easily by any developer. Follow below file arrangement and project structure for best practice.

There has to be separate files for each class in my Android projects, the only exception being AsyncTasks. Having this many java files means you have to have more packages than the base package. Here the example ended up with a package for each type of main class. Each class should named ending with its type.

- **com.example**
  - **activities (package):** Contains all the activities. Classes are all named with Activity at the end. That way, you can immediately know what it is when reading Java code that doesn't have its full package name.

  - **adapters (package):** Contains all the adapters.

  - **authenticator (package):** Contains any class related to signing a user in. I create a local account and having all related classes together is very handy.

  - **data (package):** Contains all classes related to data management such as ContentProvider and SQLiteHelper.

  - **data.migrations (package):** Contains all of my SQLite migrations. I created a class for migrations, read about it here, and put them all in this package.

  - **fragments (package):** Contains all fragments.

  - **helpers (package):** Contains helper classes. A helper class is a place to put code that is used in more than one place. I have a DateHelper for instance. Most of the methods are static.

  - **interfaces (package):** Contains all interfaces.

  - **models (package):** Contains all local models. When syncing from an HTTP API I parse the JSON into these Java objects using Jackson. I also pull Cursor rows into these models as well.

  - **preferences (package):** Contains all classes for custom preferences. When creating the preferences I required a custom PreferenceDialog as well as a custom PreferenceCategory. They live here.

  - **sync (package):** Contains all classes related to syncing. I use a SyncAdapter to pull data from an HTTP API. In addition to the SyncAdapter a SyncService is required, so I created a package.


## Use Gradle

- Since we are using gradle framework, project related information like version code, version name, package name, release keystore file location, keystore password and other required declaration should be written in to gradle itself.
  
  For example:
  ```java
  apply plugin: 'com.example.application'
  android {
    compileSdkVersion 23
    buildToolsVersion "23.0.2"
    defaultConfig {
        applicationId "com.google.googleio"
        minSdkVersion 22
        targetSdkVersion 23
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        ...
    }
  }
 dependencies {
  ...  
 }
 ```

- Use android manifest for declaring permission, user-permission, services, receivers, intent-filter, activities, application class and its attribute.

```xml
<?xml version="1.0" encoding="utf-8"?>

<manifest>

    <uses-permission />
    <permission />
    <permission-tree />
    <permission-group />
    <instrumentation />
    <uses-sdk />
    <uses-configuration />  
    <uses-feature />  
    <supports-screens />  
    <compatible-screens />  
    <supports-gl-texture />  

    <application>

        <activity>
            <intent-filter>
                <action />
                <category />
                <data />
            </intent-filter>
            <meta-data />
        </activity>

        <activity-alias>
            <intent-filter> . . . </intent-filter>
            <meta-data />
        </activity-alias>

        <service>
            <intent-filter> . . . </intent-filter>
            <meta-data/>
        </service>

        <receiver>
            <intent-filter> . . . </intent-filter>
            <meta-data />
        </receiver>

        <provider>
            <grant-uri-permission />
            <meta-data />
            <path-permission />
        </provider>

        <uses-library />

    </application>

</manifest>
```

## Use Semantic Versioning 




## External library should be imported by maven or jCenter only. If library not available in maven or jCenter then that library (.jar file or module) should be placed into the libs folder under that particular module. (Such library should be also handled in .gitignore file to get committed along with code)


## Method should not be called redundant. The Value of the method should store in one variable and that should be used whenever required. Method should be called only when it’s required to.


## If there are same Asynck task used in more than one activity, then make separate class for that and use interface to call their call back methods in activity. Same goes for all the methods. None should be repeated.


## Keep arrangement for android Manifest tags as per structure given in below link.


## Commonly used layout should be kept into different layout file and that should be included whenever needed in xml layout. Don’t draw same layout again and again by code.


## Each Java source file contains a single public class or interface. When private classes and interfaces are associated with a public class, you can put them in the same source file as the public class. The public class should be the first class or interface in the file.
Java source files have the following ordering: 
- Class/Interface Doc comment
- Class/Interface Statement
- Class (static) variables
- Interface Variables
- Constructors
- Methods

## When an expression will not fit on a single line, break it according to these general principles:

- Break after a comma.
- Break before an operator. 
- Prefer higher-level breaks to lower-level breaks. 
- Align the new line with the beginning of the expression at the same level on the previous line. 

## Class names are written in UpperCamelCase.
For classes that extend an Android component, the name of the class should end with the name of the component; for example: SignInActivity, ImageUploaderService

## Resources file names are written in lowercase_underscore.

## Layout files should match the name of the android components that they are intended for but moving the top level component name to the beginning. For example, if we are creating a layout for the SignInActivity, the name of the layout file should be activity_sign_in.xml.

## Similar to layout files, menu files should match the name of the component. For example, if we are defining a menu file that is going to be used in the UserActivity, then the name of the file should be activity_user.xml

## A good practice is to not include the word menu as part of the name because these files are already located in the menu

## When an XML element doesn't have any contents, you must use self-closing tags.

## Resource IDs and names are written in lowercase_underscore.

## When coding Java classes and interfaces, the following formatting rules should be followed: 

## No space between a method name and the parenthesis “(“ starting its parameter list 
- Open brace “{” appears at the end of the same line as the declaration statement
- Closing brace “}” starts a line by itself indented to match its corresponding opening statement, except when it is a null statement the “}” should appear immediately after the “{“
- Methods are separated by a blank line
- If statement: if statements always use braces {}
- switch Statements: Every time a case falls through (doesn’t include a break statement), add a comment where the break statement would normally be.Every switch statement should include a default case.
- Blank Lines: Blank lines improve readability by setting off sections of code that are logically related. 

Two blank lines should always be used in the following circumstances: 
- Between sections of a source file 
- Between class and interface definitions One blank line should always be used in the following circumstances: 
- Between methods: Between the local variables in a method and its first statement.

Element	Field Name Prefix
SharedPreferences	PREF_
Bundle	BUNDLE_
Fragment Arguments	ARGUMENT_
Intent Extra	EXTRA_
Intent Action	ACTION_

## Many elements of the Android SDK such as SharedPreferences, Bundle, or Intent use a key-value pair approach so it's very likely that even for a small app you end up having to write a lot of String constants.


## When using one of these components, you must define the keys as a static final fields and they should be prefixed as indicated below.
Element	Prefix
TextView	text_
ImageView	image_
Button	button_
Menu	menu_


## When an XML element doesn't have any contents, you must use self-closing tags.

## Resource IDs and names are written in lowercase_underscore.


## IDs should be prefixed with the name of the element in lowercase underscore. 
For example:
Image view example:
```java
<ImageView
    android:id="@+id/image_profile"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

Menu example:
```java
<menu>
    <item
        android:id="@+id/menu_done"
        android:title="Done" />
</menu>
```


## String names start with a prefix that identifies the section they belong to. For example registration_email_hint or registration_name_hint. If a string doesn't belong to any section, then you should follow the rules below:

Prefix	Description
error_	An error message
msg_	A regular information message
title_	A title, i.e. a dialog title
action_	An action such as "Save" or "Create"



# GENERAL APPROACH

## For best practice, use git commands in terminal window to commit, push, update and others operations. Don’t use direct options available in IDE for code repository.

## For best practice, define flavour for the project in gradle to differentiate development version and release version. Make more flavour if there are more environment for the project needed. Make sure to packaging, naming and versioning the app for each flavour.

## Keep using crash reporting tools like Crashlytics, Analytics or Bug Finder to identify the crash report. That will help to resolved bugs.

## There has to be common class to handle the network related call with in the application.

Doubt to Clear

## Commonly used strings & functions should be statically defined in a common respective class. Or commonly used String resources should be kept in to the separate class and that should be inherited to activity or class whenever needed.

## Content descriptor should be there for all fields in xml layout files.

## Literal string, dimension, styles, theme etc. should be defined in their respective file under values folder and then that reference should be used in to project java files and in XML layout when needed.

## Height, width, margins, padding etc. should not be hard coded, it should be defined in to dimens.xml file and their reference should be used in the xml file and java file wherever needed.

## Use 9patch image or vector image whenever needed. So you don't need to make separate images for other layout as well.

## IDs should be prefixed with the name of the element in lowercase underscore. 

For example:
- String names start with a prefix that identifies the section they belong to. For example registration_email_hint or registration_name_hint.

## As a general rule you should try to group similar attributes together. A good way of ordering the most common attributes is:
- View Id
- Style
- Layout width and layout height
- Other layout attributes, sorted alphabetically
- Remaining attributes, sorted alphabetically


### Reference
http://source.android.com/source/code-style.html#follow-field-naming-conventions
https://source.android.com/source/code-style.html#use-spaces-for-indentation
https://source.android.com/source/code-style.html#limit-line-length
https://source.android.com/source/code-style.html#log-sparingly
https://source.android.com/source/code-style.html#dont-ignore-exceptions
https://source.android.com/source/code-style.html#use-javadoc-standard-comments
https://developer.android.com/guide/topics/ui/ui-events.html#EventListeners
http://blog.smartlogic.io/2013-07-09-organizing-your-android-development-code-structure/
https://developer.android.com/studio/publish/versioning.html
http://semver.org/
https://developer.android.com/guide/topics/manifest/manifest-intro.html
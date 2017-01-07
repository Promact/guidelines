# Android Project Guidelines

This is general guideline and rules to follow for android application development.


1.	Variables should be defined as per below naming convention guideline:
•	Non-public, non-static field names start with m.
•	Static field names start with s.
•	Other fields start with a lower case letter.
•	Public static final fields (constants) are ALL_CAPS_WITH_UNDERSCORES.


2.	All the java files and XML files with in the project should have 4 spaces indent. Which increase code understanding and readability.

3.	Line length should be max 100 characters to increase readability
	
4.	Application log should be written in proper manner with proper declaration (ERROR, WARNING, INFORMATION, DEBUG and VERBOSE). Final Log should be written in separate file. So it is easy to manage it any time. Also use Log instead of native System.out.printf or printfln.
Ref: 
5.	Don’t ignore Exceptions and don’t catch generic Exceptions. Exceptions has to be well cached and well-handled for each exceptions. Exception should be globally handled.
	Ref: 

6.	Java-doc standard comments should be used for explanation of the method, class and declaration whenever required.
Ref: 
	
7.	Listener used in the activity has to be implemented first and then used its override methods in same activity. If there are more than 2-3 fields included with listener with in same activity then that should be handled by Switch-case, else normal if-else condition should be used.
	Ref: 
8.	Project Structure and files arrangement should be in such a way that can be identified easily by any developer. Follow below file arrangement and project structure for best practice.
Ref:

9.	Since we are using gradle framework for android application, version code, version name and other required declaration should be done in to gradle itself.
Use android manifest for declaring permission, user-permission, services, receivers, intent-filter, activities, application class and its attribute.
	Ref: 
10.	Semantic versioning should be used for versioning the application.
	Ref: 

11.	External library should be imported by maven or jCenter only. If library not available in maven or jCenter then that library (.jar file or module) should be placed into the libs folder under that particular module. (Such library should be also handled in .gitignore file to get committed along with code)
Ref: 

12.	Method should not be called redundant. The Value of the method should store in one variable and that should be used whenever required. Method should be called only when it’s required to.

13.	If there are same Asynck task used in more than one activity, then make separate class for that and use interface to call their call back methods in activity. Same goes for all the methods. None should be repeated.

14.	Keep arrangement for android Manifest tags as per structure given in below link.
Ref: 
15.	Commonly used layout should be kept into different layout file and that should be included whenever needed in xml layout. Don’t draw same layout again and again by code.

16.	Each Java source file contains a single public class or interface. When private classes and interfaces are associated with a public class, you can put them in the same source file as the public class. The public class should be the first class or interface in the file.
Java source files have the following ordering: 
•	Class/Interface Doc comment
•	Class/Interface Statement
•	Class (static) variables
•	Interface Variables
•	Constructors
•	Methods

17.	When an expression will not fit on a single line, break it according to these general principles:

•	Break after a comma.
•	Break before an operator. 
•	Prefer higher-level breaks to lower-level breaks. 
•	Align the new line with the beginning of the expression at the same level on the previous line. 
18.	Class names are written in UpperCamelCase.
For classes that extend an Android component, the name of the class should end with the name of the component; for example: SignInActivity, ImageUploaderService
19.	Resources file names are written in lowercase_underscore.
20.	Layout files should match the name of the android components that they are intended for but moving the top level component name to the beginning. For example, if we are creating a layout for the SignInActivity, the name of the layout file should be activity_sign_in.xml.

21.	Similar to layout files, menu files should match the name of the component. For example, if we are defining a menu file that is going to be used in the UserActivity, then the name of the file should be activity_user.xml

22.	A good practice is to not include the word menu as part of the name because these files are already located in the menu

23.	When an XML element doesn't have any contents, you must use self-closing tags.
24.	Resource IDs and names are written in lowercase_underscore.
25.	When coding Java classes and interfaces, the following formatting rules should be followed: 

26.	No space between a method name and the parenthesis “(“ starting its parameter list 
•	Open brace “{” appears at the end of the same line as the declaration statement
•	Closing brace “}” starts a line by itself indented to match its corresponding opening statement, except when it is a null statement the “}” should appear immediately after the “{“
•	Methods are separated by a blank line
•	If statement: if statements always use braces {}
•	switch Statements: Every time a case falls through (doesn’t include a break statement), add a comment where the break statement would normally be.Every switch statement should include a default case.
•	Blank Lines: Blank lines improve readability by setting off sections of code that are logically related. 

•	Two blank lines should always be used in the following circumstances: 
o	Between sections of a source file 
o	Between class and interface definitions One blank line should always be used in the following circumstances: 
o	Between methods: Between the local variables in a method and its first statement.
Element	Field Name Prefix
SharedPreferences	PREF_
Bundle	BUNDLE_
Fragment Arguments	ARGUMENT_
Intent Extra	EXTRA_
Intent Action	ACTION_
27.	Many elements of the Android SDK such as SharedPreferences, Bundle, or Intent use a key-value pair approach so it's very likely that even for a small app you end up having to write a lot of String constants.



28.	When using one of these components, you must define the keys as a static final fields and they should be prefixed as indicated below.
Element	Prefix
TextView	text_
ImageView	image_
Button	button_
Menu	menu_





29.	When an XML element doesn't have any contents, you must use self-closing tags.









30.	Resource IDs and names are written in lowercase_underscore.
31.	IDs should be prefixed with the name of the element in lowercase underscore. 
For example:
Image view example:
<ImageView
    android:id="@+id/image_profile"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
Menu example:
<menu>
    <item
        android:id="@+id/menu_done"
        android:title="Done" />
</menu>



32.	String names start with a prefix that identifies the section they belong to. For example registration_email_hint or registration_name_hint. If a string doesn't belong to any section, then you should follow the rules below:

Prefix	Description
error_	An error message
msg_	A regular information message
title_	A title, i.e. a dialog title
action_	An action such as "Save" or "Create"








GENERAL APPROACH

1.	For best practice, use git commands in terminal window to commit, push, update and others operations. Don’t use direct options available in IDE for code repository.

2.	For best practice, define flavour for the project in gradle to differentiate development version and release version. Make more flavour if there are more environment for the project needed. Make sure to packaging, naming and versioning the app for each flavour.

3.	Keep using crash reporting tools like Crashlytics, Analytics or Bug Finder to identify the crash report. That will help to resolved bugs.

4.	There has to be common class to handle the network related call with in the application.
Doubt to Clear

1.	Commonly used strings & functions should be statically defined in a common respective class. Or commonly used String resources should be kept in to the separate class and that should be inherited to activity or class whenever needed.
2.	Content descriptor should be there for all fields in xml layout files.
3.	Literal string, dimension, styles, theme etc. should be defined in their respective file under values folder and then that reference should be used in to project java files and in XML layout when needed.
4.	Height, width, margins, padding etc. should not be hard coded, it should be defined in to dimens.xml file and their reference should be used in the xml file and java file wherever needed.
5.	Use 9patch image or vector image whenever needed. So you don't need to make separate images for other layout as well.
6.	IDs should be prefixed with the name of the element in lowercase underscore. For example:
7.	String names start with a prefix that identifies the section they belong to. For example registration_email_hint or registration_name_hint.

8.	As a general rule you should try to group similar attributes together. A good way of ordering the most common attributes is:
•	View Id
•	Style
•	Layout width and layout height
•	Other layout attributes, sorted alphabetically
•	Remaining attributes, sorted alphabetically


# Reference
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
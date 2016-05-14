---
layout: page
---

# What is OWIN?

OWIN defines a standard interface (middleware) between .NET web servers and web applications. The goal of the OWIN interface is to decouple server and application, encourage the development of simple modules for .NET web development, and, by being an open standard, stimulate the open source ecosystem of .NET web development tools.

OWIN by itself is a specification and not the implementation. In simple programing terminology, OWIN is an interface which you can use to communicate across server and application which understand this protocol.

## 2. Definitions

This document refers to the following software actors:

1. **Server** &mdash; The HTTP server that directly communicates with the client and then uses OWIN semantics to process requests.  Servers may require an adapter layer that converts to OWIN semantics.

2. **Web Framework** &mdash; A self-contained component on top of OWIN exposing its own object model or API that applications may use to facilitate request processing. Web Frameworks may require an adapter layer that converts from OWIN semantics.

3. **Web Application** &mdash; A specific application, possibly built on top of a Web Framework, which is run using OWIN compatible Servers.

4. **Middleware** &mdash; Pass through components that form a pipeline between a server and application to inspect, route, or modify request and response messages for a specific purpose.

5. **Host** &mdash; The process an application and server execute inside of, primarily responsible for application startup. Some Servers are also Hosts.


# Example



# Benefits of using OWIN

# How to implement OWIN?


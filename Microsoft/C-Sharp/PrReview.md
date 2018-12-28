# PR Review guidelines for C #

## Loops

1. Do not use for loop unless absolutely necessary
2. Do not write expensive operations within a for loop. Some of the expensive operations are db calls, http requests or file system operations like reading or writting files.
3. Do not use Foreach extension method. It will break consistency. use regular foreach loop instead.

## General

1. Do not call .ToList() on IEnumerable unnecessary. If a type returns an interator.
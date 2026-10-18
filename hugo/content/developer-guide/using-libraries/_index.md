---
title: Using Libraries
description: Learn how to use library functions in Lite XL.
weight: 50
---

Lite XL implements most of the functionalities in Lua, but it would be impossible to create
a window, get input events, or perform various filesystem operations in pure Lua,
without relying on functions provided by the platform.

Lite XL has its own bindings to [SDL2], which provides cross-platform abstractions to windowing
and event handling.
Other than that Lite XL also uses [PCRE2] to provide support for regular expressions as Lua only
has a simple pattern-based matching engine.
Finally, Lite XL provides an API for running starting and managing programs, as well as handling
the input / output of the program without blocking the editor.

---

{{< section-pages >}}


[SDL2]:                      https://libsdl.org
[PCRE2]:                     https://www.pcre.org

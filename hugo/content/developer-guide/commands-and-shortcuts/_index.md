---
title: Commands and Shortcuts
description: Learn how Lite XL perform tasks with commands and keyboard shortcuts.
weight: 30
---

Most tasks in Lite XL are performed with commands, based on a simple system of
predicates and user-defined actions.
Commands can be bound to keyboard shortcuts,
which will be run when the corresponding keys or mouse buttons are pressed.

A common idiom used in Lite XL is to listen to `View:on_mouse_moved()`
and record the item that the cursor is hovering on;
and then add a command to set the hovered item as the selected item
when the left-clicks the item.
This idiom does not require the user to listen to `View:on_mouse_click()` and allows
unifying the mouse and keyboard handling code.

---

{{< section-pages >}}

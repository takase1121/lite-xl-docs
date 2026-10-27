---
title: Lite XL
description: Lite XL - Fast, Lightweight and Powerful Text-Editing Experience
layout: hextra-home
toc: false
---

<div class="home-hero">

<h1 class="not-prose hx:text-4xl hx:font-bold hx:leading-none hx:tracking-tighter hx:md:text-5xl hx:py-2 hx:text-gray-700 hx:dark:text-gray-300">
  Fast, Lightweight and Powerful&nbsp;<br class="hx:sm:block hx:hidden" />Text-Editing Experience
</h1>

{{< hextra/hero-subtitle >}}
  A simple, fast, feature-filled and extremely extensible text editor
  written in C and Lua, adapted from [lite](https://github.com/rxi/lite).
{{< /hextra/hero-subtitle >}}

<div class="home-buttons">
{{< hextra/hero-button
    text="Download"
    link="setup/getting-started"
>}}
{{< hextra/hero-button
    text="GitHub"
    link="https://github.com/lite-xl/lite-xl"
    style="background: transparent; color: inherit; border: 1px solid currentColor;"
>}}
</div>

<p class="home-platforms">
  {{< icon "linux" >}} {{< icon "windows" >}} {{< icon "apple" >}}
  Available for Linux, Windows and macOS
</p>

</div>

<div class="home-screenshot">
  <img class="only-light" src="assets/screenshots/theme-summer.png" alt="Lite XL with summer theme" />
  <img class="only-dark" src="assets/screenshots/theme-default.png" alt="Lite XL with default theme" />
</div>

<div class="home-section-header">
<h2 class="not-prose hx:text-4xl hx:font-bold hx:leading-none hx:tracking-tighter hx:md:text-3xl hx:py-2 hx:text-gray-700 hx:dark:text-gray-300">
  All the things you want for editing.
</h2>
</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card 
      icon="lucide:feather"
      title="Lightweight"
      subtitle=`Lite XL comes in a bundle less than 5MB and runs well on most platforms 
        — from desktops to single board computers with a weak ARM CPU and 1GB of RAM.`
  >}}
  {{< hextra/feature-card
      icon="lightning-bolt" title="Powerful"
      subtitle=`Lite XL is powerful and has many features of a "modern" text editor.
        Multiline editing, autocomplete and pane splitting are supported by default.`
  >}}
  {{< hextra/feature-card
      icon="search"
      title="Hackable"
        subtitle=`Lite XL is insanely hackable — there are no rigid APIs to hold you back,
        and the code is simple to tinker with.`
  >}}
  {{< hextra/feature-card
      icon="code"
      title="Customizable"
        subtitle=`Lite XL is completely scriptable with Lua.
        C is only used to communicate with the OS while Lua is used for everything else.`
  >}}
  {{< feature-card-custom
      class="lxl:feature-card-ext-link"
      icon="desktop-computer"
      title="Portable"
        subtitle=`Lite XL runs on many platforms, including Windows, Linux, macOS, FreeBSD,
        [Android](https://github.com/adamharrison/lite-xl-android "Lite XL Android port by Adam"),
        [AmigaOS & MorphOS](https://git.walkero.gr/walkero/lite-xl "AmigaOS & MorphOS port by Walkero"),
        and [the Web](https://lite-xl.com/playground/ "Lite XL directly in the browser")!`
  >}}
  {{< hextra/feature-card
      icon="puzzle"
      title="Hyperextensible"
      subtitle=`If Lite XL doesn't provide a feature you want,
        it's probably available with a plugin.
        Add and remove features from your editor at will.`
  >}}
{{< /hextra/feature-grid >}}


<div class="home-section-header">
<h2 class="not-prose hx:text-4xl hx:font-bold hx:leading-none hx:tracking-tighter hx:md:text-3xl hx:py-2 hx:text-gray-700 hx:dark:text-gray-300">
  Let's get started.
</h2>
</div>

{{< hextra/feature-grid >}}
  {{< feature-card-custom
      icon="download" 
      title="Install"
      link="setup/getting-started"
      subtitle=`Learn how to install Lite XL from the official release,
        package managers and from source.`
      ctr="Set up"
    >}}
  {{< feature-card-custom
      icon="terminal"
      title="Customize"
      link="user-guide/introduction"
      subtitle="Learn how to use Lite XL and customize it to suit your needs."
      ctr="User Guide"
  >}}
  {{< feature-card-custom
      icon="book-open"
      title="Learn"
      link="developer-guide"
      subtitle="Learn how to add functionality to Lite XL by writing themes and plugins!"
      ctr="Developer Guide"
  >}}
{{< /hextra/feature-grid >}}

# Netflix Lazy Parent

This is a Chrome extension that makes it easy to remove certain
shows from the `/kids` section of Netflix. Clearly, I should teach
my children how to locate redeeming, educational content on Netflix
and not the 1/10 shows that are mind-rotting tripe. I'm too lazy for
that, so this is a chrome extension that helps me remove shows I don't
want them to see from the interface.

### How this works

This extension stores a list of shows to ban, which you can edit via
the [extension options](chrome://extensions/). They are stored one per line.

My starting list looks like this

```
Barbie
Glitter Force
My Little Pony
```

You should know, these are used as *globs* in CSS3 rules. So, those three form
a rule that looks like the following:

```
[aria-label*="Barbie"],
[aria-label*="Glitter Force"],
[aria-label*="My Little Pony"] {
  display: none;
}
```

and this CSS3 rule is injected into the DOM very early, usually before you
see anything rendered. In that manner, shows you don't want your kid to see
are not shown. Of course, the `Barbie` glob above will nuke any show that
contains the word "Barbie" in the title. (Netflix is helpful enough to put
the show and character names in the `aria-label` attributes of DOM elements,
so they are easy to find.)

### Installing

I am not going to distribute this in the Chrome store, so you're on your own
to install it from source. You can read how to do so in the
[Chrome extension developer documentation](https://developer.chrome.com/extensions/getstarted#unpacked).

### License
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>


### Disclaimer

Netflix is a registered trademark of somebody. This code is not affiliated
with them at all. I am a happy customer of Netflix.

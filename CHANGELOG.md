# Changelog

# 3.0.0
> Apr 7, 2017

* :tada: **Feature** added `onRest` callback. The callback is triggered when your transition on `height` (specified in `className`) is done.
* :boom: **Breaking** Remove `onTransitionEnd` callback. Please use `onRest` instead.

# 2.1.0
> Apr 7, 2017

* :tada: **Feature** added `onTransitionEnd` callback that gets called after the expand/collapse animation has finished

# 2.0.2
> Apr 5, 2017

* :bug: **Bugfix** Using setTimeout(fn, 0) to ensure correct pixelheight is set before transition (back) starts. This ensures we are not transitioning back from `auto`. Ref: http://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful
* :bug: **Bugfix** Checking if content is set before accessing content in requestAnimationFrame callback. This fixes a bug where `this.content` was null initially when navigating back to a page using react-css-collapse you had been to before.

# 2.0.1
> Apr 3, 2017

* :tada: **Feature** Setup tests
* :tada: **Feature** Do not require children property

# 2.0.0
> Mar 29, 2017

* :tada: **Feature** Set initial height without transition on mount if collapse is open
* :boom: **Breaking** Remove style property from collapse. We had to remove this property to prevent conflicts with crucial style properties used in the component and to set initial height without transition on mount when collapse is open.

# 1.0.0
> Mar 28, 2017

* :nut_and_bolt: **New** Created `Collapse` component

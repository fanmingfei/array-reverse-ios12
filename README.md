![iOS-12-reverse](https://user-images.githubusercontent.com/159840/45736779-8a4ad180-bc1e-11e8-9022-b58935f026eb.png)

# array-reverse-polyfill
Fixed Array `reverse()` Bug of Safari 12.0 on iOS 12 and MacOS. 

## About the Bug

https://bugs.webkit.org/show_bug.cgi?id=188794

https://stackoverflow.com/q/52390368/7606327

https://www.v2ex.com/t/490590 (in Chinese)

https://zhuanlan.zhihu.com/p/44869607 (in Chinese)

A simple visualization of this bug:

![bug-metaphor](https://user-images.githubusercontent.com/2784308/45812030-411f7e00-bd01-11e8-8b84-93cddc0a4c66.gif)

(Thank @yisibl for his magical realism style drawing / 感谢灵魂画手一丝姐姐)

## Usage

### CDN

jsDelivr
```html
<script src="https://cdn.jsdelivr.net/npm/array-reverse-polyfill"></script>
```

unpkg
```html
<script src="https://unpkg.com/array-reverse-polyfill"></script>
```

Alibaba
```html
<script src="//g.alicdn.com/mtb/fix-ios12-array/1.0.9/index.js"></script>
```

### npm package
[array-reverse-polyfill](https://www.npmjs.com/package/array-reverse-polyfill)

### Download releases
[fanmingfei/array-reverse-ios12](https://github.com/fanmingfei/array-reverse-ios12/releases)


## UA sniffing

This polyfill use *[feature (bug 🙃) detection](https://en.wikipedia.org/wiki/Feature_detection_(web_development))* instead of *[UA sniffing](https://en.wikipedia.org/wiki/User_agent#User_agent_sniffing)*.

Some may want to load the polyfill in client-side or add the polyfill script in server-side only for Safari 12.0, and save the request to the polyfill for all other browsers. We assume the next version of iOS/Safari (12.1) will fix the bug, so we suggest you search "Version/12.0" and "Safari/" substring in user-agent string. You could also use regexp `/Version\/12\.0.*Safari\//`.

### Client on-demand load
```html
<head>
<script>
if (/Version\/12\.0.*Safari\//.test(navigator.userAgent))
  loadScript('https://cdn.jsdelivr.net/npm/array-reverse-polyfill')
// Assume you have `loadScript()` available to create and insert the script tag.
</script>
...
*NOTE*: The polyfill should be loaded and executed before all other scripts. So be careful about the `async` `defer` or `type=module`attributes and make sure your `loadScript()` implemetation will keep the order.
```

### Server-side adaption (use PHP as sample)
```php
<head>
<? if (preg_match('#Version/12\.0.*Safari/#', $_SERVER['HTTP_USER_AGENT'])): ?>
<script src="https://cdn.jsdelivr.net/npm/array-reverse-polyfill"></script>
<? endif; ?>
...
```

## Test

Test page: [https://fanmingfei.github.io/array-reverse-ios12/origin.html](https://fanmingfei.github.io/array-reverse-ios12/origin.html)


Test page with this polyfill: [https://fanmingfei.github.io/array-reverse-ios12/fixed.html](https://fanmingfei.github.io/array-reverse-ios12/fixed.html)

Clicking the button to test.


For Unit Tests: [https://fanmingfei.github.io/array-reverse-ios12/tests/](https://fanmingfei.github.io/array-reverse-ios12/tests/)


--------------------------------

## Hope you guys luck


![iOS-12-reverse](https://user-images.githubusercontent.com/159840/45736779-8a4ad180-bc1e-11e8-9022-b58935f026eb.png)

# array-reverse-polyfill
Fixed Array `reverse()` Bug of Safari 12.0 on iOS 12 and MacOS. 

## About the Bug

https://bugs.webkit.org/show_bug.cgi?id=188794

https://stackoverflow.com/q/52390368/7606327

https://www.v2ex.com/t/490590 (in Chinese)

https://zhuanlan.zhihu.com/p/44869607 (in Chinese)


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

If you want to load the polyfill in client-side or add the polyfill script in server-side only for Safari 12.0, please search "Version/12.0" and "Safari/" substring in user-agent string. You could also use regexp `/Version\/12\.0.*Safari\//`.

## Test

Test page: [https://fanmingfei.github.io/array-reverse-ios12/origin.html](https://fanmingfei.github.io/array-reverse-ios12/origin.html)


Test page with this polyfill: [https://fanmingfei.github.io/array-reverse-ios12/fixed.html](https://fanmingfei.github.io/array-reverse-ios12/fixed.html)

Clicking the button to test.


For Unit Tests: [https://fanmingfei.github.io/array-reverse-ios12/tests/](https://fanmingfei.github.io/array-reverse-ios12/tests/)


--------------------------------

## Hope you guys luck


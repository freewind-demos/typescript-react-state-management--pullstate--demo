TypeScript React State Management "pullstate" Demo
==================================================

Update:

Use the latest pullstate 1.11.x, there is an error about `Proxy`, which doesn't work in IE 11.

I tried to use some polyfill like:
- https://github.com/GoogleChrome/proxy-polyfill
- https://www.npmjs.com/package/es6-proxy-polyfill
But can't find the correct way to make it work.

PS: try importing them in `src/entry.tsx`

---

比Redux简单太多了，而且在修改state的时候，可以使用直接修改的方式（借助于immer这个项目）。

注意：
有一个地方特别容易出错。比如在update store时写成了这样：

```
MyStore.update(it => it.names.push(newName))
```

就会报下面的错：

```
Uncaught Error: An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.
```

正确的写法是这样：

```
MyStore.update(it => {
  it.names.push(newName)
})
```

原因是内部使用了immer的produce，它对于第二个参数的返回值有要求，要么是一个新的state，要么是void，不能是其它类型，否则报错。

所以在我们的Demo中，为了预防这个问题，在`updateStore`这个函数里特意又包装了一次，忽略返回值。

```
npm install
npm run demo
```

It will open page on browser automatically.

export * from './src/typescript.js'
export * from './src/prettier.js'
export * from './src/basic.js'
export * from './src/markdown.js'
export * from './src/react.js'
export * from './src/vue.js'

function foo(bar) {
  return bar;
}


_.chain({}).map(foo).filter(bar).value()
// Or
_.chain({}).map(foo).filter(bar)
// Or
_
  .chain({}).map(foo)
  .filter(bar)

// Or
obj.method().method2().method3()

How to reproduce the flow function destructuring type error not showing up.


```
npm install
npm run build
cd packages/myapp
flow
```

No errors are found though `mylib.getdb().simple()` is not providing the required parameters.


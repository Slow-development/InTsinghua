# javascript 代码风格

## 目录

- [原则](#principle)
- [命名](#naming)
- [结构](#structure)
- [注释](#annotation)

## <a name="principle"></a> 原则

- 易读性：简洁明了，可读性高于代码执行效率，勤于注释
- 模块化：局部化，设计接口，将不变的内容和变化的内容分开

## <a name="naming"></a> 命名

- 变量名/函数名：Camel（驼峰）规则，首词首字母小写，后续词首字母大写，其余部分小写

```javascript
var loadingModules = {};

function stringFormat(theBells) {
}
```

- 常量名：全部字母大写，单词间下划线分隔

```javascript
var HTML_ENTITY = {};
```

- 类构造函数：Pascal规则，所有词首字母大写，其余部分小写

```javascript
function TextNode(options) {
}
```

## <a name="structure"></a> 结构

### 空格

- 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。
- 用作代码块起始的左花括号 `{` 前必须有一个空格。

```javascript
if (condition) {
}
```

- `if / else / for / while / function / switch / do / try / catch / finally` 关键字后，必须有一个空格。
- 在对象创建时，属性中的 `:` 之后必须有空格，`:` 之前不允许有空格。
- 函数声明、具名函数表达式、函数调用中，函数名和 `(` 之间不允许有空格。
- 单行声明的数组与对象，如果包含元素，`{}` 和 `[]` 内紧贴括号部分不允许包含空格。

### 换行

- 每个独立语句结束后必须换行。
- 每行不得超过 120 个字符。
- 运算符处换行时，运算符必须在新行的行首。
- 不同行为或逻辑的语句集，使用空行隔开，更易阅读。

### 语句

- 不得省略语句结束的分号。
- 函数定义结束不允许添加分号。

```javascript
// good
function funcName() {
}

// bad
function funcName() {
};

// 如果是函数表达式，分号是不允许省略的。
var funcName = function () {
};
```

## <a name="annotation"></a> 注释

### 文件注释

在文件头部增加文件注释

```javascript
/**
 * @file LBS控制器
 * @author limingle
 */
```

### 变量注释

将**关键**的变量进行特殊注释

```javascript
/**
 * @var {object}
 * @desc 变量定义
 * @property {string} a 属性a
 * @property {string} b 属性b
 */
var foo = {
    a: 'a',
    b: 'b'
}
```

### 常量注释

将**关键**常量进行特殊注释

```javascript
/**
 * @constant {string}
 * @default #000
 * @desc 常量定义
 */
const COLOR_WHITE = '#fff';
```

### 函数注释

将**关键**函数进行特殊注释

- 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识。
- 参数和返回值注释必须包含类型信息，且不允许省略参数的说明。

```javascript
/**
 * 函数描述
 *
 * @param {string} p1 参数1的说明
 * @param {string} p2 参数2的说明，比较长
 *     那就换行了.
 * @param {number=} p3 参数3的说明（可选）
 * @return {Object} 返回值描述
 */
function foo(p1, p2, p3) {
    var p3 = p3 || 10;
    return {
        p1: p1,
        p2: p2,
        p3: p3
    };
}
```

### 其他注释

在其他地方进行必要的注释。

- 在要添加注释的代码段前注释，缩进与后面一行的代码相同
- 不在行尾注释
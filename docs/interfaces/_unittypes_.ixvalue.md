[@johanneslumpe/css-types](../README.md) > ["unitTypes"](../modules/_unittypes_.md) > [IXValue](../interfaces/_unittypes_.ixvalue.md)

# Interface: IXValue

## Hierarchy

 `String`

**↳ IXValue**

## Indexable

\[index: `number`\]:&nbsp;`string`
## Index

### Properties

* [String](_unittypes_.ixvalue.md#string)
* [__x_brand_type__](_unittypes_.ixvalue.md#__x_brand_type__)
* [length](_unittypes_.ixvalue.md#length)

### Methods

* [__@iterator](_unittypes_.ixvalue.md#___iterator)
* [anchor](_unittypes_.ixvalue.md#anchor)
* [big](_unittypes_.ixvalue.md#big)
* [blink](_unittypes_.ixvalue.md#blink)
* [bold](_unittypes_.ixvalue.md#bold)
* [charAt](_unittypes_.ixvalue.md#charat)
* [charCodeAt](_unittypes_.ixvalue.md#charcodeat)
* [codePointAt](_unittypes_.ixvalue.md#codepointat)
* [concat](_unittypes_.ixvalue.md#concat)
* [endsWith](_unittypes_.ixvalue.md#endswith)
* [fixed](_unittypes_.ixvalue.md#fixed)
* [fontcolor](_unittypes_.ixvalue.md#fontcolor)
* [fontsize](_unittypes_.ixvalue.md#fontsize)
* [includes](_unittypes_.ixvalue.md#includes)
* [indexOf](_unittypes_.ixvalue.md#indexof)
* [italics](_unittypes_.ixvalue.md#italics)
* [lastIndexOf](_unittypes_.ixvalue.md#lastindexof)
* [link](_unittypes_.ixvalue.md#link)
* [localeCompare](_unittypes_.ixvalue.md#localecompare)
* [match](_unittypes_.ixvalue.md#match)
* [normalize](_unittypes_.ixvalue.md#normalize)
* [padEnd](_unittypes_.ixvalue.md#padend)
* [padStart](_unittypes_.ixvalue.md#padstart)
* [repeat](_unittypes_.ixvalue.md#repeat)
* [replace](_unittypes_.ixvalue.md#replace)
* [search](_unittypes_.ixvalue.md#search)
* [slice](_unittypes_.ixvalue.md#slice)
* [small](_unittypes_.ixvalue.md#small)
* [split](_unittypes_.ixvalue.md#split)
* [startsWith](_unittypes_.ixvalue.md#startswith)
* [strike](_unittypes_.ixvalue.md#strike)
* [sub](_unittypes_.ixvalue.md#sub)
* [substr](_unittypes_.ixvalue.md#substr)
* [substring](_unittypes_.ixvalue.md#substring)
* [sup](_unittypes_.ixvalue.md#sup)
* [toLocaleLowerCase](_unittypes_.ixvalue.md#tolocalelowercase)
* [toLocaleUpperCase](_unittypes_.ixvalue.md#tolocaleuppercase)
* [toLowerCase](_unittypes_.ixvalue.md#tolowercase)
* [toString](_unittypes_.ixvalue.md#tostring)
* [toUpperCase](_unittypes_.ixvalue.md#touppercase)
* [trim](_unittypes_.ixvalue.md#trim)
* [trimLeft](_unittypes_.ixvalue.md#trimleft)
* [trimRight](_unittypes_.ixvalue.md#trimright)
* [valueOf](_unittypes_.ixvalue.md#valueof)

---

## Properties

<a id="string"></a>

###  String

**● String**: *`StringConstructor`*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:457*

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

___
<a id="__x_brand_type__"></a>

###  __x_brand_type__

**● __x_brand_type__**: *`never`*

*Defined in unitTypes.ts:86*

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Inherited from String.length*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:431*

Returns the length of a String object.

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<`string`>

*Inherited from String.[Symbol.iterator]*

*Defined in node_modules/typescript/lib/lib.es2015.iterable.d.ts:235*

Iterator

**Returns:** `IterableIterator`<`string`>

___
<a id="anchor"></a>

###  anchor

▸ **anchor**(name: *`string`*): `string`

*Inherited from String.anchor*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:454*

Returns an HTML anchor element and sets the name attribute to the text value

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string` |   |

**Returns:** `string`

___
<a id="big"></a>

###  big

▸ **big**(): `string`

*Inherited from String.big*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:457*

Returns a HTML element

**Returns:** `string`

___
<a id="blink"></a>

###  blink

▸ **blink**(): `string`

*Inherited from String.blink*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:460*

Returns a HTML element

**Returns:** `string`

___
<a id="bold"></a>

###  bold

▸ **bold**(): `string`

*Inherited from String.bold*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:463*

Returns a **HTML element**

**Returns:** `string`

___
<a id="charat"></a>

###  charAt

▸ **charAt**(pos: *`number`*): `string`

*Inherited from String.charAt*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:332*

Returns the character at the specified index.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pos | `number` |  The zero-based index of the desired character. |

**Returns:** `string`

___
<a id="charcodeat"></a>

###  charCodeAt

▸ **charCodeAt**(index: *`number`*): `number`

*Inherited from String.charCodeAt*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:338*

Returns the Unicode value of the character at the specified location.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| index | `number` |  The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

**Returns:** `number`

___
<a id="codepointat"></a>

###  codePointAt

▸ **codePointAt**(pos: *`number`*):  `number` &#124; `undefined`

*Inherited from String.codePointAt*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:402*

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point value of the UTF-16 encoded code point starting at the string element at position pos in the String resulting from converting this object to a String. If there is no element at that position, the result is undefined. If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

**Parameters:**

| Param | Type |
| ------ | ------ |
| pos | `number` |

**Returns:**  `number` &#124; `undefined`

___
<a id="concat"></a>

###  concat

▸ **concat**(...strings: *`string`[]*): `string`

*Inherited from String.concat*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:344*

Returns a string that contains the concatenation of two or more strings.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` strings | `string`[] |  The strings to append to the end of the string. |

**Returns:** `string`

___
<a id="endswith"></a>

###  endsWith

▸ **endsWith**(searchString: *`string`*, endPosition?: * `undefined` &#124; `number`*): `boolean`

*Inherited from String.endsWith*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:418*

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.

**Parameters:**

| Param | Type |
| ------ | ------ |
| searchString | `string` |
| `Optional` endPosition |  `undefined` &#124; `number`|

**Returns:** `boolean`

___
<a id="fixed"></a>

###  fixed

▸ **fixed**(): `string`

*Inherited from String.fixed*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:466*

Returns a HTML element

**Returns:** `string`

___
<a id="fontcolor"></a>

###  fontcolor

▸ **fontcolor**(color: *`string`*): `string`

*Inherited from String.fontcolor*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:469*

Returns a HTML element and sets the color attribute value

**Parameters:**

| Param | Type |
| ------ | ------ |
| color | `string` |

**Returns:** `string`

___
<a id="fontsize"></a>

###  fontsize

▸ **fontsize**(size: *`number`*): `string`

▸ **fontsize**(size: *`string`*): `string`

*Inherited from String.fontsize*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:472*

Returns a HTML element and sets the size attribute value

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** `string`

*Inherited from String.fontsize*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:475*

Returns a HTML element and sets the size attribute value

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `string` |

**Returns:** `string`

___
<a id="includes"></a>

###  includes

▸ **includes**(searchString: *`string`*, position?: * `undefined` &#124; `number`*): `boolean`

*Inherited from String.includes*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:411*

Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  search string |
| `Optional` position |  `undefined` &#124; `number`|  If position is undefined, 0 is assumed, so as to search all of the String. |

**Returns:** `boolean`

___
<a id="indexof"></a>

###  indexOf

▸ **indexOf**(searchString: *`string`*, position?: * `undefined` &#124; `number`*): `number`

*Inherited from String.indexOf*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:351*

Returns the position of the first occurrence of a substring.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  The substring to search for in the string |
| `Optional` position |  `undefined` &#124; `number`|  The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

**Returns:** `number`

___
<a id="italics"></a>

###  italics

▸ **italics**(): `string`

*Inherited from String.italics*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:478*

Returns an _HTML element_

**Returns:** `string`

___
<a id="lastindexof"></a>

###  lastIndexOf

▸ **lastIndexOf**(searchString: *`string`*, position?: * `undefined` &#124; `number`*): `number`

*Inherited from String.lastIndexOf*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:358*

Returns the last occurrence of a substring in the string.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  The substring to search for. |
| `Optional` position |  `undefined` &#124; `number`|  The index at which to begin searching. If omitted, the search begins at the end of the string. |

**Returns:** `number`

___
<a id="link"></a>

###  link

▸ **link**(url: *`string`*): `string`

*Inherited from String.link*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:481*

Returns an HTML element and sets the href attribute value

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `string`

___
<a id="localecompare"></a>

###  localeCompare

▸ **localeCompare**(that: *`string`*): `number`

*Inherited from String.localeCompare*

*Overrides String.localeCompare*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:364*

Determines whether two strings are equivalent in the current locale.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| that | `string` |  String to compare to target string |

**Returns:** `number`

___
<a id="match"></a>

###  match

▸ **match**(regexp: * `string` &#124; `RegExp`*):  `RegExpMatchArray` &#124; `null`

*Inherited from String.match*

*Overrides String.match*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:370*

Matches a string with a regular expression, and returns an array containing the results of that search.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| regexp |  `string` &#124; `RegExp`|  A variable name or string literal containing the regular expression pattern and flags. |

**Returns:**  `RegExpMatchArray` &#124; `null`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(form: * "NFC" &#124; "NFD" &#124; "NFKC" &#124; "NFKD"*): `string`

▸ **normalize**(form?: * `undefined` &#124; `string`*): `string`

*Inherited from String.normalize*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:426*

Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| form |  "NFC" &#124; "NFD" &#124; "NFKC" &#124; "NFKD"|  Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

**Returns:** `string`

*Inherited from String.normalize*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:434*

Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` form |  `undefined` &#124; `string`|  Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

**Returns:** `string`

___
<a id="padend"></a>

###  padEnd

▸ **padEnd**(maxLength: *`number`*, fillString?: * `undefined` &#124; `string`*): `string`

*Inherited from String.padEnd*

*Defined in node_modules/typescript/lib/lib.es2017.string.d.ts:46*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| maxLength | `number` |  The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `Optional` fillString |  `undefined` &#124; `string`|  The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

**Returns:** `string`

___
<a id="padstart"></a>

###  padStart

▸ **padStart**(maxLength: *`number`*, fillString?: * `undefined` &#124; `string`*): `string`

*Inherited from String.padStart*

*Defined in node_modules/typescript/lib/lib.es2017.string.d.ts:33*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| maxLength | `number` |  The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `Optional` fillString |  `undefined` &#124; `string`|  The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

**Returns:** `string`

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(count: *`number`*): `string`

*Inherited from String.repeat*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:441*

Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  number of copies to append |

**Returns:** `string`

___
<a id="replace"></a>

###  replace

▸ **replace**(searchValue: * `string` &#124; `RegExp`*, replaceValue: *`string`*): `string`

▸ **replace**(searchValue: * `string` &#124; `RegExp`*, replacer: *`function`*): `string`

*Inherited from String.replace*

*Overrides String.replace*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:377*

Replaces text in a string, using a regular expression or search string.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchValue |  `string` &#124; `RegExp`|  A string to search for. |
| replaceValue | `string` |  A string containing the text to replace for every successful match of searchValue in this string. |

**Returns:** `string`

*Inherited from String.replace*

*Overrides String.replace*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:384*

Replaces text in a string, using a regular expression or search string.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchValue |  `string` &#124; `RegExp`|  A string to search for. |
| replacer | `function` |  A function that returns the replacement text. |

**Returns:** `string`

___
<a id="search"></a>

###  search

▸ **search**(regexp: * `string` &#124; `RegExp`*): `number`

*Inherited from String.search*

*Overrides String.search*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:390*

Finds the first substring match in a regular expression search.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| regexp |  `string` &#124; `RegExp`|  The regular expression pattern and applicable flags. |

**Returns:** `number`

___
<a id="slice"></a>

###  slice

▸ **slice**(start?: * `undefined` &#124; `number`*, end?: * `undefined` &#124; `number`*): `string`

*Inherited from String.slice*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:398*

Returns a section of a string.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Optional` start |  `undefined` &#124; `number`|  The index to the beginning of the specified portion of stringObj. |
| `Optional` end |  `undefined` &#124; `number`|  The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. |

**Returns:** `string`

___
<a id="small"></a>

###  small

▸ **small**(): `string`

*Inherited from String.small*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:484*

Returns a HTML element

**Returns:** `string`

___
<a id="split"></a>

###  split

▸ **split**(separator: * `string` &#124; `RegExp`*, limit?: * `undefined` &#124; `number`*): `string`[]

*Inherited from String.split*

*Overrides String.split*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:405*

Split a string into substrings using the specified separator and return them as an array.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| separator |  `string` &#124; `RegExp`|  A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
| `Optional` limit |  `undefined` &#124; `number`|  A value used to limit the number of elements returned in the array. |

**Returns:** `string`[]

___
<a id="startswith"></a>

###  startsWith

▸ **startsWith**(searchString: *`string`*, position?: * `undefined` &#124; `number`*): `boolean`

*Inherited from String.startsWith*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:448*

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.

**Parameters:**

| Param | Type |
| ------ | ------ |
| searchString | `string` |
| `Optional` position |  `undefined` &#124; `number`|

**Returns:** `boolean`

___
<a id="strike"></a>

###  strike

▸ **strike**(): `string`

*Inherited from String.strike*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:487*

Returns a HTML element

**Returns:** `string`

___
<a id="sub"></a>

###  sub

▸ **sub**(): `string`

*Inherited from String.sub*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:490*

Returns a HTML element

**Returns:** `string`

___
<a id="substr"></a>

###  substr

▸ **substr**(from: *`number`*, length?: * `undefined` &#124; `number`*): `string`

*Inherited from String.substr*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:439*

Gets a substring beginning at the specified location and having the specified length.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| from | `number` |  The starting position of the desired substring. The index of the first character in the string is zero. |
| `Optional` length |  `undefined` &#124; `number`|  The number of characters to include in the returned substring. |

**Returns:** `string`

___
<a id="substring"></a>

###  substring

▸ **substring**(start: *`number`*, end?: * `undefined` &#124; `number`*): `string`

*Inherited from String.substring*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:413*

Returns the substring at the specified location within a String object.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based index number indicating the beginning of the substring. |
| `Optional` end |  `undefined` &#124; `number`|  Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned. |

**Returns:** `string`

___
<a id="sup"></a>

###  sup

▸ **sup**(): `string`

*Inherited from String.sup*

*Defined in node_modules/typescript/lib/lib.es2015.core.d.ts:493*

Returns a HTML element

**Returns:** `string`

___
<a id="tolocalelowercase"></a>

###  toLocaleLowerCase

▸ **toLocaleLowerCase**(): `string`

*Inherited from String.toLocaleLowerCase*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:419*

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

**Returns:** `string`

___
<a id="tolocaleuppercase"></a>

###  toLocaleUpperCase

▸ **toLocaleUpperCase**(): `string`

*Inherited from String.toLocaleUpperCase*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:425*

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

**Returns:** `string`

___
<a id="tolowercase"></a>

###  toLowerCase

▸ **toLowerCase**(): `string`

*Inherited from String.toLowerCase*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:416*

Converts all the alphabetic characters in a string to lowercase.

**Returns:** `string`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Inherited from String.toString*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:326*

Returns a string representation of a string.

**Returns:** `string`

___
<a id="touppercase"></a>

###  toUpperCase

▸ **toUpperCase**(): `string`

*Inherited from String.toUpperCase*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:422*

Converts all the alphabetic characters in a string to uppercase.

**Returns:** `string`

___
<a id="trim"></a>

###  trim

▸ **trim**(): `string`

*Inherited from String.trim*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:428*

Removes the leading and trailing white space and line terminator characters from a string.

**Returns:** `string`

___
<a id="trimleft"></a>

###  trimLeft

▸ **trimLeft**(): `string`

*Inherited from String.trimLeft*

*Defined in node_modules/@types/node/index.d.ts:184*

Removes whitespace from the left end of a string.

**Returns:** `string`

___
<a id="trimright"></a>

###  trimRight

▸ **trimRight**(): `string`

*Inherited from String.trimRight*

*Defined in node_modules/@types/node/index.d.ts:186*

Removes whitespace from the right end of a string.

**Returns:** `string`

___
<a id="valueof"></a>

###  valueOf

▸ **valueOf**(): `string`

*Inherited from String.valueOf*

*Defined in node_modules/typescript/lib/lib.es5.d.ts:442*

Returns the primitive value of the specified object.

**Returns:** `string`

___


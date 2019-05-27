[@johanneslumpe/css-types](../README.md) > ["unitTypes"](../modules/_unittypes_.md) > [PcValue](../interfaces/_unittypes_.pcvalue.md)

# Interface: PcValue

## Hierarchy

 `String`

**↳ PcValue**

## Indexable

\[index: `number`\]:&nbsp;`string`
## Index

### Properties

* [String](_unittypes_.pcvalue.md#string)
* [__pc_brand_type__](_unittypes_.pcvalue.md#__pc_brand_type__)
* [length](_unittypes_.pcvalue.md#length)

### Methods

* [__@iterator](_unittypes_.pcvalue.md#___iterator)
* [anchor](_unittypes_.pcvalue.md#anchor)
* [big](_unittypes_.pcvalue.md#big)
* [blink](_unittypes_.pcvalue.md#blink)
* [bold](_unittypes_.pcvalue.md#bold)
* [charAt](_unittypes_.pcvalue.md#charat)
* [charCodeAt](_unittypes_.pcvalue.md#charcodeat)
* [codePointAt](_unittypes_.pcvalue.md#codepointat)
* [concat](_unittypes_.pcvalue.md#concat)
* [endsWith](_unittypes_.pcvalue.md#endswith)
* [fixed](_unittypes_.pcvalue.md#fixed)
* [fontcolor](_unittypes_.pcvalue.md#fontcolor)
* [fontsize](_unittypes_.pcvalue.md#fontsize)
* [includes](_unittypes_.pcvalue.md#includes)
* [indexOf](_unittypes_.pcvalue.md#indexof)
* [italics](_unittypes_.pcvalue.md#italics)
* [lastIndexOf](_unittypes_.pcvalue.md#lastindexof)
* [link](_unittypes_.pcvalue.md#link)
* [localeCompare](_unittypes_.pcvalue.md#localecompare)
* [match](_unittypes_.pcvalue.md#match)
* [normalize](_unittypes_.pcvalue.md#normalize)
* [padEnd](_unittypes_.pcvalue.md#padend)
* [padStart](_unittypes_.pcvalue.md#padstart)
* [repeat](_unittypes_.pcvalue.md#repeat)
* [replace](_unittypes_.pcvalue.md#replace)
* [search](_unittypes_.pcvalue.md#search)
* [slice](_unittypes_.pcvalue.md#slice)
* [small](_unittypes_.pcvalue.md#small)
* [split](_unittypes_.pcvalue.md#split)
* [startsWith](_unittypes_.pcvalue.md#startswith)
* [strike](_unittypes_.pcvalue.md#strike)
* [sub](_unittypes_.pcvalue.md#sub)
* [substr](_unittypes_.pcvalue.md#substr)
* [substring](_unittypes_.pcvalue.md#substring)
* [sup](_unittypes_.pcvalue.md#sup)
* [toLocaleLowerCase](_unittypes_.pcvalue.md#tolocalelowercase)
* [toLocaleUpperCase](_unittypes_.pcvalue.md#tolocaleuppercase)
* [toLowerCase](_unittypes_.pcvalue.md#tolowercase)
* [toString](_unittypes_.pcvalue.md#tostring)
* [toUpperCase](_unittypes_.pcvalue.md#touppercase)
* [trim](_unittypes_.pcvalue.md#trim)
* [trimLeft](_unittypes_.pcvalue.md#trimleft)
* [trimRight](_unittypes_.pcvalue.md#trimright)
* [valueOf](_unittypes_.pcvalue.md#valueof)

---

## Properties

<a id="string"></a>

###  String

**● String**: *`StringConstructor`*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:517*

Allows manipulation and formatting of text strings and determination and location of substrings within strings.

___
<a id="__pc_brand_type__"></a>

###  __pc_brand_type__

**● __pc_brand_type__**: *`never`*

*Defined in [unitTypes.ts:47](https://github.com/johanneslumpe/css-types/blob/80e7b78/generated/unitTypes.ts#L47)*

___
<a id="length"></a>

###  length

**● length**: *`number`*

*Inherited from String.length*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:491*

Returns the length of a String object.

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<`string`>

*Inherited from String.[Symbol.iterator]*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.iterable.d.ts:235*

Iterator

**Returns:** `IterableIterator`<`string`>

___
<a id="anchor"></a>

###  anchor

▸ **anchor**(name: *`string`*): `string`

*Inherited from String.anchor*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:454*

Returns an HTML anchor element and sets the name attribute to the text value

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |   |

**Returns:** `string`

___
<a id="big"></a>

###  big

▸ **big**(): `string`

*Inherited from String.big*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:457*

Returns a HTML element

**Returns:** `string`

___
<a id="blink"></a>

###  blink

▸ **blink**(): `string`

*Inherited from String.blink*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:460*

Returns a HTML element

**Returns:** `string`

___
<a id="bold"></a>

###  bold

▸ **bold**(): `string`

*Inherited from String.bold*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:463*

Returns a **HTML element**

**Returns:** `string`

___
<a id="charat"></a>

###  charAt

▸ **charAt**(pos: *`number`*): `string`

*Inherited from String.charAt*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:392*

Returns the character at the specified index.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| pos | `number` |  The zero-based index of the desired character. |

**Returns:** `string`

___
<a id="charcodeat"></a>

###  charCodeAt

▸ **charCodeAt**(index: *`number`*): `number`

*Inherited from String.charCodeAt*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:398*

Returns the Unicode value of the character at the specified location.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| index | `number` |  The zero-based index of the desired character. If there is no character at the specified index, NaN is returned. |

**Returns:** `number`

___
<a id="codepointat"></a>

###  codePointAt

▸ **codePointAt**(pos: *`number`*): `number` \| `undefined`

*Inherited from String.codePointAt*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:402*

Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point value of the UTF-16 encoded code point starting at the string element at position pos in the String resulting from converting this object to a String. If there is no element at that position, the result is undefined. If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.

**Parameters:**

| Name | Type |
| ------ | ------ |
| pos | `number` |

**Returns:** `number` \| `undefined`

___
<a id="concat"></a>

###  concat

▸ **concat**(...strings: *`string`[]*): `string`

*Inherited from String.concat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:404*

Returns a string that contains the concatenation of two or more strings.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Rest` strings | `string`[] |  The strings to append to the end of the string. |

**Returns:** `string`

___
<a id="endswith"></a>

###  endsWith

▸ **endsWith**(searchString: *`string`*, endPosition?: *`undefined` \| `number`*): `boolean`

*Inherited from String.endsWith*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:418*

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.

**Parameters:**

| Name | Type |
| ------ | ------ |
| searchString | `string` |
| `Optional` endPosition | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="fixed"></a>

###  fixed

▸ **fixed**(): `string`

*Inherited from String.fixed*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:466*

Returns a HTML element

**Returns:** `string`

___
<a id="fontcolor"></a>

###  fontcolor

▸ **fontcolor**(color: *`string`*): `string`

*Inherited from String.fontcolor*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:469*

Returns a HTML element and sets the color attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |

**Returns:** `string`

___
<a id="fontsize"></a>

###  fontsize

▸ **fontsize**(size: *`number`*): `string`

▸ **fontsize**(size: *`string`*): `string`

*Inherited from String.fontsize*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:472*

Returns a HTML element and sets the size attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| size | `number` |

**Returns:** `string`

*Inherited from String.fontsize*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:475*

Returns a HTML element and sets the size attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| size | `string` |

**Returns:** `string`

___
<a id="includes"></a>

###  includes

▸ **includes**(searchString: *`string`*, position?: *`undefined` \| `number`*): `boolean`

*Inherited from String.includes*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:411*

Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  search string |
| `Optional` position | `undefined` \| `number` |  If position is undefined, 0 is assumed, so as to search all of the String. |

**Returns:** `boolean`

___
<a id="indexof"></a>

###  indexOf

▸ **indexOf**(searchString: *`string`*, position?: *`undefined` \| `number`*): `number`

*Inherited from String.indexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:411*

Returns the position of the first occurrence of a substring.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  The substring to search for in the string |
| `Optional` position | `undefined` \| `number` |  The index at which to begin searching the String object. If omitted, search starts at the beginning of the string. |

**Returns:** `number`

___
<a id="italics"></a>

###  italics

▸ **italics**(): `string`

*Inherited from String.italics*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:478*

Returns an _HTML element_

**Returns:** `string`

___
<a id="lastindexof"></a>

###  lastIndexOf

▸ **lastIndexOf**(searchString: *`string`*, position?: *`undefined` \| `number`*): `number`

*Inherited from String.lastIndexOf*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:418*

Returns the last occurrence of a substring in the string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchString | `string` |  The substring to search for. |
| `Optional` position | `undefined` \| `number` |  The index at which to begin searching. If omitted, the search begins at the end of the string. |

**Returns:** `number`

___
<a id="link"></a>

###  link

▸ **link**(url: *`string`*): `string`

*Inherited from String.link*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:481*

Returns an HTML element and sets the href attribute value

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `string`

___
<a id="localecompare"></a>

###  localeCompare

▸ **localeCompare**(that: *`string`*): `number`

*Inherited from String.localeCompare*

*Overrides String.localeCompare*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:424*

Determines whether two strings are equivalent in the current locale.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| that | `string` |  String to compare to target string |

**Returns:** `number`

___
<a id="match"></a>

###  match

▸ **match**(regexp: *`string` \| `RegExp`*): `RegExpMatchArray` \| `null`

*Inherited from String.match*

*Overrides String.match*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:430*

Matches a string with a regular expression, and returns an array containing the results of that search.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| regexp | `string` \| `RegExp` |  A variable name or string literal containing the regular expression pattern and flags. |

**Returns:** `RegExpMatchArray` \| `null`

___
<a id="normalize"></a>

###  normalize

▸ **normalize**(form: *"NFC" \| "NFD" \| "NFKC" \| "NFKD"*): `string`

▸ **normalize**(form?: *`undefined` \| `string`*): `string`

*Inherited from String.normalize*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:426*

Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| form | "NFC" \| "NFD" \| "NFKC" \| "NFKD" |  Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

**Returns:** `string`

*Inherited from String.normalize*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:434*

Returns the String value result of normalizing the string into the normalization form named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` form | `undefined` \| `string` |  Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default is "NFC" |

**Returns:** `string`

___
<a id="padend"></a>

###  padEnd

▸ **padEnd**(maxLength: *`number`*, fillString?: *`undefined` \| `string`*): `string`

*Inherited from String.padEnd*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.string.d.ts:46*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| maxLength | `number` |  The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `Optional` fillString | `undefined` \| `string` |  The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

**Returns:** `string`

___
<a id="padstart"></a>

###  padStart

▸ **padStart**(maxLength: *`number`*, fillString?: *`undefined` \| `string`*): `string`

*Inherited from String.padStart*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2017.string.d.ts:33*

Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| maxLength | `number` |  The length of the resulting string once the current string has been padded. If this parameter is smaller than the current string's length, the current string will be returned as it is. |
| `Optional` fillString | `undefined` \| `string` |  The string to pad the current string with. If this string is too long, it will be truncated and the left-most part will be applied. The default value for this parameter is " " (U+0020). |

**Returns:** `string`

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(count: *`number`*): `string`

*Inherited from String.repeat*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:441*

Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| count | `number` |  number of copies to append |

**Returns:** `string`

___
<a id="replace"></a>

###  replace

▸ **replace**(searchValue: *`string` \| `RegExp`*, replaceValue: *`string`*): `string`

▸ **replace**(searchValue: *`string` \| `RegExp`*, replacer: *`function`*): `string`

*Inherited from String.replace*

*Overrides String.replace*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:437*

Replaces text in a string, using a regular expression or search string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchValue | `string` \| `RegExp` |  A string to search for. |
| replaceValue | `string` |  A string containing the text to replace for every successful match of searchValue in this string. |

**Returns:** `string`

*Inherited from String.replace*

*Overrides String.replace*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:444*

Replaces text in a string, using a regular expression or search string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| searchValue | `string` \| `RegExp` |  A string to search for. |
| replacer | `function` |  A function that returns the replacement text. |

**Returns:** `string`

___
<a id="search"></a>

###  search

▸ **search**(regexp: *`string` \| `RegExp`*): `number`

*Inherited from String.search*

*Overrides String.search*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:450*

Finds the first substring match in a regular expression search.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| regexp | `string` \| `RegExp` |  The regular expression pattern and applicable flags. |

**Returns:** `number`

___
<a id="slice"></a>

###  slice

▸ **slice**(start?: *`undefined` \| `number`*, end?: *`undefined` \| `number`*): `string`

*Inherited from String.slice*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:458*

Returns a section of a string.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` start | `undefined` \| `number` |  The index to the beginning of the specified portion of stringObj. |
| `Optional` end | `undefined` \| `number` |  The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj. |

**Returns:** `string`

___
<a id="small"></a>

###  small

▸ **small**(): `string`

*Inherited from String.small*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:484*

Returns a HTML element

**Returns:** `string`

___
<a id="split"></a>

###  split

▸ **split**(separator: *`string` \| `RegExp`*, limit?: *`undefined` \| `number`*): `string`[]

*Inherited from String.split*

*Overrides String.split*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:465*

Split a string into substrings using the specified separator and return them as an array.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| separator | `string` \| `RegExp` |  A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. |
| `Optional` limit | `undefined` \| `number` |  A value used to limit the number of elements returned in the array. |

**Returns:** `string`[]

___
<a id="startswith"></a>

###  startsWith

▸ **startsWith**(searchString: *`string`*, position?: *`undefined` \| `number`*): `boolean`

*Inherited from String.startsWith*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:448*

Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.

**Parameters:**

| Name | Type |
| ------ | ------ |
| searchString | `string` |
| `Optional` position | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="strike"></a>

###  strike

▸ **strike**(): `string`

*Inherited from String.strike*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:487*

Returns a HTML element

**Returns:** `string`

___
<a id="sub"></a>

###  sub

▸ **sub**(): `string`

*Inherited from String.sub*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:490*

Returns a HTML element

**Returns:** `string`

___
<a id="substr"></a>

###  substr

▸ **substr**(from: *`number`*, length?: *`undefined` \| `number`*): `string`

*Inherited from String.substr*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:499*

Gets a substring beginning at the specified location and having the specified length.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| from | `number` |  The starting position of the desired substring. The index of the first character in the string is zero. |
| `Optional` length | `undefined` \| `number` |  The number of characters to include in the returned substring. |

**Returns:** `string`

___
<a id="substring"></a>

###  substring

▸ **substring**(start: *`number`*, end?: *`undefined` \| `number`*): `string`

*Inherited from String.substring*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:473*

Returns the substring at the specified location within a String object.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| start | `number` |  The zero-based index number indicating the beginning of the substring. |
| `Optional` end | `undefined` \| `number` |  Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned. |

**Returns:** `string`

___
<a id="sup"></a>

###  sup

▸ **sup**(): `string`

*Inherited from String.sup*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es2015.core.d.ts:493*

Returns a HTML element

**Returns:** `string`

___
<a id="tolocalelowercase"></a>

###  toLocaleLowerCase

▸ **toLocaleLowerCase**(): `string`

*Inherited from String.toLocaleLowerCase*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:479*

Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

**Returns:** `string`

___
<a id="tolocaleuppercase"></a>

###  toLocaleUpperCase

▸ **toLocaleUpperCase**(): `string`

*Inherited from String.toLocaleUpperCase*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:485*

Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

**Returns:** `string`

___
<a id="tolowercase"></a>

###  toLowerCase

▸ **toLowerCase**(): `string`

*Inherited from String.toLowerCase*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:476*

Converts all the alphabetic characters in a string to lowercase.

**Returns:** `string`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Inherited from String.toString*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:386*

Returns a string representation of a string.

**Returns:** `string`

___
<a id="touppercase"></a>

###  toUpperCase

▸ **toUpperCase**(): `string`

*Inherited from String.toUpperCase*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:482*

Converts all the alphabetic characters in a string to uppercase.

**Returns:** `string`

___
<a id="trim"></a>

###  trim

▸ **trim**(): `string`

*Inherited from String.trim*

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:488*

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

*Defined in node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:502*

Returns the primitive value of the specified object.

**Returns:** `string`

___


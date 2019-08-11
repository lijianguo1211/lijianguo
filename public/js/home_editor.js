/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.4.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code, options ) {
		DOMEval( code, { nonce: options && options.nonce } );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.4
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2019-04-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

				// Support: IE 8 only
				// Exclude object elements
				(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 && rdescend.test( selector ) ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = (elem.ownerDocument || elem).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( typeof elem.contentDocument !== "undefined" ) {
			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								} );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	// Support: IE 9-11 only
	// Also use offsetWidth/offsetHeight for when box sizing is unreliable
	// We use getClientRects() to check for hidden/disconnected.
	// In those cases, the computed value can be trusted to be border-box
	if ( ( !support.boxSizingReliable() && isBorderBox ||
		val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url, options ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/edit/MIDI.js":
/*!***********************************!*\
  !*** ./resources/js/edit/MIDI.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (typeof MIDI === "undefined") var MIDI = {};

(function () {
  "use strict";

  var e = {};
  var t = 0;

  var n = function n(_n) {
    t++;
    var r = new Audio();

    var i = _n.split(";")[0];

    r.id = "audio";
    r.setAttribute("preload", "auto");
    r.setAttribute("audiobuffer", true);
    r.addEventListener("error", function () {
      e[i] = false;
      t--;
    }, false);
    r.addEventListener("canplaythrough", function () {
      e[i] = true;
      t--;
    }, false);
    r.src = "data:" + _n;
    document.body.appendChild(r);
  };

  MIDI.audioDetect = function (r) {
    if (typeof Audio === "undefined") return r({});
    var i = new Audio();
    if (typeof i.canPlayType === "undefined") return r(e);
    var s = i.canPlayType('audio/ogg; codecs="vorbis"');
    s = s === "probably" || s === "maybe";
    var o = i.canPlayType("audio/mpeg");
    o = o === "probably" || o === "maybe";

    if (!s && !o) {
      r(e);
      return;
    }

    if (s) n("audio/ogg;base64,T2dnUwACAAAAAAAAAADqnjMlAAAAAOyyzPIBHgF2b3JiaXMAAAAAAUAfAABAHwAAQB8AAEAfAACZAU9nZ1MAAAAAAAAAAAAA6p4zJQEAAAANJGeqCj3//////////5ADdm9yYmlzLQAAAFhpcGguT3JnIGxpYlZvcmJpcyBJIDIwMTAxMTAxIChTY2hhdWZlbnVnZ2V0KQAAAAABBXZvcmJpcw9CQ1YBAAABAAxSFCElGVNKYwiVUlIpBR1jUFtHHWPUOUYhZBBTiEkZpXtPKpVYSsgRUlgpRR1TTFNJlVKWKUUdYxRTSCFT1jFloXMUS4ZJCSVsTa50FkvomWOWMUYdY85aSp1j1jFFHWNSUkmhcxg6ZiVkFDpGxehifDA6laJCKL7H3lLpLYWKW4q91xpT6y2EGEtpwQhhc+211dxKasUYY4wxxsXiUyiC0JBVAAABAABABAFCQ1YBAAoAAMJQDEVRgNCQVQBABgCAABRFcRTHcRxHkiTLAkJDVgEAQAAAAgAAKI7hKJIjSZJkWZZlWZameZaouaov+64u667t6roOhIasBACAAAAYRqF1TCqDEEPKQ4QUY9AzoxBDDEzGHGNONKQMMogzxZAyiFssLqgQBKEhKwKAKAAAwBjEGGIMOeekZFIi55iUTkoDnaPUUcoolRRLjBmlEluJMYLOUeooZZRCjKXFjFKJscRUAABAgAMAQICFUGjIigAgCgCAMAYphZRCjCnmFHOIMeUcgwwxxiBkzinoGJNOSuWck85JiRhjzjEHlXNOSuekctBJyaQTAAAQ4AAAEGAhFBqyIgCIEwAwSJKmWZomipamiaJniqrqiaKqWp5nmp5pqqpnmqpqqqrrmqrqypbnmaZnmqrqmaaqiqbquqaquq6nqrZsuqoum65q267s+rZru77uqapsm6or66bqyrrqyrbuurbtS56nqqKquq5nqq6ruq5uq65r25pqyq6purJtuq4tu7Js664s67pmqq5suqotm64s667s2rYqy7ovuq5uq7Ks+6os+75s67ru2rrwi65r66os674qy74x27bwy7ouHJMnqqqnqq7rmarrqq5r26rr2rqmmq5suq4tm6or26os67Yry7aumaosm64r26bryrIqy77vyrJui67r66Ys67oqy8Lu6roxzLat+6Lr6roqy7qvyrKuu7ru+7JuC7umqrpuyrKvm7Ks+7auC8us27oxuq7vq7It/KosC7+u+8Iy6z5jdF1fV21ZGFbZ9n3d95Vj1nVhWW1b+V1bZ7y+bgy7bvzKrQvLstq2scy6rSyvrxvDLux8W/iVmqratum6um7Ksq/Lui60dd1XRtf1fdW2fV+VZd+3hV9pG8OwjK6r+6os68Jry8ov67qw7MIvLKttK7+r68ow27qw3L6wLL/uC8uq277v6rrStXVluX2fsSu38QsAABhwAAAIMKEMFBqyIgCIEwBAEHIOKQahYgpCCKGkEEIqFWNSMuakZM5JKaWUFEpJrWJMSuaclMwxKaGUlkopqYRSWiqlxBRKaS2l1mJKqcVQSmulpNZKSa2llGJMrcUYMSYlc05K5pyUklJrJZXWMucoZQ5K6iCklEoqraTUYuacpA46Kx2E1EoqMZWUYgupxFZKaq2kFGMrMdXUWo4hpRhLSrGVlFptMdXWWqs1YkxK5pyUzDkqJaXWSiqtZc5J6iC01DkoqaTUYiopxco5SR2ElDLIqJSUWiupxBJSia20FGMpqcXUYq4pxRZDSS2WlFosqcTWYoy1tVRTJ6XFklKMJZUYW6y5ttZqDKXEVkqLsaSUW2sx1xZjjqGkFksrsZWUWmy15dhayzW1VGNKrdYWY40x5ZRrrT2n1mJNMdXaWqy51ZZbzLXnTkprpZQWS0oxttZijTHmHEppraQUWykpxtZara3FXEMpsZXSWiypxNhirLXFVmNqrcYWW62ltVprrb3GVlsurdXcYqw9tZRrrLXmWFNtBQAADDgAAASYUAYKDVkJAEQBAADGMMYYhEYpx5yT0ijlnHNSKucghJBS5hyEEFLKnINQSkuZcxBKSSmUklJqrYVSUmqttQIAAAocAAACbNCUWByg0JCVAEAqAIDBcTRNFFXVdX1fsSxRVFXXlW3jVyxNFFVVdm1b+DVRVFXXtW3bFn5NFFVVdmXZtoWiqrqybduybgvDqKqua9uybeuorqvbuq3bui9UXVmWbVu3dR3XtnXd9nVd+Bmzbeu2buu+8CMMR9/4IeTj+3RCCAAAT3AAACqwYXWEk6KxwEJDVgIAGQAAgDFKGYUYM0gxphhjTDHGmAAAgAEHAIAAE8pAoSErAoAoAADAOeecc84555xzzjnnnHPOOeecc44xxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY0wAwE6EA8BOhIVQaMhKACAcAABACCEpKaWUUkoRU85BSSmllFKqFIOMSkoppZRSpBR1lFJKKaWUIqWgpJJSSimllElJKaWUUkoppYw6SimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllFJKKaVUSimllFJKKaWUUkoppRQAYPLgAACVYOMMK0lnhaPBhYasBAByAwAAhRiDEEJpraRUUkolVc5BKCWUlEpKKZWUUqqYgxBKKqmlklJKKbXSQSihlFBKKSWUUkooJYQQSgmhlFRCK6mEUkoHoYQSQimhhFRKKSWUzkEoIYUOQkmllNRCSB10VFIpIZVSSiklpZQ6CKGUklJLLZVSWkqpdBJSKamV1FJqqbWSUgmhpFZKSSWl0lpJJbUSSkklpZRSSymFVFJJJYSSUioltZZaSqm11lJIqZWUUkqppdRSSiWlkEpKqZSSUmollZRSaiGVlEpJKaTUSimlpFRCSamlUlpKLbWUSkmptFRSSaWUlEpJKaVSSksppRJKSqmllFpJKYWSUkoplZJSSyW1VEoKJaWUUkmptJRSSymVklIBAEAHDgAAAUZUWoidZlx5BI4oZJiAAgAAQABAgAkgMEBQMApBgDACAQAAAADAAAAfAABHARAR0ZzBAUKCwgJDg8MDAAAAAAAAAAAAAACAT2dnUwAEAAAAAAAAAADqnjMlAgAAADzQPmcBAQA=");
    if (o) n("audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
    var u = new Date().getTime();
    var a = window.setInterval(function () {
      var n = new Date().getTime();
      var i = n - u > 5e3;

      if (!t || i) {
        window.clearInterval(a);
        r(e);
      }
    }, 1);
  };
})();

if (typeof MIDI === "undefined") var MIDI = {};
if (typeof MIDI.Soundfont === "undefined") MIDI.Soundfont = {};

(function () {
  "use strict";

  var e = false;

  MIDI.loadPlugin = function (r) {
    if (typeof r === "function") r = {
      callback: r
    };
    var i = r.instruments || r.instrument || "acoustic_grand_piano";
    if (_typeof(i) !== "object") i = [i];

    for (var s = 0; s < i.length; s++) {
      var o = i[s];

      if (typeof o === "number") {
        i[s] = MIDI.GeneralMIDI.byId[o];
      }
    }

    MIDI.soundfontUrl = r.soundfontUrl || MIDI.soundfontUrl || "./soundfont/";
    MIDI.audioDetect(function (s) {
      var o = "";

      if (n[r.api]) {
        o = r.api;
      } else if (n[window.location.hash.substr(1)]) {
        o = window.location.hash.substr(1);
      } else if (e && navigator.requestMIDIAccess) {
        o = "webmidi";
      } else if (window.webkitAudioContext || window.AudioContext) {
        o = "webaudio";
      } else if (window.Audio) {
        o = "audiotag";
      } else {
        o = "flash";
      }

      if (!t[o]) return;

      if (r.targetFormat) {
        var u = r.targetFormat;
      } else {
        var u = s["audio/ogg"] ? "ogg" : "mp3";
      }

      MIDI.lang = o;
      MIDI.supports = s;
      t[o](u, i, r);
    });
  };

  var t = {};

  t.webmidi = function (e, t, n) {
    if (MIDI.loader) MIDI.loader.message("Web MIDI API...");
    MIDI.WebMIDI.connect(n);
  };

  t.flash = function (e, t, n) {
    if (MIDI.loader) MIDI.loader.message("Flash API...");
    DOMLoader.script.add({
      src: n.soundManagerUrl || "./inc/SoundManager2/script/soundmanager2.js",
      verify: "SoundManager",
      callback: function callback() {
        MIDI.Flash.connect(t, n);
      }
    });
  };

  t.audiotag = function (e, t, n) {
    if (MIDI.loader) MIDI.loader.message("HTML5 Audio API...");
    var o = s({
      items: t,
      getNext: function getNext(t) {
        DOMLoader.sendRequest({
          url: MIDI.soundfontUrl + t + "-" + e + ".js",
          onprogress: i,
          onload: function onload(e) {
            r(e.responseText);
            if (MIDI.loader) MIDI.loader.update(null, "Downloading", 100);
            o.getNext();
          }
        });
      },
      onComplete: function onComplete() {
        MIDI.AudioTag.connect(n);
      }
    });
  };

  t.webaudio = function (e, t, n) {
    if (MIDI.loader) MIDI.loader.message("Web Audio API...");
    var o = s({
      items: t,
      getNext: function getNext(t) {
        DOMLoader.sendRequest({
          url: MIDI.soundfontUrl + t + "-" + e + ".js",
          onprogress: i,
          onload: function onload(e) {
            r(e.responseText);
            if (MIDI.loader) MIDI.loader.update(null, "Downloading...", 100);
            o.getNext();
          }
        });
      },
      onComplete: function onComplete() {
        MIDI.WebAudio.connect(n);
      }
    });
  };

  var n = {
    webmidi: true,
    webaudio: true,
    audiotag: true,
    flash: true
  };

  var r = function r(e) {
    var t = document.createElement("script");
    t.language = "javascript";
    t.type = "text/javascript";
    t.text = e;
    document.body.appendChild(t);
  };

  var i = function i(e) {
    if (!this.totalSize) {
      this.totalSize = e.total;
    }

    var t = this.totalSize ? Math.round(e.loaded / this.totalSize * 100) : "";
    if (MIDI.loader) MIDI.loader.update(null, "Downloading...", t);
  };

  var s = function s(e) {
    var t = {};
    t.queue = [];

    for (var n in e.items) {
      if (e.items.hasOwnProperty(n)) {
        t.queue.push(e.items[n]);
      }
    }

    t.getNext = function () {
      if (!t.queue.length) return e.onComplete();
      e.getNext(t.queue.shift());
    };

    setTimeout(t.getNext, 1);
    return t;
  };
})();

if (typeof MIDI === "undefined") var MIDI = {};

(function () {
  "use strict";

  var e = function e(_e) {
    MIDI.api = _e.api;
    MIDI.setVolume = _e.setVolume;
    MIDI.programChange = _e.programChange;
    MIDI.noteOn = _e.noteOn;
    MIDI.noteOff = _e.noteOff;
    MIDI.chordOn = _e.chordOn;
    MIDI.chordOff = _e.chordOff;
    MIDI.stopAllNotes = _e.stopAllNotes;
    MIDI.getInput = _e.getInput;
    MIDI.getOutputs = _e.getOutputs;
  };

  (function () {
    var t = null;
    var n = null;
    var r = [];
    var i = MIDI.WebMIDI = {
      api: "webmidi"
    };

    i.setVolume = function (e, t) {
      n.send([176 + e, 7, t]);
    };

    i.programChange = function (e, t) {
      n.send([192 + e, t]);
    };

    i.noteOn = function (e, t, r, i) {
      n.send([144 + e, t, r], i * 1e3);
    };

    i.noteOff = function (e, t, r) {
      n.send([128 + e, t, 0], r * 1e3);
    };

    i.chordOn = function (e, t, r, i) {
      for (var s = 0; s < t.length; s++) {
        var o = t[s];
        n.send([144 + e, o, r], i * 1e3);
      }
    };

    i.chordOff = function (e, t, r) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        n.send([128 + e, s, 0], r * 1e3);
      }
    };

    i.stopAllNotes = function () {
      for (var e = 0; e < 16; e++) {
        n.send([176 + e, 123, 0]);
      }
    };

    i.getInput = function () {
      return t.getInputs();
    };

    i.getOutputs = function () {
      return t.getOutputs();
    };

    i.connect = function (r) {
      e(i);
      navigator.requestMIDIAccess().then(function (e) {
        t = e;
        n = t.outputs()[0];
        if (r.callback) r.callback();
      }, function (e) {
        if (window.AudioContext || window.webkitAudioContext) {
          r.api = "webaudio";
        } else if (window.Audio) {
          r.api = "audiotag";
        } else {
          r.api = "flash";
        }

        MIDI.loadPlugin(r);
      });
    };
  })();

  if (window.AudioContext || window.webkitAudioContext) (function () {
    var t = window.AudioContext || window.webkitAudioContext;
    var n = MIDI.WebAudio = {
      api: "webaudio"
    };
    var r;
    var i = {};
    var s = 127;
    var o = {};

    var u = function u(e, t, n, i, s) {
      var u = MIDI.GeneralMIDI.byName[e];
      var a = u.number;
      var f = t[n];

      if (!MIDI.Soundfont[e][f]) {
        return s(e);
      }

      var l = MIDI.Soundfont[e][f].split(",")[1];
      var c = Base64Binary.decodeArrayBuffer(l);
      r.decodeAudioData(c, function (r) {
        var l = f;

        while (l.length < 3) {
          l += "&nbsp;";
        }

        if (typeof MIDI.loader !== "undefined") {
          MIDI.loader.update(null, u.instrument + "<br>Processing: " + (n / 87 * 100 >> 0) + "%<br>" + l);
        }

        r.id = f;
        i[n] = r;

        if (i.length === t.length) {
          while (i.length) {
            r = i.pop();
            if (!r) continue;
            var c = MIDI.keyToNote[r.id];
            o[a + "" + c] = r;
          }

          s(e);
        }
      });
    };

    n.setVolume = function (e, t) {
      s = t;
    };

    n.programChange = function (e, t) {
      MIDI.channels[e].instrument = t;
    };

    n.noteOn = function (e, t, n, u) {
      if (!MIDI.channels[e]) return;
      var a = MIDI.channels[e].instrument;
      if (!o[a + "" + t]) return;
      if (u < r.currentTime) u += r.currentTime;
      var f = r.createBufferSource();
      i[e + "" + t] = f;
      f.buffer = o[a + "" + t];
      f.connect(r.destination);

      if (r.createGain) {
        f.gainNode = r.createGain();
      } else {
        f.gainNode = r.createGainNode();
      }

      var l = n / 127 * (s / 127) * 2 - 1;
      f.gainNode.connect(r.destination);
      f.gainNode.gain.value = Math.max(-1, l);
      f.connect(f.gainNode);

      if (f.noteOn) {
        f.noteOn(u || 0);
      } else {
        f.start(u || 0);
      }

      return f;
    };

    n.noteOff = function (e, t, n) {
      n = n || 0;
      if (n < r.currentTime) n += r.currentTime;
      var s = i[e + "" + t];
      if (!s) return;

      if (s.gainNode) {
        var o = s.gainNode.gain;
        o.linearRampToValueAtTime(o.value, n);
        o.linearRampToValueAtTime(-1, n + .2);
      }

      if (s.noteOff) {
        s.noteOff(n + .3);
      } else {
        s.stop(n + .3);
      }

      delete i[e + "" + t];
    };

    n.chordOn = function (e, t, r, i) {
      var s = {},
          o;

      for (var u = 0, a = t.length; u < a; u++) {
        s[o = t[u]] = n.noteOn(e, o, r, i);
      }

      return s;
    };

    n.chordOff = function (e, t, r) {
      var i = {},
          s;

      for (var o = 0, u = t.length; o < u; o++) {
        i[s = t[o]] = n.noteOff(e, s, r);
      }

      return i;
    };

    n.stopAllNotes = function () {
      for (var e in i) {
        var t = 0;
        if (t < r.currentTime) t += r.currentTime;
        i[e].gain.linearRampToValueAtTime(1, t);
        i[e].gain.linearRampToValueAtTime(0, t + .2);
        i[e].noteOff(t + .3);
        delete i[e];
      }
    };

    n.connect = function (i) {
      e(n);
      MIDI.Player.ctx = r = new t();
      var s = [];
      var o = MIDI.keyToNote;

      for (var a in o) {
        s.push(a);
      }

      var f = [];
      var l = {};

      var c = function c(e) {
        delete l[e];

        for (var t in l) {
          break;
        }

        if (!t) i.callback();
      };

      for (var h in MIDI.Soundfont) {
        l[h] = true;

        for (var p = 0; p < s.length; p++) {
          u(h, s, p, f, c);
        }
      }
    };
  })();
  if (window.Audio) (function () {
    var t = MIDI.AudioTag = {
      api: "audiotag"
    };
    var n = {};
    var r = 127;
    var i = -1;
    var s = [];
    var o = [];
    var u = {};

    for (var a = 0; a < 12; a++) {
      s[a] = new Audio();
    }

    var f = function f(e, t) {
      if (!MIDI.channels[e]) return;
      var n = MIDI.channels[e].instrument;
      var a = MIDI.GeneralMIDI.byId[n].id;
      var t = u[t];
      if (!t) return;
      var f = a + "" + t.id;
      var l = (i + 1) % s.length;
      var c = s[l];
      o[l] = f;
      c.src = MIDI.Soundfont[a][t.id];
      c.volume = r / 127;
      c.play();
      i = l;
    };

    var l = function l(e, t) {
      if (!MIDI.channels[e]) return;
      var n = MIDI.channels[e].instrument;
      var r = MIDI.GeneralMIDI.byId[n].id;
      var t = u[t];
      if (!t) return;
      var a = r + "" + t.id;

      for (var f = 0; f < s.length; f++) {
        var l = (f + i + 1) % s.length;
        var c = o[l];

        if (c && c == a) {
          s[l].pause();
          o[l] = null;
          return;
        }
      }
    };

    t.programChange = function (e, t) {
      MIDI.channels[e].instrument = t;
    };

    t.setVolume = function (e, t) {
      r = t;
    };

    t.noteOn = function (e, t, r, i) {
      var s = n[t];
      if (!u[s]) return;

      if (i) {
        return window.setTimeout(function () {
          f(e, s);
        }, i * 1e3);
      } else {
        f(e, s);
      }
    };

    t.noteOff = function (e, t, r) {
      var i = n[t];
      if (!u[i]) return;

      if (r) {
        return setTimeout(function () {
          l(e, i);
        }, r * 1e3);
      } else {
        l(e, i);
      }
    };

    t.chordOn = function (e, t, r, i) {
      for (var s = 0; s < t.length; s++) {
        var o = t[s];
        var a = n[o];
        if (!u[a]) continue;

        if (i) {
          return window.setTimeout(function () {
            f(e, a);
          }, i * 1e3);
        } else {
          f(e, a);
        }
      }
    };

    t.chordOff = function (e, t, r) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        var o = n[s];
        if (!u[o]) continue;

        if (r) {
          return window.setTimeout(function () {
            l(e, o);
          }, r * 1e3);
        } else {
          l(e, o);
        }
      }
    };

    t.stopAllNotes = function () {
      for (var e = 0, t = s.length; e < t; e++) {
        s[e].pause();
      }
    };

    t.connect = function (r) {
      for (var i in MIDI.keyToNote) {
        n[MIDI.keyToNote[i]] = i;
        u[i] = {
          id: i
        };
      }

      e(t);
      if (r.callback) r.callback();
    };
  })();

  (function () {
    var t = MIDI.Flash = {
      api: "flash"
    };
    var n = {};
    var r = {};

    t.programChange = function (e, t) {
      MIDI.channels[e].instrument = t;
    };

    t.setVolume = function (e, t) {};

    t.noteOn = function (e, t, i, s) {
      if (!MIDI.channels[e]) return;
      var o = MIDI.channels[e].instrument;
      var u = MIDI.GeneralMIDI.byId[o].number;
      t = u + "" + n[t];
      if (!r[t]) return;

      if (s) {
        return window.setTimeout(function () {
          r[t].play({
            volume: i * 2
          });
        }, s * 1e3);
      } else {
        r[t].play({
          volume: i * 2
        });
      }
    };

    t.noteOff = function (e, t, n) {};

    t.chordOn = function (e, t, i, s) {
      if (!MIDI.channels[e]) return;
      var o = MIDI.channels[e].instrument;
      var u = MIDI.GeneralMIDI.byId[o].number;

      for (var a in t) {
        var f = t[a];
        var l = u + "" + n[f];

        if (r[l]) {
          r[l].play({
            volume: i * 2
          });
        }
      }
    };

    t.chordOff = function (e, t, n) {};

    t.stopAllNotes = function () {};

    t.connect = function (i, s) {
      soundManager.flashVersion = 9;
      soundManager.useHTML5Audio = true;
      soundManager.url = s.soundManagerSwfUrl || "../inc/SoundManager2/swf/";
      soundManager.useHighPerformance = true;
      soundManager.wmode = "transparent";
      soundManager.flashPollingInterval = 1;
      soundManager.debugMode = false;

      soundManager.onload = function () {
        var o = function o(e, t, n) {
          var i = MIDI.GeneralMIDI.byName[e];
          var s = i.number;
          r[s + "" + t] = soundManager.createSound({
            id: t,
            url: MIDI.soundfontUrl + e + "-mp3/" + t + ".mp3",
            multiShot: true,
            autoLoad: true,
            onload: n
          });
        };

        var u = [];
        var a = 88;
        var f = i.length * a;

        for (var l = 0; l < i.length; l++) {
          var c = i[l];

          var h = function h() {
            u.push(this.sID);
            if (typeof MIDI.loader === "undefined") return;
            MIDI.loader.update(null, "Processing: " + this.sID);
          };

          for (var p = 0; p < a; p++) {
            var d = n[p + 21];
            o(c, d, h);
          }
        }

        e(t);
        var v = window.setInterval(function () {
          if (u.length < f) return;
          window.clearInterval(v);
          if (s.callback) s.callback();
        }, 25);
      };

      soundManager.onerror = function () {};

      for (var o in MIDI.keyToNote) {
        n[MIDI.keyToNote[o]] = o;
      }
    };
  })();

  MIDI.GeneralMIDI = function (e) {
    var t = function t(e) {
      return e.replace(/[^a-z0-9 ]/gi, "").replace(/[ ]/g, "_").toLowerCase();
    };

    var n = {
      byName: {},
      byId: {},
      byCategory: {}
    };

    for (var r in e) {
      var i = e[r];

      for (var s = 0, o = i.length; s < o; s++) {
        var u = i[s];
        if (!u) continue;
        var a = parseInt(u.substr(0, u.indexOf(" ")), 10);
        u = u.replace(a + " ", "");
        n.byId[--a] = n.byName[t(u)] = n.byCategory[t(r)] = {
          id: t(u),
          instrument: u,
          number: a,
          category: r
        };
      }
    }

    return n;
  }({
    Piano: ["1 Acoustic Grand Piano", "2 Bright Acoustic Piano", "3 Electric Grand Piano", "4 Honky-tonk Piano", "5 Electric Piano 1", "6 Electric Piano 2", "7 Harpsichord", "8 Clavinet"],
    "Chromatic Percussion": ["9 Celesta", "10 Glockenspiel", "11 Music Box", "12 Vibraphone", "13 Marimba", "14 Xylophone", "15 Tubular Bells", "16 Dulcimer"],
    Organ: ["17 Drawbar Organ", "18 Percussive Organ", "19 Rock Organ", "20 Church Organ", "21 Reed Organ", "22 Accordion", "23 Harmonica", "24 Tango Accordion"],
    Guitar: ["25 Acoustic Guitar (nylon)", "26 Acoustic Guitar (steel)", "27 Electric Guitar (jazz)", "28 Electric Guitar (clean)", "29 Electric Guitar (muted)", "30 Overdriven Guitar", "31 Distortion Guitar", "32 Guitar Harmonics"],
    Bass: ["33 Acoustic Bass", "34 Electric Bass (finger)", "35 Electric Bass (pick)", "36 Fretless Bass", "37 Slap Bass 1", "38 Slap Bass 2", "39 Synth Bass 1", "40 Synth Bass 2"],
    Strings: ["41 Violin", "42 Viola", "43 Cello", "44 Contrabass", "45 Tremolo Strings", "46 Pizzicato Strings", "47 Orchestral Harp", "48 Timpani"],
    Ensemble: ["49 String Ensemble 1", "50 String Ensemble 2", "51 Synth Strings 1", "52 Synth Strings 2", "53 Choir Aahs", "54 Voice Oohs", "55 Synth Choir", "56 Orchestra Hit"],
    Brass: ["57 Trumpet", "58 Trombone", "59 Tuba", "60 Muted Trumpet", "61 French Horn", "62 Brass Section", "63 Synth Brass 1", "64 Synth Brass 2"],
    Reed: ["65 Soprano Sax", "66 Alto Sax", "67 Tenor Sax", "68 Baritone Sax", "69 Oboe", "70 English Horn", "71 Bassoon", "72 Clarinet"],
    Pipe: ["73 Piccolo", "74 Flute", "75 Recorder", "76 Pan Flute", "77 Blown Bottle", "78 Shakuhachi", "79 Whistle", "80 Ocarina"],
    "Synth Lead": ["81 Lead 1 (square)", "82 Lead 2 (sawtooth)", "83 Lead 3 (calliope)", "84 Lead 4 (chiff)", "85 Lead 5 (charang)", "86 Lead 6 (voice)", "87 Lead 7 (fifths)", "88 Lead 8 (bass + lead)"],
    "Synth Pad": ["89 Pad 1 (new age)", "90 Pad 2 (warm)", "91 Pad 3 (polysynth)", "92 Pad 4 (choir)", "93 Pad 5 (bowed)", "94 Pad 6 (metallic)", "95 Pad 7 (halo)", "96 Pad 8 (sweep)"],
    "Synth Effects": ["97 FX 1 (rain)", "98 FX 2 (soundtrack)", "99 FX 3 (crystal)", "100 FX 4 (atmosphere)", "101 FX 5 (brightness)", "102 FX 6 (goblins)", "103 FX 7 (echoes)", "104 FX 8 (sci-fi)"],
    Ethnic: ["105 Sitar", "106 Banjo", "107 Shamisen", "108 Koto", "109 Kalimba", "110 Bagpipe", "111 Fiddle", "112 Shanai"],
    Percussive: ["113 Tinkle Bell", "114 Agogo", "115 Steel Drums", "116 Woodblock", "117 Taiko Drum", "118 Melodic Tom", "119 Synth Drum"],
    "Sound effects": ["120 Reverse Cymbal", "121 Guitar Fret Noise", "122 Breath Noise", "123 Seashore", "124 Bird Tweet", "125 Telephone Ring", "126 Helicopter", "127 Applause", "128 Gunshot"]
  });

  MIDI.channels = function () {
    var e = {};

    for (var t = 0; t < 16; t++) {
      e[t] = {
        instrument: 0,
        mute: false,
        mono: false,
        omni: false,
        solo: false
      };
    }

    return e;
  }();

  MIDI.pianoKeyOffset = 21;
  MIDI.keyToNote = {};
  MIDI.noteToKey = {};

  (function () {
    var e = 21;
    var t = 108;
    var n = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

    for (var r = e; r <= t; r++) {
      var i = (r - 12) / 12 >> 0;
      var s = n[r % 12] + i;
      MIDI.keyToNote[s] = r;
      MIDI.noteToKey[r] = s;
    }
  })();
})();

if (typeof MIDI === "undefined") var MIDI = {};
if (typeof MIDI.Player === "undefined") MIDI.Player = {};

(function () {
  "use strict";

  var e = MIDI.Player;
  e.callback = undefined;
  e.currentTime = 0;
  e.endTime = 0;
  e.restart = 0;
  e.playing = false;
  e.timeWarp = 1;

  e.start = e.resume = function () {
    if (e.currentTime < -1) e.currentTime = -1;
    f(e.currentTime);
  };

  e.pause = function () {
    var t = e.restart;
    l();
    e.restart = t;
  };

  e.stop = function () {
    l();
    e.restart = 0;
    e.currentTime = 0;
  };

  e.addListener = function (e) {
    s = e;
  };

  e.removeListener = function () {
    s = undefined;
  };

  e.clearAnimation = function () {
    if (e.interval) {
      window.clearInterval(e.interval);
    }
  };

  e.setAnimation = function (t) {
    var n = typeof t === "function" ? t : t.callback;
    var r = t.interval || 30;
    var s = 0;
    var o = 0;
    var u = 0;
    e.clearAnimation();
    e.interval = window.setInterval(function () {
      if (e.endTime === 0) return;

      if (e.playing) {
        s = u === e.currentTime ? o - new Date().getTime() : 0;

        if (e.currentTime === 0) {
          s = 0;
        } else {
          s = e.currentTime - s;
        }

        if (u !== e.currentTime) {
          o = new Date().getTime();
          u = e.currentTime;
        }
      } else {
        s = e.currentTime;
      }

      var t = e.endTime;
      var r = s / t;
      var a = s / 1e3;
      var f = a / 60;
      var l = a - f * 60;
      var c = f * 60 + l;
      var h = t / 1e3;
      if (h - c < -1) return;
      n({
        now: c,
        end: h,
        events: i
      });
    }, r);
  };

  e.loadMidiFile = function () {
    e.replayer = new Replayer(MidiFile(e.currentData), e.timeWarp);
    e.data = e.replayer.getData();
    e.endTime = a();
  };

  e.loadFile = function (t, n) {
    e.stop();

    if (t.indexOf("base64,") !== -1) {
      var r = window.atob(t.split(",")[1]);
      e.currentData = r;
      e.loadMidiFile();
      if (n) n(r);
      return;
    }

    var i = new XMLHttpRequest();
    i.open("GET", t);
    i.overrideMimeType("text/plain; charset=x-user-defined");

    i.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var t = this.responseText || "";
        var r = [];
        var i = t.length;
        var s = String.fromCharCode;

        for (var o = 0; o < i; o++) {
          r[o] = s(t.charCodeAt(o) & 255);
        }

        var u = r.join("");
        e.currentData = u;
        e.loadMidiFile();
        if (n) n(u);
      }
    };

    i.send();
  };

  var t = [];
  var n;
  var r = 0;
  var i = {};
  var s = undefined;

  var o = function o(t, r, _o, u, a, l) {
    var c = window.setTimeout(function () {
      var u = {
        channel: t,
        note: r,
        now: _o,
        end: e.endTime,
        message: a,
        velocity: l
      };

      if (a === 128) {
        delete i[r];
      } else {
        i[r] = u;
      }

      if (s) {
        s(u);
      }

      e.currentTime = _o;

      if (e.currentTime === n && n < e.endTime) {
        f(n, true);
      }
    }, _o - u);
    return c;
  };

  var u = function u() {
    if (MIDI.lang === "WebAudioAPI") {
      return MIDI.Player.ctx;
    } else if (!e.ctx) {
      e.ctx = {
        currentTime: 0
      };
    }

    return e.ctx;
  };

  var a = function a() {
    var t = e.data;
    var n = t.length;
    var r = .5;

    for (var i = 0; i < n; i++) {
      r += t[i][1];
    }

    return r;
  };

  var f = function f(i, s) {
    if (!e.replayer) return;

    if (!s) {
      if (typeof i === "undefined") i = e.restart;
      if (e.playing) l();
      e.playing = true;
      e.data = e.replayer.getData();
      e.endTime = a();
    }

    var f;
    var c = 0;
    var h = 0;
    var p = e.data;
    var d = u();
    var v = p.length;
    n = .5;
    r = d.currentTime;

    for (var m = 0; m < v && h < 100; m++) {
      n += p[m][1];

      if (n < i) {
        c = n;
        continue;
      }

      i = n - c;
      var g = p[m][0].event;
      if (g.type !== "channel") continue;
      var y = g.channel;

      switch (g.subtype) {
        case "noteOn":
          if (MIDI.channels[y].mute) break;
          f = g.noteNumber - (e.MIDIOffset || 0);
          t.push({
            event: g,
            source: MIDI.noteOn(y, g.noteNumber, g.velocity, i / 1e3 + d.currentTime),
            interval: o(y, f, n, c, 144, g.velocity)
          });
          h++;
          break;

        case "noteOff":
          if (MIDI.channels[y].mute) break;
          f = g.noteNumber - (e.MIDIOffset || 0);
          t.push({
            event: g,
            source: MIDI.noteOff(y, g.noteNumber, i / 1e3 + d.currentTime),
            interval: o(y, f, n, c, 128)
          });
          break;

        default:
          break;
      }
    }
  };

  var l = function l() {
    var n = u();
    e.playing = false;
    e.restart += (n.currentTime - r) * 1e3;

    while (t.length) {
      var o = t.pop();
      window.clearInterval(o.interval);
      if (!o.source) continue;

      if (typeof o.source === "number") {
        window.clearTimeout(o.source);
      } else {
        o.source.disconnect(0);
      }
    }

    for (var a in i) {
      var o = i[a];

      if (i[a].message === 144 && s) {
        s({
          channel: o.channel,
          note: o.note,
          now: o.now,
          end: o.end,
          message: 128,
          velocity: o.velocity
        });
      }
    }

    i = {};
  };
})();

if (typeof DOMLoader === "undefined") var DOMLoader = {};

if (typeof XMLHttpRequest === "undefined") {
  var XMLHttpRequest;

  (function () {
    var e = [function () {
      return new ActiveXObject("Msxml2.XMLHTTP");
    }, function () {
      return new ActiveXObject("Msxml3.XMLHTTP");
    }, function () {
      return new ActiveXObject("Microsoft.XMLHTTP");
    }];

    for (var t = 0; t < e.length; t++) {
      try {
        e[t]();
      } catch (n) {
        continue;
      }

      break;
    }

    XMLHttpRequest = e[t];
  })();
}

if (typeof new XMLHttpRequest().responseText === "undefined") {
  var IEBinaryToArray_ByteStr_Script = "<!-- IEBinaryToArray_ByteStr -->\r\n" + "<script type='text/vbscript'>\r\n" + "Function IEBinaryToArray_ByteStr(Binary)\r\n" + "   IEBinaryToArray_ByteStr = CStr(Binary)\r\n" + "End Function\r\n" + "Function IEBinaryToArray_ByteStr_Last(Binary)\r\n" + "   Dim lastIndex\r\n" + "   lastIndex = LenB(Binary)\r\n" + "   if lastIndex mod 2 Then\r\n" + "       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n" + "   Else\r\n" + "       IEBinaryToArray_ByteStr_Last = " + '""' + "\r\n" + "   End If\r\n" + "End Function\r\n" + "</script>\r\n";
  document.write(IEBinaryToArray_ByteStr_Script);

  DOMLoader.sendRequest = function (e) {
    function t(e) {
      var t = {};

      for (var n = 0; n < 256; n++) {
        for (var r = 0; r < 256; r++) {
          t[String.fromCharCode(n + r * 256)] = String.fromCharCode(n) + String.fromCharCode(r);
        }
      }

      var i = IEBinaryToArray_ByteStr(e);
      var s = IEBinaryToArray_ByteStr_Last(e);
      return i.replace(/[\s\S]/g, function (e) {
        return t[e];
      }) + s;
    }

    var n = XMLHttpRequest();
    n.open("GET", e.url, true);
    if (e.responseType) n.responseType = e.responseType;
    if (e.onerror) n.onerror = e.onerror;
    if (e.onprogress) n.onprogress = e.onprogress;

    n.onreadystatechange = function (r) {
      if (n.readyState === 4) {
        if (n.status === 200) {
          n.responseText = t(n.responseBody);
        } else {
          n = false;
        }

        if (e.onload) e.onload(n);
      }
    };

    n.setRequestHeader("Accept-Charset", "x-user-defined");
    n.send(null);
    return n;
  };
} else {
  DOMLoader.sendRequest = function (e) {
    var t = new XMLHttpRequest();
    t.open(e.data ? "POST" : "GET", e.url, true);
    if (t.overrideMimeType) t.overrideMimeType("text/plain; charset=x-user-defined");
    if (e.data) t.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (e.responseType) t.responseType = e.responseType;
    if (e.onerror) t.onerror = e.onerror;
    if (e.onprogress) t.onprogress = e.onprogress;

    t.onreadystatechange = function (n) {
      if (t.readyState === 4) {
        if (t.status !== 200 && t.status != 304) {
          if (e.onerror) e.onerror(n, false);
          return;
        }

        if (e.onload) {
          e.onload(t);
        }
      }
    };

    t.send(e.data);
    return t;
  };
}

var Base64Binary = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  decodeArrayBuffer: function decodeArrayBuffer(e) {
    var t = Math.ceil(3 * e.length / 4);
    var n = new ArrayBuffer(t);
    this.decode(e, n);
    return n;
  },
  decode: function decode(e, t) {
    var n = this._keyStr.indexOf(e.charAt(e.length - 1));

    var r = this._keyStr.indexOf(e.charAt(e.length - 1));

    var i = Math.ceil(3 * e.length / 4);
    if (n == 64) i--;
    if (r == 64) i--;
    var s;
    var o, u, a;
    var f, l, c, h;
    var p = 0;
    var d = 0;
    if (t) s = new Uint8Array(t);else s = new Uint8Array(i);
    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    for (p = 0; p < i; p += 3) {
      f = this._keyStr.indexOf(e.charAt(d++));
      l = this._keyStr.indexOf(e.charAt(d++));
      c = this._keyStr.indexOf(e.charAt(d++));
      h = this._keyStr.indexOf(e.charAt(d++));
      o = f << 2 | l >> 4;
      u = (l & 15) << 4 | c >> 2;
      a = (c & 3) << 6 | h;
      s[p] = o;
      if (c != 64) s[p + 1] = u;
      if (h != 64) s[p + 2] = a;
    }

    return s;
  }
};

/***/ }),

/***/ "./resources/js/edit/ZeroClipboard.js":
/*!********************************************!*\
  !*** ./resources/js/edit/ZeroClipboard.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2009-2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.2.0
 */
!function (a, b) {
  "use strict";

  var c,
      d,
      e,
      f = a,
      g = f.document,
      h = f.navigator,
      i = f.setTimeout,
      j = f.clearTimeout,
      k = f.setInterval,
      l = f.clearInterval,
      m = f.getComputedStyle,
      n = f.encodeURIComponent,
      o = f.ActiveXObject,
      p = f.Error,
      q = f.Number.parseInt || f.parseInt,
      r = f.Number.parseFloat || f.parseFloat,
      s = f.Number.isNaN || f.isNaN,
      t = f.Date.now,
      u = f.Object.keys,
      v = f.Object.defineProperty,
      w = f.Object.prototype.hasOwnProperty,
      x = f.Array.prototype.slice,
      y = function () {
    var a = function a(_a) {
      return _a;
    };

    if ("function" == typeof f.wrap && "function" == typeof f.unwrap) try {
      var b = g.createElement("div"),
          c = f.unwrap(b);
      1 === b.nodeType && c && 1 === c.nodeType && (a = f.unwrap);
    } catch (d) {}
    return a;
  }(),
      z = function z(a) {
    return x.call(a, 0);
  },
      A = function A() {
    var a,
        c,
        d,
        e,
        f,
        g,
        h = z(arguments),
        i = h[0] || {};

    for (a = 1, c = h.length; c > a; a++) {
      if (null != (d = h[a])) for (e in d) {
        w.call(d, e) && (f = i[e], g = d[e], i !== g && g !== b && (i[e] = g));
      }
    }

    return i;
  },
      B = function B(a) {
    var b, c, d, e;
    if ("object" != _typeof(a) || null == a || "number" == typeof a.nodeType) b = a;else if ("number" == typeof a.length) for (b = [], c = 0, d = a.length; d > c; c++) {
      w.call(a, c) && (b[c] = B(a[c]));
    } else {
      b = {};

      for (e in a) {
        w.call(a, e) && (b[e] = B(a[e]));
      }
    }
    return b;
  },
      C = function C(a, b) {
    for (var c = {}, d = 0, e = b.length; e > d; d++) {
      b[d] in a && (c[b[d]] = a[b[d]]);
    }

    return c;
  },
      D = function D(a, b) {
    var c = {};

    for (var d in a) {
      -1 === b.indexOf(d) && (c[d] = a[d]);
    }

    return c;
  },
      E = function E(a) {
    if (a) for (var b in a) {
      w.call(a, b) && delete a[b];
    }
    return a;
  },
      F = function F(a, b) {
    if (a && 1 === a.nodeType && a.ownerDocument && b && (1 === b.nodeType && b.ownerDocument && b.ownerDocument === a.ownerDocument || 9 === b.nodeType && !b.ownerDocument && b === a.ownerDocument)) do {
      if (a === b) return !0;
      a = a.parentNode;
    } while (a);
    return !1;
  },
      G = function G(a) {
    var b;
    return "string" == typeof a && a && (b = a.split("#")[0].split("?")[0], b = a.slice(0, a.lastIndexOf("/") + 1)), b;
  },
      H = function H(a) {
    var b, c;
    return "string" == typeof a && a && (c = a.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), c && c[1] ? b = c[1] : (c = a.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), c && c[1] && (b = c[1]))), b;
  },
      I = function I() {
    var a, b;

    try {
      throw new p();
    } catch (c) {
      b = c;
    }

    return b && (a = b.sourceURL || b.fileName || H(b.stack)), a;
  },
      J = function J() {
    var a, c, d;
    if (g.currentScript && (a = g.currentScript.src)) return a;
    if (c = g.getElementsByTagName("script"), 1 === c.length) return c[0].src || b;
    if ("readyState" in c[0]) for (d = c.length; d--;) {
      if ("interactive" === c[d].readyState && (a = c[d].src)) return a;
    }
    return "loading" === g.readyState && (a = c[c.length - 1].src) ? a : (a = I()) ? a : b;
  },
      K = function K() {
    var a,
        c,
        d,
        e = g.getElementsByTagName("script");

    for (a = e.length; a--;) {
      if (!(d = e[a].src)) {
        c = null;
        break;
      }

      if (d = G(d), null == c) c = d;else if (c !== d) {
        c = null;
        break;
      }
    }

    return c || b;
  },
      L = function L() {
    var a = G(J()) || K() || "";
    return a + "ZeroClipboard.swf";
  },
      M = function () {
    return null == a.opener && (!!a.top && a != a.top || !!a.parent && a != a.parent);
  }(),
      N = {
    bridge: null,
    version: "0.0.0",
    pluginType: "unknown",
    disabled: null,
    outdated: null,
    sandboxed: null,
    unavailable: null,
    degraded: null,
    deactivated: null,
    overdue: null,
    ready: null
  },
      O = "11.0.0",
      P = {},
      Q = {},
      R = null,
      S = 0,
      T = 0,
      U = {
    ready: "Flash communication is established",
    error: {
      "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
      "flash-outdated": "Flash is too outdated to support ZeroClipboard",
      "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
      "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
      "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
      "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
      "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
      "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
      "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
      "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
      "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
    }
  },
      V = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"],
      W = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"],
      X = new RegExp("^flash-(" + W.map(function (a) {
    return a.replace(/^flash-/, "");
  }).join("|") + ")$"),
      Y = new RegExp("^flash-(" + W.slice(1).map(function (a) {
    return a.replace(/^flash-/, "");
  }).join("|") + ")$"),
      Z = {
    swfPath: L(),
    trustedDomains: a.location.host ? [a.location.host] : [],
    cacheBust: !0,
    forceEnhancedClipboard: !1,
    flashLoadTimeout: 3e4,
    autoActivate: !0,
    bubbleEvents: !0,
    containerId: "global-zeroclipboard-html-bridge",
    containerClass: "global-zeroclipboard-container",
    swfObjectId: "global-zeroclipboard-flash-bridge",
    hoverClass: "zeroclipboard-is-hover",
    activeClass: "zeroclipboard-is-active",
    forceHandCursor: !1,
    title: null,
    zIndex: 999999999
  },
      $ = function $(a) {
    if ("object" == _typeof(a) && null !== a) for (var b in a) {
      if (w.call(a, b)) if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b)) Z[b] = a[b];else if (null == N.bridge) if ("containerId" === b || "swfObjectId" === b) {
        if (!nb(a[b])) throw new Error("The specified `" + b + "` value is not valid as an HTML4 Element ID");
        Z[b] = a[b];
      } else Z[b] = a[b];
    }
    {
      if ("string" != typeof a || !a) return B(Z);
      if (w.call(Z, a)) return Z[a];
    }
  },
      _ = function _() {
    return Tb(), {
      browser: C(h, ["userAgent", "platform", "appName"]),
      flash: D(N, ["bridge"]),
      zeroclipboard: {
        version: Vb.version,
        config: Vb.config()
      }
    };
  },
      ab = function ab() {
    return !!(N.disabled || N.outdated || N.sandboxed || N.unavailable || N.degraded || N.deactivated);
  },
      bb = function bb(a, d) {
    var e,
        f,
        g,
        h = {};
    if ("string" == typeof a && a) g = a.toLowerCase().split(/\s+/);else if ("object" == _typeof(a) && a && "undefined" == typeof d) for (e in a) {
      w.call(a, e) && "string" == typeof e && e && "function" == typeof a[e] && Vb.on(e, a[e]);
    }

    if (g && g.length) {
      for (e = 0, f = g.length; f > e; e++) {
        a = g[e].replace(/^on/, ""), h[a] = !0, P[a] || (P[a] = []), P[a].push(d);
      }

      if (h.ready && N.ready && Vb.emit({
        type: "ready"
      }), h.error) {
        for (e = 0, f = W.length; f > e; e++) {
          if (N[W[e].replace(/^flash-/, "")] === !0) {
            Vb.emit({
              type: "error",
              name: W[e]
            });
            break;
          }
        }

        c !== b && Vb.version !== c && Vb.emit({
          type: "error",
          name: "version-mismatch",
          jsVersion: Vb.version,
          swfVersion: c
        });
      }
    }

    return Vb;
  },
      cb = function cb(a, b) {
    var c, d, e, f, g;
    if (0 === arguments.length) f = u(P);else if ("string" == typeof a && a) f = a.split(/\s+/);else if ("object" == _typeof(a) && a && "undefined" == typeof b) for (c in a) {
      w.call(a, c) && "string" == typeof c && c && "function" == typeof a[c] && Vb.off(c, a[c]);
    }
    if (f && f.length) for (c = 0, d = f.length; d > c; c++) {
      if (a = f[c].toLowerCase().replace(/^on/, ""), g = P[a], g && g.length) if (b) for (e = g.indexOf(b); -1 !== e;) {
        g.splice(e, 1), e = g.indexOf(b, e);
      } else g.length = 0;
    }
    return Vb;
  },
      db = function db(a) {
    var b;
    return b = "string" == typeof a && a ? B(P[a]) || null : B(P);
  },
      eb = function eb(a) {
    var b, c, d;
    return a = ob(a), a && !vb(a) ? "ready" === a.type && N.overdue === !0 ? Vb.emit({
      type: "error",
      name: "flash-overdue"
    }) : (b = A({}, a), tb.call(this, b), "copy" === a.type && (d = Db(Q), c = d.data, R = d.formatMap), c) : void 0;
  },
      fb = function fb() {
    var a = N.sandboxed;
    if (Tb(), "boolean" != typeof N.ready && (N.ready = !1), N.sandboxed !== a && N.sandboxed === !0) N.ready = !1, Vb.emit({
      type: "error",
      name: "flash-sandboxed"
    });else if (!Vb.isFlashUnusable() && null === N.bridge) {
      var b = Z.flashLoadTimeout;
      "number" == typeof b && b >= 0 && (S = i(function () {
        "boolean" != typeof N.deactivated && (N.deactivated = !0), N.deactivated === !0 && Vb.emit({
          type: "error",
          name: "flash-deactivated"
        });
      }, b)), N.overdue = !1, Bb();
    }
  },
      gb = function gb() {
    Vb.clearData(), Vb.blur(), Vb.emit("destroy"), Cb(), Vb.off();
  },
      hb = function hb(a, b) {
    var c;
    if ("object" == _typeof(a) && a && "undefined" == typeof b) c = a, Vb.clearData();else {
      if ("string" != typeof a || !a) return;
      c = {}, c[a] = b;
    }

    for (var d in c) {
      "string" == typeof d && d && w.call(c, d) && "string" == typeof c[d] && c[d] && (Q[d] = c[d]);
    }
  },
      ib = function ib(a) {
    "undefined" == typeof a ? (E(Q), R = null) : "string" == typeof a && w.call(Q, a) && delete Q[a];
  },
      jb = function jb(a) {
    return "undefined" == typeof a ? B(Q) : "string" == typeof a && w.call(Q, a) ? Q[a] : void 0;
  },
      kb = function kb(a) {
    if (a && 1 === a.nodeType) {
      d && (Lb(d, Z.activeClass), d !== a && Lb(d, Z.hoverClass)), d = a, Kb(a, Z.hoverClass);
      var b = a.getAttribute("title") || Z.title;

      if ("string" == typeof b && b) {
        var c = Ab(N.bridge);
        c && c.setAttribute("title", b);
      }

      var e = Z.forceHandCursor === !0 || "pointer" === Mb(a, "cursor");
      Rb(e), Qb();
    }
  },
      lb = function lb() {
    var a = Ab(N.bridge);
    a && (a.removeAttribute("title"), a.style.left = "0px", a.style.top = "-9999px", a.style.width = "1px", a.style.height = "1px"), d && (Lb(d, Z.hoverClass), Lb(d, Z.activeClass), d = null);
  },
      mb = function mb() {
    return d || null;
  },
      nb = function nb(a) {
    return "string" == typeof a && a && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a);
  },
      ob = function ob(a) {
    var b;

    if ("string" == typeof a && a ? (b = a, a = {}) : "object" == _typeof(a) && a && "string" == typeof a.type && a.type && (b = a.type), b) {
      b = b.toLowerCase(), !a.target && (/^(copy|aftercopy|_click)$/.test(b) || "error" === b && "clipboard-error" === a.name) && (a.target = e), A(a, {
        type: b,
        target: a.target || d || null,
        relatedTarget: a.relatedTarget || null,
        currentTarget: N && N.bridge || null,
        timeStamp: a.timeStamp || t() || null
      });
      var c = U[a.type];
      return "error" === a.type && a.name && c && (c = c[a.name]), c && (a.message = c), "ready" === a.type && A(a, {
        target: null,
        version: N.version
      }), "error" === a.type && (X.test(a.name) && A(a, {
        target: null,
        minimumVersion: O
      }), Y.test(a.name) && A(a, {
        version: N.version
      })), "copy" === a.type && (a.clipboardData = {
        setData: Vb.setData,
        clearData: Vb.clearData
      }), "aftercopy" === a.type && (a = Eb(a, R)), a.target && !a.relatedTarget && (a.relatedTarget = pb(a.target)), qb(a);
    }
  },
      pb = function pb(a) {
    var b = a && a.getAttribute && a.getAttribute("data-clipboard-target");
    return b ? g.getElementById(b) : null;
  },
      qb = function qb(a) {
    if (a && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)) {
      var c = a.target,
          d = "_mouseover" === a.type && a.relatedTarget ? a.relatedTarget : b,
          e = "_mouseout" === a.type && a.relatedTarget ? a.relatedTarget : b,
          h = Nb(c),
          i = f.screenLeft || f.screenX || 0,
          j = f.screenTop || f.screenY || 0,
          k = g.body.scrollLeft + g.documentElement.scrollLeft,
          l = g.body.scrollTop + g.documentElement.scrollTop,
          m = h.left + ("number" == typeof a._stageX ? a._stageX : 0),
          n = h.top + ("number" == typeof a._stageY ? a._stageY : 0),
          o = m - k,
          p = n - l,
          q = i + o,
          r = j + p,
          s = "number" == typeof a.movementX ? a.movementX : 0,
          t = "number" == typeof a.movementY ? a.movementY : 0;
      delete a._stageX, delete a._stageY, A(a, {
        srcElement: c,
        fromElement: d,
        toElement: e,
        screenX: q,
        screenY: r,
        pageX: m,
        pageY: n,
        clientX: o,
        clientY: p,
        x: o,
        y: p,
        movementX: s,
        movementY: t,
        offsetX: 0,
        offsetY: 0,
        layerX: 0,
        layerY: 0
      });
    }

    return a;
  },
      rb = function rb(a) {
    var b = a && "string" == typeof a.type && a.type || "";
    return !/^(?:(?:before)?copy|destroy)$/.test(b);
  },
      sb = function sb(a, b, c, d) {
    d ? i(function () {
      a.apply(b, c);
    }, 0) : a.apply(b, c);
  },
      tb = function tb(a) {
    if ("object" == _typeof(a) && a && a.type) {
      var b = rb(a),
          c = P["*"] || [],
          d = P[a.type] || [],
          e = c.concat(d);

      if (e && e.length) {
        var g,
            h,
            i,
            j,
            k,
            l = this;

        for (g = 0, h = e.length; h > g; g++) {
          i = e[g], j = l, "string" == typeof i && "function" == typeof f[i] && (i = f[i]), "object" == _typeof(i) && i && "function" == typeof i.handleEvent && (j = i, i = i.handleEvent), "function" == typeof i && (k = A({}, a), sb(i, j, [k], b));
        }
      }

      return this;
    }
  },
      ub = function ub(a) {
    var b = null;
    return (M === !1 || a && "error" === a.type && a.name && -1 !== V.indexOf(a.name)) && (b = !1), b;
  },
      vb = function vb(a) {
    var b = a.target || d || null,
        f = "swf" === a._source;

    switch (delete a._source, a.type) {
      case "error":
        var g = "flash-sandboxed" === a.name || ub(a);
        "boolean" == typeof g && (N.sandboxed = g), -1 !== W.indexOf(a.name) ? A(N, {
          disabled: "flash-disabled" === a.name,
          outdated: "flash-outdated" === a.name,
          unavailable: "flash-unavailable" === a.name,
          degraded: "flash-degraded" === a.name,
          deactivated: "flash-deactivated" === a.name,
          overdue: "flash-overdue" === a.name,
          ready: !1
        }) : "version-mismatch" === a.name && (c = a.swfVersion, A(N, {
          disabled: !1,
          outdated: !1,
          unavailable: !1,
          degraded: !1,
          deactivated: !1,
          overdue: !1,
          ready: !1
        })), Pb();
        break;

      case "ready":
        c = a.swfVersion;
        var h = N.deactivated === !0;
        A(N, {
          disabled: !1,
          outdated: !1,
          sandboxed: !1,
          unavailable: !1,
          degraded: !1,
          deactivated: !1,
          overdue: h,
          ready: !h
        }), Pb();
        break;

      case "beforecopy":
        e = b;
        break;

      case "copy":
        var i,
            j,
            k = a.relatedTarget;
        !Q["text/html"] && !Q["text/plain"] && k && (j = k.value || k.outerHTML || k.innerHTML) && (i = k.value || k.textContent || k.innerText) ? (a.clipboardData.clearData(), a.clipboardData.setData("text/plain", i), j !== i && a.clipboardData.setData("text/html", j)) : !Q["text/plain"] && a.target && (i = a.target.getAttribute("data-clipboard-text")) && (a.clipboardData.clearData(), a.clipboardData.setData("text/plain", i));
        break;

      case "aftercopy":
        wb(a), Vb.clearData(), b && b !== Jb() && b.focus && b.focus();
        break;

      case "_mouseover":
        Vb.focus(b), Z.bubbleEvents === !0 && f && (b && b !== a.relatedTarget && !F(a.relatedTarget, b) && xb(A({}, a, {
          type: "mouseenter",
          bubbles: !1,
          cancelable: !1
        })), xb(A({}, a, {
          type: "mouseover"
        })));
        break;

      case "_mouseout":
        Vb.blur(), Z.bubbleEvents === !0 && f && (b && b !== a.relatedTarget && !F(a.relatedTarget, b) && xb(A({}, a, {
          type: "mouseleave",
          bubbles: !1,
          cancelable: !1
        })), xb(A({}, a, {
          type: "mouseout"
        })));
        break;

      case "_mousedown":
        Kb(b, Z.activeClass), Z.bubbleEvents === !0 && f && xb(A({}, a, {
          type: a.type.slice(1)
        }));
        break;

      case "_mouseup":
        Lb(b, Z.activeClass), Z.bubbleEvents === !0 && f && xb(A({}, a, {
          type: a.type.slice(1)
        }));
        break;

      case "_click":
        e = null, Z.bubbleEvents === !0 && f && xb(A({}, a, {
          type: a.type.slice(1)
        }));
        break;

      case "_mousemove":
        Z.bubbleEvents === !0 && f && xb(A({}, a, {
          type: a.type.slice(1)
        }));
    }

    return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type) ? !0 : void 0;
  },
      wb = function wb(a) {
    if (a.errors && a.errors.length > 0) {
      var b = B(a);
      A(b, {
        type: "error",
        name: "clipboard-error"
      }), delete b.success, i(function () {
        Vb.emit(b);
      }, 0);
    }
  },
      xb = function xb(a) {
    if (a && "string" == typeof a.type && a) {
      var b,
          c = a.target || null,
          d = c && c.ownerDocument || g,
          e = {
        view: d.defaultView || f,
        canBubble: !0,
        cancelable: !0,
        detail: "click" === a.type ? 1 : 0,
        button: "number" == typeof a.which ? a.which - 1 : "number" == typeof a.button ? a.button : d.createEvent ? 0 : 1
      },
          h = A(e, a);
      c && d.createEvent && c.dispatchEvent && (h = [h.type, h.canBubble, h.cancelable, h.view, h.detail, h.screenX, h.screenY, h.clientX, h.clientY, h.ctrlKey, h.altKey, h.shiftKey, h.metaKey, h.button, h.relatedTarget], b = d.createEvent("MouseEvents"), b.initMouseEvent && (b.initMouseEvent.apply(b, h), b._source = "js", c.dispatchEvent(b)));
    }
  },
      yb = function yb() {
    var a = Z.flashLoadTimeout;

    if ("number" == typeof a && a >= 0) {
      var b = Math.min(1e3, a / 10),
          c = Z.swfObjectId + "_fallbackContent";
      T = k(function () {
        var a = g.getElementById(c);
        Ob(a) && (Pb(), N.deactivated = null, Vb.emit({
          type: "error",
          name: "swf-not-found"
        }));
      }, b);
    }
  },
      zb = function zb() {
    var a = g.createElement("div");
    return a.id = Z.containerId, a.className = Z.containerClass, a.style.position = "absolute", a.style.left = "0px", a.style.top = "-9999px", a.style.width = "1px", a.style.height = "1px", a.style.zIndex = "" + Sb(Z.zIndex), a;
  },
      Ab = function Ab(a) {
    for (var b = a && a.parentNode; b && "OBJECT" === b.nodeName && b.parentNode;) {
      b = b.parentNode;
    }

    return b || null;
  },
      Bb = function Bb() {
    var a,
        b = N.bridge,
        c = Ab(b);

    if (!b) {
      var d = Ib(f.location.host, Z),
          e = "never" === d ? "none" : "all",
          h = Gb(A({
        jsVersion: Vb.version
      }, Z)),
          i = Z.swfPath + Fb(Z.swfPath, Z);
      c = zb();
      var j = g.createElement("div");
      c.appendChild(j), g.body.appendChild(c);
      var k = g.createElement("div"),
          l = "activex" === N.pluginType;
      k.innerHTML = '<object id="' + Z.swfObjectId + '" name="' + Z.swfObjectId + '" width="100%" height="100%" ' + (l ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + i + '"') + ">" + (l ? '<param name="movie" value="' + i + '"/>' : "") + '<param name="allowScriptAccess" value="' + d + '"/><param name="allowNetworking" value="' + e + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + h + '"/><div id="' + Z.swfObjectId + '_fallbackContent">&nbsp;</div></object>', b = k.firstChild, k = null, y(b).ZeroClipboard = Vb, c.replaceChild(b, j), yb();
    }

    return b || (b = g[Z.swfObjectId], b && (a = b.length) && (b = b[a - 1]), !b && c && (b = c.firstChild)), N.bridge = b || null, b;
  },
      Cb = function Cb() {
    var a = N.bridge;

    if (a) {
      var d = Ab(a);
      d && ("activex" === N.pluginType && "readyState" in a ? (a.style.display = "none", function e() {
        if (4 === a.readyState) {
          for (var b in a) {
            "function" == typeof a[b] && (a[b] = null);
          }

          a.parentNode && a.parentNode.removeChild(a), d.parentNode && d.parentNode.removeChild(d);
        } else i(e, 10);
      }()) : (a.parentNode && a.parentNode.removeChild(a), d.parentNode && d.parentNode.removeChild(d))), Pb(), N.ready = null, N.bridge = null, N.deactivated = null, c = b;
    }
  },
      Db = function Db(a) {
    var b = {},
        c = {};

    if ("object" == _typeof(a) && a) {
      for (var d in a) {
        if (d && w.call(a, d) && "string" == typeof a[d] && a[d]) switch (d.toLowerCase()) {
          case "text/plain":
          case "text":
          case "air:text":
          case "flash:text":
            b.text = a[d], c.text = d;
            break;

          case "text/html":
          case "html":
          case "air:html":
          case "flash:html":
            b.html = a[d], c.html = d;
            break;

          case "application/rtf":
          case "text/rtf":
          case "rtf":
          case "richtext":
          case "air:rtf":
          case "flash:rtf":
            b.rtf = a[d], c.rtf = d;
        }
      }

      return {
        data: b,
        formatMap: c
      };
    }
  },
      Eb = function Eb(a, b) {
    if ("object" != _typeof(a) || !a || "object" != _typeof(b) || !b) return a;
    var c = {};

    for (var d in a) {
      if (w.call(a, d)) if ("errors" === d) {
        c[d] = a[d] ? a[d].slice() : [];

        for (var e = 0, f = c[d].length; f > e; e++) {
          c[d][e].format = b[c[d][e].format];
        }
      } else if ("success" !== d && "data" !== d) c[d] = a[d];else {
        c[d] = {};
        var g = a[d];

        for (var h in g) {
          h && w.call(g, h) && w.call(b, h) && (c[d][b[h]] = g[h]);
        }
      }
    }

    return c;
  },
      Fb = function Fb(a, b) {
    var c = null == b || b && b.cacheBust === !0;
    return c ? (-1 === a.indexOf("?") ? "?" : "&") + "noCache=" + t() : "";
  },
      Gb = function Gb(a) {
    var b,
        c,
        d,
        e,
        g = "",
        h = [];
    if (a.trustedDomains && ("string" == typeof a.trustedDomains ? e = [a.trustedDomains] : "object" == _typeof(a.trustedDomains) && "length" in a.trustedDomains && (e = a.trustedDomains)), e && e.length) for (b = 0, c = e.length; c > b; b++) {
      if (w.call(e, b) && e[b] && "string" == typeof e[b]) {
        if (d = Hb(e[b]), !d) continue;

        if ("*" === d) {
          h.length = 0, h.push(d);
          break;
        }

        h.push.apply(h, [d, "//" + d, f.location.protocol + "//" + d]);
      }
    }
    return h.length && (g += "trustedOrigins=" + n(h.join(","))), a.forceEnhancedClipboard === !0 && (g += (g ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof a.swfObjectId && a.swfObjectId && (g += (g ? "&" : "") + "swfObjectId=" + n(a.swfObjectId)), "string" == typeof a.jsVersion && a.jsVersion && (g += (g ? "&" : "") + "jsVersion=" + n(a.jsVersion)), g;
  },
      Hb = function Hb(a) {
    if (null == a || "" === a) return null;
    if (a = a.replace(/^\s+|\s+$/g, ""), "" === a) return null;
    var b = a.indexOf("//");
    a = -1 === b ? a : a.slice(b + 2);
    var c = a.indexOf("/");
    return a = -1 === c ? a : -1 === b || 0 === c ? null : a.slice(0, c), a && ".swf" === a.slice(-4).toLowerCase() ? null : a || null;
  },
      Ib = function () {
    var a = function a(_a2) {
      var b,
          c,
          d,
          e = [];
      if ("string" == typeof _a2 && (_a2 = [_a2]), "object" != _typeof(_a2) || !_a2 || "number" != typeof _a2.length) return e;

      for (b = 0, c = _a2.length; c > b; b++) {
        if (w.call(_a2, b) && (d = Hb(_a2[b]))) {
          if ("*" === d) {
            e.length = 0, e.push("*");
            break;
          }

          -1 === e.indexOf(d) && e.push(d);
        }
      }

      return e;
    };

    return function (b, c) {
      var d = Hb(c.swfPath);
      null === d && (d = b);
      var e = a(c.trustedDomains),
          f = e.length;

      if (f > 0) {
        if (1 === f && "*" === e[0]) return "always";
        if (-1 !== e.indexOf(b)) return 1 === f && b === d ? "sameDomain" : "always";
      }

      return "never";
    };
  }(),
      Jb = function Jb() {
    try {
      return g.activeElement;
    } catch (a) {
      return null;
    }
  },
      Kb = function Kb(a, b) {
    var c,
        d,
        e,
        f = [];
    if ("string" == typeof b && b && (f = b.split(/\s+/)), a && 1 === a.nodeType && f.length > 0) if (a.classList) for (c = 0, d = f.length; d > c; c++) {
      a.classList.add(f[c]);
    } else if (a.hasOwnProperty("className")) {
      for (e = " " + a.className + " ", c = 0, d = f.length; d > c; c++) {
        -1 === e.indexOf(" " + f[c] + " ") && (e += f[c] + " ");
      }

      a.className = e.replace(/^\s+|\s+$/g, "");
    }
    return a;
  },
      Lb = function Lb(a, b) {
    var c,
        d,
        e,
        f = [];
    if ("string" == typeof b && b && (f = b.split(/\s+/)), a && 1 === a.nodeType && f.length > 0) if (a.classList && a.classList.length > 0) for (c = 0, d = f.length; d > c; c++) {
      a.classList.remove(f[c]);
    } else if (a.className) {
      for (e = (" " + a.className + " ").replace(/[\r\n\t]/g, " "), c = 0, d = f.length; d > c; c++) {
        e = e.replace(" " + f[c] + " ", " ");
      }

      a.className = e.replace(/^\s+|\s+$/g, "");
    }
    return a;
  },
      Mb = function Mb(a, b) {
    var c = m(a, null).getPropertyValue(b);
    return "cursor" !== b || c && "auto" !== c || "A" !== a.nodeName ? c : "pointer";
  },
      Nb = function Nb(a) {
    var b = {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };

    if (a.getBoundingClientRect) {
      var c = a.getBoundingClientRect(),
          d = f.pageXOffset,
          e = f.pageYOffset,
          h = g.documentElement.clientLeft || 0,
          i = g.documentElement.clientTop || 0,
          j = 0,
          k = 0;

      if ("relative" === Mb(g.body, "position")) {
        var l = g.body.getBoundingClientRect(),
            m = g.documentElement.getBoundingClientRect();
        j = l.left - m.left || 0, k = l.top - m.top || 0;
      }

      b.left = c.left + d - h - j, b.top = c.top + e - i - k, b.width = "width" in c ? c.width : c.right - c.left, b.height = "height" in c ? c.height : c.bottom - c.top;
    }

    return b;
  },
      Ob = function Ob(a) {
    if (!a) return !1;
    var b = m(a, null),
        c = r(b.height) > 0,
        d = r(b.width) > 0,
        e = r(b.top) >= 0,
        f = r(b.left) >= 0,
        g = c && d && e && f,
        h = g ? null : Nb(a),
        i = "none" !== b.display && "collapse" !== b.visibility && (g || !!h && (c || h.height > 0) && (d || h.width > 0) && (e || h.top >= 0) && (f || h.left >= 0));
    return i;
  },
      Pb = function Pb() {
    j(S), S = 0, l(T), T = 0;
  },
      Qb = function Qb() {
    var a;

    if (d && (a = Ab(N.bridge))) {
      var b = Nb(d);
      A(a.style, {
        width: b.width + "px",
        height: b.height + "px",
        top: b.top + "px",
        left: b.left + "px",
        zIndex: "" + Sb(Z.zIndex)
      });
    }
  },
      Rb = function Rb(a) {
    N.ready === !0 && (N.bridge && "function" == typeof N.bridge.setHandCursor ? N.bridge.setHandCursor(a) : N.ready = !1);
  },
      Sb = function Sb(a) {
    if (/^(?:auto|inherit)$/.test(a)) return a;
    var b;
    return "number" != typeof a || s(a) ? "string" == typeof a && (b = Sb(q(a, 10))) : b = a, "number" == typeof b ? b : "auto";
  },
      Tb = function Tb(b) {
    var c,
        d,
        e,
        f = N.sandboxed,
        g = null;
    if (b = b === !0, M === !1) g = !1;else {
      try {
        d = a.frameElement || null;
      } catch (h) {
        e = {
          name: h.name,
          message: h.message
        };
      }

      if (d && 1 === d.nodeType && "IFRAME" === d.nodeName) try {
        g = d.hasAttribute("sandbox");
      } catch (h) {
        g = null;
      } else {
        try {
          c = document.domain || null;
        } catch (h) {
          c = null;
        }

        (null === c || e && "SecurityError" === e.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(e.message.toLowerCase())) && (g = !0);
      }
    }
    return N.sandboxed = g, f === g || b || Ub(o), g;
  },
      Ub = function Ub(a) {
    function b(a) {
      var b = a.match(/[\d]+/g);
      return b.length = 3, b.join(".");
    }

    function c(a) {
      return !!a && (a = a.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a) || "chrome.plugin" === a.slice(-13));
    }

    function d(a) {
      a && (i = !0, a.version && (l = b(a.version)), !l && a.description && (l = b(a.description)), a.filename && (k = c(a.filename)));
    }

    var e,
        f,
        g,
        i = !1,
        j = !1,
        k = !1,
        l = "";
    if (h.plugins && h.plugins.length) e = h.plugins["Shockwave Flash"], d(e), h.plugins["Shockwave Flash 2.0"] && (i = !0, l = "2.0.0.11");else if (h.mimeTypes && h.mimeTypes.length) g = h.mimeTypes["application/x-shockwave-flash"], e = g && g.enabledPlugin, d(e);else if ("undefined" != typeof a) {
      j = !0;

      try {
        f = new a("ShockwaveFlash.ShockwaveFlash.7"), i = !0, l = b(f.GetVariable("$version"));
      } catch (m) {
        try {
          f = new a("ShockwaveFlash.ShockwaveFlash.6"), i = !0, l = "6.0.21";
        } catch (n) {
          try {
            f = new a("ShockwaveFlash.ShockwaveFlash"), i = !0, l = b(f.GetVariable("$version"));
          } catch (o) {
            j = !1;
          }
        }
      }
    }
    N.disabled = i !== !0, N.outdated = l && r(l) < r(O), N.version = l || "0.0.0", N.pluginType = k ? "pepper" : j ? "activex" : i ? "netscape" : "unknown";
  };

  Ub(o), Tb(!0);

  var Vb = function Vb() {
    return this instanceof Vb ? void ("function" == typeof Vb._createClient && Vb._createClient.apply(this, z(arguments))) : new Vb();
  };

  v(Vb, "version", {
    value: "2.2.0",
    writable: !1,
    configurable: !0,
    enumerable: !0
  }), Vb.config = function () {
    return $.apply(this, z(arguments));
  }, Vb.state = function () {
    return _.apply(this, z(arguments));
  }, Vb.isFlashUnusable = function () {
    return ab.apply(this, z(arguments));
  }, Vb.on = function () {
    return bb.apply(this, z(arguments));
  }, Vb.off = function () {
    return cb.apply(this, z(arguments));
  }, Vb.handlers = function () {
    return db.apply(this, z(arguments));
  }, Vb.emit = function () {
    return eb.apply(this, z(arguments));
  }, Vb.create = function () {
    return fb.apply(this, z(arguments));
  }, Vb.destroy = function () {
    return gb.apply(this, z(arguments));
  }, Vb.setData = function () {
    return hb.apply(this, z(arguments));
  }, Vb.clearData = function () {
    return ib.apply(this, z(arguments));
  }, Vb.getData = function () {
    return jb.apply(this, z(arguments));
  }, Vb.focus = Vb.activate = function () {
    return kb.apply(this, z(arguments));
  }, Vb.blur = Vb.deactivate = function () {
    return lb.apply(this, z(arguments));
  }, Vb.activeElement = function () {
    return mb.apply(this, z(arguments));
  };
  var Wb = 0,
      Xb = {},
      Yb = 0,
      Zb = {},
      $b = {};
  A(Z, {
    autoActivate: !0
  });

  var _b = function _b(a) {
    var b = this;
    b.id = "" + Wb++, Xb[b.id] = {
      instance: b,
      elements: [],
      handlers: {}
    }, a && b.clip(a), Vb.on("*", function (a) {
      return b.emit(a);
    }), Vb.on("destroy", function () {
      b.destroy();
    }), Vb.create();
  },
      ac = function ac(a, d) {
    var e,
        f,
        g,
        h = {},
        i = Xb[this.id],
        j = i && i.handlers;
    if (!i) throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
    if ("string" == typeof a && a) g = a.toLowerCase().split(/\s+/);else if ("object" == _typeof(a) && a && "undefined" == typeof d) for (e in a) {
      w.call(a, e) && "string" == typeof e && e && "function" == typeof a[e] && this.on(e, a[e]);
    }

    if (g && g.length) {
      for (e = 0, f = g.length; f > e; e++) {
        a = g[e].replace(/^on/, ""), h[a] = !0, j[a] || (j[a] = []), j[a].push(d);
      }

      if (h.ready && N.ready && this.emit({
        type: "ready",
        client: this
      }), h.error) {
        for (e = 0, f = W.length; f > e; e++) {
          if (N[W[e].replace(/^flash-/, "")]) {
            this.emit({
              type: "error",
              name: W[e],
              client: this
            });
            break;
          }
        }

        c !== b && Vb.version !== c && this.emit({
          type: "error",
          name: "version-mismatch",
          jsVersion: Vb.version,
          swfVersion: c
        });
      }
    }

    return this;
  },
      bc = function bc(a, b) {
    var c,
        d,
        e,
        f,
        g,
        h = Xb[this.id],
        i = h && h.handlers;
    if (!i) return this;
    if (0 === arguments.length) f = u(i);else if ("string" == typeof a && a) f = a.split(/\s+/);else if ("object" == _typeof(a) && a && "undefined" == typeof b) for (c in a) {
      w.call(a, c) && "string" == typeof c && c && "function" == typeof a[c] && this.off(c, a[c]);
    }
    if (f && f.length) for (c = 0, d = f.length; d > c; c++) {
      if (a = f[c].toLowerCase().replace(/^on/, ""), g = i[a], g && g.length) if (b) for (e = g.indexOf(b); -1 !== e;) {
        g.splice(e, 1), e = g.indexOf(b, e);
      } else g.length = 0;
    }
    return this;
  },
      cc = function cc(a) {
    var b = null,
        c = Xb[this.id] && Xb[this.id].handlers;
    return c && (b = "string" == typeof a && a ? c[a] ? c[a].slice(0) : [] : B(c)), b;
  },
      dc = function dc(a) {
    if (ic.call(this, a)) {
      "object" == _typeof(a) && a && "string" == typeof a.type && a.type && (a = A({}, a));
      var b = A({}, ob(a), {
        client: this
      });
      jc.call(this, b);
    }

    return this;
  },
      ec = function ec(a) {
    if (!Xb[this.id]) throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
    a = kc(a);

    for (var b = 0; b < a.length; b++) {
      if (w.call(a, b) && a[b] && 1 === a[b].nodeType) {
        a[b].zcClippingId ? -1 === Zb[a[b].zcClippingId].indexOf(this.id) && Zb[a[b].zcClippingId].push(this.id) : (a[b].zcClippingId = "zcClippingId_" + Yb++, Zb[a[b].zcClippingId] = [this.id], Z.autoActivate === !0 && lc(a[b]));
        var c = Xb[this.id] && Xb[this.id].elements;
        -1 === c.indexOf(a[b]) && c.push(a[b]);
      }
    }

    return this;
  },
      fc = function fc(a) {
    var b = Xb[this.id];
    if (!b) return this;
    var c,
        d = b.elements;
    a = "undefined" == typeof a ? d.slice(0) : kc(a);

    for (var e = a.length; e--;) {
      if (w.call(a, e) && a[e] && 1 === a[e].nodeType) {
        for (c = 0; -1 !== (c = d.indexOf(a[e], c));) {
          d.splice(c, 1);
        }

        var f = Zb[a[e].zcClippingId];

        if (f) {
          for (c = 0; -1 !== (c = f.indexOf(this.id, c));) {
            f.splice(c, 1);
          }

          0 === f.length && (Z.autoActivate === !0 && mc(a[e]), delete a[e].zcClippingId);
        }
      }
    }

    return this;
  },
      gc = function gc() {
    var a = Xb[this.id];
    return a && a.elements ? a.elements.slice(0) : [];
  },
      hc = function hc() {
    Xb[this.id] && (this.unclip(), this.off(), delete Xb[this.id]);
  },
      ic = function ic(a) {
    if (!a || !a.type) return !1;
    if (a.client && a.client !== this) return !1;
    var b = Xb[this.id],
        c = b && b.elements,
        d = !!c && c.length > 0,
        e = !a.target || d && -1 !== c.indexOf(a.target),
        f = a.relatedTarget && d && -1 !== c.indexOf(a.relatedTarget),
        g = a.client && a.client === this;
    return b && (e || f || g) ? !0 : !1;
  },
      jc = function jc(a) {
    var b = Xb[this.id];

    if ("object" == _typeof(a) && a && a.type && b) {
      var c = rb(a),
          d = b && b.handlers["*"] || [],
          e = b && b.handlers[a.type] || [],
          g = d.concat(e);

      if (g && g.length) {
        var h,
            i,
            j,
            k,
            l,
            m = this;

        for (h = 0, i = g.length; i > h; h++) {
          j = g[h], k = m, "string" == typeof j && "function" == typeof f[j] && (j = f[j]), "object" == _typeof(j) && j && "function" == typeof j.handleEvent && (k = j, j = j.handleEvent), "function" == typeof j && (l = A({}, a), sb(j, k, [l], c));
        }
      }
    }
  },
      kc = function kc(a) {
    return "string" == typeof a && (a = []), "number" != typeof a.length ? [a] : a;
  },
      lc = function lc(a) {
    if (a && 1 === a.nodeType) {
      var b = function b(a) {
        (a || (a = f.event)) && ("js" !== a._source && (a.stopImmediatePropagation(), a.preventDefault()), delete a._source);
      },
          c = function c(_c) {
        (_c || (_c = f.event)) && (b(_c), Vb.focus(a));
      };

      a.addEventListener("mouseover", c, !1), a.addEventListener("mouseout", b, !1), a.addEventListener("mouseenter", b, !1), a.addEventListener("mouseleave", b, !1), a.addEventListener("mousemove", b, !1), $b[a.zcClippingId] = {
        mouseover: c,
        mouseout: b,
        mouseenter: b,
        mouseleave: b,
        mousemove: b
      };
    }
  },
      mc = function mc(a) {
    if (a && 1 === a.nodeType) {
      var b = $b[a.zcClippingId];

      if ("object" == _typeof(b) && b) {
        for (var c, d, e = ["move", "leave", "enter", "out", "over"], f = 0, g = e.length; g > f; f++) {
          c = "mouse" + e[f], d = b[c], "function" == typeof d && a.removeEventListener(c, d, !1);
        }

        delete $b[a.zcClippingId];
      }
    }
  };

  Vb._createClient = function () {
    _b.apply(this, z(arguments));
  }, Vb.prototype.on = function () {
    return ac.apply(this, z(arguments));
  }, Vb.prototype.off = function () {
    return bc.apply(this, z(arguments));
  }, Vb.prototype.handlers = function () {
    return cc.apply(this, z(arguments));
  }, Vb.prototype.emit = function () {
    return dc.apply(this, z(arguments));
  }, Vb.prototype.clip = function () {
    return ec.apply(this, z(arguments));
  }, Vb.prototype.unclip = function () {
    return fc.apply(this, z(arguments));
  }, Vb.prototype.elements = function () {
    return gc.apply(this, z(arguments));
  }, Vb.prototype.destroy = function () {
    return hc.apply(this, z(arguments));
  }, Vb.prototype.setText = function (a) {
    if (!Xb[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    return Vb.setData("text/plain", a), this;
  }, Vb.prototype.setHtml = function (a) {
    if (!Xb[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    return Vb.setData("text/html", a), this;
  }, Vb.prototype.setRichText = function (a) {
    if (!Xb[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    return Vb.setData("application/rtf", a), this;
  }, Vb.prototype.setData = function () {
    if (!Xb[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
    return Vb.setData.apply(this, z(arguments)), this;
  }, Vb.prototype.clearData = function () {
    if (!Xb[this.id]) throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
    return Vb.clearData.apply(this, z(arguments)), this;
  }, Vb.prototype.getData = function () {
    if (!Xb[this.id]) throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
    return Vb.getData.apply(this, z(arguments));
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return Vb;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function () {
  return this || window;
}());

/***/ }),

/***/ "./resources/js/edit/bacheditor.js":
/*!*****************************************!*\
  !*** ./resources/js/edit/bacheditor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * editor.js
 * 一个复杂的编辑器，支持markdown的语法，使用codemirror做渲染
 * 从lepture的Editor修改而来。http://lab.lepture.com/editor/
 *
 * 用法：
 * var myEditor = new Editor({toolbar: false, status: true});
 * myEditor.rendor('#myEditor');
 *
 * @author integ@segmentfault.com
 **/
$(function () {
  'use strict';

  Editor.prototype.uploadPath = '';
  Editor.prototype.token = '';
  Editor.prototype.ajaxTopicSearchUrl = '';
  /**
   * Interface of Editor.
   */

  function Editor(url, ajaxTopicSearchUrl) {
    //使用默认参数
    var options = $.extend({
      toolbar: Editor.toolbar,
      statusbar: true,
      status: Editor.statusbar
    }, options);
    this.options = options;
    Editor.prototype.uploadPath = url;
    Editor.prototype.ajaxTopicSearchUrl = ajaxTopicSearchUrl;
  }

  window.Editor = Editor; // 默认的状态栏

  Editor.statusbar = ['lines', 'words', 'cursor']; // 默认的toolbar
  // [{name: 'bold', shortcut: 'Ctrl-B', className: 'icon-bold'}]

  Editor.toolbar = [{
    name: 'bold',
    action: toggleBold,
    className: 'editor__menu--bold'
  }, {
    name: 'italic',
    action: toggleItalic,
    className: 'editor__menu--italic'
  }, '|', {
    name: 'link',
    action: drawLink,
    className: 'editor__menu--link'
  }, {
    name: 'quote',
    action: toggleBlockquote,
    className: 'editor__menu--quote'
  }, {
    name: 'code',
    action: toggleBlockcode,
    className: 'editor__menu--code'
  }, {
    name: 'image',
    action: drawImage,
    className: 'editor__menu--img'
  }, '|', {
    name: 'ordered-list',
    action: toggleOrderedList,
    className: 'editor__menu--ol'
  }, {
    name: 'unordered-list',
    action: toggleUnOrderedList,
    className: 'editor__menu--ul'
  }, {
    name: 'title',
    action: toggleTitle,
    className: 'editor__menu--title'
  }, {
    name: 'hr',
    action: drawHr,
    className: 'editor__menu--hr'
  }, '|', {
    name: 'undo',
    action: undo,
    className: 'editor__menu--undo'
  }, {
    name: 'redo',
    action: redo,
    className: 'editor__menu--redo'
  }, '|', // {
  //     name: 'fullscreen',
  //     action: toggleBig,
  //     className: 'editor__menu--zen'
  // },
  // {
  //     name: 'zen',
  //     action: toggleFullScreen,
  //     className: 'editor__menu--two'
  // }
  {
    name: 'fullscreen',
    action: toggleBig,
    className: 'editor__menu--zen'
  }]; // 是否全屏

  Editor.isBig = false;
  Editor.originHeight = 420;
  /**
   * get the value of the Editor
   * myEditor.getVal();
   **/

  Editor.prototype.getVal = function () {
    var cm = this.codemirror;
    return cm.getValue();
  };
  /**
   * get the parsed value of the Editor
   * myEditor.getHTML();
   **/


  Editor.prototype.getHTML = function () {
    var cm = this.codemirror;
    return marked(cm.getValue());
  };
  /**
   * set the value of the Editor
   * myEditor.setVal(text);
   **/


  Editor.prototype.setVal = function (text) {
    var cm = this.codemirror;
    return cm.setValue(text);
  };
  /**
   * bind change event of the Editor
   * myEditor.change(function(cm){});
   **/


  Editor.prototype.change = function (callback) {
    this.isModified = true;
    var cm = this.codemirror;
    cm.on('change', callback);
  };
  /**
   * Render editor to the given element.
   * myEditor.render('#editor')
   * mode选择"live", 'edit', 'preview'
   */


  Editor.prototype.render = function (el, mode, callback) {
    mode = mode || 'live';
    el = $(el)[0]; //选中被渲染的textarea的DOM

    if (this._rendered && this._rendered === el) {
      // Already rendered.
      return;
    }

    this.element = el;
    this.isSubmit = false;
    var options = this.options;
    var self = this;
    var keyMaps = {};

    for (var key in shortcuts) {
      (function (key) {
        keyMaps[fixShortcut(key)] = function () {
          shortcuts[key](self);
        };
      })(key);
    } // 对markdown列表的支持


    keyMaps.Enter = 'newlineAndIndentContinueMarkdownList'; // 渲染codemirror

    this.codemirror = CodeMirror.fromTextArea(el, {
      mode: 'markdown',
      theme: 'paper',
      lineNumbers: true,
      lineWrapping: true,
      extraKeys: keyMaps,
      cursorBlinkRate: 500,
      viewportMargin: Infinity
    });
    /**
     * cm第一次渲染时cursor位置是错的
     * 第一次点击cm的文本时向当前光标位置插入一个空格然后再删掉
     **/

    var cm = this.codemirror;
    var isAtting = false; // 是否正在at

    var query = ''; // at时查询的人名

    var atCatch = {}; // 缓存at的ajax数据，可以少发几次请求

    var myDelay = null; // setTimeout

    var parserDelay = null;
    cm.on('change', function (event, c) {
      //codemirror 一有变化就检查
      $(el).text(cm.getValue()); //WYSIWYG

      if (parserDelay) {
        clearTimeout(parserDelay);
      }

      if ($('#editorLive').length) {
        parserDelay = setTimeout(function () {
          var text = cm.getValue();
          $('#editorLive').html(marked(text));
          highLight($('#editorLive'));
        }, 500);
      }

      if ($('.editor-preview-active.onlive').length) {
        parserDelay = setTimeout(function () {
          var text = cm.getValue();
          $('.editor-preview-active.onlive').html(marked(text));
          highLight($('.editor-preview-active.onlive'));
        }, 500);
      } // 用户第一次输入@时 todo 暂时注释 @ 功能
      //if(!isAtting) {
      //    if(c.text[0] === '@' && c.origin === '+input') {
      //        isAtting = true;
      //        if($('#atwho').length === 0) {  //之前没有at过
      //            var temp = '<ul id="atwho" class="dropdown-menu"></ul>';
      //            $('.editor').append(temp);
      //            editorAt('');
      //            $('#atwho').delegate('a', 'click', function(e) {
      //                e.preventDefault();
      //                isAtting = false;
      //                var curLine = cm.getCursor().line;
      //                var curCh = cm.getCursor().ch;
      //                var userName = $(this).parent('li').data('value');
      //                var atCh = cm.getRange({line: curLine, ch: 0}, {line: curLine, ch: curCh}).lastIndexOf('@');    //最后一个@的位置
      //                cm.replaceRange(userName + ' ', {line: curLine, ch: atCh + 1}, {line: curLine, ch: curCh});
      //                cm.focus();
      //                $('#atwho').html('').hide();
      //                query = '';     //最后清掉query
      //            });
      //        } else {    //已经at过
      //            // $('#atwho').html('').hide();
      //            editorAt('');
      //        }
      //    }
      //} else if(isAtting) {
      //    // 用户@中输入空格时
      //    if(c.origin === '+input' && c.text[0] === ' ') {   // 用户输入空格或@
      //        isAtting = false;   // 退出at状态
      //        query = '';
      //        $('#atwho').html('').hide();
      //    } else if(c.origin === '+input' && c.text[0] === '@') {   // 用户输入@
      //        isAtting = false;   // 退出at状态
      //        query = '';
      //        // $('#atwho').html('').hide();
      //        editorAt(query);
      //    } else if(c.origin === '+input') {    // at中输入其他字符
      //        isAtting = true;   // at状态
      //        query += c.text[0];
      //        editorAt(query);
      //    } else if(c.origin === '+delete') {
      //        if(c.removed[0] !== '@') {      //删除非@
      //            isAtting = true;   // at状态
      //            query = query.slice(0, -1);
      //            editorAt(query);
      //        } else {    // 删除@
      //            isAtting = false;
      //            query = '';
      //            $('#atwho').html('').hide();
      //        }
      //    }
      //}

    });
    var _dragText = false;
    cm.on('dragstart', function (c, e) {
      _dragText = true;
    });
    cm.on('dragover', function (c, e) {
      if (!_dragText) {
        drawImage(self);
        _dragText = false;
      }
    });
    cm.on('keydown', function (c, e) {
      if (!isAtting) {
        return;
      }

      switch (e.keyCode) {
        case 38:
          {
            // Up
            e.preventDefault();

            if ($('#atwho .active').length) {
              $('#atwho .active').removeClass('active').prev('li').addClass('active');
            } else {
              $('#atwho li:last').addClass('active');
            }

            break;
          }

        case 40:
          {
            // Down
            e.preventDefault();

            if ($('#atwho .active').length) {
              $('#atwho .active').removeClass('active').next('li').addClass('active');
            } else {
              $('#atwho li:first').addClass('active');
            }

            break;
          }

        case 13:
          {
            // Enter
            e.preventDefault();
            $('#atwho .active a').trigger('click');
            break;
          }

        case 27:
          {
            // Esc
            e.preventDefault();
            $('#atwho').html('').hide();
            break;
          }
      }
    });

    function editorAt(query) {
      var _sendData = {};

      if (query === '@' || query === '') {
        //确保query不为空
        if ($('#answerIt').length) {
          // 回答问题的编辑器
          var _qid = $('#answerIt').data('id');

          _sendData = {
            questionId: _qid
          }; // $('#atwho').html('').hide();
        } else {
          return;
        }
      }

      if (query.indexOf('@') === 0) {
        //当第一个字符为@时，切掉
        query = query.slice(1);
      }

      if (query.indexOf(' ') !== -1) {
        //包含空格时 输入中文时被坑了
        if (query.match(/[\u4E00-\u9FA5\uf900-\ufa2d]/ig)) {
          //有中文
          query = query.replace(/[^\u4E00-\u9FA5\uf900-\ufa2d]*/g, '');
        } else {
          //没有中文
          query = query.replace(' ', '');
          query = query.replace(/(\w){2}/g, '$1');
        }
      }

      if (query.match(/[\u4E00-\u9FA5\uf900-\ufa2d]/ig)) {
        //中英混杂时
        query = query.replace(/[^\u4E00-\u9FA5\uf900-\ufa2d]*/g, '');
      }

      var cursorPos = $('.CodeMirror-cursor').caret('offset');

      var _top = cursorPos.top + cursorPos.height;

      var _left = cursorPos.left;

      if ($('.editor__menu--zen').length) {
        _top = cursorPos.top + cursorPos.height - $('.editor').offset().top;
        _left = cursorPos.left - $('.editor').offset().left;
      }

      var _html = '';
      var _temp = '<li data-value="{{name}}"><a href="javacript:void(0);"><img class="avatar-24 mr10" src="{{avatarUrl}}">{{name}} &nbsp; <small>@{{slug}}</small></a></li>'; // 有缓存

      if (atCatch[query]) {
        if (atCatch[query].length === 0) {
          //缓存中数据为空
          return;
        } else {
          atCatch[query].forEach(function (item) {
            _html += template(_temp, item);
          });
          $('#atwho').html(_html);
          $('#atwho').css({
            left: _left,
            top: _top
          }).show();
        }
      } else {
        if (myDelay) {
          // 如果已经在delay中
          clearTimeout(myDelay); // 清掉上次的settimeout
        }

        myDelay = setTimeout(function () {
          if (!_sendData.questionId) {
            _sendData = {
              q: query
            };
          }

          $.getJSON('/api/user?do=search', _sendData, function (o) {
            if (!o.status) {
              // status为0
              atCatch[query] = o.data; //添加缓存数据

              if (o.data.length === 0) {
                //返回空数组
                $('#atwho').html('').hide();
                return;
              }

              o.data.forEach(function (item) {
                _html += template(_temp, item);
              });
              $('#atwho').css({
                left: _left,
                top: _top
              }).show();
              $('#atwho').html(_html);
            }
          });
        }, 250);
      }
    }

    var isVirgin = true;
    $('.CodeMirror-lines').click(function () {
      if (isVirgin) {
        var _pos = cm.getCursor();

        cm.replaceRange(' ', _pos, _pos);
        isVirgin = false;
        cm.replaceRange('', _pos, {
          line: _pos.line,
          ch: _pos.ch + 1
        });
      }
    }); // 跳转前提醒

    $(window).bind('beforeunload', function () {
      if (cm.getValue() !== $(el).text()) {
        return '你可以到草稿页，找回已经编辑的内容。';
      }
    });

    if (options.toolbar !== false) {
      this.createToolbar(); //渲染工具栏
    }

    if (options.status !== false) {} //渲染状态栏
    // //this.createStatusbar();   //暂时不需要状态栏
    // this.change(function() {    //绑定状态操作
    // });
    //resize


    var resizeHtml = '<a class="editor__resize" href="javascript:void(0);">===</a>';
    $(el).parent('.editor').css('min-height', '0').append(resizeHtml); //拖动改变大小

    var staticOffset,
        iLastMousePos = 0,
        iMin = 32;
    var textarea = $('.CodeMirror'); //要改变大小的codemirror

    /* private functions */

    function startDrag(e) {
      iLastMousePos = mousePosition(e).y;
      staticOffset = textarea.height() - iLastMousePos;
      textarea.css('opacity', 0.3);
      $(document).mousemove(performDrag).mouseup(endDrag);
      return false;
    }

    function performDrag(e) {
      var iThisMousePos = mousePosition(e).y,
          iMousePos = staticOffset + iThisMousePos;

      if (iLastMousePos >= iThisMousePos) {
        iMousePos -= 5;
      }

      iLastMousePos = iThisMousePos;
      iMousePos = Math.max(iMin, iMousePos);
      textarea.height(iMousePos + 'px');

      if (iMousePos < iMin) {
        endDrag(e);
      }

      return false;
    }

    function endDrag() {
      $(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
      var textarea = $('.CodeMirror');
      textarea.css('opacity', 1);
      $('.CodeMirror-scroll, .CodeMirror-gutters').css('height', '100%');
      textarea.focus();
      textarea = null;
      staticOffset = null;
      iLastMousePos = 0;
    }

    function mousePosition(e) {
      return {
        x: e.clientX + document.documentElement.scrollLeft,
        y: e.clientY + document.documentElement.scrollTop
      };
    }

    $('.editor__resize').on('mousedown', startDrag); // 当toolbar看不到时，position:fixed toolbar的位置

    $(window).scroll(function () {
      if (!self.isBig) {
        var _width = $('.editor').width(); //编辑器宽度


        var _top = $('.editor').offset().top; //编辑器距离页面顶部的高度

        var _scrollTop = $(this).scrollTop(); //当前滚动条的位置


        var _editorTop = 62 + $('.editor-help .tab-content').height(); //编辑器应该距离页面顶部


        if (_scrollTop >= _top) {
          $('.editor-help-content.active').removeClass('active');
          $('.editor__menu').css({
            position: 'fixed',
            top: 0,
            'z-index': 1000,
            width: _width
          });
          $('.editor-help').css({
            position: 'fixed',
            top: '31px',
            'z-index': 1000,
            width: _width
          });
        } else {
          $('.editor__menu, .editor-help').css({
            position: 'static',
            width: 'auto'
          });
        }
      }
    });
    this._rendered = this.element; //最后默认开启live模式

    if (mode === 'live') {
      $('.editor__menu--live').trigger('click');
    } else if (mode === 'edit') {
      $('.editor__menu--edit').trigger('click');
    } else if (mode === 'preview') {
      $('.editor__menu--preview').trigger('click');
    } // localStrorage


    if (window.localStorage) {
      var _localContentKey = 'autoSaveContent_' + location.pathname + location.search;

      var _localTitleKey = 'autoSaveTitle_' + location.pathname + location.search;

      var _localTagsKey = 'autoSaveTags_' + location.pathname + location.search;

      if (localStorage[_localContentKey]) {
        self.setVal(localStorage[_localContentKey]);
      }

      if (localStorage[_localTitleKey]) {
        $('#myTitle').val(localStorage[_localTitleKey]);
      }

      var _tagTmpl = '<li class="widget-addtags__input"><div class="input-group"><input type="text" value="{{ name }}" data-id="{{ id }}" class="tagText form-control input-sm" placeholder="标签，如：php" disabled="disabled"><a class="input-group-addon tagClose" href="javascript:void(0);">×</a></div></li>';

      if (localStorage[_localTagsKey]) {
        var _localTags = localStorage[_localTagsKey].split(',');

        var _html = '';

        _localTags.forEach(function (item) {
          var _tag = item.split(':'); // console.log(_tag);


          _html += template(_tagTmpl, {
            name: _tag[0],
            id: _tag[1]
          });
        });

        if ($('.widget-addtags__input').length === 1) {
          if (_localTags.length >= 5) {
            $('.widget-addtags__input').remove();
            $('.widget-addtags__add').before(_html);
          } else {
            $('.widget-addtags__input').before(_html);
          }
        }
      }
    } // mario


    var velocity = 127; // how hard the note hits

    var marioKeys = ['E4', 'E4', 'E4', 'C4', 'E4', 'G4', 'G3', 'C4', 'G3', 'E3', 'A3', 'B3', 'Ab3', 'A3', 'G3', 'E4', 'G4', 'A4', 'F4', 'G4', 'E4', 'C4', 'D4', 'B3', 'C4', 'G3', 'E3', 'A3', 'B3', 'Ab3', 'A3', 'G3', 'E4', 'G4', 'A4', 'F4', 'G4', 'E4', 'C4', 'D4', 'B3', 'G4', 'F4', 'E4', 'Db4', 'E4', 'Gb3', 'A3', 'C4', 'A3', 'C4', 'D4', 'G4', 'F4', 'E4', 'Db4', 'E4', 'C5', 'C5', 'C5', 'G4', 'F4', 'E4', 'Db4', 'E4', 'Gb3', 'A3', 'C4', 'A3', 'C4', 'D4', 'Db4', 'D4', 'C4', 'C4', 'C4', 'C4', 'C4', 'D4', 'E4', 'C4', 'A3', 'G3', 'C4', 'C4', 'C4', 'C4', 'D4', 'E4', 'C4', 'C4', 'C4', 'C4', 'D4', 'E4', 'C4', 'A3', 'G3']; // the MIDI note

    var marioTimes = [8, 4, 4, 8, 4, 2, 2, 3, 3, 3, 4, 4, 8, 4, 8, 8, 8, 4, 8, 4, 3, 8, 8, 3, 3, 3, 3, 4, 4, 8, 4, 8, 8, 8, 4, 8, 4, 3, 8, 8, 2, 8, 8, 8, 4, 4, 8, 8, 4, 8, 8, 3, 8, 8, 8, 4, 4, 4, 8, 2, 8, 8, 8, 4, 4, 8, 8, 4, 8, 8, 3, 3, 3, 1, 8, 4, 4, 8, 4, 8, 4, 8, 2, 8, 4, 4, 8, 4, 1, 8, 4, 4, 8, 4, 8, 4, 8, 2]; // todo 袁超 缺少控件，暂时注释
    //MIDI.loadPlugin({
    //    targetFormat: 'mp3',
    //    soundfontUrl: '/BachEditor/js/',
    //    instrument: 'marimba',
    //    callback: function() {
    //        MIDI.setVolume(0, 127);
    //        MIDI.programChange(0, 12);
    //        var cur = 0;
    //        $('textarea').keypress(function() {
    //            var delay = 1.3 / marioTimes[cur]; // play one note every quarter second
    //            var note = MIDI.keyToNote[marioKeys[cur]];
    //            MIDI.noteOn(0, note, velocity, 0);
    //            MIDI.noteOff(0, note, delay);
    //            if(cur >= 96) {
    //                cur = 0;
    //            }else {
    //                cur++;
    //            }
    //        });
    //    }
    //});

    if (callback) {
      // 有callback时执行
      callback(self);
    }
  };

  Editor.prototype.createToolbar = function (items) {
    items = items || this.options.toolbar;

    if (!items || items.length === 0) {
      return;
    }

    var bar = document.createElement('ul');
    bar.className = 'editor__menu clearfix';
    var self = this;
    self.toolbar = {};

    for (var i = 0; i < items.length; i++) {
      (function (item) {
        var el;

        if (item.name) {
          el = createIcon(item.name, item);
        } else if (item === '|') {
          el = createSep();
        } else {
          el = createIcon(item);
        } // bind events, special for info


        if (item.action) {
          if (typeof item.action === 'function') {
            el.onclick = function () {
              item.action(self);
            };
          } else if (typeof item.action === 'string') {
            el.href = item.action;
            el.target = '_blank';
          }
        }

        self.toolbar[item.name || item] = el;
        bar.appendChild(el);
      })(items[i]);
    } //toolbar添加右侧预览按钮


    var toolbarRightHtml = '<li class="pull-right"><a class="editor__menu--preview" title="预览模式" href="javascript:void(0)"></a></li><li class="pull-right"><a class="editor__menu--live" href="javascript:void(0)" title="实况模式"></a></li><li class="pull-right"><a class="editor__menu--edit muted" title="编辑模式" href="javascript:void(0)"></a></li>';
    var toolbarRight = $(toolbarRightHtml);
    $(bar).append(toolbarRight);
    $('.editor').delegate('.editor__menu--edit', 'click', function () {
      if (!$(this).hasClass('muted')) {
        // 当前模式为muted
        goEdit(self);
      }
    });
    $('.editor').delegate('.editor__menu--preview', 'click', function () {
      if (!$(this).hasClass('muted')) {
        // 当前模式为muted
        goPreview(self);
      }
    });
    $('.editor').delegate('.editor__menu--live', 'click', function () {
      if (!$(this).hasClass('muted')) {
        // 当前模式为muted
        goLive(self);
      }
    }); //添加帮助

    var helpHtml = '<div class="editor-help">\
<ul class="editor-help-tabs nav nav-tabs" id="editorHelpTab" role="tablist">\
    <li rel="heading"><a href="#editorHelpHeading" role="tab" data-toggle="tab">标题 / 粗斜体</a></li>\
    <li rel="code"><a href="#editorHelpCode" role="tab" data-toggle="tag">代码</a></li>\
    <li rel="link"><a href="#editorHelpLink" role="tab" data-toggle="tag">链接</a></li>\
    <li rel="image"><a href="#editorHelpImage" role="tab" data-toggle="tag">图片</a></li>\
    <li rel="split"><a href="#editorHelpSplit" role="tab" data-toggle="tag">换行 / 分隔符</a></li>\
    <li rel="list"><a href="#editorHelpList" role="tab" data-toggle="tag">列表 / 引用</li></a>\
    </ul>\
\
<div class="tab-content">\
<!-- 粗斜体、标题 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpHeading" rel="heading">\
\
<p>文章内容较多时，可以用标题分段：</p>\
<pre>## 大标题 ##\n\
### 小标题 ###\
</pre>\
\
<p>粗体 / 斜体</p>\
<pre>*斜体文本*    _斜体文本_\n\
**粗体文本**    __粗体文本__\n\
***粗斜体文本***    ___粗斜体文本___\
</pre>\
</div>\
<!-- end 粗斜体、标题 -->\
\
<!-- 代码 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpCode" rel="code">\
<p>如果你只想高亮语句中的某个函数名或关键字，可以使用 <code>`function_name()`</code> 实现</p>\
<p>通常我们会根据您的代码片段适配合适的高亮方法，但你也可以用 <code>```</code> 包裹一段代码，并指定一种语言</p>\
<pre>```<strong>javascript</strong>\n\
$(document).ready(function () {\n\
    alert(\'hello world\');\n\
});\n\
```\
</pre>\
<p>支持的语言：<code>actionscript, apache, bash, clojure, cmake, coffeescript, cpp, cs, css, d, delphi, django, erlang, go, haskell, html, http, ini, java, javascript, json, lisp, lua, markdown, matlab, nginx, objectivec, perl, php, python, r, ruby, scala, smalltalk, sql, tex, vbscript, xml</code></p>\
\
<p>您也可以使用 4 空格缩进，再贴上代码，实现相同的的效果</p>\
<pre><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>def g(x):\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>yield from range(x, 0, -1)\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>yield from range(x)\
</pre>\
</div>\
<!-- end 代码 -->\
\
<!-- 链接 -->\
<div class="editor-help-content tab-pane fade" rel="link" id="editorHelpLink">\
\
<p>常用链接方法</p>\
<pre>文字链接 [链接名称](http://链接网址)\n\
网址链接 &lt;http://链接网址&gt;\
</pre>\
<p>高级链接技巧</p>\
<pre>这个链接用 1 作为网址变量 [Google][1].\n\
这个链接用 yahoo 作为网址变量 [Yahoo!][yahoo].\n\
然后在文档的结尾为变量赋值（网址）\n\
\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>[1]: http://www.google.com/\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>[yahoo]: http://www.yahoo.com/\
</pre>\
\
</div>\
<!-- end 链接 -->\
\
<!-- 图片 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpImage" rel="image">\
\
<p>跟链接的方法区别在于前面加了个感叹号 <code>!</code>，这样是不是觉得好记多了呢？</p>\
<pre>![图片名称](http://图片网址)\
</pre>\
<p>当然，你也可以像网址那样对图片网址使用变量</p>\
<pre>这个链接用 1 作为网址变量 [Google][1].\n\
然后在文档的结尾位变量赋值（网址）\n\
\n\
<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>[1]: http://www.google.com/logo.png\
</pre>\
\
</div>\
<!-- end 图片 -->\
\
<!-- 换行、分隔符 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpSplit" rel="split">\
\
<p>如果另起一行，只需在当前行结尾加 2 个空格</p>\
<pre>在当前行的结尾加 2 个空格<i class="nbsp">&nbsp;</i><i class="nbsp">&nbsp;</i>\n\
这行就会新起一行\
</pre>\
<p>如果是要起一个新段落，只需要空出一行即可。</p>\
<p>如果你有写分割线的习惯，可以新起一行输入三个减号 <code>-</code>：</p>\
<pre>---\n\
</pre>\
\
</div>\
<!-- end 换行、分隔符 -->\
\
<!-- 列表、引用 -->\
<div class="editor-help-content tab-pane fade" id="editorHelpList" rel="list">\
\
<p>普通列表</p>\
<pre>-<i class="nbsp">&nbsp;</i>列表文本前使用 [减号+空格]\n\
+<i class="nbsp">&nbsp;</i>列表文本前使用 [加号+空格]\n\
*<i class="nbsp">&nbsp;</i>列表文本前使用 [星号+空格]\
</pre>\
<p>带数字的列表</p>\
<pre>1.<i class="nbsp">&nbsp;</i>列表前使用 [数字+空格]\n\
2.<i class="nbsp">&nbsp;</i>我们会自动帮你添加数字\n\
7.<i class="nbsp">&nbsp;</i>不用担心数字不对，显示的时候我们会自动把这行的 7 纠正为 3\
</pre>\
<p>引用</p>\
<pre>&gt;<i class="nbsp">&nbsp;</i>引用文本前使用 [大于号+空格]\n\
&gt;<i class="nbsp">&nbsp;</i>折行可以不加，新起一行都要加上哦\
</pre>\
\
</div>\
<!-- end 列表、引用 -->\
</div></div>';
    var cm = this.codemirror;
    cm.on('cursorActivity', function () {
      var stat = getState(cm);

      for (var key in self.toolbar) {
        (function (key) {
          var el = self.toolbar[key];

          if (stat[key]) {
            el.className += ' active';
          } else {
            el.className = el.className.replace(/\s*active\s*/g, '');
          }
        })(key);
      }
    });
    var cmWrapper = cm.getWrapperElement();
    cmWrapper.parentNode.insertBefore(bar, cmWrapper); //为了添加样式

    $('.CodeMirror').addClass('form-control').before(helpHtml); //帮助

    $('#editorHelpTab a').click(function (e) {
      var _$wrap = $(this).parent();

      if (!_$wrap.hasClass('pull-right')) {
        //高级技巧
        if (_$wrap.hasClass('active')) {
          e.stopPropagation(); //阻止冒泡

          _$wrap.removeClass('active');

          $('.editor-help-content.active').removeClass('active');
        } else {
          e.preventDefault();
          $(this).tab('show');
        }
      }
    });
    return bar;
  };

  Editor.prototype.createStatusbar = function (status) {
    status = status || this.options.status;

    if (!status || status.length === 0) {
      return;
    }

    var bar = document.createElement('div');
    bar.className = 'editor-statusbar';
    var pos,
        cm = this.codemirror;

    for (var i = 0; i < status.length; i++) {
      (function (name) {
        var el = document.createElement('span');
        el.className = name;

        if (name === 'words') {
          el.innerHTML = '0';
          cm.on('update', function () {
            el.innerHTML = wordCount(cm.getValue());
          });
        } else if (name === 'lines') {
          el.innerHTML = '0';
          cm.on('update', function () {
            el.innerHTML = cm.lineCount();
          });
        } else if (name === 'cursor') {
          el.innerHTML = '0:0';
          cm.on('cursorActivity', function () {
            pos = cm.getCursor();
            el.innerHTML = pos.line + ':' + pos.ch;
          });
        }

        bar.appendChild(el);
      })(status[i]);
    }

    var cmWrapper = this.codemirror.getWrapperElement();
    cmWrapper.parentNode.insertBefore(bar, cmWrapper.nextSibling);
    return bar;
  };
  /**
   * Bind static methods for exports.
   */


  Editor.toggleBold = toggleBold;
  Editor.toggleItalic = toggleItalic;
  Editor.toggleBlockquote = toggleBlockquote;
  Editor.toggleBlockcode = toggleBlockcode;
  Editor.toggleUnOrderedList = toggleUnOrderedList;
  Editor.toggleOrderedList = toggleOrderedList;
  Editor.toggleTitle = toggleTitle;
  Editor.drawHr = drawHr;
  Editor.drawLink = drawLink;
  Editor.drawImage = drawImage;
  Editor.undo = undo;
  Editor.redo = redo;
  Editor.toggleFullScreen = toggleFullScreen;
  Editor.toggleBig = toggleBig;
  /**
   * Bind instance methods for exports.
   */

  Editor.prototype.toggleBold = function () {
    toggleBold(this);
  };

  Editor.prototype.toggleItalic = function () {
    toggleItalic(this);
  };

  Editor.prototype.toggleBlockquote = function () {
    toggleBlockquote(this);
  };

  Editor.prototype.toggleBlockcode = function () {
    toggleBlockcode(this);
  };

  Editor.prototype.toggleUnOrderedList = function () {
    toggleUnOrderedList(this);
  };

  Editor.prototype.toggleOrderedList = function () {
    toggleOrderedList(this);
  };

  Editor.prototype.toggleTitle = function () {
    toggleTitle(this);
  };

  Editor.prototype.drawHr = function () {
    drawHr(this);
  };

  Editor.prototype.drawLink = function () {
    drawLink(this);
  };

  Editor.prototype.drawImage = function () {
    drawImage(this);
  };

  Editor.prototype.undo = function () {
    undo(this);
  };

  Editor.prototype.redo = function () {
    redo(this);
  };

  Editor.prototype.toggleFullScreen = function () {
    toggleFullScreen(this);
  };

  Editor.prototype.toggleBig = function () {
    toggleBig(this);
  }; // intro.js


  var isMac = /Mac/.test(navigator.platform);
  var shortcuts = {
    'Cmd-B': toggleBold,
    'Cmd-I': toggleItalic,
    'Cmd-L': drawLink,
    'Cmd-G': drawImage,
    "Cmd-'": toggleBlockquote,
    'Cmd-K': toggleBlockcode,
    'Cmd-O': toggleOrderedList,
    'Cmd-U': toggleUnOrderedList,
    'Cmd-Z': undo,
    'Cmd-Shift-Z': redo,
    'Cmd-E': drawHr,
    'Cmd-H': toggleTitle,
    'F11': toggleFullScreen
  };
  var tooltips = {
    bold: '加粗 <strong> Cmd+B',
    italic: '斜体 <em> Cmd+I',
    link: '链接 <a> Cmd+L',
    quote: "引用 <blockquote> Cmd+Q",
    code: '代码 <pre> <code> Cmd+K',
    image: '图片 <img> Cmd+G',
    'ordered-list': '数字列表 <ol> Cmd+O',
    'unordered-list': '普通列表 <ul> Cmd+U',
    'hr': '分割线 <hr> Cmd+R',
    'title': '标题 <h1>/<h2> Cmd+H',
    'redo': '重做 Cmd+Shift+Z',
    'undo': '撤销 Cmd+Z'
  };
  /**
   * Fix shortcut. Mac use Command, others use Ctrl.
   */

  function fixShortcut(name) {
    if (isMac) {
      name = name.replace('Ctrl', 'Cmd');
    } else {
      name = name.replace('Cmd', 'Ctrl');
    }

    return name;
  }
  /**
   * Create icon element for toolbar.
   */


  function createIcon(name, options) {
    options = options || {};
    var el = document.createElement('a');
    var shortcut = options.shortcut || tooltips[name];

    if (shortcut) {
      shortcut = fixShortcut(shortcut);
      el.title = shortcut;
      el.title = el.title.replace('Cmd', '⌘');

      if (isMac) {
        el.title = el.title.replace('Alt', '⌥');
      }
    }

    el.className = options.className || 'icon-' + name; // $(el).tooltip();

    var li = document.createElement('li');
    li.appendChild(el);
    return li;
  }

  function createSep() {
    var el = document.createElement('li');
    el.className = 'editor__menu--divider';
    el.innerHTML = ' | ';
    return el;
  }
  /**
   * The state of CodeMirror at the given position.
   */


  function getState(cm, pos) {
    pos = pos || cm.getCursor('start');
    var stat = cm.getTokenAt(pos);

    if (!stat.type) {
      //没有markdown关键字
      return {};
    } else {
      var types = stat.type.split(' ');
      var ret = {},
          data,
          text;

      for (var i = 0; i < types.length; i++) {
        data = types[i];

        if (data === 'strong') {
          ret.bold = true;
        } else if (data === 'variable-2') {
          text = cm.getLine(pos.line);

          if (/^\s*\d+\.\s/.test(text)) {
            ret['ordered-list'] = true;
          } else {
            ret['unordered-list'] = true;
          }
        } else if (data === 'quote') {
          ret.quote = true;
        } else if (data === 'em') {
          ret.italic = true;
        }
      }

      return ret;
    }
  }
  /**
   * Toggle full screen of the editor.
   */


  function toggleFullScreen(editor) {
    var cm = editor.codemirror;
    var el = $('.editor')[0]; // https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode

    var doc = document;
    var _sw = screen.width;
    var _sh = screen.height;
    var isFull = doc.isfullScreen || doc.mozFullScreen || doc.webkitIsFullScreen;

    var goBig = function goBig() {
      $('.editor__menu--zen').addClass('editor__menu--two').removeClass('editor__menu--zen');
      $('.editor').css({
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        'z-index': 999,
        'margin-top': 0
      });
      $('.CodeMirror').css('height', $('html').height());
      $('.CodeMirror-gutters').css('height', '100%');
      $('.editor__resize').hide();
    };

    var request = function request() {
      $('.editor').css('overflow', 'auto');
      $('.editor__resize').hide();
      $('.editor__menu--two').addClass('editor__menu--unzen').removeClass('editor__menu--two');
      $('.editor__menu li.pull-right').hide();

      if (el.requestFullScreen) {
        el.requestFullScreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullScreen) {
        el.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }

      $('.CodeMirror').after('<div id="editorLive" class="editor-live fmt"></div>');
      $('.editor').css('margin', 0);

      if (_sh > _sw) {
        // 针对竖屏做了优化
        $('.CodeMirror').css('height', '45%');
        $('#editorLive').css('height', '50%');
      } else {
        $('.editor__menu, .editor-help').css('width', '49%');
        $('.CodeMirror').css({
          height: _sh - 80,
          width: '49%',
          "float": 'left'
        });
        $('#editorLive').css({
          height: _sh - 10,
          width: '49%',
          "float": 'right',
          'margin-top': '-70px'
        });
      }

      cm.focus();
      var text = cm.getValue();
      $('#editorLive').html(marker(text));
      highLight($('#editorLive'));
      $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function () {
        var _isFull = document.isfullScreen || document.mozFullScreen || document.webkitIsFullScreen;

        if (!_isFull) {
          cancel();
        }
      });
    };

    var cancel = function cancel() {
      $('.editor__resize').show();
      $('.editor__menu--unzen').addClass('editor__menu--zen').removeClass('editor__menu--unzen');
      $('.editor__menu li.pull-right').show();
      $('#editorLive').remove();
      $('.CodeMirror, .editor__menu, .editor-help').css('width', '100%');
      $('.CodeMirror').css('float', 'none');
      $('.editor').css({
        position: 'static',
        width: '100%',
        'margin-top': '20px'
      });

      if (doc.cancelFullScreen) {
        doc.cancelFullScreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.webkitCancelFullScreen) {
        doc.webkitCancelFullScreen();
      }
    };

    if (!isFull && $('.editor__menu--zen').length) {
      goBig();
    } else if ($('.editor__menu--two').length) {
      request();
    } else {
      cancel();
    }
  }
  /**
   * Toggle big of the editor.
   */


  function toggleBig(editor) {
    var cm = editor.codemirror;
    var el = $('.editor')[0];
    var doc = document;
    var _sw = screen.width;
    var _sh = screen.height;
    var cmHeight = editor.originHeight;

    var goBig = function goBig() {
      editor.originHeight = $('.CodeMirror').height();
      $('.editor__menu, .editor-help').css({
        position: 'static',
        width: 'auto'
      });
      $('.editor__menu--zen').addClass('editor__menu--unzen').removeClass('editor__menu--zen');
      $('.editor').css({
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        'z-index': 999,
        'margin-top': 0
      });
      $('.CodeMirror').css('height', $(document).height() - 70);
      cmHeight = Math.max($('.CodeMirror').height(), $('.CodeMirror-sizer').height());
      $('.CodeMirror-gutters').css('height', cmHeight);
      $('.editor__resize').hide();
      editor.isBig = true;
    };

    var cancel = function cancel() {
      $('.editor__resize').show();
      $('.editor__menu--unzen').addClass('editor__menu--zen').removeClass('editor__menu--unzen');
      $('.editor__menu li.pull-right').show();
      $('#editorLive').remove();
      $('.CodeMirror, .editor__menu, .editor-help').css('width', '100%');
      $('.CodeMirror').css({
        "float": 'none',
        height: editor.originHeight
      });
      $('.editor').css({
        position: 'static',
        width: '100%',
        'margin-top': '20px'
      });
      var cmHeight = Math.max($('.CodeMirror').height(), $('.CodeMirror-sizer').height());
      $('.CodeMirror-gutters').css('height', cmHeight);
      editor.isBig = false;
    };

    if ($('.editor__menu--zen').length) {
      goBig();
    } else if (cancel) {
      cancel();
    }
  }
  /**
   * Action for toggling bold.
   */


  function toggleBold(editor) {
    var cm = editor.codemirror;
    var stat = getState(cm);
    var text = '加粗文字';
    var start = '**';
    var end = '**';
    var startPoint, endPoint, curPoint;

    if (cm.getSelection()) {
      // 有选中
      startPoint = cm.getCursor('from');
      endPoint = cm.getCursor('to');
    } else {
      //没有选中
      curPoint = cm.getCursor();
    }

    if (stat.bold) {
      if (curPoint || cm.getRange({
        line: startPoint.line,
        ch: startPoint.ch - 2
      }, startPoint) !== '**' || cm.getRange(endPoint, {
        line: endPoint.line,
        ch: endPoint.ch + 2
      }) !== '**') {
        // 没有选中或选中的不全
        return;
      } else {
        text = cm.getSelection();
        startPoint.ch -= 2;
        endPoint.ch += 2;
        cm.replaceRange(text, startPoint, endPoint);
        endPoint.ch -= 4;
      }
    } else {
      var _text = cm.getSelection() || text;

      cm.replaceSelection(start + _text + end);

      if (curPoint) {
        startPoint = {
          line: curPoint.line,
          ch: curPoint.ch + 2
        };
        endPoint = {
          line: curPoint.line,
          ch: curPoint.ch + 6
        };
      } else {
        startPoint.ch += 2;
        endPoint.ch += 2;
      }
    }

    cm.setSelection(startPoint, endPoint);
    cm.focus();
  }
  /**
   * Action for toggling italic.
   */


  function toggleItalic(editor) {
    var cm = editor.codemirror;
    var stat = getState(cm);
    var text = '斜体文字';
    var start = '*';
    var end = '*';
    var startPoint, endPoint, curPoint;

    if (cm.getSelection()) {
      // 有选中
      startPoint = cm.getCursor('from');
      endPoint = cm.getCursor('to');
    } else {
      //没有选中
      curPoint = cm.getCursor();
    }

    if (stat.italic) {
      if (curPoint || cm.getRange({
        line: startPoint.line,
        ch: startPoint.ch - 1
      }, startPoint) !== '*' || cm.getRange(endPoint, {
        line: endPoint.line,
        ch: endPoint.ch + 1
      }) !== '*') {
        // 没有选中或选中的不全
        return;
      } else {
        text = cm.getSelection();
        startPoint.ch -= 1;
        endPoint.ch += 1;
        cm.replaceRange(text, startPoint, endPoint);
        endPoint.ch -= 2;
      }
    } else {
      var _text = cm.getSelection() || text;

      cm.replaceSelection(start + _text + end);

      if (curPoint) {
        startPoint = {
          line: curPoint.line,
          ch: curPoint.ch + 1
        };
        endPoint = {
          line: curPoint.line,
          ch: curPoint.ch + 5
        };
      } else {
        startPoint.ch += 1;
        endPoint.ch += 1;
      }
    }

    cm.setSelection(startPoint, endPoint);
    cm.focus();
  }
  /**
   * Action for toggling blockquote.
   */


  function toggleBlockquote(editor) {
    var cm = editor.codemirror;

    _toggleLine(cm, 'quote');
  }
  /**
   * Action for toggling blockcode.
   */


  function toggleBlockcode(editor) {
    var cm = editor.codemirror;

    if (cm.somethingSelected()) {
      //如果有选择就加```   ```
      var code = cm.getSelection();
      var ncode = '\n```\n' + code + '\n```\n';
      cm.replaceSelection(ncode);
    } else {
      //没选择就加`请输入代码`
      var cursorCurrent = cm.getCursor();
      cm.replaceRange('`请输入代码`', cursorCurrent);
      cm.setSelection({
        line: cursorCurrent.line,
        ch: cursorCurrent.ch + 1
      }, {
        line: cursorCurrent.line,
        ch: cursorCurrent.ch + 6
      });
    }

    cm.focus();
  }
  /**
   * Action for toggling ul.
   */


  function toggleUnOrderedList(editor) {
    var cm = editor.codemirror;

    _toggleLine(cm, 'unordered-list');
  }
  /**
   * Action for toggling ol.
   */


  function toggleOrderedList(editor) {
    var cm = editor.codemirror;

    _toggleLine(cm, 'ordered-list');
  }
  /**
   * Action for toggling title.
   */


  function toggleTitle(editor) {
    var cm = editor.codemirror;
    var stat = getState(cm);
    var text = '标题文字';
    var start = '##';
    var end = '##';
    var startPoint, endPoint, curPoint;

    if (cm.getSelection()) {
      // 有选中
      startPoint = cm.getCursor('from');
      endPoint = cm.getCursor('to');
    } else {
      //没有选中
      curPoint = cm.getCursor();
    }

    if (!curPoint && cm.getRange({
      line: startPoint.line,
      ch: startPoint.ch - 2
    }, startPoint) === '##' && cm.getRange(endPoint, {
      line: endPoint.line,
      ch: endPoint.ch + 2
    }) === '##') {
      if (curPoint) {
        // 没有选中或选中的不全
        return;
      } else {
        text = cm.getSelection();
        startPoint.ch -= 2;
        endPoint.ch += 2;
        cm.replaceRange(text, startPoint, endPoint);
        endPoint.ch -= 4;
      }
    } else {
      var _text = cm.getSelection() || text;

      cm.replaceSelection(start + _text + end);

      if (curPoint) {
        startPoint = {
          line: curPoint.line,
          ch: curPoint.ch + 2
        };
        endPoint = {
          line: curPoint.line,
          ch: curPoint.ch + 6
        };
      } else {
        startPoint.ch += 2;
        endPoint.ch += 2;
      }
    }

    cm.setSelection(startPoint, endPoint);
    cm.focus();
  } //     var startPoint = cm.getCursor('from');
  //     var endPoint = cm.getCursor('to');
  //     if (stat.bold) {
  //         text = cm.getLine(startPoint.line);
  //         start = text.slice(0, startPoint.ch);
  //         end = text.slice(startPoint.ch);
  //
  //         start = start.replace(/^(.*)?(#|\_){2}(\S+.*)?$/, '$1$3');
  //         end = end.replace(/^(.*\S+)?(#|\_){2}(\s+.*)?$/, '$1$3');
  //         startPoint.ch -= 2;
  //         endPoint.ch -= 2;
  //         //cm.setLine(startPoint.line, start + end);  新版CM去掉了setLine方法
  //         cm.replaceRange(start + end,
  //             {line: startPoint.line, ch: 0},
  //             {line: startPoint.line + 1, ch: 0}
  //         );
  //     } else {
  //         if(cm.somethingSelected()) {
  //             text = cm.getSelection();
  //             cm.replaceSelection(start + text + end);
  //             startPoint.ch += 2;
  //             endPoint.ch += 2;
  //         } else {
  //             cm.replaceSelection(start + '标题文字' + end);
  //             var cursor = cm.getCursor();
  //             startPoint = {line: cursor.line, ch: cursor.ch - 6};
  //             endPoint = {line: cursor.line, ch: cursor.ch - 2};
  //         }
  //     }
  //     cm.setSelection(startPoint, endPoint);
  //     cm.focus();
  // }

  /**
   * Action for toggling ol.
   */


  function drawHr(editor) {
    var cm = editor.codemirror;
    var cursor = cm.getCursor();
    cm.replaceRange('\n----------\n', cursor);
    cm.setCursor({
      line: cursor.line + 2,
      ch: 0
    });
    cm.focus();
  }
  /**
   * Action for drawing a link.
   */


  function drawLink(editor) {
    var cm = editor.codemirror;

    var _isFull = document.isfullScreen || document.mozFullScreen || document.webkitIsFullScreen;

    var map;
    sfModal({
      title: '插入链接',
      content: '<input type="text" id="editorLinkTitle" class="form-control text-28" placeholder="请输入标题"> \
                        <input type="text" id="editorLinkText" class="form-control text-28" placeholder="请输入链接地址">',
      closeText: '取消',
      wrapper: _isFull ? '.editor' : null,
      doneText: '插入',
      shown: function shown() {
        //如果有选中的字符串，并且配置了文章搜索url就显示标题栏
        if (!cm.getSelection() && Editor.prototype.ajaxTopicSearchUrl) {
          $('#editorLinkTitle').typeahead({
            source: function source(query, process) {
              if (!Editor.prototype.ajaxTopicSearchUrl) {
                return;
              } //ajax获取文章标题和url 数据格式为：
              //{'title':'url','title2':'url2'}


              $.get(Editor.prototype.ajaxTopicSearchUrl, {
                query: query
              }, function (data) {
                var item = [];

                for (var k in data) {
                  item.push(k);
                }

                item.reverse();
                console.log(item);
                map = data;
                process(item);
              });
            },
            afterSelect: function afterSelect(item) {
              $('#editorLinkText').val(map[item]);
            }
          });
        } else {
          $('#editorLinkTitle').addClass('hidden');
        }
      },
      doneFn: function doneFn() {
        var startCursor = cm.getCursor('from'); //光标位置

        var endCursor = cm.getCursor('to'); //选择结束位置

        var selectText = cm.getSelection() ? cm.getSelection() : $('#editorLinkTitle').val(); //当前选中的文本

        var link = $('#editorLinkText').val(); //插入的链接地址

        var lastLine = cm.getLine(cm.lineCount() - 1); //最后一行的内容

        var reg = /^\s*\[(\d+)\]:/; //获取最后一行计数值的正则

        var regResult = reg.exec(lastLine); //缓存正则结果

        var i = 1; //计数默认为1

        var replaceText = '[' + selectText + ']' + '[' + i + ']';
        var tailText = '\n\n  [' + i + ']: ' + link; //最后追加

        if (regResult) {
          //有插入过链接或图片
          i = parseInt(regResult[1]) + 1;
          tailText = '\n  [' + i + ']: ' + link; //默认追加

          replaceText = '[' + selectText + ']' + '[' + i + ']';
        } // 插入text


        cm.replaceSelection(replaceText);
        var content = cm.getValue();
        cm.setValue(content + tailText);
        sfModal('hide');
        cm.focus();

        if (!selectText) {
          cm.setCursor({
            line: startCursor.line,
            ch: startCursor.ch + 1
          });
        } else {
          cm.setSelection({
            line: startCursor.line,
            ch: startCursor.ch + 1
          }, {
            line: endCursor.line,
            ch: endCursor.ch + 1
          });
        }
      }
    });
  }
  /**
   * Action for drawing an img.
   */


  function drawImage(editor) {
    var cm = editor.codemirror;
    var imgLink = ''; //最后获取到的图片地址

    var _fileName = ''; //图片的文件名

    var _isFull = document.isfullScreen || document.mozFullScreen || document.webkitIsFullScreen;

    function insertPic() {
      var startCursor = cm.getCursor('from'); //光标位置

      var endCursor = cm.getCursor('to'); //选择结束位置

      var selectText = cm.getSelection() || _fileName; //当前选中的文本


      var lastLine = cm.getLine(cm.lineCount() - 1); //最后一行的内容

      var reg = /^\s*\[(\d+)\]:/; //获取最后一行计数值的正则

      var regResult = reg.exec(lastLine); //缓存正则结果
      //var i = 1;    //计数默认为1

      var i = Math.random(); //计数默认为1

      var replaceText = '![' + selectText + ']' + '[' + i + ']';
      var tailText = '\n\n  [' + i + ']: ' + imgLink; //最后追加

      if (regResult) {
        //有插入过链接或图片
        i = parseInt(regResult[1]) + 1;
        tailText = '\n  [' + i + ']: ' + imgLink; //默认追加

        replaceText = '![' + selectText + ']' + '[' + i + ']';
      } // 插入text


      cm.replaceSelection(replaceText);
      var content = cm.getValue();
      cm.setValue(content + tailText);
      sfModal('hide');
      cm.focus();

      if (!selectText) {
        cm.setCursor({
          line: startCursor.line,
          ch: startCursor.ch + 2
        });
      } else {
        cm.setSelection({
          line: startCursor.line,
          ch: startCursor.ch + 2
        }, {
          line: endCursor.line,
          ch: endCursor.ch + 2
        });
      }
    }

    sfModal({
      title: '插入图片',
      content: '<ul class="nav nav-tabs" role="tablist">\
    <li class="active"><a href="#localPic" role="tab" data-toggle="tab">本地上传</a></li>\
    <li><a href="#remotePic" role="tab" data-toggle="tab">远程地址获取</a></li>\
</ul>\
<div class="tab-content">\
    <div class="tab-pane fade in active pt20 form-horizontal" id="localPic">\
        <span class="text-muted">图片体积不得大于 4 MB</span>\
        <br>\
        <div class="widget-upload form-group">\
        <input type="file" id="editorUpload" name="image" class="widget-upload__file">\
        <div class="col-sm-8">\
        <input type="text" id="fileName" class="form-control col-sm-10 widget-upload__text" placeholder="拖动图片到这里" readonly />\
        </div>\
        <a href="javascript:void(0);" class="btn col-sm-2 btn-default">选择图片</a>\
        </div>\
    </div>\
    <div class="tab-pane fade pt20" id="remotePic">\
    <input type="url" name="img" id="remotePicUrl" class="form-control text-28" placeholder="请输入图片所在网址">\
    </div>\
</div>',
      closeText: '取消',
      doneText: '插入',
      wrapper: _isFull ? '.editor' : null,
      show: function show() {
        // fileupload
        $('#editorUpload').fileUpload({
          url: Editor.prototype.uploadPath,
          type: 'POST',
          dataType: 'json',
          beforeSend: function beforeSend() {
            // 下面这句神奇的话会影响到拖动图片上传的成功与否，有待研究
            // 这句话在拖动图片上传时会报错，但是不影响功能。任何修改都有很大可能导致此功能失败。
            _fileName = $('#editorUpload').val() //.split('akepath')[1].slice(1);
            .split('akepath').slice(1); //

            $('#fileName').val(_fileName).addClass('loading');
            $('.done-btn').attr('disabled', 'disabled');
          },
          complete: function complete() {
            $('#fileName').removeClass('loading');
            $('.done-btn').attr('disabled', false).click();
          },
          success: function success(result) {
            var status = result.status;
            var message = result.message;
            var url = result.url;

            if (status != 0) {
              sfModal(message); // 坏味道 用于转义
            } else {
              var data = url;
              imgLink = data;
            }
          }
        });
      },
      doneFn: function doneFn(e) {
        e.preventDefault(); //远程图片

        if ($('#remotePic').hasClass('active') && $('#remotePicUrl').val()) {
          $('#remotePicUrl').addClass('loading');
          $('.done-btn').attr('disabled', 'disabled');
          imgLink = $('#remotePicUrl').val();
          insertPic();
        } else {
          insertPic();
        }
      }
    });
  }
  /**
   * Undo action.
   */


  function undo(editor) {
    var cm = editor.codemirror;
    cm.undo();
    cm.focus();
  }
  /**
   * Redo action.
   */


  function redo(editor) {
    var cm = editor.codemirror;
    cm.redo();
    cm.focus();
  }
  /**
   * Preview action.
   */


  var lastText = '';

  function goPreview(editor) {
    $('.CodeMirror-code').css('width', '100%');
    var cm = editor.codemirror;
    var wrapper = cm.getWrapperElement();
    var preview = wrapper.lastChild;
    $('.editor-preview').removeClass('onlive'); //清掉onlive

    $('.editor__menu--live').removeClass('muted');

    if (!/editor-preview/.test(preview.className)) {
      preview = document.createElement('div'); //创建preview的div

      preview.className = 'editor-preview fmt';
      wrapper.appendChild(preview); //变灰预览

      $('.editor__menu--preview').addClass('muted');
      $('.editor__menu li:lt(17)').addClass('invisible'); //预览时隐藏操作按钮
    }

    var text = cm.getValue();

    if (text === lastText) {
      setTimeout(function () {
        $(preview).addClass('editor-preview-active');
      }, 1);
    } else {
      preview.innerHTML = marked(text);
      highLight($(preview));
      /* When the preview button is clicked for the first time,
       * give some time for the transition from editor.css to fire and the view to slide from right to left,
       * instead of just appearing.
       */

      setTimeout(function () {
        $(preview).addClass('editor-preview-active');
      }, 1);
    }

    $('.editor__menu--edit').removeClass('muted');
    $('.editor__menu--preview').addClass('muted');
    $('.editor__menu li:lt(17)').addClass('invisible');
    lastText = text;
  }
  /**
   * 编辑模式.
   */


  function goEdit(editor) {
    $('.CodeMirror-code').css('width', '100%');
    var cm = editor.codemirror;
    var wrapper = cm.getWrapperElement();
    var preview = wrapper.lastChild;
    $('.editor-preview').removeClass('onlive'); //清掉onlive

    $('.editor__menu--live').removeClass('muted');
    preview.className = preview.className.replace(/\s*editor-preview-active\s*/g, '');
    $('.editor__menu--edit').addClass('muted');
    $('.editor__menu--preview').removeClass('muted');
    $('.editor__menu li:lt(17)').removeClass('invisible');
  }
  /**
   * 实况模式.
   */


  function goLive(editor) {
    var cm = editor.codemirror;
    var wrapper = cm.getWrapperElement();
    var preview = wrapper.lastChild;
    $('.editor__menu--edit, .editor__menu--preview').removeClass('muted'); //变灰live

    $('.editor__menu--live').addClass('muted');

    if (!/editor-preview/.test(preview.className)) {
      //没有preview过
      preview = document.createElement('div'); //创建preview的div

      preview.className = 'editor-preview fmt';
      wrapper.appendChild(preview);
    }

    var text = cm.getValue();

    var _w = $('.CodeMirror-code').width() / 2 - 15 + 'px';

    if (text === lastText) {
      setTimeout(function () {
        $(preview).addClass('editor-preview-active onlive');
        $('.CodeMirror-code').css('width', _w);
      }, 1);
    } else {
      preview.innerHTML = marked(text);
      setTimeout(function () {
        $(preview).addClass('editor-preview-active onlive'); // var _w = $('.CodeMirror-code').width() / 2 - 15 + 'px';

        $('.CodeMirror-code').css('width', _w);
        highLight($(preview));
      }, 1);
    }

    lastText = text;
    $('.editor__menu li:lt(17)').removeClass('invisible'); //显示菜单按钮
  }

  function _replaceSelection(cm, active, start, end) {
    var text;
    var startPoint = cm.getCursor('start');
    var endPoint = cm.getCursor('end');

    if (active) {
      text = cm.getLine(startPoint.line);
      start = text.slice(0, startPoint.ch);
      end = text.slice(startPoint.ch);
      cm.replaceRange(start + end, {
        line: startPoint.line,
        ch: 0
      }, {
        line: startPoint.line + 1,
        ch: 0
      });
    } else {
      text = cm.getSelection();
      cm.replaceSelection(start + text + end);
      startPoint.ch += start.length;
      endPoint.ch += start.length;
    }

    cm.setSelection(startPoint, endPoint);
    cm.focus();
  }

  function _toggleLine(cm, name) {
    var stat = getState(cm);
    var startPoint = cm.getCursor('start');
    var endPoint = cm.getCursor('end');
    var repl = {
      quote: /^(\s*)\>\s+/,
      code: /^(\s*)```\n\s+/,
      header: /^(\s*)##/,
      'unordered-list': /^(\s*)(\*|\-|\+)\s+/,
      'ordered-list': /^(\s*)\d+\.\s+/
    };
    var map = {
      quote: '> ',
      code: '```\n\n```',
      header: '##标题##',
      'unordered-list': '* ',
      'ordered-list': '1. '
    };

    for (var i = startPoint.line; i <= endPoint.line; i++) {
      (function (i) {
        var text = cm.getLine(i);

        if (stat[name]) {
          text = text.replace(repl[name], '$1');
        } else {
          text = map[name] + text;
        }

        cm.replaceRange(text, {
          line: i,
          ch: 0
        }, {
          line: i + 1,
          ch: 0
        });
      })(i);
    }

    cm.focus();
  }
  /* The right word count in respect for CJK. */


  function wordCount(data) {
    var pattern = /[a-zA-Z0-9_\u0392-\u03c9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g;
    var m = data.match(pattern);
    var count = 0;

    if (m === null) {
      return count;
    }

    for (var i = 0; i < m.length; i++) {
      if (m[i].charCodeAt(0) >= 0x4E00) {
        count += m[i].length;
      } else {
        count += 1;
      }
    }

    return count;
  }

  return Editor;
});

/***/ }),

/***/ "./resources/js/edit/bootstrap3-typeahead.js":
/*!***************************************************!*\
  !*** ./resources/js/edit/bootstrap3-typeahead.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* =============================================================
 * bootstrap3-typeahead.js v3.1.0
 * https://github.com/bassjobsen/Bootstrap-3-Typeahead
 * =============================================================
 * Original written by @mdo and @fat
 * =============================================================
 * Copyright 2014 Bass Jobsen @bassjobsen
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
(function (root, factory) {
  'use strict'; // CommonJS module is defined

  if ( true && module.exports) {
    module.exports = factory(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));
  } // AMD module is defined
  else if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
        return factory($);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this, function ($) {
  'use strict'; // jshint laxcomma: true

  /* TYPEAHEAD PUBLIC CLASS DEFINITION
   * ================================= */

  var Typeahead = function Typeahead(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, $.fn.typeahead.defaults, options);
    this.matcher = this.options.matcher || this.matcher;
    this.sorter = this.options.sorter || this.sorter;
    this.select = this.options.select || this.select;
    this.autoSelect = typeof this.options.autoSelect == 'boolean' ? this.options.autoSelect : true;
    this.highlighter = this.options.highlighter || this.highlighter;
    this.render = this.options.render || this.render;
    this.updater = this.options.updater || this.updater;
    this.displayText = this.options.displayText || this.displayText;
    this.source = this.options.source;
    this.delay = this.options.delay;
    this.$menu = $(this.options.menu);
    this.$appendTo = this.options.appendTo ? $(this.options.appendTo) : null;
    this.shown = false;
    this.listen();
    this.showHintOnFocus = typeof this.options.showHintOnFocus == 'boolean' ? this.options.showHintOnFocus : false;
    this.afterSelect = this.options.afterSelect;
    this.addItem = false;
  };

  Typeahead.prototype = {
    constructor: Typeahead,
    select: function select() {
      var val = this.$menu.find('.active').data('value');
      this.$element.data('active', val);

      if (this.autoSelect || val) {
        var newVal = this.updater(val); // Updater can be set to any random functions via "options" parameter in constructor above.
        // Add null check for cases when updater returns void or undefined.

        if (!newVal) {
          newVal = "";
        }

        this.$element.val(this.displayText(newVal) || newVal).change();
        this.afterSelect(newVal);
      }

      return this.hide();
    },
    updater: function updater(item) {
      return item;
    },
    setSource: function setSource(source) {
      this.source = source;
    },
    show: function show() {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      }),
          scrollHeight;
      scrollHeight = typeof this.options.scrollHeight == 'function' ? this.options.scrollHeight.call() : this.options.scrollHeight;
      var element;

      if (this.shown) {
        element = this.$menu;
      } else if (this.$appendTo) {
        element = this.$menu.appendTo(this.$appendTo);
      } else {
        element = this.$menu.insertAfter(this.$element);
      }

      element.css({
        top: pos.top + pos.height + scrollHeight,
        left: pos.left
      }).show();
      this.shown = true;
      return this;
    },
    hide: function hide() {
      this.$menu.hide();
      this.shown = false;
      return this;
    },
    lookup: function lookup(query) {
      var items;

      if (typeof query != 'undefined' && query !== null) {
        this.query = query;
      } else {
        this.query = this.$element.val() || '';
      }

      if (this.query.length < this.options.minLength && !this.options.showHintOnFocus) {
        return this.shown ? this.hide() : this;
      }

      var worker = $.proxy(function () {
        if ($.isFunction(this.source)) this.source(this.query, $.proxy(this.process, this));else if (this.source) {
          this.process(this.source);
        }
      }, this);
      clearTimeout(this.lookupWorker);
      this.lookupWorker = setTimeout(worker, this.delay);
    },
    process: function process(items) {
      var that = this;
      items = $.grep(items, function (item) {
        return that.matcher(item);
      });
      items = this.sorter(items);

      if (!items.length && !this.options.addItem) {
        return this.shown ? this.hide() : this;
      }

      if (items.length > 0) {
        this.$element.data('active', items[0]);
      } else {
        this.$element.data('active', null);
      } // Add item


      if (this.options.addItem) {
        items.push(this.options.addItem);
      }

      if (this.options.items == 'all') {
        return this.render(items).show();
      } else {
        return this.render(items.slice(0, this.options.items)).show();
      }
    },
    matcher: function matcher(item) {
      var it = this.displayText(item);
      return ~it.toLowerCase().indexOf(this.query.toLowerCase());
    },
    sorter: function sorter(items) {
      var beginswith = [],
          caseSensitive = [],
          caseInsensitive = [],
          item;

      while (item = items.shift()) {
        var it = this.displayText(item);
        if (!it.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item);else if (~it.indexOf(this.query)) caseSensitive.push(item);else caseInsensitive.push(item);
      }

      return beginswith.concat(caseSensitive, caseInsensitive);
    },
    highlighter: function highlighter(item) {
      var html = $('<div></div>');
      var query = this.query;
      var i = item.toLowerCase().indexOf(query.toLowerCase());
      var len, leftPart, middlePart, rightPart, strong;
      len = query.length;

      if (len === 0) {
        return html.text(item).html();
      }

      while (i > -1) {
        leftPart = item.substr(0, i);
        middlePart = item.substr(i, len);
        rightPart = item.substr(i + len);
        strong = $('<strong></strong>').text(middlePart);
        html.append(document.createTextNode(leftPart)).append(strong);
        item = rightPart;
        i = item.toLowerCase().indexOf(query.toLowerCase());
      }

      return html.append(document.createTextNode(item)).html();
    },
    render: function render(items) {
      var that = this;
      var self = this;
      var activeFound = false;
      var data = [];
      var _category = that.options.separator;
      $.each(items, function (key, value) {
        // inject separator
        if (key > 0 && value[_category] !== items[key - 1][_category]) {
          data.push({
            __type: 'divider'
          });
        } // inject category header


        if (value[_category] && (key === 0 || value[_category] !== items[key - 1][_category])) {
          data.push({
            __type: 'category',
            name: value[_category]
          });
        }

        data.push(value);
      });
      items = $(data).map(function (i, item) {
        if ((item.__type || false) == 'category') {
          return $(that.options.headerHtml).text(item.name)[0];
        }

        if ((item.__type || false) == 'divider') {
          return $(that.options.headerDivider)[0];
        }

        var text = self.displayText(item);
        i = $(that.options.item).data('value', item);
        i.find('a').html(that.highlighter(text, item));

        if (text == self.$element.val()) {
          i.addClass('active');
          self.$element.data('active', item);
          activeFound = true;
        }

        return i[0];
      });

      if (this.autoSelect && !activeFound) {
        items.filter(':not(.dropdown-header)').first().addClass('active');
        this.$element.data('active', items.first().data('value'));
      }

      this.$menu.html(items);
      return this;
    },
    displayText: function displayText(item) {
      return typeof item !== 'undefined' && typeof item.name != 'undefined' && item.name || item;
    },
    next: function next(event) {
      var active = this.$menu.find('.active').removeClass('active'),
          next = active.next();

      if (!next.length) {
        next = $(this.$menu.find('li')[0]);
      }

      next.addClass('active');
    },
    prev: function prev(event) {
      var active = this.$menu.find('.active').removeClass('active'),
          prev = active.prev();

      if (!prev.length) {
        prev = this.$menu.find('li').last();
      }

      prev.addClass('active');
    },
    listen: function listen() {
      this.$element.on('focus', $.proxy(this.focus, this)).on('blur', $.proxy(this.blur, this)).on('keypress', $.proxy(this.keypress, this)).on('input', $.proxy(this.input, this)).on('keyup', $.proxy(this.keyup, this));

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this));
      }

      this.$menu.on('click', $.proxy(this.click, this)).on('mouseenter', 'li', $.proxy(this.mouseenter, this)).on('mouseleave', 'li', $.proxy(this.mouseleave, this)).on('mousedown', $.proxy(this.mousedown, this));
    },
    mousedown: function mousedown(e) {
      this.mouseddown = true;
      e.stopPropagation();
      e.preventDefault();
    },
    destroy: function destroy() {
      this.$element.data('typeahead', null);
      this.$element.data('active', null);
      this.$element.off('focus').off('blur').off('keypress').off('input').off('keyup');

      if (this.eventSupported('keydown')) {
        this.$element.off('keydown');
      }

      this.$menu.remove();
    },
    eventSupported: function eventSupported(eventName) {
      var isSupported = eventName in this.$element;

      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;');
        isSupported = typeof this.$element[eventName] === 'function';
      }

      return isSupported;
    },
    move: function move(e) {
      if (!this.shown) return;

      switch (e.keyCode) {
        case 9: // tab

        case 13: // enter

        case 27:
          // escape
          e.preventDefault();
          break;

        case 38:
          // up arrow
          // with the shiftKey (this is actually the left parenthesis)
          if (e.shiftKey) return;
          e.preventDefault();
          this.prev();
          break;

        case 40:
          // down arrow
          // with the shiftKey (this is actually the right parenthesis)
          if (e.shiftKey) return;
          e.preventDefault();
          this.next();
          break;
      }
    },
    keydown: function keydown(e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40, 38, 9, 13, 27]);

      if (!this.shown && e.keyCode == 40) {
        this.lookup();
      } else {
        this.move(e);
      }
    },
    keypress: function keypress(e) {
      if (this.suppressKeyPressRepeat) return;
      this.move(e);
    },
    input: function input(e) {
      this.lookup();
      e.preventDefault();
    },
    keyup: function keyup(e) {
      switch (e.keyCode) {
        case 40: // down arrow

        case 38: // up arrow

        case 16: // shift

        case 17: // ctrl

        case 18:
          // alt
          break;

        case 9: // tab

        case 13:
          // enter
          if (!this.shown) return;
          this.select();
          break;

        case 27:
          // escape
          if (!this.shown) return;
          this.hide();
          break;
      }

      e.preventDefault();
    },
    focus: function focus(e) {
      if (!this.focused) {
        this.focused = true;

        if (this.options.showHintOnFocus) {
          this.lookup();
        }
      }
    },
    blur: function blur(e) {
      this.focused = false;

      if (!this.mousedover && this.shown) {
        if (this.mouseddown && e.originalEvent) {
          this.mouseddown = false;
        } else {
          this.hide();
        }
      }
    },
    click: function click(e) {
      e.preventDefault();
      this.select();
      this.$element.focus();
      this.hide();
    },
    mouseenter: function mouseenter(e) {
      this.mousedover = true;
      this.$menu.find('.active').removeClass('active');
      $(e.currentTarget).addClass('active');
    },
    mouseleave: function mouseleave(e) {
      this.mousedover = false;
      /*if (!this.focused && this.shown) this.hide();*/
    }
  };
  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead;

  $.fn.typeahead = function (option) {
    var arg = arguments;

    if (typeof option == 'string' && option == 'getActive') {
      return this.data('active');
    }

    return this.each(function () {
      var $this = $(this),
          data = $this.data('typeahead'),
          options = _typeof(option) == 'object' && option;
      if (!data) $this.data('typeahead', data = new Typeahead(this, options));

      if (typeof option == 'string' && data[option]) {
        if (arg.length > 1) {
          data[option].apply(data, Array.prototype.slice.call(arg, 1));
        } else {
          data[option]();
        }
      }
    });
  };

  $.fn.typeahead.defaults = {
    source: [],
    items: 8,
    menu: '<ul class="typeahead dropdown-menu" role="listbox"></ul>',
    item: '<li><a class="dropdown-item" href="#" role="option"></a></li>',
    minLength: 1,
    scrollHeight: 0,
    autoSelect: true,
    afterSelect: $.noop,
    addItem: false,
    delay: 0,
    separator: 'category',
    headerHtml: '<li class="dropdown-header"></li>',
    headerDivider: '<li class="divider" role="separator"></li>'
  };
  $.fn.typeahead.Constructor = Typeahead;
  /* TYPEAHEAD NO CONFLICT
   * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old;
    return this;
  };
  /* TYPEAHEAD DATA-API
   * ================== */


  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this);
    if ($this.data('typeahead')) return;
    $this.typeahead($this.data());
  });
});

/***/ }),

/***/ "./resources/js/edit/bootstrap3.js":
/*!*****************************************!*\
  !*** ./resources/js/edit/bootstrap3.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.3.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery');
}

+function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.');

  if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher');
  }
}(jQuery);
/* ========================================================================
 * Bootstrap: transition.js v3.3.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap');
    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return {
          end: transEndEventNames[name]
        };
      }
    }

    return false; // explicit for ie8 (  ._.)
  } // http://blog.alexmaccaw.com/css-transitions


  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one('bsTransitionEnd', function () {
      called = true;
    });

    var callback = function callback() {
      if (!called) $($el).trigger($.support.transition.end);
    };

    setTimeout(callback, duration);
    return this;
  };

  $(function () {
    $.support.transition = transitionEnd();
    if (!$.support.transition) return;
    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function handle(e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    };
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.3.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]';

  var Alert = function Alert(el) {
    $(el).on('click', dismiss, this.close);
  };

  Alert.VERSION = '3.3.0';
  Alert.TRANSITION_DURATION = 150;

  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = $(selector);
    if (e) e.preventDefault();

    if (!$parent.length) {
      $parent = $this.closest('.alert');
    }

    $parent.trigger(e = $.Event('close.bs.alert'));
    if (e.isDefaultPrevented()) return;
    $parent.removeClass('in');

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove();
    }

    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
  }; // ALERT PLUGIN DEFINITION
  // =======================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.alert');
      if (!data) $this.data('bs.alert', data = new Alert(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.alert;
  $.fn.alert = Plugin;
  $.fn.alert.Constructor = Alert; // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old;
    return this;
  }; // ALERT DATA-API
  // ==============


  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
}(jQuery);
/* ========================================================================
 * Bootstrap: button.js v3.3.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function Button(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Button.DEFAULTS, options);
    this.isLoading = false;
  };

  Button.VERSION = '3.3.0';
  Button.DEFAULTS = {
    loadingText: 'loading...'
  };

  Button.prototype.setState = function (state) {
    var d = 'disabled';
    var $el = this.$element;
    var val = $el.is('input') ? 'val' : 'html';
    var data = $el.data();
    state = state + 'Text';
    if (data.resetText == null) $el.data('resetText', $el[val]()); // push to event loop to allow forms to submit

    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state]);

      if (state == 'loadingText') {
        this.isLoading = true;
        $el.addClass(d).attr(d, d);
      } else if (this.isLoading) {
        this.isLoading = false;
        $el.removeClass(d).removeAttr(d);
      }
    }, this), 0);
  };

  Button.prototype.toggle = function () {
    var changed = true;
    var $parent = this.$element.closest('[data-toggle="buttons"]');

    if ($parent.length) {
      var $input = this.$element.find('input');

      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false;else $parent.find('.active').removeClass('active');
      }

      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change');
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
    }

    if (changed) this.$element.toggleClass('active');
  }; // BUTTON PLUGIN DEFINITION
  // ========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.button');
      var options = _typeof(option) == 'object' && option;
      if (!data) $this.data('bs.button', data = new Button(this, options));
      if (option == 'toggle') data.toggle();else if (option) data.setState(option);
    });
  }

  var old = $.fn.button;
  $.fn.button = Plugin;
  $.fn.button.Constructor = Button; // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  }; // BUTTON DATA-API
  // ===============


  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target);
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn');
    Plugin.call($btn, 'toggle');
    e.preventDefault();
  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    $(e.target).closest('.btn').toggleClass('focus', e.type == 'focus');
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: carousel.js v3.3.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function Carousel(element, options) {
    this.$element = $(element);
    this.$indicators = this.$element.find('.carousel-indicators');
    this.options = options;
    this.paused = this.sliding = this.interval = this.$active = this.$items = null;
    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));
    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
  };

  Carousel.VERSION = '3.3.0';
  Carousel.TRANSITION_DURATION = 600;
  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  };

  Carousel.prototype.keydown = function (e) {
    switch (e.which) {
      case 37:
        this.prev();
        break;

      case 39:
        this.next();
        break;

      default:
        return;
    }

    e.preventDefault();
  };

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false);
    this.interval && clearInterval(this.interval);
    this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
    return this;
  };

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item');
    return this.$items.index(item || this.$active);
  };

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var delta = direction == 'prev' ? -1 : 1;
    var activeIndex = this.getItemIndex(active);
    var itemIndex = (activeIndex + delta) % this.$items.length;
    return this.$items.eq(itemIndex);
  };

  Carousel.prototype.to = function (pos) {
    var that = this;
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));
    if (pos > this.$items.length - 1 || pos < 0) return;
    if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
      that.to(pos);
    }); // yes, "slid"

    if (activeIndex == pos) return this.pause().cycle();
    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
  };

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true);

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end);
      this.cycle(true);
    }

    this.interval = clearInterval(this.interval);
    return this;
  };

  Carousel.prototype.next = function () {
    if (this.sliding) return;
    return this.slide('next');
  };

  Carousel.prototype.prev = function () {
    if (this.sliding) return;
    return this.slide('prev');
  };

  Carousel.prototype.slide = function (type, next) {
    var $active = this.$element.find('.item.active');
    var $next = next || this.getItemForDirection(type, $active);
    var isCycling = this.interval;
    var direction = type == 'next' ? 'left' : 'right';
    var fallback = type == 'next' ? 'first' : 'last';
    var that = this;

    if (!$next.length) {
      if (!this.options.wrap) return;
      $next = this.$element.find('.item')[fallback]();
    }

    if ($next.hasClass('active')) return this.sliding = false;
    var relatedTarget = $next[0];
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    });
    this.$element.trigger(slideEvent);
    if (slideEvent.isDefaultPrevented()) return;
    this.sliding = true;
    isCycling && this.pause();

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active');
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
      $nextIndicator && $nextIndicator.addClass('active');
    }

    var slidEvent = $.Event('slid.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    }); // yes, "slid"

    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type);
      $next[0].offsetWidth; // force reflow

      $active.addClass(direction);
      $next.addClass(direction);
      $active.one('bsTransitionEnd', function () {
        $next.removeClass([type, direction].join(' ')).addClass('active');
        $active.removeClass(['active', direction].join(' '));
        that.sliding = false;
        setTimeout(function () {
          that.$element.trigger(slidEvent);
        }, 0);
      }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
    } else {
      $active.removeClass('active');
      $next.addClass('active');
      this.sliding = false;
      this.$element.trigger(slidEvent);
    }

    isCycling && this.cycle();
    return this;
  }; // CAROUSEL PLUGIN DEFINITION
  // ==========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.carousel');
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      var action = typeof option == 'string' ? option : options.slide;
      if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
      if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
    });
  }

  var old = $.fn.carousel;
  $.fn.carousel = Plugin;
  $.fn.carousel.Constructor = Carousel; // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old;
    return this;
  }; // CAROUSEL DATA-API
  // =================


  var clickHandler = function clickHandler(e) {
    var href;
    var $this = $(this);
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7

    if (!$target.hasClass('carousel')) return;
    var options = $.extend({}, $target.data(), $this.data());
    var slideIndex = $this.attr('data-slide-to');
    if (slideIndex) options.interval = false;
    Plugin.call($target, options);

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex);
    }

    e.preventDefault();
  };

  $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);
  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this);
      Plugin.call($carousel, $carousel.data());
    });
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: collapse.js v3.3.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function Collapse(element, options) {
    this.$element = $(element);
    this.options = $.extend({}, Collapse.DEFAULTS, options);
    this.$trigger = $(this.options.trigger).filter('[href="#' + element.id + '"], [data-target="#' + element.id + '"]');
    this.transitioning = null;

    if (this.options.parent) {
      this.$parent = this.getParent();
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
    }

    if (this.options.toggle) this.toggle();
  };

  Collapse.VERSION = '3.3.0';
  Collapse.TRANSITION_DURATION = 350;
  Collapse.DEFAULTS = {
    toggle: true,
    trigger: '[data-toggle="collapse"]'
  };

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width');
    return hasWidth ? 'width' : 'height';
  };

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return;
    var activesData;
    var actives = this.$parent && this.$parent.find('> .panel').children('.in, .collapsing');

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse');
      if (activesData && activesData.transitioning) return;
    }

    var startEvent = $.Event('show.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;

    if (actives && actives.length) {
      Plugin.call(actives, 'hide');
      activesData || actives.data('bs.collapse', null);
    }

    var dimension = this.dimension();
    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);
    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);
    this.transitioning = 1;

    var complete = function complete() {
      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);
    var scrollSize = $.camelCase(['scroll', dimension].join('-'));
    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
  };

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return;
    var startEvent = $.Event('hide.bs.collapse');
    this.$element.trigger(startEvent);
    if (startEvent.isDefaultPrevented()) return;
    var dimension = this.dimension();
    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);
    this.$trigger.addClass('collapsed').attr('aria-expanded', false);
    this.transitioning = 1;

    var complete = function complete() {
      this.transitioning = 0;
      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
    };

    if (!$.support.transition) return complete.call(this);
    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
  };

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };

  Collapse.prototype.getParent = function () {
    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
      var $element = $(element);
      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
    }, this)).end();
  };

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in');
    $element.attr('aria-expanded', isOpen);
    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
  };

  function getTargetFromTrigger($trigger) {
    var href;
    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

    return $(target);
  } // COLLAPSE PLUGIN DEFINITION
  // ==========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.collapse');
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      if (!data && options.toggle && option == 'show') options.toggle = false;
      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.collapse;
  $.fn.collapse = Plugin;
  $.fn.collapse.Constructor = Collapse; // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  }; // COLLAPSE DATA-API
  // =================


  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this = $(this);
    if (!$this.attr('data-target')) e.preventDefault();
    var $target = getTargetFromTrigger($this);
    var data = $target.data('bs.collapse');
    var option = data ? 'toggle' : $.extend({}, $this.data(), {
      trigger: this
    });
    Plugin.call($target, option);
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop';
  var toggle = '[data-toggle="dropdown"]';

  var Dropdown = function Dropdown(element) {
    $(element).on('click.bs.dropdown', this.toggle);
  };

  Dropdown.VERSION = '3.3.0';

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this);
    if ($this.is('.disabled, :disabled')) return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');
    clearMenus();

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
      }

      var relatedTarget = {
        relatedTarget: this
      };
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented()) return;
      $this.trigger('focus').attr('aria-expanded', 'true');
      $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget);
    }

    return false;
  };

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which)) return;
    var $this = $(this);
    e.preventDefault();
    e.stopPropagation();
    if ($this.is('.disabled, :disabled')) return;
    var $parent = getParent($this);
    var isActive = $parent.hasClass('open');

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus');
      return $this.trigger('click');
    }

    var desc = ' li:not(.divider):visible a';
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);
    if (!$items.length) return;
    var index = $items.index(e.target);
    if (e.which == 38 && index > 0) index--; // up

    if (e.which == 40 && index < $items.length - 1) index++; // down

    if (!~index) index = 0;
    $items.eq(index).trigger('focus');
  };

  function clearMenus(e) {
    if (e && e.which === 3) return;
    $(backdrop).remove();
    $(toggle).each(function () {
      var $this = $(this);
      var $parent = getParent($this);
      var relatedTarget = {
        relatedTarget: this
      };
      if (!$parent.hasClass('open')) return;
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));
      if (e.isDefaultPrevented()) return;
      $this.attr('aria-expanded', 'false');
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
    });
  }

  function getParent($this) {
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    var $parent = selector && $(selector);
    return $parent && $parent.length ? $parent : $this.parent();
  } // DROPDOWN PLUGIN DEFINITION
  // ==========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.dropdown');
      if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.dropdown;
  $.fn.dropdown = Plugin;
  $.fn.dropdown.Constructor = Dropdown; // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old;
    return this;
  }; // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================


  $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
    e.stopPropagation();
  }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown);
}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.3.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // MODAL CLASS DEFINITION
  // ======================

  var Modal = function Modal(element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$backdrop = this.isShown = null;
    this.scrollbarWidth = 0;

    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('modal');
      }, this));
    }
  };

  Modal.VERSION = '3.3.0';
  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;
  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };

  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('modal', {
      relatedTarget: _relatedTarget
    });
    this.$element.trigger(e);
    if (this.isShown || e.isDefaultPrevented()) return;
    this.isShown = true;
    this.checkScrollbar();
    this.$body.addClass('modal-open');
    this.setScrollbar();
    this.escape();
    this.$element.on('modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }

      that.$element.show().scrollTop(0);

      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }

      that.$element.addClass('in').attr('aria-hidden', false);
      that.enforceFocus();
      var e = $.Event('modal', {
        relatedTarget: _relatedTarget
      });
      transition ? that.$element.find('.modal-dialog') // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
    });
  };

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();
    e = $.Event('modal');
    this.$element.trigger(e);
    if (!this.isShown || e.isDefaultPrevented()) return;
    this.isShown = false;
    this.escape();
    $(document).off('modal');
    this.$element.removeClass('in').attr('aria-hidden', true).off('modal');
    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
  };

  Modal.prototype.enforceFocus = function () {
    $(document).off('modal') // guard against infinite focus loop
    .on('modal', $.proxy(function (e) {
      if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('modal');
    }
  };

  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$body.removeClass('modal-open');
      that.resetScrollbar();
      that.$element.trigger('modal');
    });
  };

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };

  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').prependTo(this.$element).on('modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this);
      }, this));
      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');
      if (!callback) return;
      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');

      var callbackRemove = function callbackRemove() {
        that.removeBackdrop();
        callback && callback();
      };

      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  };

  Modal.prototype.checkScrollbar = function () {
    this.scrollbarWidth = this.measureScrollbar();
  };

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '');
  };

  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    if (document.body.clientWidth >= window.innerWidth) return 0;
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  }; // MODAL PLUGIN DEFINITION
  // =======================


  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      if (!data) $this.data('modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }

  var old = $.fn.modal;
  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal; // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  }; // MODAL DATA-API
  // ==============


  $(document).on('modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7

    var option = $target.data('modal') ? 'toggle' : $.extend({
      remote: !/#/.test(href) && href
    }, $target.data(), $this.data());
    if ($this.is('a')) e.preventDefault();
    $target.one('modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown

      $target.one('modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function Tooltip(element, options) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null;
    this.init('tooltip', element, options);
  };

  Tooltip.VERSION = '3.3.0';
  Tooltip.TRANSITION_DURATION = 150;
  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  };

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled = true;
    this.type = type;
    this.$element = $(element);
    this.options = this.getOptions(options);
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport);
    var triggers = this.options.trigger.split(' ');

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i];

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
      } else if (trigger != 'manual') {
        var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';
        this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = $.extend({}, this.options, {
      trigger: 'manual',
      selector: ''
    }) : this.fixTitle();
  };

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS;
  };

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options);

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      };
    }

    return options;
  };

  Tooltip.prototype.getDelegateOptions = function () {
    var options = {};
    var defaults = this.getDefaults();
    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value;
    });
    return options;
  };

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

    if (self && self.$tip && self.$tip.is(':visible')) {
      self.hoverState = 'in';
      return;
    }

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    clearTimeout(self.timeout);
    self.hoverState = 'in';
    if (!self.options.delay || !self.options.delay.show) return self.show();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show();
    }, self.options.delay.show);
  };

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
      $(obj.currentTarget).data('bs.' + this.type, self);
    }

    clearTimeout(self.timeout);
    self.hoverState = 'out';
    if (!self.options.delay || !self.options.delay.hide) return self.hide();
    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide();
    }, self.options.delay.hide);
  };

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !inDom) return;
      var that = this;
      var $tip = this.tip();
      var tipId = this.getUID(this.type);
      this.setContent();
      $tip.attr('id', tipId);
      this.$element.attr('aria-describedby', tipId);
      if (this.options.animation) $tip.addClass('fade');
      var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
      var autoToken = /\s?auto?\s?/i;
      var autoPlace = autoToken.test(placement);
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top';
      $tip.detach().css({
        top: 0,
        left: 0,
        display: 'block'
      }).addClass(placement).data('bs.' + this.type, this);
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
      var pos = this.getPosition();
      var actualWidth = $tip[0].offsetWidth;
      var actualHeight = $tip[0].offsetHeight;

      if (autoPlace) {
        var orgPlacement = placement;
        var $container = this.options.container ? $(this.options.container) : this.$element.parent();
        var containerDim = this.getPosition($container);
        placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < containerDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > containerDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < containerDim.left ? 'right' : placement;
        $tip.removeClass(orgPlacement).addClass(placement);
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
      this.applyPlacement(calculatedOffset, placement);

      var complete = function complete() {
        var prevHoverState = that.hoverState;
        that.$element.trigger('shown.bs.' + that.type);
        that.hoverState = null;
        if (prevHoverState == 'out') that.leave(that);
      };

      $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
    }
  };

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip = this.tip();
    var width = $tip[0].offsetWidth;
    var height = $tip[0].offsetHeight; // manually read margins because getBoundingClientRect includes difference

    var marginTop = parseInt($tip.css('margin-top'), 10);
    var marginLeft = parseInt($tip.css('margin-left'), 10); // we must check for NaN for ie 8/9

    if (isNaN(marginTop)) marginTop = 0;
    if (isNaN(marginLeft)) marginLeft = 0;
    offset.top = offset.top + marginTop;
    offset.left = offset.left + marginLeft; // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0

    $.offset.setOffset($tip[0], $.extend({
      using: function using(props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        });
      }
    }, offset), 0);
    $tip.addClass('in'); // check to see if placing tip in new offset caused the tip to resize itself

    var actualWidth = $tip[0].offsetWidth;
    var actualHeight = $tip[0].offsetHeight;

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight;
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
    if (delta.left) offset.left += delta.left;else offset.top += delta.top;
    var isVertical = /top|bottom/.test(placement);
    var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';
    $tip.offset(offset);
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
  };

  Tooltip.prototype.replaceArrow = function (delta, dimension, isHorizontal) {
    this.arrow().css(isHorizontal ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isHorizontal ? 'top' : 'left', '');
  };

  Tooltip.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
    $tip.removeClass('fade in top bottom left right');
  };

  Tooltip.prototype.hide = function (callback) {
    var that = this;
    var $tip = this.tip();
    var e = $.Event('hide.bs.' + this.type);

    function complete() {
      if (that.hoverState != 'in') $tip.detach();
      that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
      callback && callback();
    }

    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;
    $tip.removeClass('in');
    $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
    this.hoverState = null;
    return this;
  };

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element;

    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
    }
  };

  Tooltip.prototype.hasContent = function () {
    return this.getTitle();
  };

  Tooltip.prototype.getPosition = function ($element) {
    $element = $element || this.$element;
    var el = $element[0];
    var isBody = el.tagName == 'BODY';
    var elRect = el.getBoundingClientRect();

    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, {
        width: elRect.right - elRect.left,
        height: elRect.bottom - elRect.top
      });
    }

    var elOffset = isBody ? {
      top: 0,
      left: 0
    } : $element.offset();
    var scroll = {
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
    };
    var outerDims = isBody ? {
      width: $(window).width(),
      height: $(window).height()
    } : null;
    return $.extend({}, elRect, scroll, outerDims, elOffset);
  };

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? {
      top: pos.top + pos.height,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'top' ? {
      top: pos.top - actualHeight,
      left: pos.left + pos.width / 2 - actualWidth / 2
    } : placement == 'left' ? {
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left - actualWidth
    } :
    /* placement == 'right' */
    {
      top: pos.top + pos.height / 2 - actualHeight / 2,
      left: pos.left + pos.width
    };
  };

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return delta;
    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
    var viewportDimensions = this.getPosition(this.$viewport);

    if (/right|left/.test(placement)) {
      var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;

      if (topEdgeOffset < viewportDimensions.top) {
        // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset;
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
        // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
      }
    } else {
      var leftEdgeOffset = pos.left - viewportPadding;
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth;

      if (leftEdgeOffset < viewportDimensions.left) {
        // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset;
      } else if (rightEdgeOffset > viewportDimensions.width) {
        // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
      }
    }

    return delta;
  };

  Tooltip.prototype.getTitle = function () {
    var title;
    var $e = this.$element;
    var o = this.options;
    title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);
    return title;
  };

  Tooltip.prototype.getUID = function (prefix) {
    do {
      prefix += ~~(Math.random() * 1000000);
    } while (document.getElementById(prefix));

    return prefix;
  };

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template);
  };

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  };

  Tooltip.prototype.enable = function () {
    this.enabled = true;
  };

  Tooltip.prototype.disable = function () {
    this.enabled = false;
  };

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  };

  Tooltip.prototype.toggle = function (e) {
    var self = this;

    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type);

      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions());
        $(e.currentTarget).data('bs.' + this.type, self);
      }
    }

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
  };

  Tooltip.prototype.destroy = function () {
    var that = this;
    clearTimeout(this.timeout);
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type);
    });
  }; // TOOLTIP PLUGIN DEFINITION
  // =========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tooltip');
      var options = _typeof(option) == 'object' && option;
      var selector = options && options.selector;
      if (!data && option == 'destroy') return;

      if (selector) {
        if (!data) $this.data('bs.tooltip', data = {});
        if (!data[selector]) data[selector] = new Tooltip(this, options);
      } else {
        if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
      }

      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tooltip;
  $.fn.tooltip = Plugin;
  $.fn.tooltip.Constructor = Tooltip; // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old;
    return this;
  };
}(jQuery);
/* ========================================================================
 * Bootstrap: popover.js v3.3.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function Popover(element, options) {
    this.init('popover', element, options);
  };

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');
  Popover.VERSION = '3.3.0';
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }); // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
  Popover.prototype.constructor = Popover;

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS;
  };

  Popover.prototype.setContent = function () {
    var $tip = this.tip();
    var title = this.getTitle();
    var content = this.getContent();
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
    $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
    this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);
    $tip.removeClass('fade top bottom left right in'); // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.

    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
  };

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  };

  Popover.prototype.getContent = function () {
    var $e = this.$element;
    var o = this.options;
    return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
  };

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  };

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template);
    return this.$tip;
  }; // POPOVER PLUGIN DEFINITION
  // =========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.popover');
      var options = _typeof(option) == 'object' && option;
      var selector = options && options.selector;
      if (!data && option == 'destroy') return;

      if (selector) {
        if (!data) $this.data('bs.popover', data = {});
        if (!data[selector]) data[selector] = new Popover(this, options);
      } else {
        if (!data) $this.data('bs.popover', data = new Popover(this, options));
      }

      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.popover;
  $.fn.popover = Plugin;
  $.fn.popover.Constructor = Popover; // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old;
    return this;
  };
}(jQuery);
/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this);
    this.$body = $('body');
    this.$scrollElement = $(element).is('body') ? $(window) : $(element);
    this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
    this.selector = (this.options.target || '') + ' .nav li > a';
    this.offsets = [];
    this.targets = [];
    this.activeTarget = null;
    this.scrollHeight = 0;
    this.$scrollElement.on('scroll.bs.scrollspy', process);
    this.refresh();
    this.process();
  }

  ScrollSpy.VERSION = '3.3.0';
  ScrollSpy.DEFAULTS = {
    offset: 10
  };

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  };

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = 'offset';
    var offsetBase = 0;

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position';
      offsetBase = this.$scrollElement.scrollTop();
    }

    this.offsets = [];
    this.targets = [];
    this.scrollHeight = this.getScrollHeight();
    var self = this;
    this.$body.find(this.selector).map(function () {
      var $el = $(this);
      var href = $el.data('target') || $el.attr('href');
      var $href = /^#./.test(href) && $(href);
      return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      self.offsets.push(this[0]);
      self.targets.push(this[1]);
    });
  };

  ScrollSpy.prototype.process = function () {
    var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
    var scrollHeight = this.getScrollHeight();
    var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
    var offsets = this.offsets;
    var targets = this.targets;
    var activeTarget = this.activeTarget;
    var i;

    if (this.scrollHeight != scrollHeight) {
      this.refresh();
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null;
      return this.clear();
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i]);
    }
  };

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target;
    this.clear();
    var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
    var active = $(selector).parents('li').addClass('active');

    if (active.parent('.dropdown-menu').length) {
      active = active.closest('li.dropdown').addClass('active');
    }

    active.trigger('activate.bs.scrollspy');
  };

  ScrollSpy.prototype.clear = function () {
    $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
  }; // SCROLLSPY PLUGIN DEFINITION
  // ===========================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.scrollspy');
      var options = _typeof(option) == 'object' && option;
      if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.scrollspy;
  $.fn.scrollspy = Plugin;
  $.fn.scrollspy.Constructor = ScrollSpy; // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old;
    return this;
  }; // SCROLLSPY DATA-API
  // ==================


  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this);
      Plugin.call($spy, $spy.data());
    });
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: tab.js v3.3.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // TAB CLASS DEFINITION
  // ====================

  var Tab = function Tab(element) {
    this.element = $(element);
  };

  Tab.VERSION = '3.3.0';
  Tab.TRANSITION_DURATION = 150;

  Tab.prototype.show = function () {
    var $this = this.element;
    var $ul = $this.closest('ul:not(.dropdown-menu)');
    var selector = $this.data('target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return;
    var $previous = $ul.find('.active:last a');
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    });
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    });
    $previous.trigger(hideEvent);
    $this.trigger(showEvent);
    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;
    var $target = $(selector);
    this.activate($this.closest('li'), $ul);
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      });
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      });
    });
  };

  Tab.prototype.activate = function (element, container, callback) {
    var $active = container.find('> .active');
    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

    function next() {
      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);
      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

      if (transition) {
        element[0].offsetWidth; // reflow for transition

        element.addClass('in');
      } else {
        element.removeClass('fade');
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
      }

      callback && callback();
    }

    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
    $active.removeClass('in');
  }; // TAB PLUGIN DEFINITION
  // =====================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.tab');
      if (!data) $this.data('bs.tab', data = new Tab(this));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.tab;
  $.fn.tab = Plugin;
  $.fn.tab.Constructor = Tab; // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old;
    return this;
  }; // TAB DATA-API
  // ============


  var clickHandler = function clickHandler(e) {
    e.preventDefault();
    Plugin.call($(this), 'show');
  };

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
}(jQuery);
/* ========================================================================
 * Bootstrap: affix.js v3.3.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function Affix(element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options);
    this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));
    this.$element = $(element);
    this.affixed = this.unpin = this.pinnedOffset = null;
    this.checkPosition();
  };

  Affix.VERSION = '3.3.0';
  Affix.RESET = 'affix affix-top affix-bottom';
  Affix.DEFAULTS = {
    offset: 0,
    target: window
  };

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    var targetHeight = this.$target.height();
    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
      return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
    }

    var initializing = this.affixed == null;
    var colliderTop = initializing ? scrollTop : position.top;
    var colliderHeight = initializing ? targetHeight : height;
    if (offsetTop != null && colliderTop <= offsetTop) return 'top';
    if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';
    return false;
  };

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(Affix.RESET).addClass('affix');
    var scrollTop = this.$target.scrollTop();
    var position = this.$element.offset();
    return this.pinnedOffset = position.top - scrollTop;
  };

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1);
  };

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return;
    var height = this.$element.height();
    var offset = this.options.offset;
    var offsetTop = offset.top;
    var offsetBottom = offset.bottom;
    var scrollHeight = $('body').height();
    if (_typeof(offset) != 'object') offsetBottom = offsetTop = offset;
    if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);
    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '');
      var affixType = 'affix' + (affix ? '-' + affix : '');
      var e = $.Event(affixType + '.bs.affix');
      this.$element.trigger(e);
      if (e.isDefaultPrevented()) return;
      this.affixed = affix;
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;
      this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      });
    }
  }; // AFFIX PLUGIN DEFINITION
  // =======================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.affix');
      var options = _typeof(option) == 'object' && option;
      if (!data) $this.data('bs.affix', data = new Affix(this, options));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.affix;
  $.fn.affix = Plugin;
  $.fn.affix.Constructor = Affix; // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old;
    return this;
  }; // AFFIX DATA-API
  // ==============


  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this);
      var data = $spy.data();
      data.offset = data.offset || {};
      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
      if (data.offsetTop != null) data.offset.top = data.offsetTop;
      Plugin.call($spy, data);
    });
  });
}(jQuery);

/***/ }),

/***/ "./resources/js/edit/codemirror.js":
/*!*****************************************!*\
  !*** ./resources/js/edit/codemirror.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module))) module.exports = e();else {
    if (true) return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    this.CodeMirror = e();
  }
}(function () {
  "use strict";

  function e(r, n) {
    if (!(this instanceof e)) return new e(r, n);
    this.options = n = n ? So(n) : {}, So(Fl, n, !1), d(n);
    var i = n.value;
    "string" == typeof i && (i = new us(i, n.mode)), this.doc = i;
    var o = this.display = new t(r, i);
    o.wrapper.CodeMirror = this, u(this), s(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), n.autofocus && !gl && Nr(this), m(this), this.state = {
      keyMaps: [],
      overlays: [],
      modeGen: 0,
      overwrite: !1,
      focused: !1,
      suppressEdits: !1,
      pasteIncoming: !1,
      cutIncoming: !1,
      draggingText: !1,
      highlight: new mo(),
      keySeq: null
    }, il && 11 > ol && setTimeout(ko(Ar, this, !0), 20), Dr(this), Po(), ir(this), this.curOp.forceUpdate = !0, Pi(this, i), n.autofocus && !gl || Do() == o.input ? setTimeout(ko(nn, this), 20) : on(this);

    for (var l in Bl) {
      Bl.hasOwnProperty(l) && Bl[l](this, n[l], Gl);
    }

    C(this);

    for (var a = 0; a < Xl.length; ++a) {
      Xl[a](this);
    }

    lr(this);
  }

  function t(e, t) {
    var r = this,
        n = r.input = Ao("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
    ll ? n.style.width = "1000px" : n.setAttribute("wrap", "off"), pl && (n.style.border = "1px solid black"), n.setAttribute("autocorrect", "off"), n.setAttribute("autocapitalize", "off"), n.setAttribute("spellcheck", "false"), r.inputDiv = Ao("div", [n], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), r.scrollbarFiller = Ao("div", null, "CodeMirror-scrollbar-filler"), r.scrollbarFiller.setAttribute("not-content", "true"), r.gutterFiller = Ao("div", null, "CodeMirror-gutter-filler"), r.gutterFiller.setAttribute("not-content", "true"), r.lineDiv = Ao("div", null, "CodeMirror-code"), r.selectionDiv = Ao("div", null, null, "position: relative; z-index: 1"), r.cursorDiv = Ao("div", null, "CodeMirror-cursors"), r.measure = Ao("div", null, "CodeMirror-measure"), r.lineMeasure = Ao("div", null, "CodeMirror-measure"), r.lineSpace = Ao("div", [r.measure, r.lineMeasure, r.selectionDiv, r.cursorDiv, r.lineDiv], null, "position: relative; outline: none"), r.mover = Ao("div", [Ao("div", [r.lineSpace], "CodeMirror-lines")], null, "position: relative"), r.sizer = Ao("div", [r.mover], "CodeMirror-sizer"), r.sizerWidth = null, r.heightForcer = Ao("div", null, null, "position: absolute; height: " + bs + "px; width: 1px;"), r.gutters = Ao("div", null, "CodeMirror-gutters"), r.lineGutter = null, r.scroller = Ao("div", [r.sizer, r.heightForcer, r.gutters], "CodeMirror-scroll"), r.scroller.setAttribute("tabIndex", "-1"), r.wrapper = Ao("div", [r.inputDiv, r.scrollbarFiller, r.gutterFiller, r.scroller], "CodeMirror"), il && 8 > ol && (r.gutters.style.zIndex = -1, r.scroller.style.paddingRight = 0), pl && (n.style.width = "0px"), ll || (r.scroller.draggable = !0), fl && (r.inputDiv.style.height = "1px", r.inputDiv.style.position = "absolute"), e && (e.appendChild ? e.appendChild(r.wrapper) : e(r.wrapper)), r.viewFrom = r.viewTo = t.first, r.reportedViewFrom = r.reportedViewTo = t.first, r.view = [], r.renderedView = null, r.externalMeasured = null, r.viewOffset = 0, r.lastWrapHeight = r.lastWrapWidth = 0, r.updateLineNumbers = null, r.nativeBarWidth = r.barHeight = r.barWidth = 0, r.scrollbarsClipped = !1, r.lineNumWidth = r.lineNumInnerWidth = r.lineNumChars = null, r.prevInput = "", r.alignWidgets = !1, r.pollingFast = !1, r.poll = new mo(), r.cachedCharWidth = r.cachedTextHeight = r.cachedPaddingH = null, r.inaccurateSelection = !1, r.maxLine = null, r.maxLineLength = 0, r.maxLineChanged = !1, r.wheelDX = r.wheelDY = r.wheelStartX = r.wheelStartY = null, r.shift = !1, r.selForContextMenu = null;
  }

  function r(t) {
    t.doc.mode = e.getMode(t.options, t.doc.modeOption), n(t);
  }

  function n(e) {
    e.doc.iter(function (e) {
      e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null);
    }), e.doc.frontier = e.doc.first, St(e, 100), e.state.modeGen++, e.curOp && br(e);
  }

  function i(e) {
    e.options.lineWrapping ? (zs(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (Ds(e.display.wrapper, "CodeMirror-wrap"), h(e)), l(e), br(e), Xt(e), setTimeout(function () {
      y(e);
    }, 100);
  }

  function o(e) {
    var t = rr(e.display),
        r = e.options.lineWrapping,
        n = r && Math.max(5, e.display.scroller.clientWidth / nr(e.display) - 3);
    return function (i) {
      if (ui(e.doc, i)) return 0;
      var o = 0;
      if (i.widgets) for (var l = 0; l < i.widgets.length; l++) {
        i.widgets[l].height && (o += i.widgets[l].height);
      }
      return r ? o + (Math.ceil(i.text.length / n) || 1) * t : o + t;
    };
  }

  function l(e) {
    var t = e.doc,
        r = o(e);
    t.iter(function (e) {
      var t = r(e);
      t != e.height && Gi(e, t);
    });
  }

  function s(e) {
    e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Xt(e);
  }

  function a(e) {
    u(e), br(e), setTimeout(function () {
      x(e);
    }, 20);
  }

  function u(e) {
    var t = e.display.gutters,
        r = e.options.gutters;
    No(t);

    for (var n = 0; n < r.length; ++n) {
      var i = r[n],
          o = t.appendChild(Ao("div", null, "CodeMirror-gutter " + i));
      "CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px");
    }

    t.style.display = n ? "" : "none", c(e);
  }

  function c(e) {
    var t = e.display.gutters.offsetWidth;
    e.display.sizer.style.marginLeft = t + "px";
  }

  function f(e) {
    if (0 == e.height) return 0;

    for (var t, r = e.text.length, n = e; t = ri(n);) {
      var i = t.find(0, !0);
      n = i.from.line, r += i.from.ch - i.to.ch;
    }

    for (n = e; t = ni(n);) {
      var i = t.find(0, !0);
      r -= n.text.length - i.from.ch, n = i.to.line, r += n.text.length - i.to.ch;
    }

    return r;
  }

  function h(e) {
    var t = e.display,
        r = e.doc;
    t.maxLine = Ri(r, r.first), t.maxLineLength = f(t.maxLine), t.maxLineChanged = !0, r.iter(function (e) {
      var r = f(e);
      r > t.maxLineLength && (t.maxLineLength = r, t.maxLine = e);
    });
  }

  function d(e) {
    var t = xo(e.gutters, "CodeMirror-linenumbers");
    -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1));
  }

  function p(e) {
    var t = e.display,
        r = t.gutters.offsetWidth,
        n = Math.round(e.doc.height + At(e.display));
    return {
      clientHeight: t.scroller.clientHeight,
      viewHeight: t.wrapper.clientHeight,
      scrollWidth: t.scroller.scrollWidth,
      clientWidth: t.scroller.clientWidth,
      viewWidth: t.wrapper.clientWidth,
      barLeft: e.options.fixedGutter ? r : 0,
      docHeight: n,
      scrollHeight: n + Ht(e) + t.barHeight,
      nativeBarWidth: t.nativeBarWidth,
      gutterWidth: r
    };
  }

  function g(e, t, r) {
    this.cm = r;
    var n = this.vert = Ao("div", [Ao("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"),
        i = this.horiz = Ao("div", [Ao("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
    e(n), e(i), gs(n, "scroll", function () {
      n.clientHeight && t(n.scrollTop, "vertical");
    }), gs(i, "scroll", function () {
      i.clientWidth && t(i.scrollLeft, "horizontal");
    }), this.checkedOverlay = !1, il && 8 > ol && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
  }

  function v() {}

  function m(t) {
    t.display.scrollbars && (t.display.scrollbars.clear(), t.display.scrollbars.addClass && Ds(t.display.wrapper, t.display.scrollbars.addClass)), t.display.scrollbars = new e.scrollbarModel[t.options.scrollbarStyle](function (e) {
      t.display.wrapper.insertBefore(e, t.display.scrollbarFiller), gs(e, "mousedown", function () {
        t.state.focused && setTimeout(ko(Nr, t), 0);
      }), e.setAttribute("not-content", "true");
    }, function (e, r) {
      "horizontal" == r ? jr(t, e) : Xr(t, e);
    }, t), t.display.scrollbars.addClass && zs(t.display.wrapper, t.display.scrollbars.addClass);
  }

  function y(e, t) {
    t || (t = p(e));
    var r = e.display.barWidth,
        n = e.display.barHeight;
    b(e, t);

    for (var i = 0; 4 > i && r != e.display.barWidth || n != e.display.barHeight; i++) {
      r != e.display.barWidth && e.options.lineWrapping && H(e), b(e, p(e)), r = e.display.barWidth, n = e.display.barHeight;
    }
  }

  function b(e, t) {
    var r = e.display,
        n = r.scrollbars.update(t);
    r.sizer.style.paddingRight = (r.barWidth = n.right) + "px", r.sizer.style.paddingBottom = (r.barHeight = n.bottom) + "px", n.right && n.bottom ? (r.scrollbarFiller.style.display = "block", r.scrollbarFiller.style.height = n.bottom + "px", r.scrollbarFiller.style.width = n.right + "px") : r.scrollbarFiller.style.display = "", n.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (r.gutterFiller.style.display = "block", r.gutterFiller.style.height = n.bottom + "px", r.gutterFiller.style.width = t.gutterWidth + "px") : r.gutterFiller.style.display = "";
  }

  function w(e, t, r) {
    var n = r && null != r.top ? Math.max(0, r.top) : e.scroller.scrollTop;
    n = Math.floor(n - Wt(e));
    var i = r && null != r.bottom ? r.bottom : n + e.wrapper.clientHeight,
        o = Vi(t, n),
        l = Vi(t, i);

    if (r && r.ensure) {
      var s = r.ensure.from.line,
          a = r.ensure.to.line;
      o > s ? (o = s, l = Vi(t, Ki(Ri(t, s)) + e.wrapper.clientHeight)) : Math.min(a, t.lastLine()) >= l && (o = Vi(t, Ki(Ri(t, a)) - e.wrapper.clientHeight), l = a);
    }

    return {
      from: o,
      to: Math.max(l, o + 1)
    };
  }

  function x(e) {
    var t = e.display,
        r = t.view;

    if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
      for (var n = S(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = n + "px", l = 0; l < r.length; l++) {
        if (!r[l].hidden) {
          e.options.fixedGutter && r[l].gutter && (r[l].gutter.style.left = o);
          var s = r[l].alignable;
          if (s) for (var a = 0; a < s.length; a++) {
            s[a].style.left = o;
          }
        }
      }

      e.options.fixedGutter && (t.gutters.style.left = n + i + "px");
    }
  }

  function C(e) {
    if (!e.options.lineNumbers) return !1;
    var t = e.doc,
        r = L(e.options, t.first + t.size - 1),
        n = e.display;

    if (r.length != n.lineNumChars) {
      var i = n.measure.appendChild(Ao("div", [Ao("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
          o = i.firstChild.offsetWidth,
          l = i.offsetWidth - o;
      return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l), n.lineNumWidth = n.lineNumInnerWidth + l, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", c(e), !0;
    }

    return !1;
  }

  function L(e, t) {
    return String(e.lineNumberFormatter(t + e.firstLineNumber));
  }

  function S(e) {
    return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
  }

  function k(e, t, r) {
    var n = e.display;
    this.viewport = t, this.visible = w(n, e.doc, t), this.editorIsHidden = !n.wrapper.offsetWidth, this.wrapperHeight = n.wrapper.clientHeight, this.wrapperWidth = n.wrapper.clientWidth, this.oldDisplayWidth = Ot(e), this.force = r, this.dims = D(e);
  }

  function M(e) {
    var t = e.display;
    !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Ht(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Ht(e) + "px", t.scrollbarsClipped = !0);
  }

  function T(e, t) {
    var r = e.display,
        n = e.doc;
    if (t.editorIsHidden) return xr(e), !1;
    if (!t.force && t.visible.from >= r.viewFrom && t.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == kr(e)) return !1;
    C(e) && (xr(e), t.dims = D(e));
    var i = n.first + n.size,
        o = Math.max(t.visible.from - e.options.viewportMargin, n.first),
        l = Math.min(i, t.visible.to + e.options.viewportMargin);
    r.viewFrom < o && o - r.viewFrom < 20 && (o = Math.max(n.first, r.viewFrom)), r.viewTo > l && r.viewTo - l < 20 && (l = Math.min(i, r.viewTo)), Cl && (o = si(e.doc, o), l = ai(e.doc, l));
    var s = o != r.viewFrom || l != r.viewTo || r.lastWrapHeight != t.wrapperHeight || r.lastWrapWidth != t.wrapperWidth;
    Sr(e, o, l), r.viewOffset = Ki(Ri(e.doc, r.viewFrom)), e.display.mover.style.top = r.viewOffset + "px";
    var a = kr(e);
    if (!s && 0 == a && !t.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo)) return !1;
    var u = Do();
    return a > 4 && (r.lineDiv.style.display = "none"), z(e, r.updateLineNumbers, t.dims), a > 4 && (r.lineDiv.style.display = ""), r.renderedView = r.view, u && Do() != u && u.offsetHeight && u.focus(), No(r.cursorDiv), No(r.selectionDiv), r.heightForcer.style.top = r.gutters.style.height = 0, s && (r.lastWrapHeight = t.wrapperHeight, r.lastWrapWidth = t.wrapperWidth, St(e, 400)), r.updateLineNumbers = null, !0;
  }

  function W(e, t) {
    for (var r = t.force, n = t.viewport, i = !0;; i = !1) {
      if (i && e.options.lineWrapping && t.oldDisplayWidth != Ot(e)) r = !0;else if (r = !1, n && null != n.top && (n = {
        top: Math.min(e.doc.height + At(e.display) - Dt(e), n.top)
      }), t.visible = w(e.display, e.doc, n), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo) break;
      if (!T(e, t)) break;
      H(e);
      var o = p(e);
      wt(e), N(e, o), y(e, o);
    }

    co(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (co(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
  }

  function A(e, t) {
    var r = new k(e, t);

    if (T(e, r)) {
      H(e), W(e, r);
      var n = p(e);
      wt(e), N(e, n), y(e, n);
    }
  }

  function N(e, t) {
    e.display.sizer.style.minHeight = t.docHeight + "px";
    var r = t.docHeight + Ht(e);
    e.display.heightForcer.style.top = r + "px", e.display.gutters.style.height = Math.max(r, t.clientHeight) + "px";
  }

  function H(e) {
    for (var t = e.display, r = t.lineDiv.offsetTop, n = 0; n < t.view.length; n++) {
      var i,
          o = t.view[n];

      if (!o.hidden) {
        if (il && 8 > ol) {
          var l = o.node.offsetTop + o.node.offsetHeight;
          i = l - r, r = l;
        } else {
          var s = o.node.getBoundingClientRect();
          i = s.bottom - s.top;
        }

        var a = o.line.height - i;
        if (2 > i && (i = rr(t)), (a > .001 || -.001 > a) && (Gi(o.line, i), O(o.line), o.rest)) for (var u = 0; u < o.rest.length; u++) {
          O(o.rest[u]);
        }
      }
    }
  }

  function O(e) {
    if (e.widgets) for (var t = 0; t < e.widgets.length; ++t) {
      e.widgets[t].height = e.widgets[t].node.offsetHeight;
    }
  }

  function D(e) {
    for (var t = e.display, r = {}, n = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, l = 0; o; o = o.nextSibling, ++l) {
      r[e.options.gutters[l]] = o.offsetLeft + o.clientLeft + i, n[e.options.gutters[l]] = o.clientWidth;
    }

    return {
      fixedPos: S(t),
      gutterTotalWidth: t.gutters.offsetWidth,
      gutterLeft: r,
      gutterWidth: n,
      wrapperWidth: t.wrapper.clientWidth
    };
  }

  function z(e, t, r) {
    function n(t) {
      var r = t.nextSibling;
      return ll && vl && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), r;
    }

    for (var i = e.display, o = e.options.lineNumbers, l = i.lineDiv, s = l.firstChild, a = i.view, u = i.viewFrom, c = 0; c < a.length; c++) {
      var f = a[c];
      if (f.hidden) ;else if (f.node) {
        for (; s != f.node;) {
          s = n(s);
        }

        var h = o && null != t && u >= t && f.lineNumber;
        f.changes && (xo(f.changes, "gutter") > -1 && (h = !1), I(e, f, u, r)), h && (No(f.lineNumber), f.lineNumber.appendChild(document.createTextNode(L(e.options, u)))), s = f.node.nextSibling;
      } else {
        var d = V(e, f, u, r);
        l.insertBefore(d, s);
      }
      u += f.size;
    }

    for (; s;) {
      s = n(s);
    }
  }

  function I(e, t, r, n) {
    for (var i = 0; i < t.changes.length; i++) {
      var o = t.changes[i];
      "text" == o ? F(e, t) : "gutter" == o ? G(e, t, r, n) : "class" == o ? B(t) : "widget" == o && U(t, n);
    }

    t.changes = null;
  }

  function E(e) {
    return e.node == e.text && (e.node = Ao("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), il && 8 > ol && (e.node.style.zIndex = 2)), e.node;
  }

  function P(e) {
    var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
    if (t && (t += " CodeMirror-linebackground"), e.background) t ? e.background.className = t : (e.background.parentNode.removeChild(e.background), e.background = null);else if (t) {
      var r = E(e);
      e.background = r.insertBefore(Ao("div", null, t), r.firstChild);
    }
  }

  function R(e, t) {
    var r = e.display.externalMeasured;
    return r && r.line == t.line ? (e.display.externalMeasured = null, t.measure = r.measure, r.built) : ki(e, t);
  }

  function F(e, t) {
    var r = t.text.className,
        n = R(e, t);
    t.text == t.node && (t.node = n.pre), t.text.parentNode.replaceChild(n.pre, t.text), t.text = n.pre, n.bgClass != t.bgClass || n.textClass != t.textClass ? (t.bgClass = n.bgClass, t.textClass = n.textClass, B(t)) : r && (t.text.className = r);
  }

  function B(e) {
    P(e), e.line.wrapClass ? E(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
    var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
    e.text.className = t || "";
  }

  function G(e, t, r, n) {
    t.gutter && (t.node.removeChild(t.gutter), t.gutter = null);
    var i = t.line.gutterMarkers;

    if (e.options.lineNumbers || i) {
      var o = E(t),
          l = t.gutter = o.insertBefore(Ao("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px; width: " + n.gutterTotalWidth + "px"), t.text);
      if (t.line.gutterClass && (l.className += " " + t.line.gutterClass), !e.options.lineNumbers || i && i["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(Ao("div", L(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))), i) for (var s = 0; s < e.options.gutters.length; ++s) {
        var a = e.options.gutters[s],
            u = i.hasOwnProperty(a) && i[a];
        u && l.appendChild(Ao("div", [u], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[a] + "px; width: " + n.gutterWidth[a] + "px"));
      }
    }
  }

  function U(e, t) {
    e.alignable && (e.alignable = null);

    for (var r, n = e.node.firstChild; n; n = r) {
      var r = n.nextSibling;
      "CodeMirror-linewidget" == n.className && e.node.removeChild(n);
    }

    K(e, t);
  }

  function V(e, t, r, n) {
    var i = R(e, t);
    return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), B(t), G(e, t, r, n), K(t, n), t.node;
  }

  function K(e, t) {
    if (X(e.line, e, t, !0), e.rest) for (var r = 0; r < e.rest.length; r++) {
      X(e.rest[r], e, t, !1);
    }
  }

  function X(e, t, r, n) {
    if (e.widgets) for (var i = E(t), o = 0, l = e.widgets; o < l.length; ++o) {
      var s = l[o],
          a = Ao("div", [s.node], "CodeMirror-linewidget");
      s.handleMouseEvents || a.setAttribute("cm-ignore-events", "true"), j(s, a, t, r), n && s.above ? i.insertBefore(a, t.gutter || t.text) : i.appendChild(a), co(s, "redraw");
    }
  }

  function j(e, t, r, n) {
    if (e.noHScroll) {
      (r.alignable || (r.alignable = [])).push(t);
      var i = n.wrapperWidth;
      t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = i + "px";
    }

    e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px"));
  }

  function _(e) {
    return Ll(e.line, e.ch);
  }

  function Y(e, t) {
    return Sl(e, t) < 0 ? t : e;
  }

  function $(e, t) {
    return Sl(e, t) < 0 ? e : t;
  }

  function q(e, t) {
    this.ranges = e, this.primIndex = t;
  }

  function Z(e, t) {
    this.anchor = e, this.head = t;
  }

  function Q(e, t) {
    var r = e[t];
    e.sort(function (e, t) {
      return Sl(e.from(), t.from());
    }), t = xo(e, r);

    for (var n = 1; n < e.length; n++) {
      var i = e[n],
          o = e[n - 1];

      if (Sl(o.to(), i.from()) >= 0) {
        var l = $(o.from(), i.from()),
            s = Y(o.to(), i.to()),
            a = o.empty() ? i.from() == i.head : o.from() == o.head;
        t >= n && --t, e.splice(--n, 2, new Z(a ? s : l, a ? l : s));
      }
    }

    return new q(e, t);
  }

  function J(e, t) {
    return new q([new Z(e, t || e)], 0);
  }

  function et(e, t) {
    return Math.max(e.first, Math.min(t, e.first + e.size - 1));
  }

  function tt(e, t) {
    if (t.line < e.first) return Ll(e.first, 0);
    var r = e.first + e.size - 1;
    return t.line > r ? Ll(r, Ri(e, r).text.length) : rt(t, Ri(e, t.line).text.length);
  }

  function rt(e, t) {
    var r = e.ch;
    return null == r || r > t ? Ll(e.line, t) : 0 > r ? Ll(e.line, 0) : e;
  }

  function nt(e, t) {
    return t >= e.first && t < e.first + e.size;
  }

  function it(e, t) {
    for (var r = [], n = 0; n < t.length; n++) {
      r[n] = tt(e, t[n]);
    }

    return r;
  }

  function ot(e, t, r, n) {
    if (e.cm && e.cm.display.shift || e.extend) {
      var i = t.anchor;

      if (n) {
        var o = Sl(r, i) < 0;
        o != Sl(n, i) < 0 ? (i = r, r = n) : o != Sl(r, n) < 0 && (r = n);
      }

      return new Z(i, r);
    }

    return new Z(n || r, r);
  }

  function lt(e, t, r, n) {
    ht(e, new q([ot(e, e.sel.primary(), t, r)], 0), n);
  }

  function st(e, t, r) {
    for (var n = [], i = 0; i < e.sel.ranges.length; i++) {
      n[i] = ot(e, e.sel.ranges[i], t[i], null);
    }

    var o = Q(n, e.sel.primIndex);
    ht(e, o, r);
  }

  function at(e, t, r, n) {
    var i = e.sel.ranges.slice(0);
    i[t] = r, ht(e, Q(i, e.sel.primIndex), n);
  }

  function ut(e, t, r, n) {
    ht(e, J(t, r), n);
  }

  function ct(e, t) {
    var r = {
      ranges: t.ranges,
      update: function update(t) {
        this.ranges = [];

        for (var r = 0; r < t.length; r++) {
          this.ranges[r] = new Z(tt(e, t[r].anchor), tt(e, t[r].head));
        }
      }
    };
    return ms(e, "beforeSelectionChange", e, r), e.cm && ms(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? Q(r.ranges, r.ranges.length - 1) : t;
  }

  function ft(e, t, r) {
    var n = e.history.done,
        i = wo(n);
    i && i.ranges ? (n[n.length - 1] = t, dt(e, t, r)) : ht(e, t, r);
  }

  function ht(e, t, r) {
    dt(e, t, r), Qi(e, e.sel, e.cm ? e.cm.curOp.id : 0 / 0, r);
  }

  function dt(e, t, r) {
    (go(e, "beforeSelectionChange") || e.cm && go(e.cm, "beforeSelectionChange")) && (t = ct(e, t));
    var n = r && r.bias || (Sl(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
    pt(e, vt(e, t, n, !0)), r && r.scroll === !1 || !e.cm || kn(e.cm);
  }

  function pt(e, t) {
    t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, po(e.cm)), co(e, "cursorActivity", e));
  }

  function gt(e) {
    pt(e, vt(e, e.sel, null, !1), xs);
  }

  function vt(e, t, r, n) {
    for (var i, o = 0; o < t.ranges.length; o++) {
      var l = t.ranges[o],
          s = mt(e, l.anchor, r, n),
          a = mt(e, l.head, r, n);
      (i || s != l.anchor || a != l.head) && (i || (i = t.ranges.slice(0, o)), i[o] = new Z(s, a));
    }

    return i ? Q(i, t.primIndex) : t;
  }

  function mt(e, t, r, n) {
    var i = !1,
        o = t,
        l = r || 1;
    e.cantEdit = !1;

    e: for (;;) {
      var s = Ri(e, o.line);
      if (s.markedSpans) for (var a = 0; a < s.markedSpans.length; ++a) {
        var u = s.markedSpans[a],
            c = u.marker;

        if ((null == u.from || (c.inclusiveLeft ? u.from <= o.ch : u.from < o.ch)) && (null == u.to || (c.inclusiveRight ? u.to >= o.ch : u.to > o.ch))) {
          if (n && (ms(c, "beforeCursorEnter"), c.explicitlyCleared)) {
            if (s.markedSpans) {
              --a;
              continue;
            }

            break;
          }

          if (!c.atomic) continue;
          var f = c.find(0 > l ? -1 : 1);

          if (0 == Sl(f, o) && (f.ch += l, f.ch < 0 ? f = f.line > e.first ? tt(e, Ll(f.line - 1)) : null : f.ch > s.text.length && (f = f.line < e.first + e.size - 1 ? Ll(f.line + 1, 0) : null), !f)) {
            if (i) return n ? (e.cantEdit = !0, Ll(e.first, 0)) : mt(e, t, r, !0);
            i = !0, f = t, l = -l;
          }

          o = f;
          continue e;
        }
      }
      return o;
    }
  }

  function yt(e) {
    for (var t = e.display, r = e.doc, n = {}, i = n.cursors = document.createDocumentFragment(), o = n.selection = document.createDocumentFragment(), l = 0; l < r.sel.ranges.length; l++) {
      var s = r.sel.ranges[l],
          a = s.empty();
      (a || e.options.showCursorWhenSelecting) && xt(e, s, i), a || Ct(e, s, o);
    }

    if (e.options.moveInputWithCursor) {
      var u = Zt(e, r.sel.primary().head, "div"),
          c = t.wrapper.getBoundingClientRect(),
          f = t.lineDiv.getBoundingClientRect();
      n.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, u.top + f.top - c.top)), n.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, u.left + f.left - c.left));
    }

    return n;
  }

  function bt(e, t) {
    Ho(e.display.cursorDiv, t.cursors), Ho(e.display.selectionDiv, t.selection), null != t.teTop && (e.display.inputDiv.style.top = t.teTop + "px", e.display.inputDiv.style.left = t.teLeft + "px");
  }

  function wt(e) {
    bt(e, yt(e));
  }

  function xt(e, t, r) {
    var n = Zt(e, t.head, "div", null, null, !e.options.singleCursorHeightPerLine),
        i = r.appendChild(Ao("div", " ", "CodeMirror-cursor"));

    if (i.style.left = n.left + "px", i.style.top = n.top + "px", i.style.height = Math.max(0, n.bottom - n.top) * e.options.cursorHeight + "px", n.other) {
      var o = r.appendChild(Ao("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
      o.style.display = "", o.style.left = n.other.left + "px", o.style.top = n.other.top + "px", o.style.height = .85 * (n.other.bottom - n.other.top) + "px";
    }
  }

  function Ct(e, t, r) {
    function n(e, t, r, n) {
      0 > t && (t = 0), t = Math.round(t), n = Math.round(n), s.appendChild(Ao("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == r ? c - e : r) + "px; height: " + (n - t) + "px"));
    }

    function i(t, r, i) {
      function o(r, n) {
        return qt(e, Ll(t, r), "div", f, n);
      }

      var s,
          a,
          f = Ri(l, t),
          h = f.text.length;
      return Uo(Xi(f), r || 0, null == i ? h : i, function (e, t, l) {
        var f,
            d,
            p,
            g = o(e, "left");
        if (e == t) f = g, d = p = g.left;else {
          if (f = o(t - 1, "right"), "rtl" == l) {
            var v = g;
            g = f, f = v;
          }

          d = g.left, p = f.right;
        }
        null == r && 0 == e && (d = u), f.top - g.top > 3 && (n(d, g.top, null, g.bottom), d = u, g.bottom < f.top && n(d, g.bottom, null, f.top)), null == i && t == h && (p = c), (!s || g.top < s.top || g.top == s.top && g.left < s.left) && (s = g), (!a || f.bottom > a.bottom || f.bottom == a.bottom && f.right > a.right) && (a = f), u + 1 > d && (d = u), n(d, f.top, p - d, f.bottom);
      }), {
        start: s,
        end: a
      };
    }

    var o = e.display,
        l = e.doc,
        s = document.createDocumentFragment(),
        a = Nt(e.display),
        u = a.left,
        c = Math.max(o.sizerWidth, Ot(e) - o.sizer.offsetLeft) - a.right,
        f = t.from(),
        h = t.to();
    if (f.line == h.line) i(f.line, f.ch, h.ch);else {
      var d = Ri(l, f.line),
          p = Ri(l, h.line),
          g = oi(d) == oi(p),
          v = i(f.line, f.ch, g ? d.text.length + 1 : null).end,
          m = i(h.line, g ? 0 : null, h.ch).start;
      g && (v.top < m.top - 2 ? (n(v.right, v.top, null, v.bottom), n(u, m.top, m.left, m.bottom)) : n(v.right, v.top, m.left - v.right, v.bottom)), v.bottom < m.top && n(u, v.bottom, null, m.top);
    }
    r.appendChild(s);
  }

  function Lt(e) {
    if (e.state.focused) {
      var t = e.display;
      clearInterval(t.blinker);
      var r = !0;
      t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function () {
        t.cursorDiv.style.visibility = (r = !r) ? "" : "hidden";
      }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
    }
  }

  function St(e, t) {
    e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, ko(kt, e));
  }

  function kt(e) {
    var t = e.doc;

    if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.viewTo)) {
      var r = +new Date() + e.options.workTime,
          n = _l(t.mode, Tt(e, t.frontier)),
          i = [];

      t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500), function (o) {
        if (t.frontier >= e.display.viewFrom) {
          var l = o.styles,
              s = xi(e, o, n, !0);
          o.styles = s.styles;
          var a = o.styleClasses,
              u = s.classes;
          u ? o.styleClasses = u : a && (o.styleClasses = null);

          for (var c = !l || l.length != o.styles.length || a != u && (!a || !u || a.bgClass != u.bgClass || a.textClass != u.textClass), f = 0; !c && f < l.length; ++f) {
            c = l[f] != o.styles[f];
          }

          c && i.push(t.frontier), o.stateAfter = _l(t.mode, n);
        } else Li(e, o.text, n), o.stateAfter = t.frontier % 5 == 0 ? _l(t.mode, n) : null;

        return ++t.frontier, +new Date() > r ? (St(e, e.options.workDelay), !0) : void 0;
      }), i.length && dr(e, function () {
        for (var t = 0; t < i.length; t++) {
          wr(e, i[t], "text");
        }
      });
    }
  }

  function Mt(e, t, r) {
    for (var n, i, o = e.doc, l = r ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), s = t; s > l; --s) {
      if (s <= o.first) return o.first;
      var a = Ri(o, s - 1);
      if (a.stateAfter && (!r || s <= o.frontier)) return s;
      var u = Ss(a.text, null, e.options.tabSize);
      (null == i || n > u) && (i = s - 1, n = u);
    }

    return i;
  }

  function Tt(e, t, r) {
    var n = e.doc,
        i = e.display;
    if (!n.mode.startState) return !0;
    var o = Mt(e, t, r),
        l = o > n.first && Ri(n, o - 1).stateAfter;
    return l = l ? _l(n.mode, l) : Yl(n.mode), n.iter(o, t, function (r) {
      Li(e, r.text, l);
      var s = o == t - 1 || o % 5 == 0 || o >= i.viewFrom && o < i.viewTo;
      r.stateAfter = s ? _l(n.mode, l) : null, ++o;
    }), r && (n.frontier = o), l;
  }

  function Wt(e) {
    return e.lineSpace.offsetTop;
  }

  function At(e) {
    return e.mover.offsetHeight - e.lineSpace.offsetHeight;
  }

  function Nt(e) {
    if (e.cachedPaddingH) return e.cachedPaddingH;
    var t = Ho(e.measure, Ao("pre", "x")),
        r = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle,
        n = {
      left: parseInt(r.paddingLeft),
      right: parseInt(r.paddingRight)
    };
    return isNaN(n.left) || isNaN(n.right) || (e.cachedPaddingH = n), n;
  }

  function Ht(e) {
    return bs - e.display.nativeBarWidth;
  }

  function Ot(e) {
    return e.display.scroller.clientWidth - Ht(e) - e.display.barWidth;
  }

  function Dt(e) {
    return e.display.scroller.clientHeight - Ht(e) - e.display.barHeight;
  }

  function zt(e, t, r) {
    var n = e.options.lineWrapping,
        i = n && Ot(e);

    if (!t.measure.heights || n && t.measure.width != i) {
      var o = t.measure.heights = [];

      if (n) {
        t.measure.width = i;

        for (var l = t.text.firstChild.getClientRects(), s = 0; s < l.length - 1; s++) {
          var a = l[s],
              u = l[s + 1];
          Math.abs(a.bottom - u.bottom) > 2 && o.push((a.bottom + u.top) / 2 - r.top);
        }
      }

      o.push(r.bottom - r.top);
    }
  }

  function It(e, t, r) {
    if (e.line == t) return {
      map: e.measure.map,
      cache: e.measure.cache
    };

    for (var n = 0; n < e.rest.length; n++) {
      if (e.rest[n] == t) return {
        map: e.measure.maps[n],
        cache: e.measure.caches[n]
      };
    }

    for (var n = 0; n < e.rest.length; n++) {
      if (Ui(e.rest[n]) > r) return {
        map: e.measure.maps[n],
        cache: e.measure.caches[n],
        before: !0
      };
    }
  }

  function Et(e, t) {
    t = oi(t);
    var r = Ui(t),
        n = e.display.externalMeasured = new mr(e.doc, t, r);
    n.lineN = r;
    var i = n.built = ki(e, n);
    return n.text = i.pre, Ho(e.display.lineMeasure, i.pre), n;
  }

  function Pt(e, t, r, n) {
    return Bt(e, Ft(e, t), r, n);
  }

  function Rt(e, t) {
    if (t >= e.display.viewFrom && t < e.display.viewTo) return e.display.view[Cr(e, t)];
    var r = e.display.externalMeasured;
    return r && t >= r.lineN && t < r.lineN + r.size ? r : void 0;
  }

  function Ft(e, t) {
    var r = Ui(t),
        n = Rt(e, r);
    n && !n.text ? n = null : n && n.changes && I(e, n, r, D(e)), n || (n = Et(e, t));
    var i = It(n, t, r);
    return {
      line: t,
      view: n,
      rect: null,
      map: i.map,
      cache: i.cache,
      before: i.before,
      hasHeights: !1
    };
  }

  function Bt(e, t, r, n, i) {
    t.before && (r = -1);
    var o,
        l = r + (n || "");
    return t.cache.hasOwnProperty(l) ? o = t.cache[l] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (zt(e, t.view, t.rect), t.hasHeights = !0), o = Gt(e, t, r, n), o.bogus || (t.cache[l] = o)), {
      left: o.left,
      right: o.right,
      top: i ? o.rtop : o.top,
      bottom: i ? o.rbottom : o.bottom
    };
  }

  function Gt(e, t, r, n) {
    for (var i, o, l, s, a = t.map, u = 0; u < a.length; u += 3) {
      var c = a[u],
          f = a[u + 1];

      if (c > r ? (o = 0, l = 1, s = "left") : f > r ? (o = r - c, l = o + 1) : (u == a.length - 3 || r == f && a[u + 3] > r) && (l = f - c, o = l - 1, r >= f && (s = "right")), null != o) {
        if (i = a[u + 2], c == f && n == (i.insertLeft ? "left" : "right") && (s = n), "left" == n && 0 == o) for (; u && a[u - 2] == a[u - 3] && a[u - 1].insertLeft;) {
          i = a[(u -= 3) + 2], s = "left";
        }
        if ("right" == n && o == f - c) for (; u < a.length - 3 && a[u + 3] == a[u + 4] && !a[u + 5].insertLeft;) {
          i = a[(u += 3) + 2], s = "right";
        }
        break;
      }
    }

    var h;

    if (3 == i.nodeType) {
      for (var u = 0; 4 > u; u++) {
        for (; o && Wo(t.line.text.charAt(c + o));) {
          --o;
        }

        for (; f > c + l && Wo(t.line.text.charAt(c + l));) {
          ++l;
        }

        if (il && 9 > ol && 0 == o && l == f - c) h = i.parentNode.getBoundingClientRect();else if (il && e.options.lineWrapping) {
          var d = Ts(i, o, l).getClientRects();
          h = d.length ? d["right" == n ? d.length - 1 : 0] : Wl;
        } else h = Ts(i, o, l).getBoundingClientRect() || Wl;
        if (h.left || h.right || 0 == o) break;
        l = o, o -= 1, s = "right";
      }

      il && 11 > ol && (h = Ut(e.display.measure, h));
    } else {
      o > 0 && (s = n = "right");
      var d;
      h = e.options.lineWrapping && (d = i.getClientRects()).length > 1 ? d["right" == n ? d.length - 1 : 0] : i.getBoundingClientRect();
    }

    if (il && 9 > ol && !o && (!h || !h.left && !h.right)) {
      var p = i.parentNode.getClientRects()[0];
      h = p ? {
        left: p.left,
        right: p.left + nr(e.display),
        top: p.top,
        bottom: p.bottom
      } : Wl;
    }

    for (var g = h.top - t.rect.top, v = h.bottom - t.rect.top, m = (g + v) / 2, y = t.view.measure.heights, u = 0; u < y.length - 1 && !(m < y[u]); u++) {
      ;
    }

    var b = u ? y[u - 1] : 0,
        w = y[u],
        x = {
      left: ("right" == s ? h.right : h.left) - t.rect.left,
      right: ("left" == s ? h.left : h.right) - t.rect.left,
      top: b,
      bottom: w
    };
    return h.left || h.right || (x.bogus = !0), e.options.singleCursorHeightPerLine || (x.rtop = g, x.rbottom = v), x;
  }

  function Ut(e, t) {
    if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Go(e)) return t;
    var r = screen.logicalXDPI / screen.deviceXDPI,
        n = screen.logicalYDPI / screen.deviceYDPI;
    return {
      left: t.left * r,
      right: t.right * r,
      top: t.top * n,
      bottom: t.bottom * n
    };
  }

  function Vt(e) {
    if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest)) for (var t = 0; t < e.rest.length; t++) {
      e.measure.caches[t] = {};
    }
  }

  function Kt(e) {
    e.display.externalMeasure = null, No(e.display.lineMeasure);

    for (var t = 0; t < e.display.view.length; t++) {
      Vt(e.display.view[t]);
    }
  }

  function Xt(e) {
    Kt(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
  }

  function jt() {
    return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
  }

  function _t() {
    return window.pageYOffset || (document.documentElement || document.body).scrollTop;
  }

  function Yt(e, t, r, n) {
    if (t.widgets) for (var i = 0; i < t.widgets.length; ++i) {
      if (t.widgets[i].above) {
        var o = hi(t.widgets[i]);
        r.top += o, r.bottom += o;
      }
    }
    if ("line" == n) return r;
    n || (n = "local");
    var l = Ki(t);

    if ("local" == n ? l += Wt(e.display) : l -= e.display.viewOffset, "page" == n || "window" == n) {
      var s = e.display.lineSpace.getBoundingClientRect();
      l += s.top + ("window" == n ? 0 : _t());
      var a = s.left + ("window" == n ? 0 : jt());
      r.left += a, r.right += a;
    }

    return r.top += l, r.bottom += l, r;
  }

  function $t(e, t, r) {
    if ("div" == r) return t;
    var n = t.left,
        i = t.top;
    if ("page" == r) n -= jt(), i -= _t();else if ("local" == r || !r) {
      var o = e.display.sizer.getBoundingClientRect();
      n += o.left, i += o.top;
    }
    var l = e.display.lineSpace.getBoundingClientRect();
    return {
      left: n - l.left,
      top: i - l.top
    };
  }

  function qt(e, t, r, n, i) {
    return n || (n = Ri(e.doc, t.line)), Yt(e, n, Pt(e, n, t.ch, i), r);
  }

  function Zt(e, t, r, n, i, o) {
    function l(t, l) {
      var s = Bt(e, i, t, l ? "right" : "left", o);
      return l ? s.left = s.right : s.right = s.left, Yt(e, n, s, r);
    }

    function s(e, t) {
      var r = a[t],
          n = r.level % 2;
      return e == Vo(r) && t && r.level < a[t - 1].level ? (r = a[--t], e = Ko(r) - (r.level % 2 ? 0 : 1), n = !0) : e == Ko(r) && t < a.length - 1 && r.level < a[t + 1].level && (r = a[++t], e = Vo(r) - r.level % 2, n = !1), n && e == r.to && e > r.from ? l(e - 1) : l(e, n);
    }

    n = n || Ri(e.doc, t.line), i || (i = Ft(e, n));
    var a = Xi(n),
        u = t.ch;
    if (!a) return l(u);
    var c = Zo(a, u),
        f = s(u, c);
    return null != Us && (f.other = s(u, Us)), f;
  }

  function Qt(e, t) {
    var r = 0,
        t = tt(e.doc, t);
    e.options.lineWrapping || (r = nr(e.display) * t.ch);
    var n = Ri(e.doc, t.line),
        i = Ki(n) + Wt(e.display);
    return {
      left: r,
      right: r,
      top: i,
      bottom: i + n.height
    };
  }

  function Jt(e, t, r, n) {
    var i = Ll(e, t);
    return i.xRel = n, r && (i.outside = !0), i;
  }

  function er(e, t, r) {
    var n = e.doc;
    if (r += e.display.viewOffset, 0 > r) return Jt(n.first, 0, !0, -1);
    var i = Vi(n, r),
        o = n.first + n.size - 1;
    if (i > o) return Jt(n.first + n.size - 1, Ri(n, o).text.length, !0, 1);
    0 > t && (t = 0);

    for (var l = Ri(n, i);;) {
      var s = tr(e, l, i, t, r),
          a = ni(l),
          u = a && a.find(0, !0);
      if (!a || !(s.ch > u.from.ch || s.ch == u.from.ch && s.xRel > 0)) return s;
      i = Ui(l = u.to.line);
    }
  }

  function tr(e, t, r, n, i) {
    function o(n) {
      var i = Zt(e, Ll(r, n), "line", t, u);
      return s = !0, l > i.bottom ? i.left - a : l < i.top ? i.left + a : (s = !1, i.left);
    }

    var l = i - Ki(t),
        s = !1,
        a = 2 * e.display.wrapper.clientWidth,
        u = Ft(e, t),
        c = Xi(t),
        f = t.text.length,
        h = Xo(t),
        d = jo(t),
        p = o(h),
        g = s,
        v = o(d),
        m = s;
    if (n > v) return Jt(r, d, m, 1);

    for (;;) {
      if (c ? d == h || d == Jo(t, h, 1) : 1 >= d - h) {
        for (var y = p > n || v - n >= n - p ? h : d, b = n - (y == h ? p : v); Wo(t.text.charAt(y));) {
          ++y;
        }

        var w = Jt(r, y, y == h ? g : m, -1 > b ? -1 : b > 1 ? 1 : 0);
        return w;
      }

      var x = Math.ceil(f / 2),
          C = h + x;

      if (c) {
        C = h;

        for (var L = 0; x > L; ++L) {
          C = Jo(t, C, 1);
        }
      }

      var S = o(C);
      S > n ? (d = C, v = S, (m = s) && (v += 1e3), f = x) : (h = C, p = S, g = s, f -= x);
    }
  }

  function rr(e) {
    if (null != e.cachedTextHeight) return e.cachedTextHeight;

    if (null == kl) {
      kl = Ao("pre");

      for (var t = 0; 49 > t; ++t) {
        kl.appendChild(document.createTextNode("x")), kl.appendChild(Ao("br"));
      }

      kl.appendChild(document.createTextNode("x"));
    }

    Ho(e.measure, kl);
    var r = kl.offsetHeight / 50;
    return r > 3 && (e.cachedTextHeight = r), No(e.measure), r || 1;
  }

  function nr(e) {
    if (null != e.cachedCharWidth) return e.cachedCharWidth;
    var t = Ao("span", "xxxxxxxxxx"),
        r = Ao("pre", [t]);
    Ho(e.measure, r);
    var n = t.getBoundingClientRect(),
        i = (n.right - n.left) / 10;
    return i > 2 && (e.cachedCharWidth = i), i || 10;
  }

  function ir(e) {
    e.curOp = {
      cm: e,
      viewChanged: !1,
      startHeight: e.doc.height,
      forceUpdate: !1,
      updateInput: null,
      typing: !1,
      changeObjs: null,
      cursorActivityHandlers: null,
      cursorActivityCalled: 0,
      selectionChanged: !1,
      updateMaxLine: !1,
      scrollLeft: null,
      scrollTop: null,
      scrollToPos: null,
      id: ++Nl
    }, Al ? Al.ops.push(e.curOp) : e.curOp.ownsGroup = Al = {
      ops: [e.curOp],
      delayedCallbacks: []
    };
  }

  function or(e) {
    var t = e.delayedCallbacks,
        r = 0;

    do {
      for (; r < t.length; r++) {
        t[r]();
      }

      for (var n = 0; n < e.ops.length; n++) {
        var i = e.ops[n];
        if (i.cursorActivityHandlers) for (; i.cursorActivityCalled < i.cursorActivityHandlers.length;) {
          i.cursorActivityHandlers[i.cursorActivityCalled++](i.cm);
        }
      }
    } while (r < t.length);
  }

  function lr(e) {
    var t = e.curOp,
        r = t.ownsGroup;
    if (r) try {
      or(r);
    } finally {
      Al = null;

      for (var n = 0; n < r.ops.length; n++) {
        r.ops[n].cm.curOp = null;
      }

      sr(r);
    }
  }

  function sr(e) {
    for (var t = e.ops, r = 0; r < t.length; r++) {
      ar(t[r]);
    }

    for (var r = 0; r < t.length; r++) {
      ur(t[r]);
    }

    for (var r = 0; r < t.length; r++) {
      cr(t[r]);
    }

    for (var r = 0; r < t.length; r++) {
      fr(t[r]);
    }

    for (var r = 0; r < t.length; r++) {
      hr(t[r]);
    }
  }

  function ar(e) {
    var t = e.cm,
        r = t.display;
    M(t), e.updateMaxLine && h(t), e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < r.viewFrom || e.scrollToPos.to.line >= r.viewTo) || r.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new k(t, e.mustUpdate && {
      top: e.scrollTop,
      ensure: e.scrollToPos
    }, e.forceUpdate);
  }

  function ur(e) {
    e.updatedDisplay = e.mustUpdate && T(e.cm, e.update);
  }

  function cr(e) {
    var t = e.cm,
        r = t.display;
    e.updatedDisplay && H(t), e.barMeasure = p(t), r.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Pt(t, r.maxLine, r.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(r.scroller.clientWidth, r.sizer.offsetLeft + e.adjustWidthTo + Ht(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, r.sizer.offsetLeft + e.adjustWidthTo - Ot(t))), (e.updatedDisplay || e.selectionChanged) && (e.newSelectionNodes = yt(t));
  }

  function fr(e) {
    var t = e.cm;
    null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && jr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1), e.newSelectionNodes && bt(t, e.newSelectionNodes), e.updatedDisplay && N(t, e.barMeasure), (e.updatedDisplay || e.startHeight != t.doc.height) && y(t, e.barMeasure), e.selectionChanged && Lt(t), t.state.focused && e.updateInput && Ar(t, e.typing);
  }

  function hr(e) {
    var t = e.cm,
        r = t.display,
        n = t.doc;

    if (e.updatedDisplay && W(t, e.update), null == r.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (r.wheelStartX = r.wheelStartY = null), null == e.scrollTop || r.scroller.scrollTop == e.scrollTop && !e.forceScroll || (n.scrollTop = Math.max(0, Math.min(r.scroller.scrollHeight - r.scroller.clientHeight, e.scrollTop)), r.scrollbars.setScrollTop(n.scrollTop), r.scroller.scrollTop = n.scrollTop), null == e.scrollLeft || r.scroller.scrollLeft == e.scrollLeft && !e.forceScroll || (n.scrollLeft = Math.max(0, Math.min(r.scroller.scrollWidth - Ot(t), e.scrollLeft)), r.scrollbars.setScrollLeft(n.scrollLeft), r.scroller.scrollLeft = n.scrollLeft, x(t)), e.scrollToPos) {
      var i = xn(t, tt(n, e.scrollToPos.from), tt(n, e.scrollToPos.to), e.scrollToPos.margin);
      e.scrollToPos.isCursor && t.state.focused && wn(t, i);
    }

    var o = e.maybeHiddenMarkers,
        l = e.maybeUnhiddenMarkers;
    if (o) for (var s = 0; s < o.length; ++s) {
      o[s].lines.length || ms(o[s], "hide");
    }
    if (l) for (var s = 0; s < l.length; ++s) {
      l[s].lines.length && ms(l[s], "unhide");
    }
    r.wrapper.offsetHeight && (n.scrollTop = t.display.scroller.scrollTop), e.changeObjs && ms(t, "changes", t, e.changeObjs);
  }

  function dr(e, t) {
    if (e.curOp) return t();
    ir(e);

    try {
      return t();
    } finally {
      lr(e);
    }
  }

  function pr(e, t) {
    return function () {
      if (e.curOp) return t.apply(e, arguments);
      ir(e);

      try {
        return t.apply(e, arguments);
      } finally {
        lr(e);
      }
    };
  }

  function gr(e) {
    return function () {
      if (this.curOp) return e.apply(this, arguments);
      ir(this);

      try {
        return e.apply(this, arguments);
      } finally {
        lr(this);
      }
    };
  }

  function vr(e) {
    return function () {
      var t = this.cm;
      if (!t || t.curOp) return e.apply(this, arguments);
      ir(t);

      try {
        return e.apply(this, arguments);
      } finally {
        lr(t);
      }
    };
  }

  function mr(e, t, r) {
    this.line = t, this.rest = li(t), this.size = this.rest ? Ui(wo(this.rest)) - r + 1 : 1, this.node = this.text = null, this.hidden = ui(e, t);
  }

  function yr(e, t, r) {
    for (var n, i = [], o = t; r > o; o = n) {
      var l = new mr(e.doc, Ri(e.doc, o), o);
      n = o + l.size, i.push(l);
    }

    return i;
  }

  function br(e, t, r, n) {
    null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), n || (n = 0);
    var i = e.display;
    if (n && r < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo) Cl && si(e.doc, t) < i.viewTo && xr(e);else if (r <= i.viewFrom) Cl && ai(e.doc, r + n) > i.viewFrom ? xr(e) : (i.viewFrom += n, i.viewTo += n);else if (t <= i.viewFrom && r >= i.viewTo) xr(e);else if (t <= i.viewFrom) {
      var o = Lr(e, r, r + n, 1);
      o ? (i.view = i.view.slice(o.index), i.viewFrom = o.lineN, i.viewTo += n) : xr(e);
    } else if (r >= i.viewTo) {
      var o = Lr(e, t, t, -1);
      o ? (i.view = i.view.slice(0, o.index), i.viewTo = o.lineN) : xr(e);
    } else {
      var l = Lr(e, t, t, -1),
          s = Lr(e, r, r + n, 1);
      l && s ? (i.view = i.view.slice(0, l.index).concat(yr(e, l.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += n) : xr(e);
    }
    var a = i.externalMeasured;
    a && (r < a.lineN ? a.lineN += n : t < a.lineN + a.size && (i.externalMeasured = null));
  }

  function wr(e, t, r) {
    e.curOp.viewChanged = !0;
    var n = e.display,
        i = e.display.externalMeasured;

    if (i && t >= i.lineN && t < i.lineN + i.size && (n.externalMeasured = null), !(t < n.viewFrom || t >= n.viewTo)) {
      var o = n.view[Cr(e, t)];

      if (null != o.node) {
        var l = o.changes || (o.changes = []);
        -1 == xo(l, r) && l.push(r);
      }
    }
  }

  function xr(e) {
    e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
  }

  function Cr(e, t) {
    if (t >= e.display.viewTo) return null;
    if (t -= e.display.viewFrom, 0 > t) return null;

    for (var r = e.display.view, n = 0; n < r.length; n++) {
      if (t -= r[n].size, 0 > t) return n;
    }
  }

  function Lr(e, t, r, n) {
    var i,
        o = Cr(e, t),
        l = e.display.view;
    if (!Cl || r == e.doc.first + e.doc.size) return {
      index: o,
      lineN: r
    };

    for (var s = 0, a = e.display.viewFrom; o > s; s++) {
      a += l[s].size;
    }

    if (a != t) {
      if (n > 0) {
        if (o == l.length - 1) return null;
        i = a + l[o].size - t, o++;
      } else i = a - t;

      t += i, r += i;
    }

    for (; si(e.doc, r) != r;) {
      if (o == (0 > n ? 0 : l.length - 1)) return null;
      r += n * l[o - (0 > n ? 1 : 0)].size, o += n;
    }

    return {
      index: o,
      lineN: r
    };
  }

  function Sr(e, t, r) {
    var n = e.display,
        i = n.view;
    0 == i.length || t >= n.viewTo || r <= n.viewFrom ? (n.view = yr(e, t, r), n.viewFrom = t) : (n.viewFrom > t ? n.view = yr(e, t, n.viewFrom).concat(n.view) : n.viewFrom < t && (n.view = n.view.slice(Cr(e, t))), n.viewFrom = t, n.viewTo < r ? n.view = n.view.concat(yr(e, n.viewTo, r)) : n.viewTo > r && (n.view = n.view.slice(0, Cr(e, r)))), n.viewTo = r;
  }

  function kr(e) {
    for (var t = e.display.view, r = 0, n = 0; n < t.length; n++) {
      var i = t[n];
      i.hidden || i.node && !i.changes || ++r;
    }

    return r;
  }

  function Mr(e) {
    e.display.pollingFast || e.display.poll.set(e.options.pollInterval, function () {
      Wr(e), e.state.focused && Mr(e);
    });
  }

  function Tr(e) {
    function t() {
      var n = Wr(e);
      n || r ? (e.display.pollingFast = !1, Mr(e)) : (r = !0, e.display.poll.set(60, t));
    }

    var r = !1;
    e.display.pollingFast = !0, e.display.poll.set(20, t);
  }

  function Wr(e) {
    var t = e.display.input,
        r = e.display.prevInput,
        n = e.doc;
    if (!e.state.focused || Rs(t) && !r || Or(e) || e.options.disableInput || e.state.keySeq) return !1;
    e.state.pasteIncoming && e.state.fakedLastChar && (t.value = t.value.substring(0, t.value.length - 1), e.state.fakedLastChar = !1);
    var i = t.value;
    if (i == r && !e.somethingSelected()) return !1;
    if (il && ol >= 9 && e.display.inputHasSelection === i || vl && /[\uf700-\uf7ff]/.test(i)) return Ar(e), !1;
    var o = !e.curOp;
    o && ir(e), e.display.shift = !1, 8203 != i.charCodeAt(0) || n.sel != e.display.selForContextMenu || r || (r = "​");

    for (var l = 0, s = Math.min(r.length, i.length); s > l && r.charCodeAt(l) == i.charCodeAt(l);) {
      ++l;
    }

    var a = i.slice(l),
        u = Ps(a),
        c = null;
    e.state.pasteIncoming && n.sel.ranges.length > 1 && (Hl && Hl.join("\n") == a ? c = n.sel.ranges.length % Hl.length == 0 && Co(Hl, Ps) : u.length == n.sel.ranges.length && (c = Co(u, function (e) {
      return [e];
    })));

    for (var f = n.sel.ranges.length - 1; f >= 0; f--) {
      var h = n.sel.ranges[f],
          d = h.from(),
          p = h.to();
      l < r.length ? d = Ll(d.line, d.ch - (r.length - l)) : e.state.overwrite && h.empty() && !e.state.pasteIncoming && (p = Ll(p.line, Math.min(Ri(n, p.line).text.length, p.ch + wo(u).length)));
      var g = e.curOp.updateInput,
          v = {
        from: d,
        to: p,
        text: c ? c[f % c.length] : u,
        origin: e.state.pasteIncoming ? "paste" : e.state.cutIncoming ? "cut" : "+input"
      };

      if (dn(e.doc, v), co(e, "inputRead", e, v), a && !e.state.pasteIncoming && e.options.electricChars && e.options.smartIndent && h.head.ch < 100 && (!f || n.sel.ranges[f - 1].head.line != h.head.line)) {
        var m = e.getModeAt(h.head),
            y = Rl(v);

        if (m.electricChars) {
          for (var b = 0; b < m.electricChars.length; b++) {
            if (a.indexOf(m.electricChars.charAt(b)) > -1) {
              Tn(e, y.line, "smart");
              break;
            }
          }
        } else m.electricInput && m.electricInput.test(Ri(n, y.line).text.slice(0, y.ch)) && Tn(e, y.line, "smart");
      }
    }

    return kn(e), e.curOp.updateInput = g, e.curOp.typing = !0, i.length > 1e3 || i.indexOf("\n") > -1 ? t.value = e.display.prevInput = "" : e.display.prevInput = i, o && lr(e), e.state.pasteIncoming = e.state.cutIncoming = !1, !0;
  }

  function Ar(e, t) {
    if (!e.display.contextMenuPending) {
      var r,
          n,
          i = e.doc;

      if (e.somethingSelected()) {
        e.display.prevInput = "";
        var o = i.sel.primary();
        r = Fs && (o.to().line - o.from().line > 100 || (n = e.getSelection()).length > 1e3);
        var l = r ? "-" : n || e.getSelection();
        e.display.input.value = l, e.state.focused && Ms(e.display.input), il && ol >= 9 && (e.display.inputHasSelection = l);
      } else t || (e.display.prevInput = e.display.input.value = "", il && ol >= 9 && (e.display.inputHasSelection = null));

      e.display.inaccurateSelection = r;
    }
  }

  function Nr(e) {
    "nocursor" == e.options.readOnly || gl && Do() == e.display.input || e.display.input.focus();
  }

  function Hr(e) {
    e.state.focused || (Nr(e), nn(e));
  }

  function Or(e) {
    return e.options.readOnly || e.doc.cantEdit;
  }

  function Dr(e) {
    function t(t) {
      ho(e, t) || ps(t);
    }

    function r(t) {
      if (e.somethingSelected()) Hl = e.getSelections(), n.inaccurateSelection && (n.prevInput = "", n.inaccurateSelection = !1, n.input.value = Hl.join("\n"), Ms(n.input));else {
        for (var r = [], i = [], o = 0; o < e.doc.sel.ranges.length; o++) {
          var l = e.doc.sel.ranges[o].head.line,
              s = {
            anchor: Ll(l, 0),
            head: Ll(l + 1, 0)
          };
          i.push(s), r.push(e.getRange(s.anchor, s.head));
        }

        "cut" == t.type ? e.setSelections(i, null, xs) : (n.prevInput = "", n.input.value = r.join("\n"), Ms(n.input)), Hl = r;
      }
      "cut" == t.type && (e.state.cutIncoming = !0);
    }

    var n = e.display;
    gs(n.scroller, "mousedown", pr(e, Pr)), il && 11 > ol ? gs(n.scroller, "dblclick", pr(e, function (t) {
      if (!ho(e, t)) {
        var r = Er(e, t);

        if (r && !Ur(e, t) && !Ir(e.display, t)) {
          hs(t);
          var n = e.findWordAt(r);
          lt(e.doc, n.anchor, n.head);
        }
      }
    })) : gs(n.scroller, "dblclick", function (t) {
      ho(e, t) || hs(t);
    }), gs(n.lineSpace, "selectstart", function (e) {
      Ir(n, e) || hs(e);
    }), wl || gs(n.scroller, "contextmenu", function (t) {
      ln(e, t);
    }), gs(n.scroller, "scroll", function () {
      n.scroller.clientHeight && (Xr(e, n.scroller.scrollTop), jr(e, n.scroller.scrollLeft, !0), ms(e, "scroll", e));
    }), gs(n.scroller, "mousewheel", function (t) {
      _r(e, t);
    }), gs(n.scroller, "DOMMouseScroll", function (t) {
      _r(e, t);
    }), gs(n.wrapper, "scroll", function () {
      n.wrapper.scrollTop = n.wrapper.scrollLeft = 0;
    }), gs(n.input, "keyup", function (t) {
      tn.call(e, t);
    }), gs(n.input, "input", function () {
      il && ol >= 9 && e.display.inputHasSelection && (e.display.inputHasSelection = null), Wr(e);
    }), gs(n.input, "keydown", pr(e, Jr)), gs(n.input, "keypress", pr(e, rn)), gs(n.input, "focus", ko(nn, e)), gs(n.input, "blur", ko(on, e)), e.options.dragDrop && (gs(n.scroller, "dragstart", function (t) {
      Kr(e, t);
    }), gs(n.scroller, "dragenter", t), gs(n.scroller, "dragover", t), gs(n.scroller, "drop", pr(e, Vr))), gs(n.scroller, "paste", function (t) {
      Ir(n, t) || (e.state.pasteIncoming = !0, Nr(e), Tr(e));
    }), gs(n.input, "paste", function () {
      if (ll && !e.state.fakedLastChar && !(new Date() - e.state.lastMiddleDown < 200)) {
        var t = n.input.selectionStart,
            r = n.input.selectionEnd;
        n.input.value += "$", n.input.selectionEnd = r, n.input.selectionStart = t, e.state.fakedLastChar = !0;
      }

      e.state.pasteIncoming = !0, Tr(e);
    }), gs(n.input, "cut", r), gs(n.input, "copy", r), fl && gs(n.sizer, "mouseup", function () {
      Do() == n.input && n.input.blur(), Nr(e);
    });
  }

  function zr(e) {
    var t = e.display;
    (t.lastWrapHeight != t.wrapper.clientHeight || t.lastWrapWidth != t.wrapper.clientWidth) && (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize());
  }

  function Ir(e, t) {
    for (var r = ao(t); r != e.wrapper; r = r.parentNode) {
      if (!r || "true" == r.getAttribute("cm-ignore-events") || r.parentNode == e.sizer && r != e.mover) return !0;
    }
  }

  function Er(e, t, r, n) {
    var i = e.display;
    if (!r && "true" == ao(t).getAttribute("not-content")) return null;
    var o,
        l,
        s = i.lineSpace.getBoundingClientRect();

    try {
      o = t.clientX - s.left, l = t.clientY - s.top;
    } catch (t) {
      return null;
    }

    var a,
        u = er(e, o, l);

    if (n && 1 == u.xRel && (a = Ri(e.doc, u.line).text).length == u.ch) {
      var c = Ss(a, a.length, e.options.tabSize) - a.length;
      u = Ll(u.line, Math.max(0, Math.round((o - Nt(e.display).left) / nr(e.display)) - c));
    }

    return u;
  }

  function Pr(e) {
    if (!ho(this, e)) {
      var t = this,
          r = t.display;
      if (r.shift = e.shiftKey, Ir(r, e)) return void (ll || (r.scroller.draggable = !1, setTimeout(function () {
        r.scroller.draggable = !0;
      }, 100)));

      if (!Ur(t, e)) {
        var n = Er(t, e);

        switch (window.focus(), uo(e)) {
          case 1:
            n ? Rr(t, e, n) : ao(e) == r.scroller && hs(e);
            break;

          case 2:
            ll && (t.state.lastMiddleDown = +new Date()), n && lt(t.doc, n), setTimeout(ko(Nr, t), 20), hs(e);
            break;

          case 3:
            wl && ln(t, e);
        }
      }
    }
  }

  function Rr(e, t, r) {
    setTimeout(ko(Hr, e), 0);
    var n,
        i = +new Date();
    Tl && Tl.time > i - 400 && 0 == Sl(Tl.pos, r) ? n = "triple" : Ml && Ml.time > i - 400 && 0 == Sl(Ml.pos, r) ? (n = "double", Tl = {
      time: i,
      pos: r
    }) : (n = "single", Ml = {
      time: i,
      pos: r
    });
    var o,
        l = e.doc.sel,
        s = vl ? t.metaKey : t.ctrlKey;
    e.options.dragDrop && Es && !Or(e) && "single" == n && (o = l.contains(r)) > -1 && !l.ranges[o].empty() ? Fr(e, t, r, s) : Br(e, t, r, n, s);
  }

  function Fr(e, t, r, n) {
    var i = e.display,
        o = pr(e, function (l) {
      ll && (i.scroller.draggable = !1), e.state.draggingText = !1, vs(document, "mouseup", o), vs(i.scroller, "drop", o), Math.abs(t.clientX - l.clientX) + Math.abs(t.clientY - l.clientY) < 10 && (hs(l), n || lt(e.doc, r), Nr(e), il && 9 == ol && setTimeout(function () {
        document.body.focus(), Nr(e);
      }, 20));
    });
    ll && (i.scroller.draggable = !0), e.state.draggingText = o, i.scroller.dragDrop && i.scroller.dragDrop(), gs(document, "mouseup", o), gs(i.scroller, "drop", o);
  }

  function Br(e, t, r, n, i) {
    function o(t) {
      if (0 != Sl(v, t)) if (v = t, "rect" == n) {
        for (var i = [], o = e.options.tabSize, l = Ss(Ri(u, r.line).text, r.ch, o), s = Ss(Ri(u, t.line).text, t.ch, o), a = Math.min(l, s), d = Math.max(l, s), p = Math.min(r.line, t.line), g = Math.min(e.lastLine(), Math.max(r.line, t.line)); g >= p; p++) {
          var m = Ri(u, p).text,
              y = yo(m, a, o);
          a == d ? i.push(new Z(Ll(p, y), Ll(p, y))) : m.length > y && i.push(new Z(Ll(p, y), Ll(p, yo(m, d, o))));
        }

        i.length || i.push(new Z(r, r)), ht(u, Q(h.ranges.slice(0, f).concat(i), f), {
          origin: "*mouse",
          scroll: !1
        }), e.scrollIntoView(t);
      } else {
        var b = c,
            w = b.anchor,
            x = t;

        if ("single" != n) {
          if ("double" == n) var C = e.findWordAt(t);else var C = new Z(Ll(t.line, 0), tt(u, Ll(t.line + 1, 0)));
          Sl(C.anchor, w) > 0 ? (x = C.head, w = $(b.from(), C.anchor)) : (x = C.anchor, w = Y(b.to(), C.head));
        }

        var i = h.ranges.slice(0);
        i[f] = new Z(tt(u, w), x), ht(u, Q(i, f), Cs);
      }
    }

    function l(t) {
      var r = ++y,
          i = Er(e, t, !0, "rect" == n);
      if (i) if (0 != Sl(i, v)) {
        Hr(e), o(i);
        var s = w(a, u);
        (i.line >= s.to || i.line < s.from) && setTimeout(pr(e, function () {
          y == r && l(t);
        }), 150);
      } else {
        var c = t.clientY < m.top ? -20 : t.clientY > m.bottom ? 20 : 0;
        c && setTimeout(pr(e, function () {
          y == r && (a.scroller.scrollTop += c, l(t));
        }), 50);
      }
    }

    function s(t) {
      y = 1 / 0, hs(t), Nr(e), vs(document, "mousemove", b), vs(document, "mouseup", x), u.history.lastSelOrigin = null;
    }

    var a = e.display,
        u = e.doc;
    hs(t);
    var c,
        f,
        h = u.sel,
        d = h.ranges;
    if (i && !t.shiftKey ? (f = u.sel.contains(r), c = f > -1 ? d[f] : new Z(r, r)) : c = u.sel.primary(), t.altKey) n = "rect", i || (c = new Z(r, r)), r = Er(e, t, !0, !0), f = -1;else if ("double" == n) {
      var p = e.findWordAt(r);
      c = e.display.shift || u.extend ? ot(u, c, p.anchor, p.head) : p;
    } else if ("triple" == n) {
      var g = new Z(Ll(r.line, 0), tt(u, Ll(r.line + 1, 0)));
      c = e.display.shift || u.extend ? ot(u, c, g.anchor, g.head) : g;
    } else c = ot(u, c, r);
    i ? -1 == f ? (f = d.length, ht(u, Q(d.concat([c]), f), {
      scroll: !1,
      origin: "*mouse"
    })) : d.length > 1 && d[f].empty() && "single" == n ? (ht(u, Q(d.slice(0, f).concat(d.slice(f + 1)), 0)), h = u.sel) : at(u, f, c, Cs) : (f = 0, ht(u, new q([c], 0), Cs), h = u.sel);
    var v = r,
        m = a.wrapper.getBoundingClientRect(),
        y = 0,
        b = pr(e, function (e) {
      uo(e) ? l(e) : s(e);
    }),
        x = pr(e, s);
    gs(document, "mousemove", b), gs(document, "mouseup", x);
  }

  function Gr(e, t, r, n, i) {
    try {
      var o = t.clientX,
          l = t.clientY;
    } catch (t) {
      return !1;
    }

    if (o >= Math.floor(e.display.gutters.getBoundingClientRect().right)) return !1;
    n && hs(t);
    var s = e.display,
        a = s.lineDiv.getBoundingClientRect();
    if (l > a.bottom || !go(e, r)) return so(t);
    l -= a.top - s.viewOffset;

    for (var u = 0; u < e.options.gutters.length; ++u) {
      var c = s.gutters.childNodes[u];

      if (c && c.getBoundingClientRect().right >= o) {
        var f = Vi(e.doc, l),
            h = e.options.gutters[u];
        return i(e, r, e, f, h, t), so(t);
      }
    }
  }

  function Ur(e, t) {
    return Gr(e, t, "gutterClick", !0, co);
  }

  function Vr(e) {
    var t = this;

    if (!ho(t, e) && !Ir(t.display, e)) {
      hs(e), il && (Ol = +new Date());
      var r = Er(t, e, !0),
          n = e.dataTransfer.files;
      if (r && !Or(t)) if (n && n.length && window.FileReader && window.File) for (var i = n.length, o = Array(i), l = 0, s = function s(e, n) {
        var s = new FileReader();
        s.onload = pr(t, function () {
          if (o[n] = s.result, ++l == i) {
            r = tt(t.doc, r);
            var e = {
              from: r,
              to: r,
              text: Ps(o.join("\n")),
              origin: "paste"
            };
            dn(t.doc, e), ft(t.doc, J(r, Rl(e)));
          }
        }), s.readAsText(e);
      }, a = 0; i > a; ++a) {
        s(n[a], a);
      } else {
        if (t.state.draggingText && t.doc.sel.contains(r) > -1) return t.state.draggingText(e), void setTimeout(ko(Nr, t), 20);

        try {
          var o = e.dataTransfer.getData("Text");

          if (o) {
            if (t.state.draggingText && !(vl ? e.metaKey : e.ctrlKey)) var u = t.listSelections();
            if (dt(t.doc, J(r, r)), u) for (var a = 0; a < u.length; ++a) {
              bn(t.doc, "", u[a].anchor, u[a].head, "drag");
            }
            t.replaceSelection(o, "around", "paste"), Nr(t);
          }
        } catch (e) {}
      }
    }
  }

  function Kr(e, t) {
    if (il && (!e.state.draggingText || +new Date() - Ol < 100)) return void ps(t);

    if (!ho(e, t) && !Ir(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.setDragImage && !cl)) {
      var r = Ao("img", null, null, "position: fixed; left: 0; top: 0;");
      r.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", ul && (r.width = r.height = 1, e.display.wrapper.appendChild(r), r._top = r.offsetTop), t.dataTransfer.setDragImage(r, 0, 0), ul && r.parentNode.removeChild(r);
    }
  }

  function Xr(e, t) {
    Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, tl || A(e, {
      top: t
    }), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbars.setScrollTop(t), tl && A(e), St(e, 100));
  }

  function jr(e, t, r) {
    (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, x(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
  }

  function _r(e, t) {
    var r = Il(t),
        n = r.x,
        i = r.y,
        o = e.display,
        l = o.scroller;

    if (n && l.scrollWidth > l.clientWidth || i && l.scrollHeight > l.clientHeight) {
      if (i && vl && ll) e: for (var s = t.target, a = o.view; s != l; s = s.parentNode) {
        for (var u = 0; u < a.length; u++) {
          if (a[u].node == s) {
            e.display.currentWheelTarget = s;
            break e;
          }
        }
      }
      if (n && !tl && !ul && null != zl) return i && Xr(e, Math.max(0, Math.min(l.scrollTop + i * zl, l.scrollHeight - l.clientHeight))), jr(e, Math.max(0, Math.min(l.scrollLeft + n * zl, l.scrollWidth - l.clientWidth))), hs(t), void (o.wheelStartX = null);

      if (i && null != zl) {
        var c = i * zl,
            f = e.doc.scrollTop,
            h = f + o.wrapper.clientHeight;
        0 > c ? f = Math.max(0, f + c - 50) : h = Math.min(e.doc.height, h + c + 50), A(e, {
          top: f,
          bottom: h
        });
      }

      20 > Dl && (null == o.wheelStartX ? (o.wheelStartX = l.scrollLeft, o.wheelStartY = l.scrollTop, o.wheelDX = n, o.wheelDY = i, setTimeout(function () {
        if (null != o.wheelStartX) {
          var e = l.scrollLeft - o.wheelStartX,
              t = l.scrollTop - o.wheelStartY,
              r = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
          o.wheelStartX = o.wheelStartY = null, r && (zl = (zl * Dl + r) / (Dl + 1), ++Dl);
        }
      }, 200)) : (o.wheelDX += n, o.wheelDY += i));
    }
  }

  function Yr(e, t, r) {
    if ("string" == typeof t && (t = $l[t], !t)) return !1;
    e.display.pollingFast && Wr(e) && (e.display.pollingFast = !1);
    var n = e.display.shift,
        i = !1;

    try {
      Or(e) && (e.state.suppressEdits = !0), r && (e.display.shift = !1), i = t(e) != ws;
    } finally {
      e.display.shift = n, e.state.suppressEdits = !1;
    }

    return i;
  }

  function $r(e, t, r) {
    for (var n = 0; n < e.state.keyMaps.length; n++) {
      var i = Zl(t, e.state.keyMaps[n], r, e);
      if (i) return i;
    }

    return e.options.extraKeys && Zl(t, e.options.extraKeys, r, e) || Zl(t, e.options.keyMap, r, e);
  }

  function qr(e, t, r, n) {
    var i = e.state.keySeq;

    if (i) {
      if (Ql(t)) return "handled";
      El.set(50, function () {
        e.state.keySeq == i && (e.state.keySeq = null, Ar(e));
      }), t = i + " " + t;
    }

    var o = $r(e, t, n);
    return "multi" == o && (e.state.keySeq = t), "handled" == o && co(e, "keyHandled", e, t, r), ("handled" == o || "multi" == o) && (hs(r), Lt(e)), i && !o && /\'$/.test(t) ? (hs(r), !0) : !!o;
  }

  function Zr(e, t) {
    var r = Jl(t, !0);
    return r ? t.shiftKey && !e.state.keySeq ? qr(e, "Shift-" + r, t, function (t) {
      return Yr(e, t, !0);
    }) || qr(e, r, t, function (t) {
      return ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) ? Yr(e, t) : void 0;
    }) : qr(e, r, t, function (t) {
      return Yr(e, t);
    }) : !1;
  }

  function Qr(e, t, r) {
    return qr(e, "'" + r + "'", t, function (t) {
      return Yr(e, t, !0);
    });
  }

  function Jr(e) {
    var t = this;

    if (Hr(t), !ho(t, e)) {
      il && 11 > ol && 27 == e.keyCode && (e.returnValue = !1);
      var r = e.keyCode;
      t.display.shift = 16 == r || e.shiftKey;
      var n = Zr(t, e);
      ul && (Pl = n ? r : null, !n && 88 == r && !Fs && (vl ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), 18 != r || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || en(t);
    }
  }

  function en(e) {
    function t(e) {
      18 != e.keyCode && e.altKey || (Ds(r, "CodeMirror-crosshair"), vs(document, "keyup", t), vs(document, "mouseover", t));
    }

    var r = e.display.lineDiv;
    zs(r, "CodeMirror-crosshair"), gs(document, "keyup", t), gs(document, "mouseover", t);
  }

  function tn(e) {
    16 == e.keyCode && (this.doc.sel.shift = !1), ho(this, e);
  }

  function rn(e) {
    var t = this;

    if (!(ho(t, e) || e.ctrlKey && !e.altKey || vl && e.metaKey)) {
      var r = e.keyCode,
          n = e.charCode;
      if (ul && r == Pl) return Pl = null, void hs(e);

      if (!(ul && (!e.which || e.which < 10) || fl) || !Zr(t, e)) {
        var i = String.fromCharCode(null == n ? r : n);
        Qr(t, e, i) || (il && ol >= 9 && (t.display.inputHasSelection = null), Tr(t));
      }
    }
  }

  function nn(e) {
    "nocursor" != e.options.readOnly && (e.state.focused || (ms(e, "focus", e), e.state.focused = !0, zs(e.display.wrapper, "CodeMirror-focused"), e.curOp || e.display.selForContextMenu == e.doc.sel || (Ar(e), ll && setTimeout(ko(Ar, e, !0), 0))), Mr(e), Lt(e));
  }

  function on(e) {
    e.state.focused && (ms(e, "blur", e), e.state.focused = !1, Ds(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function () {
      e.state.focused || (e.display.shift = !1);
    }, 150);
  }

  function ln(e, t) {
    function r() {
      if (null != i.input.selectionStart) {
        var t = e.somethingSelected(),
            r = i.input.value = "​" + (t ? i.input.value : "");
        i.prevInput = t ? "" : "​", i.input.selectionStart = 1, i.input.selectionEnd = r.length, i.selForContextMenu = e.doc.sel;
      }
    }

    function n() {
      if (i.contextMenuPending = !1, i.inputDiv.style.position = "relative", i.input.style.cssText = a, il && 9 > ol && i.scrollbars.setScrollTop(i.scroller.scrollTop = l), Mr(e), null != i.input.selectionStart) {
        (!il || il && 9 > ol) && r();

        var t = 0,
            n = function n() {
          i.selForContextMenu == e.doc.sel && 0 == i.input.selectionStart ? pr(e, $l.selectAll)(e) : t++ < 10 ? i.detectingSelectAll = setTimeout(n, 500) : Ar(e);
        };

        i.detectingSelectAll = setTimeout(n, 200);
      }
    }

    if (!ho(e, t, "contextmenu")) {
      var i = e.display;

      if (!Ir(i, t) && !sn(e, t)) {
        var o = Er(e, t),
            l = i.scroller.scrollTop;

        if (o && !ul) {
          var s = e.options.resetSelectionOnContextMenu;
          s && -1 == e.doc.sel.contains(o) && pr(e, ht)(e.doc, J(o), xs);
          var a = i.input.style.cssText;
          if (i.inputDiv.style.position = "absolute", i.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (t.clientY - 5) + "px; left: " + (t.clientX - 5) + "px; z-index: 1000; background: " + (il ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", ll) var u = window.scrollY;

          if (Nr(e), ll && window.scrollTo(null, u), Ar(e), e.somethingSelected() || (i.input.value = i.prevInput = " "), i.contextMenuPending = !0, i.selForContextMenu = e.doc.sel, clearTimeout(i.detectingSelectAll), il && ol >= 9 && r(), wl) {
            ps(t);

            var c = function c() {
              vs(window, "mouseup", c), setTimeout(n, 20);
            };

            gs(window, "mouseup", c);
          } else setTimeout(n, 50);
        }
      }
    }
  }

  function sn(e, t) {
    return go(e, "gutterContextMenu") ? Gr(e, t, "gutterContextMenu", !1, ms) : !1;
  }

  function an(e, t) {
    if (Sl(e, t.from) < 0) return e;
    if (Sl(e, t.to) <= 0) return Rl(t);
    var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
        n = e.ch;
    return e.line == t.to.line && (n += Rl(t).ch - t.to.ch), Ll(r, n);
  }

  function un(e, t) {
    for (var r = [], n = 0; n < e.sel.ranges.length; n++) {
      var i = e.sel.ranges[n];
      r.push(new Z(an(i.anchor, t), an(i.head, t)));
    }

    return Q(r, e.sel.primIndex);
  }

  function cn(e, t, r) {
    return e.line == t.line ? Ll(r.line, e.ch - t.ch + r.ch) : Ll(r.line + (e.line - t.line), e.ch);
  }

  function fn(e, t, r) {
    for (var n = [], i = Ll(e.first, 0), o = i, l = 0; l < t.length; l++) {
      var s = t[l],
          a = cn(s.from, i, o),
          u = cn(Rl(s), i, o);

      if (i = s.to, o = u, "around" == r) {
        var c = e.sel.ranges[l],
            f = Sl(c.head, c.anchor) < 0;
        n[l] = new Z(f ? u : a, f ? a : u);
      } else n[l] = new Z(a, a);
    }

    return new q(n, e.sel.primIndex);
  }

  function hn(e, t, r) {
    var n = {
      canceled: !1,
      from: t.from,
      to: t.to,
      text: t.text,
      origin: t.origin,
      cancel: function cancel() {
        this.canceled = !0;
      }
    };
    return r && (n.update = function (t, r, n, i) {
      t && (this.from = tt(e, t)), r && (this.to = tt(e, r)), n && (this.text = n), void 0 !== i && (this.origin = i);
    }), ms(e, "beforeChange", e, n), e.cm && ms(e.cm, "beforeChange", e.cm, n), n.canceled ? null : {
      from: n.from,
      to: n.to,
      text: n.text,
      origin: n.origin
    };
  }

  function dn(e, t, r) {
    if (e.cm) {
      if (!e.cm.curOp) return pr(e.cm, dn)(e, t, r);
      if (e.cm.state.suppressEdits) return;
    }

    if (!(go(e, "beforeChange") || e.cm && go(e.cm, "beforeChange")) || (t = hn(e, t, !0))) {
      var n = xl && !r && $n(e, t.from, t.to);
      if (n) for (var i = n.length - 1; i >= 0; --i) {
        pn(e, {
          from: n[i].from,
          to: n[i].to,
          text: i ? [""] : t.text
        });
      } else pn(e, t);
    }
  }

  function pn(e, t) {
    if (1 != t.text.length || "" != t.text[0] || 0 != Sl(t.from, t.to)) {
      var r = un(e, t);
      qi(e, t, r, e.cm ? e.cm.curOp.id : 0 / 0), mn(e, t, r, jn(e, t));
      var n = [];
      Ei(e, function (e, r) {
        r || -1 != xo(n, e.history) || (lo(e.history, t), n.push(e.history)), mn(e, t, null, jn(e, t));
      });
    }
  }

  function gn(e, t, r) {
    if (!e.cm || !e.cm.state.suppressEdits) {
      for (var n, i = e.history, o = e.sel, l = "undo" == t ? i.done : i.undone, s = "undo" == t ? i.undone : i.done, a = 0; a < l.length && (n = l[a], r ? !n.ranges || n.equals(e.sel) : n.ranges); a++) {
        ;
      }

      if (a != l.length) {
        for (i.lastOrigin = i.lastSelOrigin = null; n = l.pop(), n.ranges;) {
          if (Ji(n, s), r && !n.equals(e.sel)) return void ht(e, n, {
            clearRedo: !1
          });
          o = n;
        }

        var u = [];
        Ji(o, s), s.push({
          changes: u,
          generation: i.generation
        }), i.generation = n.generation || ++i.maxGeneration;

        for (var c = go(e, "beforeChange") || e.cm && go(e.cm, "beforeChange"), a = n.changes.length - 1; a >= 0; --a) {
          var f = n.changes[a];
          if (f.origin = t, c && !hn(e, f, !1)) return void (l.length = 0);
          u.push(_i(e, f));
          var h = a ? un(e, f) : wo(l);
          mn(e, f, h, Yn(e, f)), !a && e.cm && e.cm.scrollIntoView({
            from: f.from,
            to: Rl(f)
          });
          var d = [];
          Ei(e, function (e, t) {
            t || -1 != xo(d, e.history) || (lo(e.history, f), d.push(e.history)), mn(e, f, null, Yn(e, f));
          });
        }
      }
    }
  }

  function vn(e, t) {
    if (0 != t && (e.first += t, e.sel = new q(Co(e.sel.ranges, function (e) {
      return new Z(Ll(e.anchor.line + t, e.anchor.ch), Ll(e.head.line + t, e.head.ch));
    }), e.sel.primIndex), e.cm)) {
      br(e.cm, e.first, e.first - t, t);

      for (var r = e.cm.display, n = r.viewFrom; n < r.viewTo; n++) {
        wr(e.cm, n, "gutter");
      }
    }
  }

  function mn(e, t, r, n) {
    if (e.cm && !e.cm.curOp) return pr(e.cm, mn)(e, t, r, n);
    if (t.to.line < e.first) return void vn(e, t.text.length - 1 - (t.to.line - t.from.line));

    if (!(t.from.line > e.lastLine())) {
      if (t.from.line < e.first) {
        var i = t.text.length - 1 - (e.first - t.from.line);
        vn(e, i), t = {
          from: Ll(e.first, 0),
          to: Ll(t.to.line + i, t.to.ch),
          text: [wo(t.text)],
          origin: t.origin
        };
      }

      var o = e.lastLine();
      t.to.line > o && (t = {
        from: t.from,
        to: Ll(o, Ri(e, o).text.length),
        text: [t.text[0]],
        origin: t.origin
      }), t.removed = Fi(e, t.from, t.to), r || (r = un(e, t)), e.cm ? yn(e.cm, t, n) : Di(e, t, n), dt(e, r, xs);
    }
  }

  function yn(e, t, r) {
    var n = e.doc,
        i = e.display,
        l = t.from,
        s = t.to,
        a = !1,
        u = l.line;
    e.options.lineWrapping || (u = Ui(oi(Ri(n, l.line))), n.iter(u, s.line + 1, function (e) {
      return e == i.maxLine ? (a = !0, !0) : void 0;
    })), n.sel.contains(t.from, t.to) > -1 && po(e), Di(n, t, r, o(e)), e.options.lineWrapping || (n.iter(u, l.line + t.text.length, function (e) {
      var t = f(e);
      t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, a = !1);
    }), a && (e.curOp.updateMaxLine = !0)), n.frontier = Math.min(n.frontier, l.line), St(e, 400);
    var c = t.text.length - (s.line - l.line) - 1;
    l.line != s.line || 1 != t.text.length || Oi(e.doc, t) ? br(e, l.line, s.line + 1, c) : wr(e, l.line, "text");
    var h = go(e, "changes"),
        d = go(e, "change");

    if (d || h) {
      var p = {
        from: l,
        to: s,
        text: t.text,
        removed: t.removed,
        origin: t.origin
      };
      d && co(e, "change", e, p), h && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(p);
    }

    e.display.selForContextMenu = null;
  }

  function bn(e, t, r, n, i) {
    if (n || (n = r), Sl(n, r) < 0) {
      var o = n;
      n = r, r = o;
    }

    "string" == typeof t && (t = Ps(t)), dn(e, {
      from: r,
      to: n,
      text: t,
      origin: i
    });
  }

  function wn(e, t) {
    if (!ho(e, "scrollCursorIntoView")) {
      var r = e.display,
          n = r.sizer.getBoundingClientRect(),
          i = null;

      if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !dl) {
        var o = Ao("div", "​", null, "position: absolute; top: " + (t.top - r.viewOffset - Wt(e.display)) + "px; height: " + (t.bottom - t.top + Ht(e) + r.barHeight) + "px; left: " + t.left + "px; width: 2px;");
        e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
      }
    }
  }

  function xn(e, t, r, n) {
    null == n && (n = 0);

    for (var i = 0; 5 > i; i++) {
      var o = !1,
          l = Zt(e, t),
          s = r && r != t ? Zt(e, r) : l,
          a = Ln(e, Math.min(l.left, s.left), Math.min(l.top, s.top) - n, Math.max(l.left, s.left), Math.max(l.bottom, s.bottom) + n),
          u = e.doc.scrollTop,
          c = e.doc.scrollLeft;
      if (null != a.scrollTop && (Xr(e, a.scrollTop), Math.abs(e.doc.scrollTop - u) > 1 && (o = !0)), null != a.scrollLeft && (jr(e, a.scrollLeft), Math.abs(e.doc.scrollLeft - c) > 1 && (o = !0)), !o) break;
    }

    return l;
  }

  function Cn(e, t, r, n, i) {
    var o = Ln(e, t, r, n, i);
    null != o.scrollTop && Xr(e, o.scrollTop), null != o.scrollLeft && jr(e, o.scrollLeft);
  }

  function Ln(e, t, r, n, i) {
    var o = e.display,
        l = rr(e.display);
    0 > r && (r = 0);
    var s = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : o.scroller.scrollTop,
        a = Dt(e),
        u = {};
    i - r > a && (i = r + a);
    var c = e.doc.height + At(o),
        f = l > r,
        h = i > c - l;
    if (s > r) u.scrollTop = f ? 0 : r;else if (i > s + a) {
      var d = Math.min(r, (h ? c : i) - a);
      d != s && (u.scrollTop = d);
    }
    var p = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : o.scroller.scrollLeft,
        g = Ot(e) - (e.options.fixedGutter ? o.gutters.offsetWidth : 0),
        v = n - t > g;
    return v && (n = t + g), 10 > t ? u.scrollLeft = 0 : p > t ? u.scrollLeft = Math.max(0, t - (v ? 0 : 10)) : n > g + p - 3 && (u.scrollLeft = n + (v ? 0 : 10) - g), u;
  }

  function Sn(e, t, r) {
    (null != t || null != r) && Mn(e), null != t && (e.curOp.scrollLeft = (null == e.curOp.scrollLeft ? e.doc.scrollLeft : e.curOp.scrollLeft) + t), null != r && (e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + r);
  }

  function kn(e) {
    Mn(e);
    var t = e.getCursor(),
        r = t,
        n = t;
    e.options.lineWrapping || (r = t.ch ? Ll(t.line, t.ch - 1) : t, n = Ll(t.line, t.ch + 1)), e.curOp.scrollToPos = {
      from: r,
      to: n,
      margin: e.options.cursorScrollMargin,
      isCursor: !0
    };
  }

  function Mn(e) {
    var t = e.curOp.scrollToPos;

    if (t) {
      e.curOp.scrollToPos = null;
      var r = Qt(e, t.from),
          n = Qt(e, t.to),
          i = Ln(e, Math.min(r.left, n.left), Math.min(r.top, n.top) - t.margin, Math.max(r.right, n.right), Math.max(r.bottom, n.bottom) + t.margin);
      e.scrollTo(i.scrollLeft, i.scrollTop);
    }
  }

  function Tn(e, t, r, n) {
    var i,
        o = e.doc;
    null == r && (r = "add"), "smart" == r && (o.mode.indent ? i = Tt(e, t) : r = "prev");
    var l = e.options.tabSize,
        s = Ri(o, t),
        a = Ss(s.text, null, l);
    s.stateAfter && (s.stateAfter = null);
    var u,
        c = s.text.match(/^\s*/)[0];

    if (n || /\S/.test(s.text)) {
      if ("smart" == r && (u = o.mode.indent(i, s.text.slice(c.length), s.text), u == ws || u > 150)) {
        if (!n) return;
        r = "prev";
      }
    } else u = 0, r = "not";

    "prev" == r ? u = t > o.first ? Ss(Ri(o, t - 1).text, null, l) : 0 : "add" == r ? u = a + e.options.indentUnit : "subtract" == r ? u = a - e.options.indentUnit : "number" == typeof r && (u = a + r), u = Math.max(0, u);
    var f = "",
        h = 0;
    if (e.options.indentWithTabs) for (var d = Math.floor(u / l); d; --d) {
      h += l, f += "	";
    }
    if (u > h && (f += bo(u - h)), f != c) bn(o, f, Ll(t, 0), Ll(t, c.length), "+input");else for (var d = 0; d < o.sel.ranges.length; d++) {
      var p = o.sel.ranges[d];

      if (p.head.line == t && p.head.ch < c.length) {
        var h = Ll(t, c.length);
        at(o, d, new Z(h, h));
        break;
      }
    }
    s.stateAfter = null;
  }

  function Wn(e, t, r, n) {
    var i = t,
        o = t;
    return "number" == typeof t ? o = Ri(e, et(e, t)) : i = Ui(t), null == i ? null : (n(o, i) && e.cm && wr(e.cm, i, r), o);
  }

  function An(e, t) {
    for (var r = e.doc.sel.ranges, n = [], i = 0; i < r.length; i++) {
      for (var o = t(r[i]); n.length && Sl(o.from, wo(n).to) <= 0;) {
        var l = n.pop();

        if (Sl(l.from, o.from) < 0) {
          o.from = l.from;
          break;
        }
      }

      n.push(o);
    }

    dr(e, function () {
      for (var t = n.length - 1; t >= 0; t--) {
        bn(e.doc, "", n[t].from, n[t].to, "+delete");
      }

      kn(e);
    });
  }

  function Nn(e, t, r, n, i) {
    function o() {
      var t = s + r;
      return t < e.first || t >= e.first + e.size ? f = !1 : (s = t, c = Ri(e, t));
    }

    function l(e) {
      var t = (i ? Jo : el)(c, a, r, !0);

      if (null == t) {
        if (e || !o()) return f = !1;
        a = i ? (0 > r ? jo : Xo)(c) : 0 > r ? c.text.length : 0;
      } else a = t;

      return !0;
    }

    var s = t.line,
        a = t.ch,
        u = r,
        c = Ri(e, s),
        f = !0;
    if ("char" == n) l();else if ("column" == n) l(!0);else if ("word" == n || "group" == n) for (var h = null, d = "group" == n, p = e.cm && e.cm.getHelper(t, "wordChars"), g = !0; !(0 > r) || l(!g); g = !1) {
      var v = c.text.charAt(a) || "\n",
          m = Mo(v, p) ? "w" : d && "\n" == v ? "n" : !d || /\s/.test(v) ? null : "p";

      if (!d || g || m || (m = "s"), h && h != m) {
        0 > r && (r = 1, l());
        break;
      }

      if (m && (h = m), r > 0 && !l(!g)) break;
    }
    var y = mt(e, Ll(s, a), u, !0);
    return f || (y.hitSide = !0), y;
  }

  function Hn(e, t, r, n) {
    var i,
        o = e.doc,
        l = t.left;

    if ("page" == n) {
      var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      i = t.top + r * (s - (0 > r ? 1.5 : .5) * rr(e.display));
    } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3);

    for (;;) {
      var a = er(e, l, i);
      if (!a.outside) break;

      if (0 > r ? 0 >= i : i >= o.height) {
        a.hitSide = !0;
        break;
      }

      i += 5 * r;
    }

    return a;
  }

  function On(t, r, n, i) {
    e.defaults[t] = r, n && (Bl[t] = i ? function (e, t, r) {
      r != Gl && n(e, t, r);
    } : n);
  }

  function Dn(e) {
    for (var t, r, n, i, o = e.split(/-(?!$)/), e = o[o.length - 1], l = 0; l < o.length - 1; l++) {
      var s = o[l];
      if (/^(cmd|meta|m)$/i.test(s)) i = !0;else if (/^a(lt)?$/i.test(s)) t = !0;else if (/^(c|ctrl|control)$/i.test(s)) r = !0;else {
        if (!/^s(hift)$/i.test(s)) throw new Error("Unrecognized modifier name: " + s);
        n = !0;
      }
    }

    return t && (e = "Alt-" + e), r && (e = "Ctrl-" + e), i && (e = "Cmd-" + e), n && (e = "Shift-" + e), e;
  }

  function zn(e) {
    return "string" == typeof e ? ql[e] : e;
  }

  function In(e, t, r, n, i) {
    if (n && n.shared) return En(e, t, r, n, i);
    if (e.cm && !e.cm.curOp) return pr(e.cm, In)(e, t, r, n, i);
    var o = new ts(e, i),
        l = Sl(t, r);
    if (n && So(n, o, !1), l > 0 || 0 == l && o.clearWhenEmpty !== !1) return o;

    if (o.replacedWith && (o.collapsed = !0, o.widgetNode = Ao("span", [o.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"), n.insertLeft && (o.widgetNode.insertLeft = !0)), o.collapsed) {
      if (ii(e, t.line, t, r, o) || t.line != r.line && ii(e, r.line, t, r, o)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
      Cl = !0;
    }

    o.addToHistory && qi(e, {
      from: t,
      to: r,
      origin: "markText"
    }, e.sel, 0 / 0);
    var s,
        a = t.line,
        u = e.cm;

    if (e.iter(a, r.line + 1, function (e) {
      u && o.collapsed && !u.options.lineWrapping && oi(e) == u.display.maxLine && (s = !0), o.collapsed && a != t.line && Gi(e, 0), Vn(e, new Bn(o, a == t.line ? t.ch : null, a == r.line ? r.ch : null)), ++a;
    }), o.collapsed && e.iter(t.line, r.line + 1, function (t) {
      ui(e, t) && Gi(t, 0);
    }), o.clearOnEnter && gs(o, "beforeCursorEnter", function () {
      o.clear();
    }), o.readOnly && (xl = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed && (o.id = ++rs, o.atomic = !0), u) {
      if (s && (u.curOp.updateMaxLine = !0), o.collapsed) br(u, t.line, r.line + 1);else if (o.className || o.title || o.startStyle || o.endStyle || o.css) for (var c = t.line; c <= r.line; c++) {
        wr(u, c, "text");
      }
      o.atomic && gt(u.doc), co(u, "markerAdded", u, o);
    }

    return o;
  }

  function En(e, t, r, n, i) {
    n = So(n), n.shared = !1;
    var o = [In(e, t, r, n, i)],
        l = o[0],
        s = n.widgetNode;
    return Ei(e, function (e) {
      s && (n.widgetNode = s.cloneNode(!0)), o.push(In(e, tt(e, t), tt(e, r), n, i));

      for (var a = 0; a < e.linked.length; ++a) {
        if (e.linked[a].isParent) return;
      }

      l = wo(o);
    }), new ns(o, l);
  }

  function Pn(e) {
    return e.findMarks(Ll(e.first, 0), e.clipPos(Ll(e.lastLine())), function (e) {
      return e.parent;
    });
  }

  function Rn(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r],
          i = n.find(),
          o = e.clipPos(i.from),
          l = e.clipPos(i.to);

      if (Sl(o, l)) {
        var s = In(e, o, l, n.primary, n.primary.type);
        n.markers.push(s), s.parent = n;
      }
    }
  }

  function Fn(e) {
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
          n = [r.primary.doc];
      Ei(r.primary.doc, function (e) {
        n.push(e);
      });

      for (var i = 0; i < r.markers.length; i++) {
        var o = r.markers[i];
        -1 == xo(n, o.doc) && (o.parent = null, r.markers.splice(i--, 1));
      }
    }
  }

  function Bn(e, t, r) {
    this.marker = e, this.from = t, this.to = r;
  }

  function Gn(e, t) {
    if (e) for (var r = 0; r < e.length; ++r) {
      var n = e[r];
      if (n.marker == t) return n;
    }
  }

  function Un(e, t) {
    for (var r, n = 0; n < e.length; ++n) {
      e[n] != t && (r || (r = [])).push(e[n]);
    }

    return r;
  }

  function Vn(e, t) {
    e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e);
  }

  function Kn(e, t, r) {
    if (e) for (var n, i = 0; i < e.length; ++i) {
      var o = e[i],
          l = o.marker,
          s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);

      if (s || o.from == t && "bookmark" == l.type && (!r || !o.marker.insertLeft)) {
        var a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
        (n || (n = [])).push(new Bn(l, o.from, a ? null : o.to));
      }
    }
    return n;
  }

  function Xn(e, t, r) {
    if (e) for (var n, i = 0; i < e.length; ++i) {
      var o = e[i],
          l = o.marker,
          s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);

      if (s || o.from == t && "bookmark" == l.type && (!r || o.marker.insertLeft)) {
        var a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
        (n || (n = [])).push(new Bn(l, a ? null : o.from - t, null == o.to ? null : o.to - t));
      }
    }
    return n;
  }

  function jn(e, t) {
    var r = nt(e, t.from.line) && Ri(e, t.from.line).markedSpans,
        n = nt(e, t.to.line) && Ri(e, t.to.line).markedSpans;
    if (!r && !n) return null;
    var i = t.from.ch,
        o = t.to.ch,
        l = 0 == Sl(t.from, t.to),
        s = Kn(r, i, l),
        a = Xn(n, o, l),
        u = 1 == t.text.length,
        c = wo(t.text).length + (u ? i : 0);
    if (s) for (var f = 0; f < s.length; ++f) {
      var h = s[f];

      if (null == h.to) {
        var d = Gn(a, h.marker);
        d ? u && (h.to = null == d.to ? null : d.to + c) : h.to = i;
      }
    }
    if (a) for (var f = 0; f < a.length; ++f) {
      var h = a[f];

      if (null != h.to && (h.to += c), null == h.from) {
        var d = Gn(s, h.marker);
        d || (h.from = c, u && (s || (s = [])).push(h));
      } else h.from += c, u && (s || (s = [])).push(h);
    }
    s && (s = _n(s)), a && a != s && (a = _n(a));
    var p = [s];

    if (!u) {
      var g,
          v = t.text.length - 2;
      if (v > 0 && s) for (var f = 0; f < s.length; ++f) {
        null == s[f].to && (g || (g = [])).push(new Bn(s[f].marker, null, null));
      }

      for (var f = 0; v > f; ++f) {
        p.push(g);
      }

      p.push(a);
    }

    return p;
  }

  function _n(e) {
    for (var t = 0; t < e.length; ++t) {
      var r = e[t];
      null != r.from && r.from == r.to && r.marker.clearWhenEmpty !== !1 && e.splice(t--, 1);
    }

    return e.length ? e : null;
  }

  function Yn(e, t) {
    var r = ro(e, t),
        n = jn(e, t);
    if (!r) return n;
    if (!n) return r;

    for (var i = 0; i < r.length; ++i) {
      var o = r[i],
          l = n[i];
      if (o && l) e: for (var s = 0; s < l.length; ++s) {
        for (var a = l[s], u = 0; u < o.length; ++u) {
          if (o[u].marker == a.marker) continue e;
        }

        o.push(a);
      } else l && (r[i] = l);
    }

    return r;
  }

  function $n(e, t, r) {
    var n = null;
    if (e.iter(t.line, r.line + 1, function (e) {
      if (e.markedSpans) for (var t = 0; t < e.markedSpans.length; ++t) {
        var r = e.markedSpans[t].marker;
        !r.readOnly || n && -1 != xo(n, r) || (n || (n = [])).push(r);
      }
    }), !n) return null;

    for (var i = [{
      from: t,
      to: r
    }], o = 0; o < n.length; ++o) {
      for (var l = n[o], s = l.find(0), a = 0; a < i.length; ++a) {
        var u = i[a];

        if (!(Sl(u.to, s.from) < 0 || Sl(u.from, s.to) > 0)) {
          var c = [a, 1],
              f = Sl(u.from, s.from),
              h = Sl(u.to, s.to);
          (0 > f || !l.inclusiveLeft && !f) && c.push({
            from: u.from,
            to: s.from
          }), (h > 0 || !l.inclusiveRight && !h) && c.push({
            from: s.to,
            to: u.to
          }), i.splice.apply(i, c), a += c.length - 1;
        }
      }
    }

    return i;
  }

  function qn(e) {
    var t = e.markedSpans;

    if (t) {
      for (var r = 0; r < t.length; ++r) {
        t[r].marker.detachLine(e);
      }

      e.markedSpans = null;
    }
  }

  function Zn(e, t) {
    if (t) {
      for (var r = 0; r < t.length; ++r) {
        t[r].marker.attachLine(e);
      }

      e.markedSpans = t;
    }
  }

  function Qn(e) {
    return e.inclusiveLeft ? -1 : 0;
  }

  function Jn(e) {
    return e.inclusiveRight ? 1 : 0;
  }

  function ei(e, t) {
    var r = e.lines.length - t.lines.length;
    if (0 != r) return r;
    var n = e.find(),
        i = t.find(),
        o = Sl(n.from, i.from) || Qn(e) - Qn(t);
    if (o) return -o;
    var l = Sl(n.to, i.to) || Jn(e) - Jn(t);
    return l ? l : t.id - e.id;
  }

  function ti(e, t) {
    var r,
        n = Cl && e.markedSpans;
    if (n) for (var i, o = 0; o < n.length; ++o) {
      i = n[o], i.marker.collapsed && null == (t ? i.from : i.to) && (!r || ei(r, i.marker) < 0) && (r = i.marker);
    }
    return r;
  }

  function ri(e) {
    return ti(e, !0);
  }

  function ni(e) {
    return ti(e, !1);
  }

  function ii(e, t, r, n, i) {
    var o = Ri(e, t),
        l = Cl && o.markedSpans;
    if (l) for (var s = 0; s < l.length; ++s) {
      var a = l[s];

      if (a.marker.collapsed) {
        var u = a.marker.find(0),
            c = Sl(u.from, r) || Qn(a.marker) - Qn(i),
            f = Sl(u.to, n) || Jn(a.marker) - Jn(i);
        if (!(c >= 0 && 0 >= f || 0 >= c && f >= 0) && (0 >= c && (Sl(u.to, r) > 0 || a.marker.inclusiveRight && i.inclusiveLeft) || c >= 0 && (Sl(u.from, n) < 0 || a.marker.inclusiveLeft && i.inclusiveRight))) return !0;
      }
    }
  }

  function oi(e) {
    for (var t; t = ri(e);) {
      e = t.find(-1, !0).line;
    }

    return e;
  }

  function li(e) {
    for (var t, r; t = ni(e);) {
      e = t.find(1, !0).line, (r || (r = [])).push(e);
    }

    return r;
  }

  function si(e, t) {
    var r = Ri(e, t),
        n = oi(r);
    return r == n ? t : Ui(n);
  }

  function ai(e, t) {
    if (t > e.lastLine()) return t;
    var r,
        n = Ri(e, t);
    if (!ui(e, n)) return t;

    for (; r = ni(n);) {
      n = r.find(1, !0).line;
    }

    return Ui(n) + 1;
  }

  function ui(e, t) {
    var r = Cl && t.markedSpans;
    if (r) for (var n, i = 0; i < r.length; ++i) {
      if (n = r[i], n.marker.collapsed) {
        if (null == n.from) return !0;
        if (!n.marker.widgetNode && 0 == n.from && n.marker.inclusiveLeft && ci(e, t, n)) return !0;
      }
    }
  }

  function ci(e, t, r) {
    if (null == r.to) {
      var n = r.marker.find(1, !0);
      return ci(e, n.line, Gn(n.line.markedSpans, r.marker));
    }

    if (r.marker.inclusiveRight && r.to == t.text.length) return !0;

    for (var i, o = 0; o < t.markedSpans.length; ++o) {
      if (i = t.markedSpans[o], i.marker.collapsed && !i.marker.widgetNode && i.from == r.to && (null == i.to || i.to != r.from) && (i.marker.inclusiveLeft || r.marker.inclusiveRight) && ci(e, t, i)) return !0;
    }
  }

  function fi(e, t, r) {
    Ki(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Sn(e, null, r);
  }

  function hi(e) {
    if (null != e.height) return e.height;

    if (!Oo(document.body, e.node)) {
      var t = "position: relative;";
      e.coverGutter && (t += "margin-left: -" + e.cm.getGutterElement().offsetWidth + "px;"), Ho(e.cm.display.measure, Ao("div", [e.node], null, t));
    }

    return e.height = e.node.offsetHeight;
  }

  function di(e, t, r, n) {
    var i = new is(e, r, n);
    return i.noHScroll && (e.display.alignWidgets = !0), Wn(e.doc, t, "widget", function (t) {
      var r = t.widgets || (t.widgets = []);

      if (null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, !ui(e.doc, t)) {
        var n = Ki(t) < e.doc.scrollTop;
        Gi(t, t.height + hi(i)), n && Sn(e, null, i.height), e.curOp.forceUpdate = !0;
      }

      return !0;
    }), i;
  }

  function pi(e, t, r, n) {
    e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), qn(e), Zn(e, r);
    var i = n ? n(e) : 1;
    i != e.height && Gi(e, i);
  }

  function gi(e) {
    e.parent = null, qn(e);
  }

  function vi(e, t) {
    if (e) for (;;) {
      var r = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
      if (!r) break;
      e = e.slice(0, r.index) + e.slice(r.index + r[0].length);
      var n = r[1] ? "bgClass" : "textClass";
      null == t[n] ? t[n] = r[2] : new RegExp("(?:^|s)" + r[2] + "(?:$|s)").test(t[n]) || (t[n] += " " + r[2]);
    }
    return e;
  }

  function mi(t, r) {
    if (t.blankLine) return t.blankLine(r);

    if (t.innerMode) {
      var n = e.innerMode(t, r);
      return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0;
    }
  }

  function yi(t, r, n, i) {
    for (var o = 0; 10 > o; o++) {
      i && (i[0] = e.innerMode(t, n).mode);
      var l = t.token(r, n);
      if (r.pos > r.start) return l;
    }

    throw new Error("Mode " + t.name + " failed to advance stream.");
  }

  function bi(e, t, r, n) {
    function i(e) {
      return {
        start: f.start,
        end: f.pos,
        string: f.current(),
        type: o || null,
        state: e ? _l(l.mode, c) : c
      };
    }

    var o,
        l = e.doc,
        s = l.mode;
    t = tt(l, t);
    var a,
        u = Ri(l, t.line),
        c = Tt(e, t.line, r),
        f = new es(u.text, e.options.tabSize);

    for (n && (a = []); (n || f.pos < t.ch) && !f.eol();) {
      f.start = f.pos, o = yi(s, f, c), n && a.push(i(!0));
    }

    return n ? a : i();
  }

  function wi(e, t, r, n, i, o, l) {
    var s = r.flattenSpans;
    null == s && (s = e.options.flattenSpans);
    var a,
        u = 0,
        c = null,
        f = new es(t, e.options.tabSize),
        h = e.options.addModeClass && [null];

    for ("" == t && vi(mi(r, n), o); !f.eol();) {
      if (f.pos > e.options.maxHighlightLength ? (s = !1, l && Li(e, t, n, f.pos), f.pos = t.length, a = null) : a = vi(yi(r, f, n, h), o), h) {
        var d = h[0].name;
        d && (a = "m-" + (a ? d + " " + a : d));
      }

      if (!s || c != a) {
        for (; u < f.start;) {
          u = Math.min(f.start, u + 5e4), i(u, c);
        }

        c = a;
      }

      f.start = f.pos;
    }

    for (; u < f.pos;) {
      var p = Math.min(f.pos, u + 5e4);
      i(p, c), u = p;
    }
  }

  function xi(e, t, r, n) {
    var i = [e.state.modeGen],
        o = {};
    wi(e, t.text, e.doc.mode, r, function (e, t) {
      i.push(e, t);
    }, o, n);

    for (var l = 0; l < e.state.overlays.length; ++l) {
      var s = e.state.overlays[l],
          a = 1,
          u = 0;
      wi(e, t.text, s.mode, !0, function (e, t) {
        for (var r = a; e > u;) {
          var n = i[a];
          n > e && i.splice(a, 1, e, i[a + 1], n), a += 2, u = Math.min(e, n);
        }

        if (t) if (s.opaque) i.splice(r, a - r, e, "cm-overlay " + t), a = r + 2;else for (; a > r; r += 2) {
          var o = i[r + 1];
          i[r + 1] = (o ? o + " " : "") + "cm-overlay " + t;
        }
      }, o);
    }

    return {
      styles: i,
      classes: o.bgClass || o.textClass ? o : null
    };
  }

  function Ci(e, t, r) {
    if (!t.styles || t.styles[0] != e.state.modeGen) {
      var n = xi(e, t, t.stateAfter = Tt(e, Ui(t)));
      t.styles = n.styles, n.classes ? t.styleClasses = n.classes : t.styleClasses && (t.styleClasses = null), r === e.doc.frontier && e.doc.frontier++;
    }

    return t.styles;
  }

  function Li(e, t, r, n) {
    var i = e.doc.mode,
        o = new es(t, e.options.tabSize);

    for (o.start = o.pos = n || 0, "" == t && mi(i, r); !o.eol() && o.pos <= e.options.maxHighlightLength;) {
      yi(i, o, r), o.start = o.pos;
    }
  }

  function Si(e, t) {
    if (!e || /^\s*$/.test(e)) return null;
    var r = t.addModeClass ? ss : ls;
    return r[e] || (r[e] = e.replace(/\S+/g, "cm-$&"));
  }

  function ki(e, t) {
    var r = Ao("span", null, null, ll ? "padding-right: .1px" : null),
        n = {
      pre: Ao("pre", [r]),
      content: r,
      col: 0,
      pos: 0,
      cm: e
    };
    t.measure = {};

    for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
      var o,
          l = i ? t.rest[i - 1] : t.line;
      n.pos = 0, n.addToken = Ti, (il || ll) && e.getOption("lineWrapping") && (n.addToken = Wi(n.addToken)), Bo(e.display.measure) && (o = Xi(l)) && (n.addToken = Ai(n.addToken, o)), n.map = [];
      var s = t != e.display.externalMeasured && Ui(l);
      Hi(l, n, Ci(e, l, s)), l.styleClasses && (l.styleClasses.bgClass && (n.bgClass = Io(l.styleClasses.bgClass, n.bgClass || "")), l.styleClasses.textClass && (n.textClass = Io(l.styleClasses.textClass, n.textClass || ""))), 0 == n.map.length && n.map.push(0, 0, n.content.appendChild(Fo(e.display.measure))), 0 == i ? (t.measure.map = n.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(n.map), (t.measure.caches || (t.measure.caches = [])).push({}));
    }

    return ll && /\bcm-tab\b/.test(n.content.lastChild.className) && (n.content.className = "cm-tab-wrap-hack"), ms(e, "renderLine", e, t.line, n.pre), n.pre.className && (n.textClass = Io(n.pre.className, n.textClass || "")), n;
  }

  function Mi(e) {
    var t = Ao("span", "•", "cm-invalidchar");
    return t.title = "\\u" + e.charCodeAt(0).toString(16), t;
  }

  function Ti(e, t, r, n, i, o, l) {
    if (t) {
      var s = e.cm.options.specialChars,
          a = !1;
      if (s.test(t)) for (var u = document.createDocumentFragment(), c = 0;;) {
        s.lastIndex = c;
        var f = s.exec(t),
            h = f ? f.index - c : t.length - c;

        if (h) {
          var d = document.createTextNode(t.slice(c, c + h));
          u.appendChild(il && 9 > ol ? Ao("span", [d]) : d), e.map.push(e.pos, e.pos + h, d), e.col += h, e.pos += h;
        }

        if (!f) break;

        if (c += h + 1, "	" == f[0]) {
          var p = e.cm.options.tabSize,
              g = p - e.col % p,
              d = u.appendChild(Ao("span", bo(g), "cm-tab"));
          e.col += g;
        } else {
          var d = e.cm.options.specialCharPlaceholder(f[0]);
          u.appendChild(il && 9 > ol ? Ao("span", [d]) : d), e.col += 1;
        }

        e.map.push(e.pos, e.pos + 1, d), e.pos++;
      } else {
        e.col += t.length;
        var u = document.createTextNode(t);
        e.map.push(e.pos, e.pos + t.length, u), il && 9 > ol && (a = !0), e.pos += t.length;
      }

      if (r || n || i || a || l) {
        var v = r || "";
        n && (v += n), i && (v += i);
        var m = Ao("span", [u], v, l);
        return o && (m.title = o), e.content.appendChild(m);
      }

      e.content.appendChild(u);
    }
  }

  function Wi(e) {
    function t(e) {
      for (var t = " ", r = 0; r < e.length - 2; ++r) {
        t += r % 2 ? " " : " ";
      }

      return t += " ";
    }

    return function (r, n, i, o, l, s) {
      e(r, n.replace(/ {3,}/g, t), i, o, l, s);
    };
  }

  function Ai(e, t) {
    return function (r, n, i, o, l, s) {
      i = i ? i + " cm-force-border" : "cm-force-border";

      for (var a = r.pos, u = a + n.length;;) {
        for (var c = 0; c < t.length; c++) {
          var f = t[c];
          if (f.to > a && f.from <= a) break;
        }

        if (f.to >= u) return e(r, n, i, o, l, s);
        e(r, n.slice(0, f.to - a), i, o, null, s), o = null, n = n.slice(f.to - a), a = f.to;
      }
    };
  }

  function Ni(e, t, r, n) {
    var i = !n && r.widgetNode;
    i && (e.map.push(e.pos, e.pos + t, i), e.content.appendChild(i)), e.pos += t;
  }

  function Hi(e, t, r) {
    var n = e.markedSpans,
        i = e.text,
        o = 0;
    if (n) for (var l, s, a, u, c, f, h, d = i.length, p = 0, g = 1, v = "", m = 0;;) {
      if (m == p) {
        a = u = c = f = s = "", h = null, m = 1 / 0;

        for (var y = [], b = 0; b < n.length; ++b) {
          var w = n[b],
              x = w.marker;
          w.from <= p && (null == w.to || w.to > p) ? (null != w.to && m > w.to && (m = w.to, u = ""), x.className && (a += " " + x.className), x.css && (s = x.css), x.startStyle && w.from == p && (c += " " + x.startStyle), x.endStyle && w.to == m && (u += " " + x.endStyle), x.title && !f && (f = x.title), x.collapsed && (!h || ei(h.marker, x) < 0) && (h = w)) : w.from > p && m > w.from && (m = w.from), "bookmark" == x.type && w.from == p && x.widgetNode && y.push(x);
        }

        if (h && (h.from || 0) == p && (Ni(t, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from), null == h.to)) return;
        if (!h && y.length) for (var b = 0; b < y.length; ++b) {
          Ni(t, 0, y[b]);
        }
      }

      if (p >= d) break;

      for (var C = Math.min(d, m);;) {
        if (v) {
          var L = p + v.length;

          if (!h) {
            var S = L > C ? v.slice(0, C - p) : v;
            t.addToken(t, S, l ? l + a : a, c, p + S.length == m ? u : "", f, s);
          }

          if (L >= C) {
            v = v.slice(C - p), p = C;
            break;
          }

          p = L, c = "";
        }

        v = i.slice(o, o = r[g++]), l = Si(r[g++], t.cm.options);
      }
    } else for (var g = 1; g < r.length; g += 2) {
      t.addToken(t, i.slice(o, o = r[g]), Si(r[g + 1], t.cm.options));
    }
  }

  function Oi(e, t) {
    return 0 == t.from.ch && 0 == t.to.ch && "" == wo(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore);
  }

  function Di(e, t, r, n) {
    function i(e) {
      return r ? r[e] : null;
    }

    function o(e, r, i) {
      pi(e, r, i, n), co(e, "change", e, t);
    }

    var l = t.from,
        s = t.to,
        a = t.text,
        u = Ri(e, l.line),
        c = Ri(e, s.line),
        f = wo(a),
        h = i(a.length - 1),
        d = s.line - l.line;

    if (Oi(e, t)) {
      for (var p = 0, g = []; p < a.length - 1; ++p) {
        g.push(new os(a[p], i(p), n));
      }

      o(c, c.text, h), d && e.remove(l.line, d), g.length && e.insert(l.line, g);
    } else if (u == c) {
      if (1 == a.length) o(u, u.text.slice(0, l.ch) + f + u.text.slice(s.ch), h);else {
        for (var g = [], p = 1; p < a.length - 1; ++p) {
          g.push(new os(a[p], i(p), n));
        }

        g.push(new os(f + u.text.slice(s.ch), h, n)), o(u, u.text.slice(0, l.ch) + a[0], i(0)), e.insert(l.line + 1, g);
      }
    } else if (1 == a.length) o(u, u.text.slice(0, l.ch) + a[0] + c.text.slice(s.ch), i(0)), e.remove(l.line + 1, d);else {
      o(u, u.text.slice(0, l.ch) + a[0], i(0)), o(c, f + c.text.slice(s.ch), h);

      for (var p = 1, g = []; p < a.length - 1; ++p) {
        g.push(new os(a[p], i(p), n));
      }

      d > 1 && e.remove(l.line + 1, d - 1), e.insert(l.line + 1, g);
    }

    co(e, "change", e, t);
  }

  function zi(e) {
    this.lines = e, this.parent = null;

    for (var t = 0, r = 0; t < e.length; ++t) {
      e[t].parent = this, r += e[t].height;
    }

    this.height = r;
  }

  function Ii(e) {
    this.children = e;

    for (var t = 0, r = 0, n = 0; n < e.length; ++n) {
      var i = e[n];
      t += i.chunkSize(), r += i.height, i.parent = this;
    }

    this.size = t, this.height = r, this.parent = null;
  }

  function Ei(e, t, r) {
    function n(e, i, o) {
      if (e.linked) for (var l = 0; l < e.linked.length; ++l) {
        var s = e.linked[l];

        if (s.doc != i) {
          var a = o && s.sharedHist;
          (!r || a) && (t(s.doc, a), n(s.doc, e, a));
        }
      }
    }

    n(e, null, !0);
  }

  function Pi(e, t) {
    if (t.cm) throw new Error("This document is already in use.");
    e.doc = t, t.cm = e, l(e), r(e), e.options.lineWrapping || h(e), e.options.mode = t.modeOption, br(e);
  }

  function Ri(e, t) {
    if (t -= e.first, 0 > t || t >= e.size) throw new Error("There is no line " + (t + e.first) + " in the document.");

    for (var r = e; !r.lines;) {
      for (var n = 0;; ++n) {
        var i = r.children[n],
            o = i.chunkSize();

        if (o > t) {
          r = i;
          break;
        }

        t -= o;
      }
    }

    return r.lines[t];
  }

  function Fi(e, t, r) {
    var n = [],
        i = t.line;
    return e.iter(t.line, r.line + 1, function (e) {
      var o = e.text;
      i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i;
    }), n;
  }

  function Bi(e, t, r) {
    var n = [];
    return e.iter(t, r, function (e) {
      n.push(e.text);
    }), n;
  }

  function Gi(e, t) {
    var r = t - e.height;
    if (r) for (var n = e; n; n = n.parent) {
      n.height += r;
    }
  }

  function Ui(e) {
    if (null == e.parent) return null;

    for (var t = e.parent, r = xo(t.lines, e), n = t.parent; n; t = n, n = n.parent) {
      for (var i = 0; n.children[i] != t; ++i) {
        r += n.children[i].chunkSize();
      }
    }

    return r + t.first;
  }

  function Vi(e, t) {
    var r = e.first;

    e: do {
      for (var n = 0; n < e.children.length; ++n) {
        var i = e.children[n],
            o = i.height;

        if (o > t) {
          e = i;
          continue e;
        }

        t -= o, r += i.chunkSize();
      }

      return r;
    } while (!e.lines);

    for (var n = 0; n < e.lines.length; ++n) {
      var l = e.lines[n],
          s = l.height;
      if (s > t) break;
      t -= s;
    }

    return r + n;
  }

  function Ki(e) {
    e = oi(e);

    for (var t = 0, r = e.parent, n = 0; n < r.lines.length; ++n) {
      var i = r.lines[n];
      if (i == e) break;
      t += i.height;
    }

    for (var o = r.parent; o; r = o, o = r.parent) {
      for (var n = 0; n < o.children.length; ++n) {
        var l = o.children[n];
        if (l == r) break;
        t += l.height;
      }
    }

    return t;
  }

  function Xi(e) {
    var t = e.order;
    return null == t && (t = e.order = Vs(e.text)), t;
  }

  function ji(e) {
    this.done = [], this.undone = [], this.undoDepth = 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1;
  }

  function _i(e, t) {
    var r = {
      from: _(t.from),
      to: Rl(t),
      text: Fi(e, t.from, t.to)
    };
    return eo(e, r, t.from.line, t.to.line + 1), Ei(e, function (e) {
      eo(e, r, t.from.line, t.to.line + 1);
    }, !0), r;
  }

  function Yi(e) {
    for (; e.length;) {
      var t = wo(e);
      if (!t.ranges) break;
      e.pop();
    }
  }

  function $i(e, t) {
    return t ? (Yi(e.done), wo(e.done)) : e.done.length && !wo(e.done).ranges ? wo(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(), wo(e.done)) : void 0;
  }

  function qi(e, t, r, n) {
    var i = e.history;
    i.undone.length = 0;
    var o,
        l = +new Date();

    if ((i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > l - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = $i(i, i.lastOp == n))) {
      var s = wo(o.changes);
      0 == Sl(t.from, t.to) && 0 == Sl(t.from, s.to) ? s.to = Rl(t) : o.changes.push(_i(e, t));
    } else {
      var a = wo(i.done);

      for (a && a.ranges || Ji(e.sel, i.done), o = {
        changes: [_i(e, t)],
        generation: i.generation
      }, i.done.push(o); i.done.length > i.undoDepth;) {
        i.done.shift(), i.done[0].ranges || i.done.shift();
      }
    }

    i.done.push(r), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = l, i.lastOp = i.lastSelOp = n, i.lastOrigin = i.lastSelOrigin = t.origin, s || ms(e, "historyAdded");
  }

  function Zi(e, t, r, n) {
    var i = t.charAt(0);
    return "*" == i || "+" == i && r.ranges.length == n.ranges.length && r.somethingSelected() == n.somethingSelected() && new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
  }

  function Qi(e, t, r, n) {
    var i = e.history,
        o = n && n.origin;
    r == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Zi(e, o, wo(i.done), t)) ? i.done[i.done.length - 1] = t : Ji(t, i.done), i.lastSelTime = +new Date(), i.lastSelOrigin = o, i.lastSelOp = r, n && n.clearRedo !== !1 && Yi(i.undone);
  }

  function Ji(e, t) {
    var r = wo(t);
    r && r.ranges && r.equals(e) || t.push(e);
  }

  function eo(e, t, r, n) {
    var i = t["spans_" + e.id],
        o = 0;
    e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function (r) {
      r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o;
    });
  }

  function to(e) {
    if (!e) return null;

    for (var t, r = 0; r < e.length; ++r) {
      e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]);
    }

    return t ? t.length ? t : null : e;
  }

  function ro(e, t) {
    var r = t["spans_" + e.id];
    if (!r) return null;

    for (var n = 0, i = []; n < t.text.length; ++n) {
      i.push(to(r[n]));
    }

    return i;
  }

  function no(e, t, r) {
    for (var n = 0, i = []; n < e.length; ++n) {
      var o = e[n];
      if (o.ranges) i.push(r ? q.prototype.deepCopy.call(o) : o);else {
        var l = o.changes,
            s = [];
        i.push({
          changes: s
        });

        for (var a = 0; a < l.length; ++a) {
          var u,
              c = l[a];
          if (s.push({
            from: c.from,
            to: c.to,
            text: c.text
          }), t) for (var f in c) {
            (u = f.match(/^spans_(\d+)$/)) && xo(t, Number(u[1])) > -1 && (wo(s)[f] = c[f], delete c[f]);
          }
        }
      }
    }

    return i;
  }

  function io(e, t, r, n) {
    r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0);
  }

  function oo(e, t, r, n) {
    for (var i = 0; i < e.length; ++i) {
      var o = e[i],
          l = !0;

      if (o.ranges) {
        o.copied || (o = e[i] = o.deepCopy(), o.copied = !0);

        for (var s = 0; s < o.ranges.length; s++) {
          io(o.ranges[s].anchor, t, r, n), io(o.ranges[s].head, t, r, n);
        }
      } else {
        for (var s = 0; s < o.changes.length; ++s) {
          var a = o.changes[s];
          if (r < a.from.line) a.from = Ll(a.from.line + n, a.from.ch), a.to = Ll(a.to.line + n, a.to.ch);else if (t <= a.to.line) {
            l = !1;
            break;
          }
        }

        l || (e.splice(0, i + 1), i = 0);
      }
    }
  }

  function lo(e, t) {
    var r = t.from.line,
        n = t.to.line,
        i = t.text.length - (n - r) - 1;
    oo(e.done, r, n, i), oo(e.undone, r, n, i);
  }

  function so(e) {
    return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue;
  }

  function ao(e) {
    return e.target || e.srcElement;
  }

  function uo(e) {
    var t = e.which;
    return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), vl && e.ctrlKey && 1 == t && (t = 3), t;
  }

  function co(e, t) {
    function r(e) {
      return function () {
        e.apply(null, o);
      };
    }

    var n = e._handlers && e._handlers[t];

    if (n) {
      var i,
          o = Array.prototype.slice.call(arguments, 2);
      Al ? i = Al.delayedCallbacks : ys ? i = ys : (i = ys = [], setTimeout(fo, 0));

      for (var l = 0; l < n.length; ++l) {
        i.push(r(n[l]));
      }
    }
  }

  function fo() {
    var e = ys;
    ys = null;

    for (var t = 0; t < e.length; ++t) {
      e[t]();
    }
  }

  function ho(e, t, r) {
    return "string" == typeof t && (t = {
      type: t,
      preventDefault: function preventDefault() {
        this.defaultPrevented = !0;
      }
    }), ms(e, r || t.type, e, t), so(t) || t.codemirrorIgnore;
  }

  function po(e) {
    var t = e._handlers && e._handlers.cursorActivity;
    if (t) for (var r = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), n = 0; n < t.length; ++n) {
      -1 == xo(r, t[n]) && r.push(t[n]);
    }
  }

  function go(e, t) {
    var r = e._handlers && e._handlers[t];
    return r && r.length > 0;
  }

  function vo(e) {
    e.prototype.on = function (e, t) {
      gs(this, e, t);
    }, e.prototype.off = function (e, t) {
      vs(this, e, t);
    };
  }

  function mo() {
    this.id = null;
  }

  function yo(e, t, r) {
    for (var n = 0, i = 0;;) {
      var o = e.indexOf("	", n);
      -1 == o && (o = e.length);
      var l = o - n;
      if (o == e.length || i + l >= t) return n + Math.min(l, t - i);
      if (i += o - n, i += r - i % r, n = o + 1, i >= t) return n;
    }
  }

  function bo(e) {
    for (; ks.length <= e;) {
      ks.push(wo(ks) + " ");
    }

    return ks[e];
  }

  function wo(e) {
    return e[e.length - 1];
  }

  function xo(e, t) {
    for (var r = 0; r < e.length; ++r) {
      if (e[r] == t) return r;
    }

    return -1;
  }

  function Co(e, t) {
    for (var r = [], n = 0; n < e.length; n++) {
      r[n] = t(e[n], n);
    }

    return r;
  }

  function Lo(e, t) {
    var r;
    if (Object.create) r = Object.create(e);else {
      var n = function n() {};

      n.prototype = e, r = new n();
    }
    return t && So(t, r), r;
  }

  function So(e, t, r) {
    t || (t = {});

    for (var n in e) {
      !e.hasOwnProperty(n) || r === !1 && t.hasOwnProperty(n) || (t[n] = e[n]);
    }

    return t;
  }

  function ko(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return function () {
      return e.apply(null, t);
    };
  }

  function Mo(e, t) {
    return t ? t.source.indexOf("\\w") > -1 && As(e) ? !0 : t.test(e) : As(e);
  }

  function To(e) {
    for (var t in e) {
      if (e.hasOwnProperty(t) && e[t]) return !1;
    }

    return !0;
  }

  function Wo(e) {
    return e.charCodeAt(0) >= 768 && Ns.test(e);
  }

  function Ao(e, t, r, n) {
    var i = document.createElement(e);
    if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) i.appendChild(document.createTextNode(t));else if (t) for (var o = 0; o < t.length; ++o) {
      i.appendChild(t[o]);
    }
    return i;
  }

  function No(e) {
    for (var t = e.childNodes.length; t > 0; --t) {
      e.removeChild(e.firstChild);
    }

    return e;
  }

  function Ho(e, t) {
    return No(e).appendChild(t);
  }

  function Oo(e, t) {
    if (e.contains) return e.contains(t);

    for (; t = t.parentNode;) {
      if (t == e) return !0;
    }
  }

  function Do() {
    return document.activeElement;
  }

  function zo(e) {
    return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
  }

  function Io(e, t) {
    for (var r = e.split(" "), n = 0; n < r.length; n++) {
      r[n] && !zo(r[n]).test(t) && (t += " " + r[n]);
    }

    return t;
  }

  function Eo(e) {
    if (document.body.getElementsByClassName) for (var t = document.body.getElementsByClassName("CodeMirror"), r = 0; r < t.length; r++) {
      var n = t[r].CodeMirror;
      n && e(n);
    }
  }

  function Po() {
    Is || (Ro(), Is = !0);
  }

  function Ro() {
    var e;
    gs(window, "resize", function () {
      null == e && (e = setTimeout(function () {
        e = null, Eo(zr);
      }, 100));
    }), gs(window, "blur", function () {
      Eo(on);
    });
  }

  function Fo(e) {
    if (null == Hs) {
      var t = Ao("span", "​");
      Ho(e, Ao("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (Hs = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(il && 8 > ol));
    }

    return Hs ? Ao("span", "​") : Ao("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
  }

  function Bo(e) {
    if (null != Os) return Os;
    var t = Ho(e, document.createTextNode("AخA")),
        r = Ts(t, 0, 1).getBoundingClientRect();
    if (!r || r.left == r.right) return !1;
    var n = Ts(t, 1, 2).getBoundingClientRect();
    return Os = n.right - r.right < 3;
  }

  function Go(e) {
    if (null != Bs) return Bs;
    var t = Ho(e, Ao("span", "x")),
        r = t.getBoundingClientRect(),
        n = Ts(t, 0, 1).getBoundingClientRect();
    return Bs = Math.abs(r.left - n.left) > 1;
  }

  function Uo(e, t, r, n) {
    if (!e) return n(t, r, "ltr");

    for (var i = !1, o = 0; o < e.length; ++o) {
      var l = e[o];
      (l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr"), i = !0);
    }

    i || n(t, r, "ltr");
  }

  function Vo(e) {
    return e.level % 2 ? e.to : e.from;
  }

  function Ko(e) {
    return e.level % 2 ? e.from : e.to;
  }

  function Xo(e) {
    var t = Xi(e);
    return t ? Vo(t[0]) : 0;
  }

  function jo(e) {
    var t = Xi(e);
    return t ? Ko(wo(t)) : e.text.length;
  }

  function _o(e, t) {
    var r = Ri(e.doc, t),
        n = oi(r);
    n != r && (t = Ui(n));
    var i = Xi(n),
        o = i ? i[0].level % 2 ? jo(n) : Xo(n) : 0;
    return Ll(t, o);
  }

  function Yo(e, t) {
    for (var r, n = Ri(e.doc, t); r = ni(n);) {
      n = r.find(1, !0).line, t = null;
    }

    var i = Xi(n),
        o = i ? i[0].level % 2 ? Xo(n) : jo(n) : n.text.length;
    return Ll(null == t ? Ui(n) : t, o);
  }

  function $o(e, t) {
    var r = _o(e, t.line),
        n = Ri(e.doc, r.line),
        i = Xi(n);

    if (!i || 0 == i[0].level) {
      var o = Math.max(0, n.text.search(/\S/)),
          l = t.line == r.line && t.ch <= o && t.ch;
      return Ll(r.line, l ? 0 : o);
    }

    return r;
  }

  function qo(e, t, r) {
    var n = e[0].level;
    return t == n ? !0 : r == n ? !1 : r > t;
  }

  function Zo(e, t) {
    Us = null;

    for (var r, n = 0; n < e.length; ++n) {
      var i = e[n];
      if (i.from < t && i.to > t) return n;

      if (i.from == t || i.to == t) {
        if (null != r) return qo(e, i.level, e[r].level) ? (i.from != i.to && (Us = r), n) : (i.from != i.to && (Us = n), r);
        r = n;
      }
    }

    return r;
  }

  function Qo(e, t, r, n) {
    if (!n) return t + r;

    do {
      t += r;
    } while (t > 0 && Wo(e.text.charAt(t)));

    return t;
  }

  function Jo(e, t, r, n) {
    var i = Xi(e);
    if (!i) return el(e, t, r, n);

    for (var o = Zo(i, t), l = i[o], s = Qo(e, t, l.level % 2 ? -r : r, n);;) {
      if (s > l.from && s < l.to) return s;
      if (s == l.from || s == l.to) return Zo(i, s) == o ? s : (l = i[o += r], r > 0 == l.level % 2 ? l.to : l.from);
      if (l = i[o += r], !l) return null;
      s = r > 0 == l.level % 2 ? Qo(e, l.to, -1, n) : Qo(e, l.from, 1, n);
    }
  }

  function el(e, t, r, n) {
    var i = t + r;
    if (n) for (; i > 0 && Wo(e.text.charAt(i));) {
      i += r;
    }
    return 0 > i || i > e.text.length ? null : i;
  }

  var tl = /gecko\/\d/i.test(navigator.userAgent),
      rl = /MSIE \d/.test(navigator.userAgent),
      nl = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),
      il = rl || nl,
      ol = il && (rl ? document.documentMode || 6 : nl[1]),
      ll = /WebKit\//.test(navigator.userAgent),
      sl = ll && /Qt\/\d+\.\d+/.test(navigator.userAgent),
      al = /Chrome\//.test(navigator.userAgent),
      ul = /Opera\//.test(navigator.userAgent),
      cl = /Apple Computer/.test(navigator.vendor),
      fl = /KHTML\//.test(navigator.userAgent),
      hl = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),
      dl = /PhantomJS/.test(navigator.userAgent),
      pl = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent),
      gl = pl || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),
      vl = pl || /Mac/.test(navigator.platform),
      ml = /win/i.test(navigator.platform),
      yl = ul && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
  yl && (yl = Number(yl[1])), yl && yl >= 15 && (ul = !1, ll = !0);
  var bl = vl && (sl || ul && (null == yl || 12.11 > yl)),
      wl = tl || il && ol >= 9,
      xl = !1,
      Cl = !1;
  g.prototype = So({
    update: function update(e) {
      var t = e.scrollWidth > e.clientWidth + 1,
          r = e.scrollHeight > e.clientHeight + 1,
          n = e.nativeBarWidth;

      if (r) {
        this.vert.style.display = "block", this.vert.style.bottom = t ? n + "px" : "0";
        var i = e.viewHeight - (t ? n : 0);
        this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
      } else this.vert.style.display = "", this.vert.firstChild.style.height = "0";

      if (t) {
        this.horiz.style.display = "block", this.horiz.style.right = r ? n + "px" : "0", this.horiz.style.left = e.barLeft + "px";
        var o = e.viewWidth - e.barLeft - (r ? n : 0);
        this.horiz.firstChild.style.width = e.scrollWidth - e.clientWidth + o + "px";
      } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";

      return !this.checkedOverlay && e.clientHeight > 0 && (0 == n && this.overlayHack(), this.checkedOverlay = !0), {
        right: r ? n : 0,
        bottom: t ? n : 0
      };
    },
    setScrollLeft: function setScrollLeft(e) {
      this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e);
    },
    setScrollTop: function setScrollTop(e) {
      this.vert.scrollTop != e && (this.vert.scrollTop = e);
    },
    overlayHack: function overlayHack() {
      var e = vl && !hl ? "12px" : "18px";
      this.horiz.style.minHeight = this.vert.style.minWidth = e;

      var t = this,
          r = function r(e) {
        ao(e) != t.vert && ao(e) != t.horiz && pr(t.cm, Pr)(e);
      };

      gs(this.vert, "mousedown", r), gs(this.horiz, "mousedown", r);
    },
    clear: function clear() {
      var e = this.horiz.parentNode;
      e.removeChild(this.horiz), e.removeChild(this.vert);
    }
  }, g.prototype), v.prototype = So({
    update: function update() {
      return {
        bottom: 0,
        right: 0
      };
    },
    setScrollLeft: function setScrollLeft() {},
    setScrollTop: function setScrollTop() {},
    clear: function clear() {}
  }, v.prototype), e.scrollbarModel = {
    "native": g,
    "null": v
  };

  var Ll = e.Pos = function (e, t) {
    return this instanceof Ll ? (this.line = e, void (this.ch = t)) : new Ll(e, t);
  },
      Sl = e.cmpPos = function (e, t) {
    return e.line - t.line || e.ch - t.ch;
  };

  q.prototype = {
    primary: function primary() {
      return this.ranges[this.primIndex];
    },
    equals: function equals(e) {
      if (e == this) return !0;
      if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length) return !1;

      for (var t = 0; t < this.ranges.length; t++) {
        var r = this.ranges[t],
            n = e.ranges[t];
        if (0 != Sl(r.anchor, n.anchor) || 0 != Sl(r.head, n.head)) return !1;
      }

      return !0;
    },
    deepCopy: function deepCopy() {
      for (var e = [], t = 0; t < this.ranges.length; t++) {
        e[t] = new Z(_(this.ranges[t].anchor), _(this.ranges[t].head));
      }

      return new q(e, this.primIndex);
    },
    somethingSelected: function somethingSelected() {
      for (var e = 0; e < this.ranges.length; e++) {
        if (!this.ranges[e].empty()) return !0;
      }

      return !1;
    },
    contains: function contains(e, t) {
      t || (t = e);

      for (var r = 0; r < this.ranges.length; r++) {
        var n = this.ranges[r];
        if (Sl(t, n.from()) >= 0 && Sl(e, n.to()) <= 0) return r;
      }

      return -1;
    }
  }, Z.prototype = {
    from: function from() {
      return $(this.anchor, this.head);
    },
    to: function to() {
      return Y(this.anchor, this.head);
    },
    empty: function empty() {
      return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
    }
  };
  var kl,
      Ml,
      Tl,
      Wl = {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
      Al = null,
      Nl = 0,
      Hl = null,
      Ol = 0,
      Dl = 0,
      zl = null;
  il ? zl = -.53 : tl ? zl = 15 : al ? zl = -.7 : cl && (zl = -1 / 3);

  var Il = function Il(e) {
    var t = e.wheelDeltaX,
        r = e.wheelDeltaY;
    return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), null == r && e.detail && e.axis == e.VERTICAL_AXIS ? r = e.detail : null == r && (r = e.wheelDelta), {
      x: t,
      y: r
    };
  };

  e.wheelEventPixels = function (e) {
    var t = Il(e);
    return t.x *= zl, t.y *= zl, t;
  };

  var El = new mo(),
      Pl = null,
      Rl = e.changeEnd = function (e) {
    return e.text ? Ll(e.from.line + e.text.length - 1, wo(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to;
  };

  e.prototype = {
    constructor: e,
    focus: function focus() {
      window.focus(), Nr(this), Tr(this);
    },
    setOption: function setOption(e, t) {
      var r = this.options,
          n = r[e];
      (r[e] != t || "mode" == e) && (r[e] = t, Bl.hasOwnProperty(e) && pr(this, Bl[e])(this, t, n));
    },
    getOption: function getOption(e) {
      return this.options[e];
    },
    getDoc: function getDoc() {
      return this.doc;
    },
    addKeyMap: function addKeyMap(e, t) {
      this.state.keyMaps[t ? "push" : "unshift"](zn(e));
    },
    removeKeyMap: function removeKeyMap(e) {
      for (var t = this.state.keyMaps, r = 0; r < t.length; ++r) {
        if (t[r] == e || t[r].name == e) return t.splice(r, 1), !0;
      }
    },
    addOverlay: gr(function (t, r) {
      var n = t.token ? t : e.getMode(this.options, t);
      if (n.startState) throw new Error("Overlays may not be stateful.");
      this.state.overlays.push({
        mode: n,
        modeSpec: t,
        opaque: r && r.opaque
      }), this.state.modeGen++, br(this);
    }),
    removeOverlay: gr(function (e) {
      for (var t = this.state.overlays, r = 0; r < t.length; ++r) {
        var n = t[r].modeSpec;
        if (n == e || "string" == typeof e && n.name == e) return t.splice(r, 1), this.state.modeGen++, void br(this);
      }
    }),
    indentLine: gr(function (e, t, r) {
      "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), nt(this.doc, e) && Tn(this, e, t, r);
    }),
    indentSelection: gr(function (e) {
      for (var t = this.doc.sel.ranges, r = -1, n = 0; n < t.length; n++) {
        var i = t[n];
        if (i.empty()) i.head.line > r && (Tn(this, i.head.line, e, !0), r = i.head.line, n == this.doc.sel.primIndex && kn(this));else {
          var o = i.from(),
              l = i.to(),
              s = Math.max(r, o.line);
          r = Math.min(this.lastLine(), l.line - (l.ch ? 0 : 1)) + 1;

          for (var a = s; r > a; ++a) {
            Tn(this, a, e);
          }

          var u = this.doc.sel.ranges;
          0 == o.ch && t.length == u.length && u[n].from().ch > 0 && at(this.doc, n, new Z(o, u[n].to()), xs);
        }
      }
    }),
    getTokenAt: function getTokenAt(e, t) {
      return bi(this, e, t);
    },
    getLineTokens: function getLineTokens(e, t) {
      return bi(this, Ll(e), t, !0);
    },
    getTokenTypeAt: function getTokenTypeAt(e) {
      e = tt(this.doc, e);
      var t,
          r = Ci(this, Ri(this.doc, e.line)),
          n = 0,
          i = (r.length - 1) / 2,
          o = e.ch;
      if (0 == o) t = r[2];else for (;;) {
        var l = n + i >> 1;
        if ((l ? r[2 * l - 1] : 0) >= o) i = l;else {
          if (!(r[2 * l + 1] < o)) {
            t = r[2 * l + 2];
            break;
          }

          n = l + 1;
        }
      }
      var s = t ? t.indexOf("cm-overlay ") : -1;
      return 0 > s ? t : 0 == s ? null : t.slice(0, s - 1);
    },
    getModeAt: function getModeAt(t) {
      var r = this.doc.mode;
      return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r;
    },
    getHelper: function getHelper(e, t) {
      return this.getHelpers(e, t)[0];
    },
    getHelpers: function getHelpers(e, t) {
      var r = [];
      if (!jl.hasOwnProperty(t)) return jl;
      var n = jl[t],
          i = this.getModeAt(e);
      if ("string" == typeof i[t]) n[i[t]] && r.push(n[i[t]]);else if (i[t]) for (var o = 0; o < i[t].length; o++) {
        var l = n[i[t][o]];
        l && r.push(l);
      } else i.helperType && n[i.helperType] ? r.push(n[i.helperType]) : n[i.name] && r.push(n[i.name]);

      for (var o = 0; o < n._global.length; o++) {
        var s = n._global[o];
        s.pred(i, this) && -1 == xo(r, s.val) && r.push(s.val);
      }

      return r;
    },
    getStateAfter: function getStateAfter(e, t) {
      var r = this.doc;
      return e = et(r, null == e ? r.first + r.size - 1 : e), Tt(this, e + 1, t);
    },
    cursorCoords: function cursorCoords(e, t) {
      var r,
          n = this.doc.sel.primary();
      return r = null == e ? n.head : "object" == _typeof(e) ? tt(this.doc, e) : e ? n.from() : n.to(), Zt(this, r, t || "page");
    },
    charCoords: function charCoords(e, t) {
      return qt(this, tt(this.doc, e), t || "page");
    },
    coordsChar: function coordsChar(e, t) {
      return e = $t(this, e, t || "page"), er(this, e.left, e.top);
    },
    lineAtHeight: function lineAtHeight(e, t) {
      return e = $t(this, {
        top: e,
        left: 0
      }, t || "page").top, Vi(this.doc, e + this.display.viewOffset);
    },
    heightAtLine: function heightAtLine(e, t) {
      var r = !1,
          n = this.doc.first + this.doc.size - 1;
      e < this.doc.first ? e = this.doc.first : e > n && (e = n, r = !0);
      var i = Ri(this.doc, e);
      return Yt(this, i, {
        top: 0,
        left: 0
      }, t || "page").top + (r ? this.doc.height - Ki(i) : 0);
    },
    defaultTextHeight: function defaultTextHeight() {
      return rr(this.display);
    },
    defaultCharWidth: function defaultCharWidth() {
      return nr(this.display);
    },
    setGutterMarker: gr(function (e, t, r) {
      return Wn(this.doc, e, "gutter", function (e) {
        var n = e.gutterMarkers || (e.gutterMarkers = {});
        return n[t] = r, !r && To(n) && (e.gutterMarkers = null), !0;
      });
    }),
    clearGutter: gr(function (e) {
      var t = this,
          r = t.doc,
          n = r.first;
      r.iter(function (r) {
        r.gutterMarkers && r.gutterMarkers[e] && (r.gutterMarkers[e] = null, wr(t, n, "gutter"), To(r.gutterMarkers) && (r.gutterMarkers = null)), ++n;
      });
    }),
    addLineWidget: gr(function (e, t, r) {
      return di(this, e, t, r);
    }),
    removeLineWidget: function removeLineWidget(e) {
      e.clear();
    },
    lineInfo: function lineInfo(e) {
      if ("number" == typeof e) {
        if (!nt(this.doc, e)) return null;
        var t = e;
        if (e = Ri(this.doc, e), !e) return null;
      } else {
        var t = Ui(e);
        if (null == t) return null;
      }

      return {
        line: t,
        handle: e,
        text: e.text,
        gutterMarkers: e.gutterMarkers,
        textClass: e.textClass,
        bgClass: e.bgClass,
        wrapClass: e.wrapClass,
        widgets: e.widgets
      };
    },
    getViewport: function getViewport() {
      return {
        from: this.display.viewFrom,
        to: this.display.viewTo
      };
    },
    addWidget: function addWidget(e, t, r, n, i) {
      var o = this.display;
      e = Zt(this, tt(this.doc, e));
      var l = e.bottom,
          s = e.left;
      if (t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), o.sizer.appendChild(t), "over" == n) l = e.top;else if ("above" == n || "near" == n) {
        var a = Math.max(o.wrapper.clientHeight, this.doc.height),
            u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
        ("above" == n || e.bottom + t.offsetHeight > a) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= a && (l = e.bottom), s + t.offsetWidth > u && (s = u - t.offsetWidth);
      }
      t.style.top = l + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), r && Cn(this, s, l, s + t.offsetWidth, l + t.offsetHeight);
    },
    triggerOnKeyDown: gr(Jr),
    triggerOnKeyPress: gr(rn),
    triggerOnKeyUp: tn,
    execCommand: function execCommand(e) {
      return $l.hasOwnProperty(e) ? $l[e](this) : void 0;
    },
    findPosH: function findPosH(e, t, r, n) {
      var i = 1;
      0 > t && (i = -1, t = -t);

      for (var o = 0, l = tt(this.doc, e); t > o && (l = Nn(this.doc, l, i, r, n), !l.hitSide); ++o) {
        ;
      }

      return l;
    },
    moveH: gr(function (e, t) {
      var r = this;
      r.extendSelectionsBy(function (n) {
        return r.display.shift || r.doc.extend || n.empty() ? Nn(r.doc, n.head, e, t, r.options.rtlMoveVisually) : 0 > e ? n.from() : n.to();
      }, Ls);
    }),
    deleteH: gr(function (e, t) {
      var r = this.doc.sel,
          n = this.doc;
      r.somethingSelected() ? n.replaceSelection("", null, "+delete") : An(this, function (r) {
        var i = Nn(n, r.head, e, t, !1);
        return 0 > e ? {
          from: i,
          to: r.head
        } : {
          from: r.head,
          to: i
        };
      });
    }),
    findPosV: function findPosV(e, t, r, n) {
      var i = 1,
          o = n;
      0 > t && (i = -1, t = -t);

      for (var l = 0, s = tt(this.doc, e); t > l; ++l) {
        var a = Zt(this, s, "div");
        if (null == o ? o = a.left : a.left = o, s = Hn(this, a, i, r), s.hitSide) break;
      }

      return s;
    },
    moveV: gr(function (e, t) {
      var r = this,
          n = this.doc,
          i = [],
          o = !r.display.shift && !n.extend && n.sel.somethingSelected();
      if (n.extendSelectionsBy(function (l) {
        if (o) return 0 > e ? l.from() : l.to();
        var s = Zt(r, l.head, "div");
        null != l.goalColumn && (s.left = l.goalColumn), i.push(s.left);
        var a = Hn(r, s, e, t);
        return "page" == t && l == n.sel.primary() && Sn(r, null, qt(r, a, "div").top - s.top), a;
      }, Ls), i.length) for (var l = 0; l < n.sel.ranges.length; l++) {
        n.sel.ranges[l].goalColumn = i[l];
      }
    }),
    findWordAt: function findWordAt(e) {
      var t = this.doc,
          r = Ri(t, e.line).text,
          n = e.ch,
          i = e.ch;

      if (r) {
        var o = this.getHelper(e, "wordChars");
        (e.xRel < 0 || i == r.length) && n ? --n : ++i;

        for (var l = r.charAt(n), s = Mo(l, o) ? function (e) {
          return Mo(e, o);
        } : /\s/.test(l) ? function (e) {
          return /\s/.test(e);
        } : function (e) {
          return !/\s/.test(e) && !Mo(e);
        }; n > 0 && s(r.charAt(n - 1));) {
          --n;
        }

        for (; i < r.length && s(r.charAt(i));) {
          ++i;
        }
      }

      return new Z(Ll(e.line, n), Ll(e.line, i));
    },
    toggleOverwrite: function toggleOverwrite(e) {
      (null == e || e != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? zs(this.display.cursorDiv, "CodeMirror-overwrite") : Ds(this.display.cursorDiv, "CodeMirror-overwrite"), ms(this, "overwriteToggle", this, this.state.overwrite));
    },
    hasFocus: function hasFocus() {
      return Do() == this.display.input;
    },
    scrollTo: gr(function (e, t) {
      (null != e || null != t) && Mn(this), null != e && (this.curOp.scrollLeft = e), null != t && (this.curOp.scrollTop = t);
    }),
    getScrollInfo: function getScrollInfo() {
      var e = this.display.scroller;
      return {
        left: e.scrollLeft,
        top: e.scrollTop,
        height: e.scrollHeight - Ht(this) - this.display.barHeight,
        width: e.scrollWidth - Ht(this) - this.display.barWidth,
        clientHeight: Dt(this),
        clientWidth: Ot(this)
      };
    },
    scrollIntoView: gr(function (e, t) {
      if (null == e ? (e = {
        from: this.doc.sel.primary().head,
        to: null
      }, null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
        from: Ll(e, 0),
        to: null
      } : null == e.from && (e = {
        from: e,
        to: null
      }), e.to || (e.to = e.from), e.margin = t || 0, null != e.from.line) Mn(this), this.curOp.scrollToPos = e;else {
        var r = Ln(this, Math.min(e.from.left, e.to.left), Math.min(e.from.top, e.to.top) - e.margin, Math.max(e.from.right, e.to.right), Math.max(e.from.bottom, e.to.bottom) + e.margin);
        this.scrollTo(r.scrollLeft, r.scrollTop);
      }
    }),
    setSize: gr(function (e, t) {
      function r(e) {
        return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e;
      }

      var n = this;
      null != e && (n.display.wrapper.style.width = r(e)), null != t && (n.display.wrapper.style.height = r(t)), n.options.lineWrapping && Kt(this);
      var i = n.display.viewFrom;
      n.doc.iter(i, n.display.viewTo, function (e) {
        if (e.widgets) for (var t = 0; t < e.widgets.length; t++) {
          if (e.widgets[t].noHScroll) {
            wr(n, i, "widget");
            break;
          }
        }
        ++i;
      }), n.curOp.forceUpdate = !0, ms(n, "refresh", this);
    }),
    operation: function operation(e) {
      return dr(this, e);
    },
    refresh: gr(function () {
      var e = this.display.cachedTextHeight;
      br(this), this.curOp.forceUpdate = !0, Xt(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), c(this), (null == e || Math.abs(e - rr(this.display)) > .5) && l(this), ms(this, "refresh", this);
    }),
    swapDoc: gr(function (e) {
      var t = this.doc;
      return t.cm = null, Pi(this, e), Xt(this), Ar(this), this.scrollTo(e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, co(this, "swapDoc", this, t), t;
    }),
    getInputField: function getInputField() {
      return this.display.input;
    },
    getWrapperElement: function getWrapperElement() {
      return this.display.wrapper;
    },
    getScrollerElement: function getScrollerElement() {
      return this.display.scroller;
    },
    getGutterElement: function getGutterElement() {
      return this.display.gutters;
    }
  }, vo(e);
  var Fl = e.defaults = {},
      Bl = e.optionHandlers = {},
      Gl = e.Init = {
    toString: function toString() {
      return "CodeMirror.Init";
    }
  };
  On("value", "", function (e, t) {
    e.setValue(t);
  }, !0), On("mode", null, function (e, t) {
    e.doc.modeOption = t, r(e);
  }, !0), On("indentUnit", 2, r, !0), On("indentWithTabs", !1), On("smartIndent", !0), On("tabSize", 4, function (e) {
    n(e), Xt(e), br(e);
  }, !0), On("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function (e, t) {
    e.options.specialChars = new RegExp(t.source + (t.test("	") ? "" : "|	"), "g"), e.refresh();
  }, !0), On("specialCharPlaceholder", Mi, function (e) {
    e.refresh();
  }, !0), On("electricChars", !0), On("rtlMoveVisually", !ml), On("wholeLineUpdateBefore", !0), On("theme", "default", function (e) {
    s(e), a(e);
  }, !0), On("keyMap", "default", function (t, r, n) {
    var i = zn(r),
        o = n != e.Init && zn(n);
    o && o.detach && o.detach(t, i), i.attach && i.attach(t, o || null);
  }), On("extraKeys", null), On("lineWrapping", !1, i, !0), On("gutters", [], function (e) {
    d(e.options), a(e);
  }, !0), On("fixedGutter", !0, function (e, t) {
    e.display.gutters.style.left = t ? S(e.display) + "px" : "0", e.refresh();
  }, !0), On("coverGutterNextToScrollbar", !1, function (e) {
    y(e);
  }, !0), On("scrollbarStyle", "native", function (e) {
    m(e), y(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft);
  }, !0), On("lineNumbers", !1, function (e) {
    d(e.options), a(e);
  }, !0), On("firstLineNumber", 1, a, !0), On("lineNumberFormatter", function (e) {
    return e;
  }, a, !0), On("showCursorWhenSelecting", !1, wt, !0), On("resetSelectionOnContextMenu", !0), On("readOnly", !1, function (e, t) {
    "nocursor" == t ? (on(e), e.display.input.blur(), e.display.disabled = !0) : (e.display.disabled = !1, t || Ar(e));
  }), On("disableInput", !1, function (e, t) {
    t || Ar(e);
  }, !0), On("dragDrop", !0), On("cursorBlinkRate", 530), On("cursorScrollMargin", 0), On("cursorHeight", 1, wt, !0), On("singleCursorHeightPerLine", !0, wt, !0), On("workTime", 100), On("workDelay", 100), On("flattenSpans", !0, n, !0), On("addModeClass", !1, n, !0), On("pollInterval", 100), On("undoDepth", 200, function (e, t) {
    e.doc.history.undoDepth = t;
  }), On("historyEventDelay", 1250), On("viewportMargin", 10, function (e) {
    e.refresh();
  }, !0), On("maxHighlightLength", 1e4, n, !0), On("moveInputWithCursor", !0, function (e, t) {
    t || (e.display.inputDiv.style.top = e.display.inputDiv.style.left = 0);
  }), On("tabindex", null, function (e, t) {
    e.display.input.tabIndex = t || "";
  }), On("autofocus", null);
  var Ul = e.modes = {},
      Vl = e.mimeModes = {};
  e.defineMode = function (t, r) {
    e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2 && (r.dependencies = Array.prototype.slice.call(arguments, 2)), Ul[t] = r;
  }, e.defineMIME = function (e, t) {
    Vl[e] = t;
  }, e.resolveMode = function (t) {
    if ("string" == typeof t && Vl.hasOwnProperty(t)) t = Vl[t];else if (t && "string" == typeof t.name && Vl.hasOwnProperty(t.name)) {
      var r = Vl[t.name];
      "string" == typeof r && (r = {
        name: r
      }), t = Lo(r, t), t.name = r.name;
    } else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml");
    return "string" == typeof t ? {
      name: t
    } : t || {
      name: "null"
    };
  }, e.getMode = function (t, r) {
    var r = e.resolveMode(r),
        n = Ul[r.name];
    if (!n) return e.getMode(t, "text/plain");
    var i = n(t, r);

    if (Kl.hasOwnProperty(r.name)) {
      var o = Kl[r.name];

      for (var l in o) {
        o.hasOwnProperty(l) && (i.hasOwnProperty(l) && (i["_" + l] = i[l]), i[l] = o[l]);
      }
    }

    if (i.name = r.name, r.helperType && (i.helperType = r.helperType), r.modeProps) for (var l in r.modeProps) {
      i[l] = r.modeProps[l];
    }
    return i;
  }, e.defineMode("null", function () {
    return {
      token: function token(e) {
        e.skipToEnd();
      }
    };
  }), e.defineMIME("text/plain", "null");
  var Kl = e.modeExtensions = {};
  e.extendMode = function (e, t) {
    var r = Kl.hasOwnProperty(e) ? Kl[e] : Kl[e] = {};
    So(t, r);
  }, e.defineExtension = function (t, r) {
    e.prototype[t] = r;
  }, e.defineDocExtension = function (e, t) {
    us.prototype[e] = t;
  }, e.defineOption = On;
  var Xl = [];

  e.defineInitHook = function (e) {
    Xl.push(e);
  };

  var jl = e.helpers = {};
  e.registerHelper = function (t, r, n) {
    jl.hasOwnProperty(t) || (jl[t] = e[t] = {
      _global: []
    }), jl[t][r] = n;
  }, e.registerGlobalHelper = function (t, r, n, i) {
    e.registerHelper(t, r, i), jl[t]._global.push({
      pred: n,
      val: i
    });
  };

  var _l = e.copyState = function (e, t) {
    if (t === !0) return t;
    if (e.copyState) return e.copyState(t);
    var r = {};

    for (var n in t) {
      var i = t[n];
      i instanceof Array && (i = i.concat([])), r[n] = i;
    }

    return r;
  },
      Yl = e.startState = function (e, t, r) {
    return e.startState ? e.startState(t, r) : !0;
  };

  e.innerMode = function (e, t) {
    for (; e.innerMode;) {
      var r = e.innerMode(t);
      if (!r || r.mode == e) break;
      t = r.state, e = r.mode;
    }

    return r || {
      mode: e,
      state: t
    };
  };

  var $l = e.commands = {
    selectAll: function selectAll(e) {
      e.setSelection(Ll(e.firstLine(), 0), Ll(e.lastLine()), xs);
    },
    singleSelection: function singleSelection(e) {
      e.setSelection(e.getCursor("anchor"), e.getCursor("head"), xs);
    },
    killLine: function killLine(e) {
      An(e, function (t) {
        if (t.empty()) {
          var r = Ri(e.doc, t.head.line).text.length;
          return t.head.ch == r && t.head.line < e.lastLine() ? {
            from: t.head,
            to: Ll(t.head.line + 1, 0)
          } : {
            from: t.head,
            to: Ll(t.head.line, r)
          };
        }

        return {
          from: t.from(),
          to: t.to()
        };
      });
    },
    deleteLine: function deleteLine(e) {
      An(e, function (t) {
        return {
          from: Ll(t.from().line, 0),
          to: tt(e.doc, Ll(t.to().line + 1, 0))
        };
      });
    },
    delLineLeft: function delLineLeft(e) {
      An(e, function (e) {
        return {
          from: Ll(e.from().line, 0),
          to: e.from()
        };
      });
    },
    delWrappedLineLeft: function delWrappedLineLeft(e) {
      An(e, function (t) {
        var r = e.charCoords(t.head, "div").top + 5,
            n = e.coordsChar({
          left: 0,
          top: r
        }, "div");
        return {
          from: n,
          to: t.from()
        };
      });
    },
    delWrappedLineRight: function delWrappedLineRight(e) {
      An(e, function (t) {
        var r = e.charCoords(t.head, "div").top + 5,
            n = e.coordsChar({
          left: e.display.lineDiv.offsetWidth + 100,
          top: r
        }, "div");
        return {
          from: t.from(),
          to: n
        };
      });
    },
    undo: function undo(e) {
      e.undo();
    },
    redo: function redo(e) {
      e.redo();
    },
    undoSelection: function undoSelection(e) {
      e.undoSelection();
    },
    redoSelection: function redoSelection(e) {
      e.redoSelection();
    },
    goDocStart: function goDocStart(e) {
      e.extendSelection(Ll(e.firstLine(), 0));
    },
    goDocEnd: function goDocEnd(e) {
      e.extendSelection(Ll(e.lastLine()));
    },
    goLineStart: function goLineStart(e) {
      e.extendSelectionsBy(function (t) {
        return _o(e, t.head.line);
      }, {
        origin: "+move",
        bias: 1
      });
    },
    goLineStartSmart: function goLineStartSmart(e) {
      e.extendSelectionsBy(function (t) {
        return $o(e, t.head);
      }, {
        origin: "+move",
        bias: 1
      });
    },
    goLineEnd: function goLineEnd(e) {
      e.extendSelectionsBy(function (t) {
        return Yo(e, t.head.line);
      }, {
        origin: "+move",
        bias: -1
      });
    },
    goLineRight: function goLineRight(e) {
      e.extendSelectionsBy(function (t) {
        var r = e.charCoords(t.head, "div").top + 5;
        return e.coordsChar({
          left: e.display.lineDiv.offsetWidth + 100,
          top: r
        }, "div");
      }, Ls);
    },
    goLineLeft: function goLineLeft(e) {
      e.extendSelectionsBy(function (t) {
        var r = e.charCoords(t.head, "div").top + 5;
        return e.coordsChar({
          left: 0,
          top: r
        }, "div");
      }, Ls);
    },
    goLineLeftSmart: function goLineLeftSmart(e) {
      e.extendSelectionsBy(function (t) {
        var r = e.charCoords(t.head, "div").top + 5,
            n = e.coordsChar({
          left: 0,
          top: r
        }, "div");
        return n.ch < e.getLine(n.line).search(/\S/) ? $o(e, t.head) : n;
      }, Ls);
    },
    goLineUp: function goLineUp(e) {
      e.moveV(-1, "line");
    },
    goLineDown: function goLineDown(e) {
      e.moveV(1, "line");
    },
    goPageUp: function goPageUp(e) {
      e.moveV(-1, "page");
    },
    goPageDown: function goPageDown(e) {
      e.moveV(1, "page");
    },
    goCharLeft: function goCharLeft(e) {
      e.moveH(-1, "char");
    },
    goCharRight: function goCharRight(e) {
      e.moveH(1, "char");
    },
    goColumnLeft: function goColumnLeft(e) {
      e.moveH(-1, "column");
    },
    goColumnRight: function goColumnRight(e) {
      e.moveH(1, "column");
    },
    goWordLeft: function goWordLeft(e) {
      e.moveH(-1, "word");
    },
    goGroupRight: function goGroupRight(e) {
      e.moveH(1, "group");
    },
    goGroupLeft: function goGroupLeft(e) {
      e.moveH(-1, "group");
    },
    goWordRight: function goWordRight(e) {
      e.moveH(1, "word");
    },
    delCharBefore: function delCharBefore(e) {
      e.deleteH(-1, "char");
    },
    delCharAfter: function delCharAfter(e) {
      e.deleteH(1, "char");
    },
    delWordBefore: function delWordBefore(e) {
      e.deleteH(-1, "word");
    },
    delWordAfter: function delWordAfter(e) {
      e.deleteH(1, "word");
    },
    delGroupBefore: function delGroupBefore(e) {
      e.deleteH(-1, "group");
    },
    delGroupAfter: function delGroupAfter(e) {
      e.deleteH(1, "group");
    },
    indentAuto: function indentAuto(e) {
      e.indentSelection("smart");
    },
    indentMore: function indentMore(e) {
      e.indentSelection("add");
    },
    indentLess: function indentLess(e) {
      e.indentSelection("subtract");
    },
    insertTab: function insertTab(e) {
      e.replaceSelection("	");
    },
    insertSoftTab: function insertSoftTab(e) {
      for (var t = [], r = e.listSelections(), n = e.options.tabSize, i = 0; i < r.length; i++) {
        var o = r[i].from(),
            l = Ss(e.getLine(o.line), o.ch, n);
        t.push(new Array(n - l % n + 1).join(" "));
      }

      e.replaceSelections(t);
    },
    defaultTab: function defaultTab(e) {
      e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
    },
    transposeChars: function transposeChars(e) {
      dr(e, function () {
        for (var t = e.listSelections(), r = [], n = 0; n < t.length; n++) {
          var i = t[n].head,
              o = Ri(e.doc, i.line).text;
          if (o) if (i.ch == o.length && (i = new Ll(i.line, i.ch - 1)), i.ch > 0) i = new Ll(i.line, i.ch + 1), e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), Ll(i.line, i.ch - 2), i, "+transpose");else if (i.line > e.doc.first) {
            var l = Ri(e.doc, i.line - 1).text;
            l && e.replaceRange(o.charAt(0) + "\n" + l.charAt(l.length - 1), Ll(i.line - 1, l.length - 1), Ll(i.line, 1), "+transpose");
          }
          r.push(new Z(i, i));
        }

        e.setSelections(r);
      });
    },
    newlineAndIndent: function newlineAndIndent(e) {
      dr(e, function () {
        for (var t = e.listSelections().length, r = 0; t > r; r++) {
          var n = e.listSelections()[r];
          e.replaceRange("\n", n.anchor, n.head, "+input"), e.indentLine(n.from().line + 1, null, !0), kn(e);
        }
      });
    },
    toggleOverwrite: function toggleOverwrite(e) {
      e.toggleOverwrite();
    }
  },
      ql = e.keyMap = {};
  ql.basic = {
    Left: "goCharLeft",
    Right: "goCharRight",
    Up: "goLineUp",
    Down: "goLineDown",
    End: "goLineEnd",
    Home: "goLineStartSmart",
    PageUp: "goPageUp",
    PageDown: "goPageDown",
    Delete: "delCharAfter",
    Backspace: "delCharBefore",
    "Shift-Backspace": "delCharBefore",
    Tab: "defaultTab",
    "Shift-Tab": "indentAuto",
    Enter: "newlineAndIndent",
    Insert: "toggleOverwrite",
    Esc: "singleSelection"
  }, ql.pcDefault = {
    "Ctrl-A": "selectAll",
    "Ctrl-D": "deleteLine",
    "Ctrl-Z": "undo",
    "Shift-Ctrl-Z": "redo",
    "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart",
    "Ctrl-End": "goDocEnd",
    "Ctrl-Up": "goLineUp",
    "Ctrl-Down": "goLineDown",
    "Ctrl-Left": "goGroupLeft",
    "Ctrl-Right": "goGroupRight",
    "Alt-Left": "goLineStart",
    "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore",
    "Ctrl-Delete": "delGroupAfter",
    "Ctrl-S": "save",
    "Ctrl-F": "find",
    "Ctrl-G": "findNext",
    "Shift-Ctrl-G": "findPrev",
    "Shift-Ctrl-F": "replace",
    "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess",
    "Ctrl-]": "indentMore",
    "Ctrl-U": "undoSelection",
    "Shift-Ctrl-U": "redoSelection",
    "Alt-U": "redoSelection",
    fallthrough: "basic"
  }, ql.emacsy = {
    "Ctrl-F": "goCharRight",
    "Ctrl-B": "goCharLeft",
    "Ctrl-P": "goLineUp",
    "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight",
    "Alt-B": "goWordLeft",
    "Ctrl-A": "goLineStart",
    "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageDown",
    "Shift-Ctrl-V": "goPageUp",
    "Ctrl-D": "delCharAfter",
    "Ctrl-H": "delCharBefore",
    "Alt-D": "delWordAfter",
    "Alt-Backspace": "delWordBefore",
    "Ctrl-K": "killLine",
    "Ctrl-T": "transposeChars"
  }, ql.macDefault = {
    "Cmd-A": "selectAll",
    "Cmd-D": "deleteLine",
    "Cmd-Z": "undo",
    "Shift-Cmd-Z": "redo",
    "Cmd-Y": "redo",
    "Cmd-Home": "goDocStart",
    "Cmd-Up": "goDocStart",
    "Cmd-End": "goDocEnd",
    "Cmd-Down": "goDocEnd",
    "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight",
    "Cmd-Left": "goLineLeft",
    "Cmd-Right": "goLineRight",
    "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter",
    "Alt-Delete": "delGroupAfter",
    "Cmd-S": "save",
    "Cmd-F": "find",
    "Cmd-G": "findNext",
    "Shift-Cmd-G": "findPrev",
    "Cmd-Alt-F": "replace",
    "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess",
    "Cmd-]": "indentMore",
    "Cmd-Backspace": "delWrappedLineLeft",
    "Cmd-Delete": "delWrappedLineRight",
    "Cmd-U": "undoSelection",
    "Shift-Cmd-U": "redoSelection",
    "Ctrl-Up": "goDocStart",
    "Ctrl-Down": "goDocEnd",
    fallthrough: ["basic", "emacsy"]
  }, ql["default"] = vl ? ql.macDefault : ql.pcDefault, e.normalizeKeyMap = function (e) {
    var t = {};

    for (var r in e) {
      if (e.hasOwnProperty(r)) {
        var n = e[r];
        if (/^(name|fallthrough|(de|at)tach)$/.test(r)) continue;

        if ("..." == n) {
          delete e[r];
          continue;
        }

        for (var i = Co(r.split(" "), Dn), o = 0; o < i.length; o++) {
          var l, s;
          o == i.length - 1 ? (s = r, l = n) : (s = i.slice(0, o + 1).join(" "), l = "...");
          var a = t[s];

          if (a) {
            if (a != l) throw new Error("Inconsistent bindings for " + s);
          } else t[s] = l;
        }

        delete e[r];
      }
    }

    for (var u in t) {
      e[u] = t[u];
    }

    return e;
  };

  var Zl = e.lookupKey = function (e, t, r, n) {
    t = zn(t);
    var i = t.call ? t.call(e, n) : t[e];
    if (i === !1) return "nothing";
    if ("..." === i) return "multi";
    if (null != i && r(i)) return "handled";

    if (t.fallthrough) {
      if ("[object Array]" != Object.prototype.toString.call(t.fallthrough)) return Zl(e, t.fallthrough, r, n);

      for (var o = 0; o < t.fallthrough.length; o++) {
        var l = Zl(e, t.fallthrough[o], r, n);
        if (l) return l;
      }
    }
  },
      Ql = e.isModifierKey = function (e) {
    var t = "string" == typeof e ? e : Gs[e.keyCode];
    return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t;
  },
      Jl = e.keyName = function (e, t) {
    if (ul && 34 == e.keyCode && e["char"]) return !1;
    var r = Gs[e.keyCode],
        n = r;
    return null == n || e.altGraphKey ? !1 : (e.altKey && "Alt" != r && (n = "Alt-" + n), (bl ? e.metaKey : e.ctrlKey) && "Ctrl" != r && (n = "Ctrl-" + n), (bl ? e.ctrlKey : e.metaKey) && "Cmd" != r && (n = "Cmd-" + n), !t && e.shiftKey && "Shift" != r && (n = "Shift-" + n), n);
  };

  e.fromTextArea = function (t, r) {
    function n() {
      t.value = u.getValue();
    }

    if (r || (r = {}), r.value = t.value, !r.tabindex && t.tabindex && (r.tabindex = t.tabindex), !r.placeholder && t.placeholder && (r.placeholder = t.placeholder), null == r.autofocus) {
      var i = Do();
      r.autofocus = i == t || null != t.getAttribute("autofocus") && i == document.body;
    }

    if (t.form && (gs(t.form, "submit", n), !r.leaveSubmitMethodAlone)) {
      var o = t.form,
          l = o.submit;

      try {
        var s = o.submit = function () {
          n(), o.submit = l, o.submit(), o.submit = s;
        };
      } catch (a) {}
    }

    t.style.display = "none";
    var u = e(function (e) {
      t.parentNode.insertBefore(e, t.nextSibling);
    }, r);
    return u.save = n, u.getTextArea = function () {
      return t;
    }, u.toTextArea = function () {
      u.toTextArea = isNaN, n(), t.parentNode.removeChild(u.getWrapperElement()), t.style.display = "", t.form && (vs(t.form, "submit", n), "function" == typeof t.form.submit && (t.form.submit = l));
    }, u;
  };

  var es = e.StringStream = function (e, t) {
    this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0;
  };

  es.prototype = {
    eol: function eol() {
      return this.pos >= this.string.length;
    },
    sol: function sol() {
      return this.pos == this.lineStart;
    },
    peek: function peek() {
      return this.string.charAt(this.pos) || void 0;
    },
    next: function next() {
      return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0;
    },
    eat: function eat(e) {
      var t = this.string.charAt(this.pos);
      if ("string" == typeof e) var r = t == e;else var r = t && (e.test ? e.test(t) : e(t));
      return r ? (++this.pos, t) : void 0;
    },
    eatWhile: function eatWhile(e) {
      for (var t = this.pos; this.eat(e);) {
        ;
      }

      return this.pos > t;
    },
    eatSpace: function eatSpace() {
      for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos));) {
        ++this.pos;
      }

      return this.pos > e;
    },
    skipToEnd: function skipToEnd() {
      this.pos = this.string.length;
    },
    skipTo: function skipTo(e) {
      var t = this.string.indexOf(e, this.pos);
      return t > -1 ? (this.pos = t, !0) : void 0;
    },
    backUp: function backUp(e) {
      this.pos -= e;
    },
    column: function column() {
      return this.lastColumnPos < this.start && (this.lastColumnValue = Ss(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Ss(this.string, this.lineStart, this.tabSize) : 0);
    },
    indentation: function indentation() {
      return Ss(this.string, null, this.tabSize) - (this.lineStart ? Ss(this.string, this.lineStart, this.tabSize) : 0);
    },
    match: function match(e, t, r) {
      if ("string" != typeof e) {
        var n = this.string.slice(this.pos).match(e);
        return n && n.index > 0 ? null : (n && t !== !1 && (this.pos += n[0].length), n);
      }

      var i = function i(e) {
        return r ? e.toLowerCase() : e;
      },
          o = this.string.substr(this.pos, e.length);

      return i(o) == i(e) ? (t !== !1 && (this.pos += e.length), !0) : void 0;
    },
    current: function current() {
      return this.string.slice(this.start, this.pos);
    },
    hideFirstChars: function hideFirstChars(e, t) {
      this.lineStart += e;

      try {
        return t();
      } finally {
        this.lineStart -= e;
      }
    }
  };

  var ts = e.TextMarker = function (e, t) {
    this.lines = [], this.type = t, this.doc = e;
  };

  vo(ts), ts.prototype.clear = function () {
    if (!this.explicitlyCleared) {
      var e = this.doc.cm,
          t = e && !e.curOp;

      if (t && ir(e), go(this, "clear")) {
        var r = this.find();
        r && co(this, "clear", r.from, r.to);
      }

      for (var n = null, i = null, o = 0; o < this.lines.length; ++o) {
        var l = this.lines[o],
            s = Gn(l.markedSpans, this);
        e && !this.collapsed ? wr(e, Ui(l), "text") : e && (null != s.to && (i = Ui(l)), null != s.from && (n = Ui(l))), l.markedSpans = Un(l.markedSpans, s), null == s.from && this.collapsed && !ui(this.doc, l) && e && Gi(l, rr(e.display));
      }

      if (e && this.collapsed && !e.options.lineWrapping) for (var o = 0; o < this.lines.length; ++o) {
        var a = oi(this.lines[o]),
            u = f(a);
        u > e.display.maxLineLength && (e.display.maxLine = a, e.display.maxLineLength = u, e.display.maxLineChanged = !0);
      }
      null != n && e && this.collapsed && br(e, n, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && gt(e.doc)), e && co(e, "markerCleared", e, this), t && lr(e), this.parent && this.parent.clear();
    }
  }, ts.prototype.find = function (e, t) {
    null == e && "bookmark" == this.type && (e = 1);

    for (var r, n, i = 0; i < this.lines.length; ++i) {
      var o = this.lines[i],
          l = Gn(o.markedSpans, this);
      if (null != l.from && (r = Ll(t ? o : Ui(o), l.from), -1 == e)) return r;
      if (null != l.to && (n = Ll(t ? o : Ui(o), l.to), 1 == e)) return n;
    }

    return r && {
      from: r,
      to: n
    };
  }, ts.prototype.changed = function () {
    var e = this.find(-1, !0),
        t = this,
        r = this.doc.cm;
    e && r && dr(r, function () {
      var n = e.line,
          i = Ui(e.line),
          o = Rt(r, i);

      if (o && (Vt(o), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !ui(t.doc, n) && null != t.height) {
        var l = t.height;
        t.height = null;
        var s = hi(t) - l;
        s && Gi(n, n.height + s);
      }
    });
  }, ts.prototype.attachLine = function (e) {
    if (!this.lines.length && this.doc.cm) {
      var t = this.doc.cm.curOp;
      t.maybeHiddenMarkers && -1 != xo(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
    }

    this.lines.push(e);
  }, ts.prototype.detachLine = function (e) {
    if (this.lines.splice(xo(this.lines, e), 1), !this.lines.length && this.doc.cm) {
      var t = this.doc.cm.curOp;
      (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
    }
  };

  var rs = 0,
      ns = e.SharedTextMarker = function (e, t) {
    this.markers = e, this.primary = t;

    for (var r = 0; r < e.length; ++r) {
      e[r].parent = this;
    }
  };

  vo(ns), ns.prototype.clear = function () {
    if (!this.explicitlyCleared) {
      this.explicitlyCleared = !0;

      for (var e = 0; e < this.markers.length; ++e) {
        this.markers[e].clear();
      }

      co(this, "clear");
    }
  }, ns.prototype.find = function (e, t) {
    return this.primary.find(e, t);
  };

  var is = e.LineWidget = function (e, t, r) {
    if (r) for (var n in r) {
      r.hasOwnProperty(n) && (this[n] = r[n]);
    }
    this.cm = e, this.node = t;
  };

  vo(is), is.prototype.clear = function () {
    var e = this.cm,
        t = this.line.widgets,
        r = this.line,
        n = Ui(r);

    if (null != n && t) {
      for (var i = 0; i < t.length; ++i) {
        t[i] == this && t.splice(i--, 1);
      }

      t.length || (r.widgets = null);
      var o = hi(this);
      dr(e, function () {
        fi(e, r, -o), wr(e, n, "widget"), Gi(r, Math.max(0, r.height - o));
      });
    }
  }, is.prototype.changed = function () {
    var e = this.height,
        t = this.cm,
        r = this.line;
    this.height = null;
    var n = hi(this) - e;
    n && dr(t, function () {
      t.curOp.forceUpdate = !0, fi(t, r, n), Gi(r, r.height + n);
    });
  };

  var os = e.Line = function (e, t, r) {
    this.text = e, Zn(this, t), this.height = r ? r(this) : 1;
  };

  vo(os), os.prototype.lineNo = function () {
    return Ui(this);
  };
  var ls = {},
      ss = {};
  zi.prototype = {
    chunkSize: function chunkSize() {
      return this.lines.length;
    },
    removeInner: function removeInner(e, t) {
      for (var r = e, n = e + t; n > r; ++r) {
        var i = this.lines[r];
        this.height -= i.height, gi(i), co(i, "delete");
      }

      this.lines.splice(e, t);
    },
    collapse: function collapse(e) {
      e.push.apply(e, this.lines);
    },
    insertInner: function insertInner(e, t, r) {
      this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));

      for (var n = 0; n < t.length; ++n) {
        t[n].parent = this;
      }
    },
    iterN: function iterN(e, t, r) {
      for (var n = e + t; n > e; ++e) {
        if (r(this.lines[e])) return !0;
      }
    }
  }, Ii.prototype = {
    chunkSize: function chunkSize() {
      return this.size;
    },
    removeInner: function removeInner(e, t) {
      this.size -= t;

      for (var r = 0; r < this.children.length; ++r) {
        var n = this.children[r],
            i = n.chunkSize();

        if (i > e) {
          var o = Math.min(t, i - e),
              l = n.height;
          if (n.removeInner(e, o), this.height -= l - n.height, i == o && (this.children.splice(r--, 1), n.parent = null), 0 == (t -= o)) break;
          e = 0;
        } else e -= i;
      }

      if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof zi))) {
        var s = [];
        this.collapse(s), this.children = [new zi(s)], this.children[0].parent = this;
      }
    },
    collapse: function collapse(e) {
      for (var t = 0; t < this.children.length; ++t) {
        this.children[t].collapse(e);
      }
    },
    insertInner: function insertInner(e, t, r) {
      this.size += t.length, this.height += r;

      for (var n = 0; n < this.children.length; ++n) {
        var i = this.children[n],
            o = i.chunkSize();

        if (o >= e) {
          if (i.insertInner(e, t, r), i.lines && i.lines.length > 50) {
            for (; i.lines.length > 50;) {
              var l = i.lines.splice(i.lines.length - 25, 25),
                  s = new zi(l);
              i.height -= s.height, this.children.splice(n + 1, 0, s), s.parent = this;
            }

            this.maybeSpill();
          }

          break;
        }

        e -= o;
      }
    },
    maybeSpill: function maybeSpill() {
      if (!(this.children.length <= 10)) {
        var e = this;

        do {
          var t = e.children.splice(e.children.length - 5, 5),
              r = new Ii(t);

          if (e.parent) {
            e.size -= r.size, e.height -= r.height;
            var n = xo(e.parent.children, e);
            e.parent.children.splice(n + 1, 0, r);
          } else {
            var i = new Ii(e.children);
            i.parent = e, e.children = [i, r], e = i;
          }

          r.parent = e.parent;
        } while (e.children.length > 10);

        e.parent.maybeSpill();
      }
    },
    iterN: function iterN(e, t, r) {
      for (var n = 0; n < this.children.length; ++n) {
        var i = this.children[n],
            o = i.chunkSize();

        if (o > e) {
          var l = Math.min(t, o - e);
          if (i.iterN(e, l, r)) return !0;
          if (0 == (t -= l)) break;
          e = 0;
        } else e -= o;
      }
    }
  };

  var as = 0,
      us = e.Doc = function (e, t, r) {
    if (!(this instanceof us)) return new us(e, t, r);
    null == r && (r = 0), Ii.call(this, [new zi([new os("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = r;
    var n = Ll(r, 0);
    this.sel = J(n), this.history = new ji(null), this.id = ++as, this.modeOption = t, "string" == typeof e && (e = Ps(e)), Di(this, {
      from: n,
      to: n,
      text: e
    }), ht(this, J(n), xs);
  };

  us.prototype = Lo(Ii.prototype, {
    constructor: us,
    iter: function iter(e, t, r) {
      r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e);
    },
    insert: function insert(e, t) {
      for (var r = 0, n = 0; n < t.length; ++n) {
        r += t[n].height;
      }

      this.insertInner(e - this.first, t, r);
    },
    remove: function remove(e, t) {
      this.removeInner(e - this.first, t);
    },
    getValue: function getValue(e) {
      var t = Bi(this, this.first, this.first + this.size);
      return e === !1 ? t : t.join(e || "\n");
    },
    setValue: vr(function (e) {
      var t = Ll(this.first, 0),
          r = this.first + this.size - 1;
      dn(this, {
        from: t,
        to: Ll(r, Ri(this, r).text.length),
        text: Ps(e),
        origin: "setValue"
      }, !0), ht(this, J(t));
    }),
    replaceRange: function replaceRange(e, t, r, n) {
      t = tt(this, t), r = r ? tt(this, r) : t, bn(this, e, t, r, n);
    },
    getRange: function getRange(e, t, r) {
      var n = Fi(this, tt(this, e), tt(this, t));
      return r === !1 ? n : n.join(r || "\n");
    },
    getLine: function getLine(e) {
      var t = this.getLineHandle(e);
      return t && t.text;
    },
    getLineHandle: function getLineHandle(e) {
      return nt(this, e) ? Ri(this, e) : void 0;
    },
    getLineNumber: function getLineNumber(e) {
      return Ui(e);
    },
    getLineHandleVisualStart: function getLineHandleVisualStart(e) {
      return "number" == typeof e && (e = Ri(this, e)), oi(e);
    },
    lineCount: function lineCount() {
      return this.size;
    },
    firstLine: function firstLine() {
      return this.first;
    },
    lastLine: function lastLine() {
      return this.first + this.size - 1;
    },
    clipPos: function clipPos(e) {
      return tt(this, e);
    },
    getCursor: function getCursor(e) {
      var t,
          r = this.sel.primary();
      return t = null == e || "head" == e ? r.head : "anchor" == e ? r.anchor : "end" == e || "to" == e || e === !1 ? r.to() : r.from();
    },
    listSelections: function listSelections() {
      return this.sel.ranges;
    },
    somethingSelected: function somethingSelected() {
      return this.sel.somethingSelected();
    },
    setCursor: vr(function (e, t, r) {
      ut(this, tt(this, "number" == typeof e ? Ll(e, t || 0) : e), null, r);
    }),
    setSelection: vr(function (e, t, r) {
      ut(this, tt(this, e), tt(this, t || e), r);
    }),
    extendSelection: vr(function (e, t, r) {
      lt(this, tt(this, e), t && tt(this, t), r);
    }),
    extendSelections: vr(function (e, t) {
      st(this, it(this, e, t));
    }),
    extendSelectionsBy: vr(function (e, t) {
      st(this, Co(this.sel.ranges, e), t);
    }),
    setSelections: vr(function (e, t, r) {
      if (e.length) {
        for (var n = 0, i = []; n < e.length; n++) {
          i[n] = new Z(tt(this, e[n].anchor), tt(this, e[n].head));
        }

        null == t && (t = Math.min(e.length - 1, this.sel.primIndex)), ht(this, Q(i, t), r);
      }
    }),
    addSelection: vr(function (e, t, r) {
      var n = this.sel.ranges.slice(0);
      n.push(new Z(tt(this, e), tt(this, t || e))), ht(this, Q(n, n.length - 1), r);
    }),
    getSelection: function getSelection(e) {
      for (var t, r = this.sel.ranges, n = 0; n < r.length; n++) {
        var i = Fi(this, r[n].from(), r[n].to());
        t = t ? t.concat(i) : i;
      }

      return e === !1 ? t : t.join(e || "\n");
    },
    getSelections: function getSelections(e) {
      for (var t = [], r = this.sel.ranges, n = 0; n < r.length; n++) {
        var i = Fi(this, r[n].from(), r[n].to());
        e !== !1 && (i = i.join(e || "\n")), t[n] = i;
      }

      return t;
    },
    replaceSelection: function replaceSelection(e, t, r) {
      for (var n = [], i = 0; i < this.sel.ranges.length; i++) {
        n[i] = e;
      }

      this.replaceSelections(n, t, r || "+input");
    },
    replaceSelections: vr(function (e, t, r) {
      for (var n = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
        var l = i.ranges[o];
        n[o] = {
          from: l.from(),
          to: l.to(),
          text: Ps(e[o]),
          origin: r
        };
      }

      for (var s = t && "end" != t && fn(this, n, t), o = n.length - 1; o >= 0; o--) {
        dn(this, n[o]);
      }

      s ? ft(this, s) : this.cm && kn(this.cm);
    }),
    undo: vr(function () {
      gn(this, "undo");
    }),
    redo: vr(function () {
      gn(this, "redo");
    }),
    undoSelection: vr(function () {
      gn(this, "undo", !0);
    }),
    redoSelection: vr(function () {
      gn(this, "redo", !0);
    }),
    setExtending: function setExtending(e) {
      this.extend = e;
    },
    getExtending: function getExtending() {
      return this.extend;
    },
    historySize: function historySize() {
      for (var e = this.history, t = 0, r = 0, n = 0; n < e.done.length; n++) {
        e.done[n].ranges || ++t;
      }

      for (var n = 0; n < e.undone.length; n++) {
        e.undone[n].ranges || ++r;
      }

      return {
        undo: t,
        redo: r
      };
    },
    clearHistory: function clearHistory() {
      this.history = new ji(this.history.maxGeneration);
    },
    markClean: function markClean() {
      this.cleanGeneration = this.changeGeneration(!0);
    },
    changeGeneration: function changeGeneration(e) {
      return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
    },
    isClean: function isClean(e) {
      return this.history.generation == (e || this.cleanGeneration);
    },
    getHistory: function getHistory() {
      return {
        done: no(this.history.done),
        undone: no(this.history.undone)
      };
    },
    setHistory: function setHistory(e) {
      var t = this.history = new ji(this.history.maxGeneration);
      t.done = no(e.done.slice(0), null, !0), t.undone = no(e.undone.slice(0), null, !0);
    },
    addLineClass: vr(function (e, t, r) {
      return Wn(this, e, "gutter" == t ? "gutter" : "class", function (e) {
        var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass";

        if (e[n]) {
          if (zo(r).test(e[n])) return !1;
          e[n] += " " + r;
        } else e[n] = r;

        return !0;
      });
    }),
    removeLineClass: vr(function (e, t, r) {
      return Wn(this, e, "gutter" == t ? "gutter" : "class", function (e) {
        var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "gutter" == t ? "gutterClass" : "wrapClass",
            i = e[n];
        if (!i) return !1;
        if (null == r) e[n] = null;else {
          var o = i.match(zo(r));
          if (!o) return !1;
          var l = o.index + o[0].length;
          e[n] = i.slice(0, o.index) + (o.index && l != i.length ? " " : "") + i.slice(l) || null;
        }
        return !0;
      });
    }),
    markText: function markText(e, t, r) {
      return In(this, tt(this, e), tt(this, t), r, "range");
    },
    setBookmark: function setBookmark(e, t) {
      var r = {
        replacedWith: t && (null == t.nodeType ? t.widget : t),
        insertLeft: t && t.insertLeft,
        clearWhenEmpty: !1,
        shared: t && t.shared
      };
      return e = tt(this, e), In(this, e, e, r, "bookmark");
    },
    findMarksAt: function findMarksAt(e) {
      e = tt(this, e);
      var t = [],
          r = Ri(this, e.line).markedSpans;
      if (r) for (var n = 0; n < r.length; ++n) {
        var i = r[n];
        (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
      }
      return t;
    },
    findMarks: function findMarks(e, t, r) {
      e = tt(this, e), t = tt(this, t);
      var n = [],
          i = e.line;
      return this.iter(e.line, t.line + 1, function (o) {
        var l = o.markedSpans;
        if (l) for (var s = 0; s < l.length; s++) {
          var a = l[s];
          i == e.line && e.ch > a.to || null == a.from && i != e.line || i == t.line && a.from > t.ch || r && !r(a.marker) || n.push(a.marker.parent || a.marker);
        }
        ++i;
      }), n;
    },
    getAllMarks: function getAllMarks() {
      var e = [];
      return this.iter(function (t) {
        var r = t.markedSpans;
        if (r) for (var n = 0; n < r.length; ++n) {
          null != r[n].from && e.push(r[n].marker);
        }
      }), e;
    },
    posFromIndex: function posFromIndex(e) {
      var t,
          r = this.first;
      return this.iter(function (n) {
        var i = n.text.length + 1;
        return i > e ? (t = e, !0) : (e -= i, void ++r);
      }), tt(this, Ll(r, t));
    },
    indexFromPos: function indexFromPos(e) {
      e = tt(this, e);
      var t = e.ch;
      return e.line < this.first || e.ch < 0 ? 0 : (this.iter(this.first, e.line, function (e) {
        t += e.text.length + 1;
      }), t);
    },
    copy: function copy(e) {
      var t = new us(Bi(this, this.first, this.first + this.size), this.modeOption, this.first);
      return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
    },
    linkedDoc: function linkedDoc(e) {
      e || (e = {});
      var t = this.first,
          r = this.first + this.size;
      null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to);
      var n = new us(Bi(this, t, r), e.mode || this.modeOption, t);
      return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({
        doc: n,
        sharedHist: e.sharedHist
      }), n.linked = [{
        doc: this,
        isParent: !0,
        sharedHist: e.sharedHist
      }], Rn(n, Pn(this)), n;
    },
    unlinkDoc: function unlinkDoc(t) {
      if (t instanceof e && (t = t.doc), this.linked) for (var r = 0; r < this.linked.length; ++r) {
        var n = this.linked[r];

        if (n.doc == t) {
          this.linked.splice(r, 1), t.unlinkDoc(this), Fn(Pn(this));
          break;
        }
      }

      if (t.history == this.history) {
        var i = [t.id];
        Ei(t, function (e) {
          i.push(e.id);
        }, !0), t.history = new ji(null), t.history.done = no(this.history.done, i), t.history.undone = no(this.history.undone, i);
      }
    },
    iterLinkedDocs: function iterLinkedDocs(e) {
      Ei(this, e);
    },
    getMode: function getMode() {
      return this.mode;
    },
    getEditor: function getEditor() {
      return this.cm;
    }
  }), us.prototype.eachLine = us.prototype.iter;
  var cs = "iter insert remove copy getEditor".split(" ");

  for (var fs in us.prototype) {
    us.prototype.hasOwnProperty(fs) && xo(cs, fs) < 0 && (e.prototype[fs] = function (e) {
      return function () {
        return e.apply(this.doc, arguments);
      };
    }(us.prototype[fs]));
  }

  vo(us);

  var hs = e.e_preventDefault = function (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
  },
      ds = e.e_stopPropagation = function (e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
  },
      ps = e.e_stop = function (e) {
    hs(e), ds(e);
  },
      gs = e.on = function (e, t, r) {
    if (e.addEventListener) e.addEventListener(t, r, !1);else if (e.attachEvent) e.attachEvent("on" + t, r);else {
      var n = e._handlers || (e._handlers = {}),
          i = n[t] || (n[t] = []);
      i.push(r);
    }
  },
      vs = e.off = function (e, t, r) {
    if (e.removeEventListener) e.removeEventListener(t, r, !1);else if (e.detachEvent) e.detachEvent("on" + t, r);else {
      var n = e._handlers && e._handlers[t];
      if (!n) return;

      for (var i = 0; i < n.length; ++i) {
        if (n[i] == r) {
          n.splice(i, 1);
          break;
        }
      }
    }
  },
      ms = e.signal = function (e, t) {
    var r = e._handlers && e._handlers[t];
    if (r) for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) {
      r[i].apply(null, n);
    }
  },
      ys = null,
      bs = 30,
      ws = e.Pass = {
    toString: function toString() {
      return "CodeMirror.Pass";
    }
  },
      xs = {
    scroll: !1
  },
      Cs = {
    origin: "*mouse"
  },
      Ls = {
    origin: "+move"
  };

  mo.prototype.set = function (e, t) {
    clearTimeout(this.id), this.id = setTimeout(t, e);
  };

  var Ss = e.countColumn = function (e, t, r, n, i) {
    null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length));

    for (var o = n || 0, l = i || 0;;) {
      var s = e.indexOf("	", o);
      if (0 > s || s >= t) return l + (t - o);
      l += s - o, l += r - l % r, o = s + 1;
    }
  },
      ks = [""],
      Ms = function Ms(e) {
    e.select();
  };

  pl ? Ms = function Ms(e) {
    e.selectionStart = 0, e.selectionEnd = e.value.length;
  } : il && (Ms = function Ms(e) {
    try {
      e.select();
    } catch (t) {}
  }), [].indexOf && (xo = function xo(e, t) {
    return e.indexOf(t);
  }), [].map && (Co = function Co(e, t) {
    return e.map(t);
  });

  var Ts,
      Ws = /[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
      As = e.isWordChar = function (e) {
    return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Ws.test(e));
  },
      Ns = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

  Ts = document.createRange ? function (e, t, r) {
    var n = document.createRange();
    return n.setEnd(e, r), n.setStart(e, t), n;
  } : function (e, t, r) {
    var n = document.body.createTextRange();

    try {
      n.moveToElementText(e.parentNode);
    } catch (i) {
      return n;
    }

    return n.collapse(!0), n.moveEnd("character", r), n.moveStart("character", t), n;
  }, il && 11 > ol && (Do = function Do() {
    try {
      return document.activeElement;
    } catch (e) {
      return document.body;
    }
  });

  var Hs,
      Os,
      Ds = e.rmClass = function (e, t) {
    var r = e.className,
        n = zo(t).exec(r);

    if (n) {
      var i = r.slice(n.index + n[0].length);
      e.className = r.slice(0, n.index) + (i ? n[1] + i : "");
    }
  },
      zs = e.addClass = function (e, t) {
    var r = e.className;
    zo(t).test(r) || (e.className += (r ? " " : "") + t);
  },
      Is = !1,
      Es = function () {
    if (il && 9 > ol) return !1;
    var e = Ao("div");
    return "draggable" in e || "dragDrop" in e;
  }(),
      Ps = e.splitLines = 3 != "\n\nb".split(/\n/).length ? function (e) {
    for (var t = 0, r = [], n = e.length; n >= t;) {
      var i = e.indexOf("\n", t);
      -1 == i && (i = e.length);
      var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
          l = o.indexOf("\r");
      -1 != l ? (r.push(o.slice(0, l)), t += l + 1) : (r.push(o), t = i + 1);
    }

    return r;
  } : function (e) {
    return e.split(/\r\n?|\n/);
  },
      Rs = window.getSelection ? function (e) {
    try {
      return e.selectionStart != e.selectionEnd;
    } catch (t) {
      return !1;
    }
  } : function (e) {
    try {
      var t = e.ownerDocument.selection.createRange();
    } catch (r) {}

    return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1;
  },
      Fs = function () {
    var e = Ao("div");
    return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy);
  }(),
      Bs = null,
      Gs = {
    3: "Enter",
    8: "Backspace",
    9: "Tab",
    13: "Enter",
    16: "Shift",
    17: "Ctrl",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Esc",
    32: "Space",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    44: "PrintScrn",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Mod",
    92: "Mod",
    93: "Mod",
    107: "=",
    109: "-",
    127: "Delete",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'",
    63232: "Up",
    63233: "Down",
    63234: "Left",
    63235: "Right",
    63272: "Delete",
    63273: "Home",
    63275: "End",
    63276: "PageUp",
    63277: "PageDown",
    63302: "Insert"
  };

  e.keyNames = Gs, function () {
    for (var e = 0; 10 > e; e++) {
      Gs[e + 48] = Gs[e + 96] = String(e);
    }

    for (var e = 65; 90 >= e; e++) {
      Gs[e] = String.fromCharCode(e);
    }

    for (var e = 1; 12 >= e; e++) {
      Gs[e + 111] = Gs[e + 63235] = "F" + e;
    }
  }();

  var Us,
      Vs = function () {
    function e(e) {
      return 247 >= e ? r.charAt(e) : e >= 1424 && 1524 >= e ? "R" : e >= 1536 && 1773 >= e ? n.charAt(e - 1536) : e >= 1774 && 2220 >= e ? "r" : e >= 8192 && 8203 >= e ? "w" : 8204 == e ? "b" : "L";
    }

    function t(e, t, r) {
      this.level = e, this.from = t, this.to = r;
    }

    var r = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",
        n = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",
        i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
        o = /[stwN]/,
        l = /[LRr]/,
        s = /[Lb1n]/,
        a = /[1n]/,
        u = "L";
    return function (r) {
      if (!i.test(r)) return !1;

      for (var n, c = r.length, f = [], h = 0; c > h; ++h) {
        f.push(n = e(r.charCodeAt(h)));
      }

      for (var h = 0, d = u; c > h; ++h) {
        var n = f[h];
        "m" == n ? f[h] = d : d = n;
      }

      for (var h = 0, p = u; c > h; ++h) {
        var n = f[h];
        "1" == n && "r" == p ? f[h] = "n" : l.test(n) && (p = n, "r" == n && (f[h] = "R"));
      }

      for (var h = 1, d = f[0]; c - 1 > h; ++h) {
        var n = f[h];
        "+" == n && "1" == d && "1" == f[h + 1] ? f[h] = "1" : "," != n || d != f[h + 1] || "1" != d && "n" != d || (f[h] = d), d = n;
      }

      for (var h = 0; c > h; ++h) {
        var n = f[h];
        if ("," == n) f[h] = "N";else if ("%" == n) {
          for (var g = h + 1; c > g && "%" == f[g]; ++g) {
            ;
          }

          for (var v = h && "!" == f[h - 1] || c > g && "1" == f[g] ? "1" : "N", m = h; g > m; ++m) {
            f[m] = v;
          }

          h = g - 1;
        }
      }

      for (var h = 0, p = u; c > h; ++h) {
        var n = f[h];
        "L" == p && "1" == n ? f[h] = "L" : l.test(n) && (p = n);
      }

      for (var h = 0; c > h; ++h) {
        if (o.test(f[h])) {
          for (var g = h + 1; c > g && o.test(f[g]); ++g) {
            ;
          }

          for (var y = "L" == (h ? f[h - 1] : u), b = "L" == (c > g ? f[g] : u), v = y || b ? "L" : "R", m = h; g > m; ++m) {
            f[m] = v;
          }

          h = g - 1;
        }
      }

      for (var w, x = [], h = 0; c > h;) {
        if (s.test(f[h])) {
          var C = h;

          for (++h; c > h && s.test(f[h]); ++h) {
            ;
          }

          x.push(new t(0, C, h));
        } else {
          var L = h,
              S = x.length;

          for (++h; c > h && "L" != f[h]; ++h) {
            ;
          }

          for (var m = L; h > m;) {
            if (a.test(f[m])) {
              m > L && x.splice(S, 0, new t(1, L, m));
              var k = m;

              for (++m; h > m && a.test(f[m]); ++m) {
                ;
              }

              x.splice(S, 0, new t(2, k, m)), L = m;
            } else ++m;
          }

          h > L && x.splice(S, 0, new t(1, L, h));
        }
      }

      return 1 == x[0].level && (w = r.match(/^\s+/)) && (x[0].from = w[0].length, x.unshift(new t(0, 0, w[0].length))), 1 == wo(x).level && (w = r.match(/\s+$/)) && (wo(x).to -= w[0].length, x.push(new t(0, c - w[0].length, c))), x[0].level != wo(x).level && x.push(new t(x[0].level, c, c)), x;
    };
  }();

  return e.version = "4.10.0", e;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./resources/js/edit/fileupload.js":
/*!*****************************************!*\
  !*** ./resources/js/edit/fileupload.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 *  jQuery HTML5 File Upload
 *
 *  Author: timdream at gmail.com
 *  Web: http://timc.idv.tw/html5-file-upload/
 *
 *  Ajax File Upload that use real xhr,
 *  built with getAsBinary, sendAsBinary, FormData, FileReader, ArrayBuffer, BlobBuilder and etc.
 *  works in Firefox 3, Chrome 5, Safari 5 and higher
 *
 *  Image resizing and uploading currently works in Fx 3 and up, and Chrome 9 (dev) and up only.
 *  Extra settings will allow current Webkit users to upload the original image
 *  or send the resized image in base64 form.
 *
 *  Usage:
 *   $.fileUploadSupported // a boolean value indicates if the browser is supported.
 *   $.imageUploadSupported // a boolean value indicates if the browser could resize image and upload in binary form.
 *   $.fileUploadAsBase64Supported // a boolean value indicate if the browser upload files in based64.
 *   $.imageUploadAsBase64Supported // a boolean value indicate if the browser could resize image and upload in based64.
 *   $('input[type=file]').fileUpload(ajaxSettings); //Make a input[type=file] select-and-send file upload widget
 *   $('#any-element').fileUpload(ajaxSettings); //Make a element receive dropped file
 *   //TBD $('form#fileupload').fileUpload(ajaxSettings); //Send a ajax form with file
 *   //TBD $('canvas').fileUpload(ajaxSettings); //Upload given canvas as if it's an png image.
 *
 *   ajaxSettings is the object contains $.ajax settings that will be passed to.
 *   Available extended settings are:
 *      fileType:
 *           regexp check against filename extension; You should always checked it again on server-side.
 *           e.g. /^(gif|jpe?g|png|tiff?)$/i for images
 *      fileMaxSize:
 *           Maxium file size allowed in bytes. Use scientific notation for converience.
 *           e.g. 1E4 for 1KB, 1E8 for 1MB, 1E9 for 10MB.
 *			 If you really care the difference between 1024 and 1000, use Math.pow(2, 10)
 *      fileError(info, textStatus, textDescription):
 *           callback function when there is any error preventing file upload to start,
 *           $.ajax and ajax events won't be called when error.
 *           Use $.noop to overwrite default alert function.
 *      imageMaxWidth, imageMaxHeight:
 *           Use any of the two settings to enable client-size image resizing.
 *           Image will be resized to fit into given rectangle.
 *           File size and type limit checking will be ignored.
 *      allowUploadOriginalImage:
 *           Set to true if you accept original image to be uploaded as a fallback
 *           when image resizing functionality is not available (such as Webkit browsers).
 *           File size and type limit will be enforced.
 *      allowDataInBase64:
 *           Alternatively, you may wish to resize the image anyway and send the data
 *           in base64. The data will be 133% larger and you will need to process it further with
 *           server-side script.
 *           This setting might work with browsers which could read file but cannot send it in original
 *           binary (no known browser are designed this way though)
 *      forceResize:
 *           Set to true will cause the image being re-sampled even if the resized image
 *           has the same demension as the original one.
 *      imageType:
 *           Acceptable values are: 'jpeg', 'png', or 'auto'.
 *
 *  TBD:
 *   ability to change settings after binding (you can unbind and bind again as a workaround)
 *   multipole file handling
 *   form intergation
 *
 */
(function () {
  // Don't do logging if window.log function does not exist.
  var log = window.log || $.noop; // jQuery.ajax config

  var config = {
    fileError: function fileError(info, textStatus, textDescription) {
      window.alert(textDescription);
    }
  }; // Feature detection
  // Read as binary string: FileReader API || Gecko-specific function (Fx3)

  var canReadAsBinaryString = window.FileReader || window.File && window.File.prototype.getAsBinary; // Read file using FormData interface

  var canReadFormData = !!window.FormData; // Read file into data: URL: FileReader API || Gecko-specific function (Fx3)

  var canReadAsBase64 = window.FileReader || window.File && window.File.prototype.getAsDataURL;
  var canResizeImageToBase64 = !!document.createElement('canvas').toDataURL;
  var canResizeImageToBinaryString = canResizeImageToBase64 && window.atob;
  var canResizeImageToFile = !!document.createElement('canvas').mozGetAsFile; // Send file in multipart/form-data with binary xhr (Gecko-specific function)
  // || xhr.send(blob) that sends blob made with ArrayBuffer.

  var canSendBinaryString = window.XMLHttpRequest && window.XMLHttpRequest.prototype.sendAsBinary || window.Blob && window.Uint8Array && window.ProgressEvent || window.ArrayBuffer && window.BlobBuilder; // Send file as in FormData object

  var canSendFormData = !!window.FormData; // Send image base64 data by extracting data: URL

  var canSendImageInBase64 = !!document.createElement('canvas').toDataURL;
  var isSupported = canReadAsBinaryString && canSendBinaryString || canReadFormData && canSendFormData;
  var isImageSupported = canReadAsBase64 && (canResizeImageToBinaryString && canSendBinaryString || canResizeImageToFile && canSendFormData);
  var isSupportedInBase64 = canReadAsBase64;
  var isImageSupportedInBase64 = canReadAsBase64 && canResizeImageToBase64;

  var dataURLtoBase64 = function dataURLtoBase64(dataurl) {
    return dataurl.substring(dataurl.indexOf(',') + 1, dataurl.length);
  }; // Step 1: check file info and attempt to read the file
  // paramaters: Ajax settings, File object


  var handleFile = function handleFile(settings, file) {
    var info = {
      // properties of standard File object || Gecko 1.9 properties
      type: file.type || '',
      // MIME type
      size: file.size || file.fileSize,
      name: file.name || file.fileName
    }; // settings.resizeImage = !!(settings.imageMaxWidth || settings.imageMaxHeight);

    if (settings.resizeImage && !isImageSupported && settings.allowUploadOriginalImage) {
      log('WARN: Fall back to upload original un-resized image.');
      settings.resizeImage = false;
    }
    /*
    if (settings.resizeImage) {
    settings.imageMaxWidth = settings.imageMaxWidth || Infinity;
    settings.imageMaxHeight = settings.imageMaxHeight || Infinity;
    }
    */


    if (!settings.resizeImage) {
      if (settings.fileType && settings.fileType.test) {
        // Not using MIME types
        if (!settings.fileType.test(info.name.substr(info.name.lastIndexOf('.') + 1))) {
          log('ERROR: Invalid Filetype.');
          settings.fileError.call(this, info, 'INVALID_FILETYPE', 'Invalid filetype.');
          return;
        }
      }

      if (settings.fileMaxSize && file.size > settings.fileMaxSize) {
        log('ERROR: File exceeds size limit.');
        settings.fileError.call(this, info, 'FILE_EXCEEDS_SIZE_LIMIT', 'File exceeds size limit.');
        return;
      }
    }

    if (!settings.resizeImage && canReadFormData) {
      log('INFO: Bypass file reading, insert file object into FormData object directly.');
      handleForm(settings, 'file', file, info);
    } else if (window.FileReader) {
      log('INFO: Using FileReader to do asynchronously file reading.');
      var reader = new FileReader();

      reader.onerror = function (ev) {
        if (ev.target.error) {
          switch (ev.target.error) {
            case 8:
              log('ERROR: File not found.');
              settings.fileError.call(this, info, 'FILE_NOT_FOUND', 'File not found.');
              break;

            case 24:
              log('ERROR: File not readable.');
              settings.fileError.call(this, info, 'IO_ERROR', 'File not readable.');
              break;

            case 18:
              log('ERROR: File cannot be access due to security constrant.');
              settings.fileError.call(this, info, 'SECURITY_ERROR', 'File cannot be access due to security constrant.');
              break;

            case 20:
              //User Abort
              break;
          }
        }
      };

      if (!settings.resizeImage) {
        if (canSendBinaryString) {
          reader.onloadend = function (ev) {
            var bin = ev.target.result;
            handleForm(settings, 'bin', bin, info);
          };

          reader.readAsBinaryString(file);
        } else if (settings.allowDataInBase64) {
          reader.onloadend = function (ev) {
            handleForm(settings, 'base64', dataURLtoBase64(ev.target.result), info);
          };

          reader.readAsDataURL(file);
        } else {
          log('ERROR: No available method to extract file; allowDataInBase64 not set.');
          settings.fileError.call(this, info, 'NO_BIN_SUPPORT_AND_BASE64_NOT_SET', 'No available method to extract file; allowDataInBase64 not set.');
        }
      } else {
        reader.onloadend = function (ev) {
          var dataurl = ev.target.result;
          handleImage(settings, dataurl, info, file);
        };

        reader.readAsDataURL(file);
      }
    } else if (window.File && window.File.prototype.getAsBinary) {
      log('WARN: FileReader does not exist, UI will be blocked when reading big file.');

      if (!settings.resizeImage) {
        try {
          var bin = file.getAsBinary();
        } catch (e) {
          log('ERROR: File not readable.');
          settings.fileError.call(this, info, 'IO_ERROR', 'File not readable.');
          return;
        }

        handleForm(settings, 'bin', bin, info);
      } else {
        try {
          var bin = file.getAsDataURL();
        } catch (e) {
          log('ERROR: File not readable.');
          settings.fileError.call(this, info, 'IO_ERROR', 'File not readable.');
          return;
        }

        handleImage(settings, dataurl, info, file);
      }
    } else {
      // log('ERROR: No available method to extract file; this browser is not supported.');
      if (settings.fallback) {
        settings.fallback();
      } else {
        settings.fileError.call(this, info, 'NOT_SUPPORT', 'ERROR: No available method to extract file; this browser is not supported.');
      }
    }
  }; // step 1.5: inject file into <img>, paste the pixels into <canvas>,
  // read the final image


  var handleImage = function handleImage(settings, dataurl, info, file) {
    var img = new Image();

    img.onerror = function () {
      log('ERROR: <img> failed to load, file is not a supported image format.');
      settings.fileError.call(this, info, 'FILE_NOT_IMAGE', 'File is not a supported image format.');
    };

    img.onload = function () {
      /*
      var ratio = Math.max(
      img.width/settings.imageMaxWidth,
      img.height/settings.imageMaxHeight,
      1
      );
      var d = {
      w: Math.floor(Math.max(img.width/ratio, 1)),
      h: Math.floor(Math.max(img.height/ratio, 1))
      }
      log(
      'INFO: Original image size: ' + img.width.toString(10) + 'x' + img.height.toString(10)
      + ', resized image size: ' + d.w + 'x' + d.h + '.'
      );
      if (!settings.forceResize && img.width === d.w && img.height === d.h) {
      log('INFO: Image demension is the same, send the original file.');
      if (canResizeImageToBinaryString) {
      handleForm(
      settings,
      'bin',
      window.atob(dataURLtoBase64(dataurl)),
      info
      );
      } else if (settings.allowDataInBase64) {
      handleForm(
      settings,
      'base64',
      dataURLtoBase64(dataurl),
      info
      );
      } else {
      log('ERROR: No available method to send the original file; allowDataInBase64 not set.');
      settings.fileError.call(this, info, 'NO_BIN_SUPPORT_AND_BASE64_NOT_SET', 'No available method to extract file; allowDataInBase64 not set.');
      }
      return;
      }
      */
      var canvas = document.createElement('canvas');
      /*
      canvas.setAttribute('width', d.w);
      canvas.setAttribute('height', d.h);
      canvas.getContext('2d').drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      0,
      0,
      d.w,
      d.h
      );
      */

      var cb = function cb(canvas) {
        if (!settings.imageType || settings.imageType === 'auto') {
          if (info.type === 'image/jpeg') settings.imageType = 'jpeg';else settings.imageType = 'png';
        }

        var ninfo = {
          type: 'image/' + settings.imageType,
          name: info.name.substr(0, info.name.indexOf('.')) + '.resized.' + settings.imageType
        };

        if (canResizeImageToFile && canSendFormData) {
          // Gecko 2 (Fx4) non-standard function
          var nfile = canvas.mozGetAsFile(ninfo.name, 'image/' + settings.imageType);
          ninfo.size = file.size || file.fileSize;
          handleForm(settings, 'file', nfile, ninfo);
        } else if (canResizeImageToBinaryString && canSendBinaryString) {
          // Read the image as DataURL, convert it back to binary string.
          var bin = window.atob(dataURLtoBase64(canvas.toDataURL('image/' + settings.imageType)));
          ninfo.size = bin.length;
          handleForm(settings, 'bin', bin, ninfo);
        } else if (settings.allowDataInBase64 && canResizeImageToBase64 && canSendImageInBase64) {
          handleForm(settings, 'base64', dataURLtoBase64(canvas.toDataURL('image/' + settings.imageType)), ninfo);
        } else {
          log('ERROR: No available method to extract image; allowDataInBase64 not set.');
          settings.fileError.call(this, info, 'NO_BIN_SUPPORT_AND_BASE64_NOT_SET', 'No available method to extract file; allowDataInBase64 not set.');
        }
      };

      settings.resizeImage(img, canvas, cb);
    };

    img.src = dataurl;
  }; // Step 2: construct form data and send the file
  // paramaters: Ajax settings, File object, binary string of file || null, file info assoc array


  var handleForm = function handleForm(settings, type, data, info) {
    if (canSendFormData && type === 'file') {
      // FormData API saves the day
      log('INFO: Using FormData to construct form.');
      var formdata = new FormData();
      formdata.append(settings.name, data); // Prevent jQuery form convert FormData object into string.

      settings.processData = false; // Prevent jQuery from overwrite automatically generated xhr content-Type header
      // by unsetting the default contentType and inject data only right before xhr.send()

      settings.contentType = false;
      settings.__beforeSend = settings.beforeSend;

      settings.beforeSend = function (xhr, s) {
        s.data = formdata;
        if (s.__beforeSend) return s.__beforeSend.call(this, xhr, s);
      }; //settings.data = formdata;

    } else if (canSendBinaryString && type === 'bin') {
      log('INFO: Concat our own multipart/form-data data string.'); // A placeholder MIME type

      if (!info.type) info.type = 'application/octet-stream';

      if (/[^\x20-\x7E]/.test(info.name)) {
        log('INFO: Filename contains non-ASCII code, do UTF8-binary string conversion.');
        info.name_bin = unescape(encodeURIComponent(info.name));
      } //filtered out non-ASCII chars in filenames
      // info.name = info.name.replace(/[^\x20-\x7E]/g, '_');
      // multipart/form-data boundary


      var bd = 'xhrupload-' + parseInt(Math.random() * (2 << 16));
      settings.contentType = 'multipart/form-data; boundary=' + bd;
      var formdata = '--' + bd + '\n' // RFC 1867 Format, simulate form file upload
      + 'content-disposition: form-data; name="' + settings.name + '";' + ' filename="' + (info.name_bin || info.name) + '"\n' + 'Content-Type: ' + info.type + '\n\n' + data + '\n\n' + '--' + bd + '--';

      if (window.XMLHttpRequest && window.XMLHttpRequest.prototype.sendAsBinary) {
        // Use xhr.sendAsBinary that takes binary string
        log('INFO: Pass binary string to xhr.');
        settings.data = formdata;
      } else if (window.Blob && window.Uint8Array && window.ProgressEvent) {
        // send through xh2
        log('INFO: Make XH2 blob string');
        var view = new Uint8Array(formdata.length); // jquery的each 不支持字符串了
        // $.each(
        // 	formdata,
        // 	function (i, o) {
        // 		view[i] = o.charCodeAt(0);
        // 	}
        // );

        for (var i = 0; i < formdata.length; i++) {
          view[i] = formdata.charCodeAt(i);
        }

        var blob = view.buffer;
        settings.processData = false;
        settings.__beforeSend = settings.beforeSend;

        settings.beforeSend = function (xhr, s) {
          s.data = blob;
          if (s.__beforeSend) return s.__beforeSend.call(this, xhr, s);
        };
      } else {
        // make a blob
        log('INFO: Convert binary string into Blob.');
        var buf = new ArrayBuffer(formdata.length);
        var view = new Uint8Array(buf);
        $.each(formdata, function (i, o) {
          view[i] = o.charCodeAt(0);
        });
        var bb = new BlobBuilder();
        bb.append(buf);
        var blob = bb.getBlob();
        settings.processData = false;
        settings.__beforeSend = settings.beforeSend;

        settings.beforeSend = function (xhr, s) {
          s.data = blob;
          if (s.__beforeSend) return s.__beforeSend.call(this, xhr, s);
        };
      }
    } else if (settings.allowDataInBase64 && type === 'base64') {
      log('INFO: Concat our own multipart/form-data data string; send the file in base64 because binary xhr is not supported.'); // A placeholder MIME type

      if (!info.type) info.type = 'application/octet-stream';
      settings.url += '?enc=base64'; // multipart/form-data boundary

      var bd = 'xhrupload-' + parseInt(Math.random() * (2 << 16));
      settings.contentType = 'multipart/form-data; boundary=' + bd;
      settings.data = '--' + bd + '\n' // RFC 1867 Format, simulate form file upload
      + 'content-disposition: form-data; name="' + settings.name + '";' + ' filename="' + encodeURIComponent(info.name) + '.base64"\n' + 'Content-Transfer-Encoding: base64\n' // Vaild MIME header, but won't work with PHP file upload handling.
      + 'Content-Type: ' + info.type + '\n\n' + data + '\n\n' + '--' + bd + '--';
    } else {
      log('ERROR: Data is not given in processable form.');
      settings.fileError.call(this, info, 'INTERNAL_ERROR', 'Data is not given in processable form.');
      return;
    }

    xhrupload(settings);
  }; // Step 3: start sending out file


  var xhrupload = function xhrupload(settings) {
    log('INFO: Sending file.');

    if (typeof settings.data === 'string' && canSendBinaryString) {
      log('INFO: Using xhr.sendAsBinary.');
      settings.___beforeSend = settings.beforeSend;

      settings.beforeSend = function (xhr, s) {
        if (window.XMLHttpRequest.prototype.sendAsBinary) {
          xhr.send = xhr.sendAsBinary;
        }

        if (s.___beforeSend) return s.___beforeSend.call(this, xhr, s);
      };
    }

    $.ajax(settings);
  };

  $.fn.fileUpload = function (settings) {
    this.each(function (i, el) {
      if ($(el).is('input[type=file]')) {
        log('INFO: binding onchange event to a input[type=file].');
        $(el).bind('change', function () {
          if (!this.files) {
            if (settings.fallback) {
              settings.fallback();
            }

            return;
          } else if (!this.files.length) {
            log('ERROR: no file selected.');
            return;
          } else if (this.files.length > 1) {
            log('WARN: Multiple file upload not implemented yet, only first file will be uploaded.');
          }

          settings.name = $(this).attr('name');
          handleFile($.extend({}, config, settings), this.files[0]);

          if (this.form) {
            this.form.reset();
          } else {
            log('WARN: Unable to reset file selection, upload won\'t be triggered again if user selects the same file.');
          }

          return;
        });
      }

      if ($(el).is('form')) {
        log('ERROR: <form> not implemented yet.');
      } else {
        log('INFO: binding ondrop event.');
        $(el).bind('dragover', // dragover behavior should be blocked for drop to invoke.
        function (ev) {
          return false;
        }).bind('drop', function (ev) {
          if (!ev.originalEvent.dataTransfer.files) {
            log('ERROR: No FileList object present; user might had dropped text.');
            return false;
          }

          if (!ev.originalEvent.dataTransfer.files.length) {
            log('ERROR: User had dropped a virual file (e.g. "My Computer")');
            return false;
          }

          if (!ev.originalEvent.dataTransfer.files.length > 1) {
            log('WARN: Multiple file upload not implemented yet, only first file will be uploaded.');
          }

          handleFile($.extend({}, config, settings), ev.originalEvent.dataTransfer.files[0]);
          return false;
        });
      }
    });
    return this;
  };

  $.fileUploadSupported = isSupported;
  $.imageUploadSupported = isImageSupported;
  $.fileUploadAsBase64Supported = isSupportedInBase64;
  $.imageUploadAsBase64Supported = isImageSupportedInBase64;
})();

/***/ }),

/***/ "./resources/js/edit/highlight.js":
/*!****************************************!*\
  !*** ./resources/js/edit/highlight.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e) {
   true ? e(exports) : (undefined);
}(function (e) {
  function t(e) {
    return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;");
  }

  function r(e) {
    return e.nodeName.toLowerCase();
  }

  function n(e, t) {
    var r = e && e.exec(t);
    return r && 0 == r.index;
  }

  function a(e) {
    var t = (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(/\s+/);
    return t = t.map(function (e) {
      return e.replace(/^lang(uage)?-/, "");
    }), t.filter(function (e) {
      return N(e) || /no(-?)highlight/.test(e);
    })[0];
  }

  function i(e, t) {
    var r = {};

    for (var n in e) {
      r[n] = e[n];
    }

    if (t) for (var n in t) {
      r[n] = t[n];
    }
    return r;
  }

  function s(e) {
    var t = [];
    return function n(e, a) {
      for (var i = e.firstChild; i; i = i.nextSibling) {
        3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (t.push({
          event: "start",
          offset: a,
          node: i
        }), a = n(i, a), r(i).match(/br|hr|img|input/) || t.push({
          event: "stop",
          offset: a,
          node: i
        }));
      }

      return a;
    }(e, 0), t;
  }

  function c(e, n, a) {
    function i() {
      return e.length && n.length ? e[0].offset != n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" == n[0].event ? e : n : e.length ? e : n;
    }

    function s(e) {
      function n(e) {
        return " " + e.nodeName + '="' + t(e.value) + '"';
      }

      u += "<" + r(e) + Array.prototype.map.call(e.attributes, n).join("") + ">";
    }

    function c(e) {
      u += "</" + r(e) + ">";
    }

    function o(e) {
      ("start" == e.event ? s : c)(e.node);
    }

    for (var l = 0, u = "", d = []; e.length || n.length;) {
      var b = i();

      if (u += t(a.substr(l, b[0].offset - l)), l = b[0].offset, b == e) {
        d.reverse().forEach(c);

        do {
          o(b.splice(0, 1)[0]), b = i();
        } while (b == e && b.length && b[0].offset == l);

        d.reverse().forEach(s);
      } else "start" == b[0].event ? d.push(b[0].node) : d.pop(), o(b.splice(0, 1)[0]);
    }

    return u + t(a.substr(l));
  }

  function o(e) {
    function t(e) {
      return e && e.source || e;
    }

    function r(r, n) {
      return RegExp(t(r), "m" + (e.cI ? "i" : "") + (n ? "g" : ""));
    }

    function n(a, s) {
      if (!a.compiled) {
        if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
          var c = {},
              o = function o(t, r) {
            e.cI && (r = r.toLowerCase()), r.split(" ").forEach(function (e) {
              var r = e.split("|");
              c[r[0]] = [t, r[1] ? Number(r[1]) : 1];
            });
          };

          "string" == typeof a.k ? o("keyword", a.k) : Object.keys(a.k).forEach(function (e) {
            o(e, a.k[e]);
          }), a.k = c;
        }

        a.lR = r(a.l || /\b[A-Za-z0-9_]+\b/, !0), s && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = r(a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = r(a.e)), a.tE = t(a.e) || "", a.eW && s.tE && (a.tE += (a.e ? "|" : "") + s.tE)), a.i && (a.iR = r(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []);
        var l = [];
        a.c.forEach(function (e) {
          e.v ? e.v.forEach(function (t) {
            l.push(i(e, t));
          }) : l.push("self" == e ? a : e);
        }), a.c = l, a.c.forEach(function (e) {
          n(e, a);
        }), a.starts && n(a.starts, s);
        var u = a.c.map(function (e) {
          return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
        }).concat([a.tE, a.i]).map(t).filter(Boolean);
        a.t = u.length ? r(u.join("|"), !0) : {
          exec: function exec() {
            return null;
          }
        };
      }
    }

    n(e);
  }

  function l(e, r, a, i) {
    function s(e, t) {
      for (var r = 0; r < t.c.length; r++) {
        if (n(t.c[r].bR, e)) return t.c[r];
      }
    }

    function c(e, t) {
      return n(e.eR, t) ? e : e.eW ? c(e.parent, t) : void 0;
    }

    function d(e, t) {
      return !a && n(t.iR, e);
    }

    function b(e, t) {
      var r = y.cI ? t[0].toLowerCase() : t[0];
      return e.k.hasOwnProperty(r) && e.k[r];
    }

    function p(e, t, r, n) {
      var a = n ? "" : v.classPrefix,
          i = '<span class="' + a,
          s = r ? "" : "</span>";
      return i += e + '">', i + t + s;
    }

    function f() {
      if (!k.k) return t(S);
      var e = "",
          r = 0;
      k.lR.lastIndex = 0;

      for (var n = k.lR.exec(S); n;) {
        e += t(S.substr(r, n.index - r));
        var a = b(k, n);
        a ? (E += a[1], e += p(a[0], t(n[0]))) : e += t(n[0]), r = k.lR.lastIndex, n = k.lR.exec(S);
      }

      return e + t(S.substr(r));
    }

    function m() {
      if (k.sL && !w[k.sL]) return t(S);
      var e = k.sL ? l(k.sL, S, !0, x[k.sL]) : u(S);
      return k.r > 0 && (E += e.r), "continuous" == k.subLanguageMode && (x[k.sL] = e.top), p(e.language, e.value, !1, !0);
    }

    function g() {
      return void 0 !== k.sL ? m() : f();
    }

    function _(e, r) {
      var n = e.cN ? p(e.cN, "", !0) : "";
      e.rB ? (M += n, S = "") : e.eB ? (M += t(r) + n, S = "") : (M += n, S = r), k = Object.create(e, {
        parent: {
          value: k
        }
      });
    }

    function h(e, r) {
      if (S += e, void 0 === r) return M += g(), 0;
      var n = s(r, k);
      if (n) return M += g(), _(n, r), n.rB ? 0 : r.length;
      var a = c(k, r);

      if (a) {
        var i = k;
        i.rE || i.eE || (S += r), M += g();

        do {
          k.cN && (M += "</span>"), E += k.r, k = k.parent;
        } while (k != a.parent);

        return i.eE && (M += t(r)), S = "", a.starts && _(a.starts, ""), i.rE ? 0 : r.length;
      }

      if (d(r, k)) throw new Error('Illegal lexeme "' + r + '" for mode "' + (k.cN || "<unnamed>") + '"');
      return S += r, r.length || 1;
    }

    var y = N(e);
    if (!y) throw new Error('Unknown language: "' + e + '"');
    o(y);

    for (var k = i || y, x = {}, M = "", C = k; C != y; C = C.parent) {
      C.cN && (M = p(C.cN, "", !0) + M);
    }

    var S = "",
        E = 0;

    try {
      for (var B, I, L = 0;;) {
        if (k.t.lastIndex = L, B = k.t.exec(r), !B) break;
        I = h(r.substr(L, B.index - L), B[0]), L = B.index + I;
      }

      h(r.substr(L));

      for (var C = k; C.parent; C = C.parent) {
        C.cN && (M += "</span>");
      }

      return {
        r: E,
        value: M,
        language: e,
        top: k
      };
    } catch (R) {
      if (-1 != R.message.indexOf("Illegal")) return {
        r: 0,
        value: t(r)
      };
      throw R;
    }
  }

  function u(e, r) {
    r = r || v.languages || Object.keys(w);
    var n = {
      r: 0,
      value: t(e)
    },
        a = n;
    return r.forEach(function (t) {
      if (N(t)) {
        var r = l(t, e, !1);
        r.language = t, r.r > a.r && (a = r), r.r > n.r && (a = n, n = r);
      }
    }), a.language && (n.second_best = a), n;
  }

  function d(e) {
    return v.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, t) {
      return t.replace(/\t/g, v.tabReplace);
    })), v.useBR && (e = e.replace(/\n/g, "<br>")), e;
  }

  function b(e, t, r) {
    var n = t ? y[t] : r,
        a = [e.trim()];
    return e.match(/(\s|^)hljs(\s|$)/) || a.push("hljs"), n && a.push(n), a.join(" ").trim();
  }

  function p(e) {
    var t = a(e);

    if (!/no(-?)highlight/.test(t)) {
      var r;
      v.useBR ? (r = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), r.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : r = e;
      var n = r.textContent,
          i = t ? l(t, n, !0) : u(n),
          o = s(r);

      if (o.length) {
        var p = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
        p.innerHTML = i.value, i.value = c(o, s(p), n);
      }

      i.value = d(i.value), e.innerHTML = i.value, e.className = b(e.className, t, i.language), e.result = {
        language: i.language,
        re: i.r
      }, i.second_best && (e.second_best = {
        language: i.second_best.language,
        re: i.second_best.r
      });
    }
  }

  function f(e) {
    v = i(v, e);
  }

  function m() {
    if (!m.called) {
      m.called = !0;
      var e = document.querySelectorAll("pre code");
      Array.prototype.forEach.call(e, p);
    }
  }

  function g() {
    addEventListener("DOMContentLoaded", m, !1), addEventListener("load", m, !1);
  }

  function _(t, r) {
    var n = w[t] = r(e);
    n.aliases && n.aliases.forEach(function (e) {
      y[e] = t;
    });
  }

  function h() {
    return Object.keys(w);
  }

  function N(e) {
    return w[e] || w[y[e]];
  }

  var v = {
    classPrefix: "hljs-",
    tabReplace: null,
    useBR: !1,
    languages: void 0
  },
      w = {},
      y = {};
  return e.highlight = l, e.highlightAuto = u, e.fixMarkup = d, e.highlightBlock = p, e.configure = f, e.initHighlighting = m, e.initHighlightingOnLoad = g, e.registerLanguage = _, e.listLanguages = h, e.getLanguage = N, e.inherit = i, e.IR = "[a-zA-Z][a-zA-Z0-9_]*", e.UIR = "[a-zA-Z_][a-zA-Z0-9_]*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
    b: "\\\\[\\s\\S]",
    r: 0
  }, e.ASM = {
    cN: "string",
    b: "'",
    e: "'",
    i: "\\n",
    c: [e.BE]
  }, e.QSM = {
    cN: "string",
    b: '"',
    e: '"',
    i: "\\n",
    c: [e.BE]
  }, e.PWM = {
    b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
  }, e.CLCM = {
    cN: "comment",
    b: "//",
    e: "$",
    c: [e.PWM]
  }, e.CBCM = {
    cN: "comment",
    b: "/\\*",
    e: "\\*/",
    c: [e.PWM]
  }, e.HCM = {
    cN: "comment",
    b: "#",
    e: "$",
    c: [e.PWM]
  }, e.NM = {
    cN: "number",
    b: e.NR,
    r: 0
  }, e.CNM = {
    cN: "number",
    b: e.CNR,
    r: 0
  }, e.BNM = {
    cN: "number",
    b: e.BNR,
    r: 0
  }, e.CSSNM = {
    cN: "number",
    b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    r: 0
  }, e.RM = {
    cN: "regexp",
    b: /\//,
    e: /\/[gimuy]*/,
    i: /\n/,
    c: [e.BE, {
      b: /\[/,
      e: /\]/,
      r: 0,
      c: [e.BE]
    }]
  }, e.TM = {
    cN: "title",
    b: e.IR,
    r: 0
  }, e.UTM = {
    cN: "title",
    b: e.UIR,
    r: 0
  }, e;
}), hljs.registerLanguage("apache", function (e) {
  var t = {
    cN: "number",
    b: "[\\$%]\\d+"
  };
  return {
    aliases: ["apacheconf"],
    cI: !0,
    c: [e.HCM, {
      cN: "tag",
      b: "</?",
      e: ">"
    }, {
      cN: "keyword",
      b: /\w+/,
      r: 0,
      k: {
        common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
      },
      starts: {
        e: /$/,
        r: 0,
        k: {
          literal: "on off all"
        },
        c: [{
          cN: "sqbracket",
          b: "\\s\\[",
          e: "\\]$"
        }, {
          cN: "cbracket",
          b: "[\\$%]\\{",
          e: "\\}",
          c: ["self", t]
        }, t, e.QSM]
      }
    }],
    i: /\S/
  };
}), hljs.registerLanguage("bash", function (e) {
  var t = {
    cN: "variable",
    v: [{
      b: /\$[\w\d#@][\w\d_]*/
    }, {
      b: /\$\{(.*?)\}/
    }]
  },
      r = {
    cN: "string",
    b: /"/,
    e: /"/,
    c: [e.BE, t, {
      cN: "variable",
      b: /\$\(/,
      e: /\)/,
      c: [e.BE]
    }]
  },
      n = {
    cN: "string",
    b: /'/,
    e: /'/
  };
  return {
    aliases: ["sh", "zsh"],
    l: /-?[a-z\.]+/,
    k: {
      keyword: "if then else elif fi for while in do done case esac function",
      literal: "true false",
      built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
      operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
    },
    c: [{
      cN: "shebang",
      b: /^#![^\n]+sh\s*$/,
      r: 10
    }, {
      cN: "function",
      b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      rB: !0,
      c: [e.inherit(e.TM, {
        b: /\w[\w\d_]*/
      })],
      r: 0
    }, e.HCM, e.NM, r, n, t]
  };
}), hljs.registerLanguage("coffeescript", function (e) {
  var t = {
    keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
    literal: "true false null undefined yes no on off",
    reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
    built_in: "npm require console print module global window document"
  },
      r = "[A-Za-z$_][0-9A-Za-z$_]*",
      n = {
    cN: "subst",
    b: /#\{/,
    e: /}/,
    k: t
  },
      a = [e.BNM, e.inherit(e.CNM, {
    starts: {
      e: "(\\s*/)?",
      r: 0
    }
  }), {
    cN: "string",
    v: [{
      b: /'''/,
      e: /'''/,
      c: [e.BE]
    }, {
      b: /'/,
      e: /'/,
      c: [e.BE]
    }, {
      b: /"""/,
      e: /"""/,
      c: [e.BE, n]
    }, {
      b: /"/,
      e: /"/,
      c: [e.BE, n]
    }]
  }, {
    cN: "regexp",
    v: [{
      b: "///",
      e: "///",
      c: [n, e.HCM]
    }, {
      b: "//[gim]*",
      r: 0
    }, {
      b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
    }]
  }, {
    cN: "property",
    b: "@" + r
  }, {
    b: "`",
    e: "`",
    eB: !0,
    eE: !0,
    sL: "javascript"
  }];
  n.c = a;
  var i = e.inherit(e.TM, {
    b: r
  }),
      s = "(\\(.*\\))?\\s*\\B[-=]>",
      c = {
    cN: "params",
    b: "\\([^\\(]",
    rB: !0,
    c: [{
      b: /\(/,
      e: /\)/,
      k: t,
      c: ["self"].concat(a)
    }]
  };
  return {
    aliases: ["coffee", "cson", "iced"],
    k: t,
    i: /\/\*/,
    c: a.concat([{
      cN: "comment",
      b: "###",
      e: "###",
      c: [e.PWM]
    }, e.HCM, {
      cN: "function",
      b: "^\\s*" + r + "\\s*=\\s*" + s,
      e: "[-=]>",
      rB: !0,
      c: [i, c]
    }, {
      b: /[:\(,=]\s*/,
      r: 0,
      c: [{
        cN: "function",
        b: s,
        e: "[-=]>",
        rB: !0,
        c: [c]
      }]
    }, {
      cN: "class",
      bK: "class",
      e: "$",
      i: /[:="\[\]]/,
      c: [{
        bK: "extends",
        eW: !0,
        i: /[:="\[\]]/,
        c: [i]
      }, i]
    }, {
      cN: "attribute",
      b: r + ":",
      e: ":",
      rB: !0,
      rE: !0,
      r: 0
    }])
  };
}), hljs.registerLanguage("cpp", function (e) {
  var t = {
    keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginaryintmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_tint_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_tint_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_tuint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_scharatomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llongatomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_tatomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_tatomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_tatomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_tatomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
    built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
  };
  return {
    aliases: ["c", "h", "c++", "h++"],
    k: t,
    i: "</",
    c: [e.CLCM, e.CBCM, e.QSM, {
      cN: "string",
      b: "'\\\\?.",
      e: "'",
      i: "."
    }, {
      cN: "number",
      b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
    }, e.CNM, {
      cN: "preprocessor",
      b: "#",
      e: "$",
      k: "if else elif endif define undef warning error line pragma",
      c: [{
        b: 'include\\s*[<"]',
        e: '[>"]',
        k: "include",
        i: "\\n"
      }, e.CLCM]
    }, {
      cN: "stl_container",
      b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
      e: ">",
      k: t,
      c: ["self"]
    }, {
      b: e.IR + "::"
    }, {
      bK: "new throw return",
      r: 0
    }, {
      cN: "function",
      b: "(" + e.IR + "\\s+)+" + e.IR + "\\s*\\(",
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: t,
      c: [{
        b: e.IR + "\\s*\\(",
        rB: !0,
        c: [e.TM],
        r: 0
      }, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: t,
        r: 0,
        c: [e.CBCM]
      }, e.CLCM, e.CBCM]
    }]
  };
}), hljs.registerLanguage("cs", function (e) {
  var t = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
      r = e.IR + "(<" + e.IR + ">)?";
  return {
    aliases: ["csharp"],
    k: t,
    i: /::/,
    c: [{
      cN: "comment",
      b: "///",
      e: "$",
      rB: !0,
      c: [{
        cN: "xmlDocTag",
        v: [{
          b: "///",
          r: 0
        }, {
          b: "<!--|-->"
        }, {
          b: "</?",
          e: ">"
        }]
      }]
    }, e.CLCM, e.CBCM, {
      cN: "preprocessor",
      b: "#",
      e: "$",
      k: "if else elif endif define undef warning error line region endregion pragma checksum"
    }, {
      cN: "string",
      b: '@"',
      e: '"',
      c: [{
        b: '""'
      }]
    }, e.ASM, e.QSM, e.CNM, {
      bK: "class namespace interface",
      e: /[{;=]/,
      i: /[^\s:]/,
      c: [e.TM, e.CLCM, e.CBCM]
    }, {
      bK: "new return throw await",
      r: 0
    }, {
      cN: "function",
      b: "(" + r + "\\s+)+" + e.IR + "\\s*\\(",
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: t,
      c: [{
        b: e.IR + "\\s*\\(",
        rB: !0,
        c: [e.TM],
        r: 0
      }, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: t,
        r: 0,
        c: [e.ASM, e.QSM, e.CNM, e.CBCM]
      }, e.CLCM, e.CBCM]
    }]
  };
}), hljs.registerLanguage("css", function (e) {
  var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
      r = {
    cN: "function",
    b: t + "\\(",
    rB: !0,
    eE: !0,
    e: "\\("
  };
  return {
    cI: !0,
    i: "[=/|']",
    c: [e.CBCM, {
      cN: "id",
      b: "\\#[A-Za-z0-9_-]+"
    }, {
      cN: "class",
      b: "\\.[A-Za-z0-9_-]+",
      r: 0
    }, {
      cN: "attr_selector",
      b: "\\[",
      e: "\\]",
      i: "$"
    }, {
      cN: "pseudo",
      b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
    }, {
      cN: "at_rule",
      b: "@(font-face|page)",
      l: "[a-z-]+",
      k: "font-face page"
    }, {
      cN: "at_rule",
      b: "@",
      e: "[{;]",
      c: [{
        cN: "keyword",
        b: /\S+/
      }, {
        b: /\s/,
        eW: !0,
        eE: !0,
        r: 0,
        c: [r, e.ASM, e.QSM, e.CSSNM]
      }]
    }, {
      cN: "tag",
      b: t,
      r: 0
    }, {
      cN: "rules",
      b: "{",
      e: "}",
      i: "[^\\s]",
      r: 0,
      c: [e.CBCM, {
        cN: "rule",
        b: "[^\\s]",
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
          cN: "attribute",
          b: "[A-Z\\_\\.\\-]+",
          e: ":",
          eE: !0,
          i: "[^\\s]",
          starts: {
            cN: "value",
            eW: !0,
            eE: !0,
            c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
              cN: "hexcolor",
              b: "#[0-9A-Fa-f]+"
            }, {
              cN: "important",
              b: "!important"
            }]
          }
        }]
      }]
    }]
  };
}), hljs.registerLanguage("diff", function () {
  return {
    aliases: ["patch"],
    c: [{
      cN: "chunk",
      r: 10,
      v: [{
        b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/
      }, {
        b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
      }, {
        b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
      }]
    }, {
      cN: "header",
      v: [{
        b: /Index: /,
        e: /$/
      }, {
        b: /=====/,
        e: /=====$/
      }, {
        b: /^\-\-\-/,
        e: /$/
      }, {
        b: /^\*{3} /,
        e: /$/
      }, {
        b: /^\+\+\+/,
        e: /$/
      }, {
        b: /\*{5}/,
        e: /\*{5}$/
      }]
    }, {
      cN: "addition",
      b: "^\\+",
      e: "$"
    }, {
      cN: "deletion",
      b: "^\\-",
      e: "$"
    }, {
      cN: "change",
      b: "^\\!",
      e: "$"
    }]
  };
}), hljs.registerLanguage("http", function () {
  return {
    i: "\\S",
    c: [{
      cN: "status",
      b: "^HTTP/[0-9\\.]+",
      e: "$",
      c: [{
        cN: "number",
        b: "\\b\\d{3}\\b"
      }]
    }, {
      cN: "request",
      b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
      rB: !0,
      e: "$",
      c: [{
        cN: "string",
        b: " ",
        e: " ",
        eB: !0,
        eE: !0
      }]
    }, {
      cN: "attribute",
      b: "^\\w",
      e: ": ",
      eE: !0,
      i: "\\n|\\s|=",
      starts: {
        cN: "string",
        e: "$"
      }
    }, {
      b: "\\n\\n",
      starts: {
        sL: "",
        eW: !0
      }
    }]
  };
}), hljs.registerLanguage("ini", function (e) {
  return {
    cI: !0,
    i: /\S/,
    c: [{
      cN: "comment",
      b: ";",
      e: "$"
    }, {
      cN: "title",
      b: "^\\[",
      e: "\\]"
    }, {
      cN: "setting",
      b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
      e: "$",
      c: [{
        cN: "value",
        eW: !0,
        k: "on off true false yes no",
        c: [e.QSM, e.NM],
        r: 0
      }]
    }]
  };
}), hljs.registerLanguage("java", function (e) {
  var t = e.UIR + "(<" + e.UIR + ">)?",
      r = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
      n = "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",
      a = {
    cN: "number",
    b: n,
    r: 0
  };
  return {
    aliases: ["jsp"],
    k: r,
    i: /<\//,
    c: [{
      cN: "javadoc",
      b: "/\\*\\*",
      e: "\\*/",
      r: 0,
      c: [{
        cN: "javadoctag",
        b: "(^|\\s)@[A-Za-z]+"
      }]
    }, e.CLCM, e.CBCM, e.ASM, e.QSM, {
      cN: "class",
      bK: "class interface",
      e: /[{;=]/,
      eE: !0,
      k: "class interface",
      i: /[:"\[\]]/,
      c: [{
        bK: "extends implements"
      }, e.UTM]
    }, {
      bK: "new throw return",
      r: 0
    }, {
      cN: "function",
      b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
      rB: !0,
      e: /[{;=]/,
      eE: !0,
      k: r,
      c: [{
        b: e.UIR + "\\s*\\(",
        rB: !0,
        r: 0,
        c: [e.UTM]
      }, {
        cN: "params",
        b: /\(/,
        e: /\)/,
        k: r,
        r: 0,
        c: [e.ASM, e.QSM, e.CNM, e.CBCM]
      }, e.CLCM, e.CBCM]
    }, a, {
      cN: "annotation",
      b: "@[A-Za-z]+"
    }]
  };
}), hljs.registerLanguage("javascript", function (e) {
  return {
    aliases: ["js"],
    k: {
      keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
      literal: "true false null undefined NaN Infinity",
      built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"
    },
    c: [{
      cN: "pi",
      r: 10,
      v: [{
        b: /^\s*('|")use strict('|")/
      }, {
        b: /^\s*('|")use asm('|")/
      }]
    }, e.ASM, e.QSM, e.CLCM, e.CBCM, e.CNM, {
      b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
      k: "return throw case",
      c: [e.CLCM, e.CBCM, e.RM, {
        b: /</,
        e: />;/,
        r: 0,
        sL: "xml"
      }],
      r: 0
    }, {
      cN: "function",
      bK: "function",
      e: /\{/,
      eE: !0,
      c: [e.inherit(e.TM, {
        b: /[A-Za-z$_][0-9A-Za-z$_]*/
      }), {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: [e.CLCM, e.CBCM],
        i: /["'\(]/
      }],
      i: /\[|%/
    }, {
      b: /\$[(.]/
    }, {
      b: "\\." + e.IR,
      r: 0
    }]
  };
}), hljs.registerLanguage("json", function (e) {
  var t = {
    literal: "true false null"
  },
      r = [e.QSM, e.CNM],
      n = {
    cN: "value",
    e: ",",
    eW: !0,
    eE: !0,
    c: r,
    k: t
  },
      a = {
    b: "{",
    e: "}",
    c: [{
      cN: "attribute",
      b: '\\s*"',
      e: '"\\s*:\\s*',
      eB: !0,
      eE: !0,
      c: [e.BE],
      i: "\\n",
      starts: n
    }],
    i: "\\S"
  },
      i = {
    b: "\\[",
    e: "\\]",
    c: [e.inherit(n, {
      cN: null
    })],
    i: "\\S"
  };
  return r.splice(r.length, 0, a, i), {
    c: r,
    k: t,
    i: "\\S"
  };
}), hljs.registerLanguage("makefile", function (e) {
  var t = {
    cN: "variable",
    b: /\$\(/,
    e: /\)/,
    c: [e.BE]
  };
  return {
    aliases: ["mk", "mak"],
    c: [e.HCM, {
      b: /^\w+\s*\W*=/,
      rB: !0,
      r: 0,
      starts: {
        cN: "constant",
        e: /\s*\W*=/,
        eE: !0,
        starts: {
          e: /$/,
          r: 0,
          c: [t]
        }
      }
    }, {
      cN: "title",
      b: /^[\w]+:\s*$/
    }, {
      cN: "phony",
      b: /^\.PHONY:/,
      e: /$/,
      k: ".PHONY",
      l: /[\.\w]+/
    }, {
      b: /^\t+/,
      e: /$/,
      r: 0,
      c: [e.QSM, t]
    }]
  };
}), hljs.registerLanguage("xml", function () {
  var e = "[A-Za-z0-9\\._:-]+",
      t = {
    b: /<\?(php)?(?!\w)/,
    e: /\?>/,
    sL: "php",
    subLanguageMode: "continuous"
  },
      r = {
    eW: !0,
    i: /</,
    r: 0,
    c: [t, {
      cN: "attribute",
      b: e,
      r: 0
    }, {
      b: "=",
      r: 0,
      c: [{
        cN: "value",
        c: [t],
        v: [{
          b: /"/,
          e: /"/
        }, {
          b: /'/,
          e: /'/
        }, {
          b: /[^\s\/>]+/
        }]
      }]
    }]
  };
  return {
    aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
    cI: !0,
    c: [{
      cN: "doctype",
      b: "<!DOCTYPE",
      e: ">",
      r: 10,
      c: [{
        b: "\\[",
        e: "\\]"
      }]
    }, {
      cN: "comment",
      b: "<!--",
      e: "-->",
      r: 10
    }, {
      cN: "cdata",
      b: "<\\!\\[CDATA\\[",
      e: "\\]\\]>",
      r: 10
    }, {
      cN: "tag",
      b: "<style(?=\\s|>|$)",
      e: ">",
      k: {
        title: "style"
      },
      c: [r],
      starts: {
        e: "</style>",
        rE: !0,
        sL: "css"
      }
    }, {
      cN: "tag",
      b: "<script(?=\\s|>|$)",
      e: ">",
      k: {
        title: "script"
      },
      c: [r],
      starts: {
        e: "</script>",
        rE: !0,
        sL: "javascript"
      }
    }, t, {
      cN: "pi",
      b: /<\?\w+/,
      e: /\?>/,
      r: 10
    }, {
      cN: "tag",
      b: "</?",
      e: "/?>",
      c: [{
        cN: "title",
        b: /[^ \/><\n\t]+/,
        r: 0
      }, r]
    }]
  };
}), hljs.registerLanguage("markdown", function () {
  return {
    aliases: ["md", "mkdown", "mkd"],
    c: [{
      cN: "header",
      v: [{
        b: "^#{1,6}",
        e: "$"
      }, {
        b: "^.+?\\n[=-]{2,}$"
      }]
    }, {
      b: "<",
      e: ">",
      sL: "xml",
      r: 0
    }, {
      cN: "bullet",
      b: "^([*+-]|(\\d+\\.))\\s+"
    }, {
      cN: "strong",
      b: "[*_]{2}.+?[*_]{2}"
    }, {
      cN: "emphasis",
      v: [{
        b: "\\*.+?\\*"
      }, {
        b: "_.+?_",
        r: 0
      }]
    }, {
      cN: "blockquote",
      b: "^>\\s+",
      e: "$"
    }, {
      cN: "code",
      v: [{
        b: "`.+?`"
      }, {
        b: "^( {4}|	)",
        e: "$",
        r: 0
      }]
    }, {
      cN: "horizontal_rule",
      b: "^[-\\*]{3,}",
      e: "$"
    }, {
      b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
      rB: !0,
      c: [{
        cN: "link_label",
        b: "\\[",
        e: "\\]",
        eB: !0,
        rE: !0,
        r: 0
      }, {
        cN: "link_url",
        b: "\\]\\(",
        e: "\\)",
        eB: !0,
        eE: !0
      }, {
        cN: "link_reference",
        b: "\\]\\[",
        e: "\\]",
        eB: !0,
        eE: !0
      }],
      r: 10
    }, {
      b: "^\\[.+\\]:",
      rB: !0,
      c: [{
        cN: "link_reference",
        b: "\\[",
        e: "\\]:",
        eB: !0,
        eE: !0,
        starts: {
          cN: "link_url",
          e: "$"
        }
      }]
    }]
  };
}), hljs.registerLanguage("nginx", function (e) {
  var t = {
    cN: "variable",
    v: [{
      b: /\$\d+/
    }, {
      b: /\$\{/,
      e: /}/
    }, {
      b: "[\\$\\@]" + e.UIR
    }]
  },
      r = {
    eW: !0,
    l: "[a-z/_]+",
    k: {
      built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
    },
    r: 0,
    i: "=>",
    c: [e.HCM, {
      cN: "string",
      c: [e.BE, t],
      v: [{
        b: /"/,
        e: /"/
      }, {
        b: /'/,
        e: /'/
      }]
    }, {
      cN: "url",
      b: "([a-z]+):/",
      e: "\\s",
      eW: !0,
      eE: !0,
      c: [t]
    }, {
      cN: "regexp",
      c: [e.BE, t],
      v: [{
        b: "\\s\\^",
        e: "\\s|{|;",
        rE: !0
      }, {
        b: "~\\*?\\s+",
        e: "\\s|{|;",
        rE: !0
      }, {
        b: "\\*(\\.[a-z\\-]+)+"
      }, {
        b: "([a-z\\-]+\\.)+\\*"
      }]
    }, {
      cN: "number",
      b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
    }, {
      cN: "number",
      b: "\\b\\d+[kKmMgGdshdwy]*\\b",
      r: 0
    }, t]
  };
  return {
    aliases: ["nginxconf"],
    c: [e.HCM, {
      b: e.UIR + "\\s",
      e: ";|{",
      rB: !0,
      c: [{
        cN: "title",
        b: e.UIR,
        starts: r
      }],
      r: 0
    }],
    i: "[^\\s\\}]"
  };
}), hljs.registerLanguage("objectivec", function (e) {
  var t = {
    keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
    literal: "false true FALSE TRUE nil YES NO NULL",
    built_in: "NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
  },
      r = /[a-zA-Z@][a-zA-Z0-9_]*/,
      n = "@interface @class @protocol @implementation";
  return {
    aliases: ["m", "mm", "objc", "obj-c"],
    k: t,
    l: r,
    i: "</",
    c: [e.CLCM, e.CBCM, e.CNM, e.QSM, {
      cN: "string",
      v: [{
        b: '@"',
        e: '"',
        i: "\\n",
        c: [e.BE]
      }, {
        b: "'",
        e: "[^\\\\]'",
        i: "[^\\\\][^']"
      }]
    }, {
      cN: "preprocessor",
      b: "#",
      e: "$",
      c: [{
        cN: "title",
        v: [{
          b: '"',
          e: '"'
        }, {
          b: "<",
          e: ">"
        }]
      }]
    }, {
      cN: "class",
      b: "(" + n.split(" ").join("|") + ")\\b",
      e: "({|$)",
      eE: !0,
      k: n,
      l: r,
      c: [e.UTM]
    }, {
      cN: "variable",
      b: "\\." + e.UIR,
      r: 0
    }]
  };
}), hljs.registerLanguage("perl", function (e) {
  var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
      r = {
    cN: "subst",
    b: "[$@]\\{",
    e: "\\}",
    k: t
  },
      n = {
    b: "->{",
    e: "}"
  },
      a = {
    cN: "variable",
    v: [{
      b: /\$\d/
    }, {
      b: /[\$\%\@](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/
    }, {
      b: /[\$\%\@][^\s\w{]/,
      r: 0
    }]
  },
      i = {
    cN: "comment",
    b: "^(__END__|__DATA__)",
    e: "\\n$",
    r: 5
  },
      s = [e.BE, r, a],
      c = [a, e.HCM, i, {
    cN: "comment",
    b: "^\\=\\w",
    e: "\\=cut",
    eW: !0
  }, n, {
    cN: "string",
    c: s,
    v: [{
      b: "q[qwxr]?\\s*\\(",
      e: "\\)",
      r: 5
    }, {
      b: "q[qwxr]?\\s*\\[",
      e: "\\]",
      r: 5
    }, {
      b: "q[qwxr]?\\s*\\{",
      e: "\\}",
      r: 5
    }, {
      b: "q[qwxr]?\\s*\\|",
      e: "\\|",
      r: 5
    }, {
      b: "q[qwxr]?\\s*\\<",
      e: "\\>",
      r: 5
    }, {
      b: "qw\\s+q",
      e: "q",
      r: 5
    }, {
      b: "'",
      e: "'",
      c: [e.BE]
    }, {
      b: '"',
      e: '"'
    }, {
      b: "`",
      e: "`",
      c: [e.BE]
    }, {
      b: "{\\w+}",
      c: [],
      r: 0
    }, {
      b: "-?\\w+\\s*\\=\\>",
      c: [],
      r: 0
    }]
  }, {
    cN: "number",
    b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
    r: 0
  }, {
    b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
    k: "split return print reverse grep",
    r: 0,
    c: [e.HCM, i, {
      cN: "regexp",
      b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
      r: 10
    }, {
      cN: "regexp",
      b: "(m|qr)?/",
      e: "/[a-z]*",
      c: [e.BE],
      r: 0
    }]
  }, {
    cN: "sub",
    bK: "sub",
    e: "(\\s*\\(.*?\\))?[;{]",
    r: 5
  }, {
    cN: "operator",
    b: "-\\w\\b",
    r: 0
  }];
  return r.c = c, n.c = c, {
    aliases: ["pl"],
    k: t,
    c: c
  };
}), hljs.registerLanguage("php", function (e) {
  var t = {
    cN: "variable",
    b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
  },
      r = {
    cN: "preprocessor",
    b: /<\?(php)?|\?>/
  },
      n = {
    cN: "string",
    c: [e.BE, r],
    v: [{
      b: 'b"',
      e: '"'
    }, {
      b: "b'",
      e: "'"
    }, e.inherit(e.ASM, {
      i: null
    }), e.inherit(e.QSM, {
      i: null
    })]
  },
      a = {
    v: [e.BNM, e.CNM]
  };
  return {
    aliases: ["php3", "php4", "php5", "php6"],
    cI: !0,
    k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
    c: [e.CLCM, e.HCM, {
      cN: "comment",
      b: "/\\*",
      e: "\\*/",
      c: [{
        cN: "phpdoc",
        b: "\\s@[A-Za-z]+"
      }, r]
    }, {
      cN: "comment",
      b: "__halt_compiler.+?;",
      eW: !0,
      k: "__halt_compiler",
      l: e.UIR
    }, {
      cN: "string",
      b: "<<<['\"]?\\w+['\"]?$",
      e: "^\\w+;",
      c: [e.BE]
    }, r, t, {
      b: /->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
    }, {
      cN: "function",
      bK: "function",
      e: /[;{]/,
      eE: !0,
      i: "\\$|\\[|%",
      c: [e.UTM, {
        cN: "params",
        b: "\\(",
        e: "\\)",
        c: ["self", t, e.CBCM, n, a]
      }]
    }, {
      cN: "class",
      bK: "class interface",
      e: "{",
      eE: !0,
      i: /[:\(\$"]/,
      c: [{
        bK: "extends implements"
      }, e.UTM]
    }, {
      bK: "namespace",
      e: ";",
      i: /[\.']/,
      c: [e.UTM]
    }, {
      bK: "use",
      e: ";",
      c: [e.UTM]
    }, {
      b: "=>"
    }, n, a]
  };
}), hljs.registerLanguage("python", function (e) {
  var t = {
    cN: "prompt",
    b: /^(>>>|\.\.\.) /
  },
      r = {
    cN: "string",
    c: [e.BE],
    v: [{
      b: /(u|b)?r?'''/,
      e: /'''/,
      c: [t],
      r: 10
    }, {
      b: /(u|b)?r?"""/,
      e: /"""/,
      c: [t],
      r: 10
    }, {
      b: /(u|r|ur)'/,
      e: /'/,
      r: 10
    }, {
      b: /(u|r|ur)"/,
      e: /"/,
      r: 10
    }, {
      b: /(b|br)'/,
      e: /'/
    }, {
      b: /(b|br)"/,
      e: /"/
    }, e.ASM, e.QSM]
  },
      n = {
    cN: "number",
    r: 0,
    v: [{
      b: e.BNR + "[lLjJ]?"
    }, {
      b: "\\b(0o[0-7]+)[lLjJ]?"
    }, {
      b: e.CNR + "[lLjJ]?"
    }]
  },
      a = {
    cN: "params",
    b: /\(/,
    e: /\)/,
    c: ["self", t, n, r]
  };
  return {
    aliases: ["py", "gyp"],
    k: {
      keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
      built_in: "Ellipsis NotImplemented"
    },
    i: /(<\/|->|\?)/,
    c: [t, n, r, e.HCM, {
      v: [{
        cN: "function",
        bK: "def",
        r: 10
      }, {
        cN: "class",
        bK: "class"
      }],
      e: /:/,
      i: /[${=;\n]/,
      c: [e.UTM, a]
    }, {
      cN: "decorator",
      b: /@/,
      e: /$/
    }, {
      b: /\b(print|exec)\(/
    }]
  };
}), hljs.registerLanguage("ruby", function (e) {
  var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
      r = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
      n = {
    cN: "yardoctag",
    b: "@[A-Za-z]+"
  },
      a = {
    cN: "value",
    b: "#<",
    e: ">"
  },
      i = {
    cN: "comment",
    v: [{
      b: "#",
      e: "$",
      c: [n]
    }, {
      b: "^\\=begin",
      e: "^\\=end",
      c: [n],
      r: 10
    }, {
      b: "^__END__",
      e: "\\n$"
    }]
  },
      s = {
    cN: "subst",
    b: "#\\{",
    e: "}",
    k: r
  },
      c = {
    cN: "string",
    c: [e.BE, s],
    v: [{
      b: /'/,
      e: /'/
    }, {
      b: /"/,
      e: /"/
    }, {
      b: /`/,
      e: /`/
    }, {
      b: "%[qQwWx]?\\(",
      e: "\\)"
    }, {
      b: "%[qQwWx]?\\[",
      e: "\\]"
    }, {
      b: "%[qQwWx]?{",
      e: "}"
    }, {
      b: "%[qQwWx]?<",
      e: ">"
    }, {
      b: "%[qQwWx]?/",
      e: "/"
    }, {
      b: "%[qQwWx]?%",
      e: "%"
    }, {
      b: "%[qQwWx]?-",
      e: "-"
    }, {
      b: "%[qQwWx]?\\|",
      e: "\\|"
    }, {
      b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
    }]
  },
      o = {
    cN: "params",
    b: "\\(",
    e: "\\)",
    k: r
  },
      l = [c, a, i, {
    cN: "class",
    bK: "class module",
    e: "$|;",
    i: /=/,
    c: [e.inherit(e.TM, {
      b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
    }), {
      cN: "inheritance",
      b: "<\\s*",
      c: [{
        cN: "parent",
        b: "(" + e.IR + "::)?" + e.IR
      }]
    }, i]
  }, {
    cN: "function",
    bK: "def",
    e: " |$|;",
    r: 0,
    c: [e.inherit(e.TM, {
      b: t
    }), o, i]
  }, {
    cN: "constant",
    b: "(::)?(\\b[A-Z]\\w*(::)?)+",
    r: 0
  }, {
    cN: "symbol",
    b: e.UIR + "(\\!|\\?)?:",
    r: 0
  }, {
    cN: "symbol",
    b: ":",
    c: [c, {
      b: t
    }],
    r: 0
  }, {
    cN: "number",
    b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
    r: 0
  }, {
    cN: "variable",
    b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
  }, {
    b: "(" + e.RSR + ")\\s*",
    c: [a, i, {
      cN: "regexp",
      c: [e.BE, s],
      i: /\n/,
      v: [{
        b: "/",
        e: "/[a-z]*"
      }, {
        b: "%r{",
        e: "}[a-z]*"
      }, {
        b: "%r\\(",
        e: "\\)[a-z]*"
      }, {
        b: "%r!",
        e: "![a-z]*"
      }, {
        b: "%r\\[",
        e: "\\][a-z]*"
      }]
    }],
    r: 0
  }];
  s.c = l, o.c = l;
  var u = "[>?]>",
      d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
      b = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
      p = [{
    b: /^\s*=>/,
    cN: "status",
    starts: {
      e: "$",
      c: l
    }
  }, {
    cN: "prompt",
    b: "^(" + u + "|" + d + "|" + b + ")",
    starts: {
      e: "$",
      c: l
    }
  }];
  return {
    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
    k: r,
    c: [i].concat(p).concat(l)
  };
}), hljs.registerLanguage("sql", function (e) {
  var t = {
    cN: "comment",
    b: "--",
    e: "$"
  };
  return {
    cI: !0,
    i: /[<>]/,
    c: [{
      cN: "operator",
      bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",
      e: /;/,
      eW: !0,
      k: {
        keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
        literal: "true false null",
        built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
      },
      c: [{
        cN: "string",
        b: "'",
        e: "'",
        c: [e.BE, {
          b: "''"
        }]
      }, {
        cN: "string",
        b: '"',
        e: '"',
        c: [e.BE, {
          b: '""'
        }]
      }, {
        cN: "string",
        b: "`",
        e: "`",
        c: [e.BE]
      }, e.CNM, e.CBCM, t]
    }, e.CBCM, t]
  };
});

/***/ }),

/***/ "./resources/js/edit/highlight2.js":
/*!*****************************************!*\
  !*** ./resources/js/edit/highlight2.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * highlight.js
 * @Author integ@segmentfault.com
 * $wrap为空时对所有pre标签执行高亮
 **/
//define(['jquery', 'highlightjs', 'ZeroClipboard', 'math'],
//function($, hljs, ZeroClipboard, math){
$(function () {
  'use strict';

  window.highLight = function ($wrap) {
    //highlight
    // detect highlight.js
    if ('undefined' === typeof hljs) {
      return;
    } // 自动载入highlight


    var hlNames = {
      actionscript: /^as[1-3]$/i,
      cmake: /^(make|makefile)$/i,
      cs: /^csharp$/i,
      css: /^css[1-3]$/i,
      delphi: /^pascal$/i,
      javascript: /^js$/i,
      markdown: /^md$/i,
      objectivec: /^(oc|objective-c)$/i,
      php: /^php[1-6]$/i,
      sql: /^mysql$/i,
      xml: /^(html|html5|xhtml)$/i
    };
    var hlLangs = hljs.listLanguages();

    function myHighLight($this) {
      var t = $this,
          children = t.children(),
          highlighted = false;

      if (children.length > 0 && 'code' === children.get(0).nodeName.toLowerCase()) {
        var className = children.attr('class');

        if (!!className) {
          var classes = className.split(/\s+/);

          for (var i = 0; i < classes.length; i++) {
            if (0 === classes[i].indexOf('lang-')) {
              var lang = classes[i].substring(5).toLowerCase(),
                  finalLang;

              if (hlLangs[lang]) {
                finalLang = lang;
              } else {
                for (var l in hlNames) {
                  if (lang.match(hlNames[l])) {
                    finalLang = l;
                  }
                }
              }

              if (!!finalLang) {
                var result = hljs.highlight(finalLang, children.text(), true);
                children.html(result.value);
                highlighted = true;
                break;
              }
            }
          }
        }
      }

      if (!highlighted) {
        var html = t.html();
        t.html(html.replace(/<\/?[a-z]+[^>]*>/ig, ''));
        hljs.highlightBlock($this[0], '', false);
      } //添加行号


      t.wrap('<table class="widget-highlight"><tbody><tr><td class="widget-highlight--code"></td></tr></tbody></table>'); //包上table

      var _$wrap = t.parents('.widget-highlight tr'); // tr


      _$wrap.prepend('<td class="widget-highlight--line"></td>'); //插入行号的td


      var _totalLine = t.height() / 15;

      var _$lines = _$wrap.find('.widget-highlight--line'); // var _$code = _$wrap.find('.widget-highlight--code');


      var _width = t.parents('.widget-highlight').parent().width();

      if (_totalLine < 10) {
        _$lines.css('width', '16px'); // _$code.css('width', _width - 16 + 'px');


        t.css('width', _width - 32 + 'px');
      } else if (_totalLine < 100) {
        _$lines.css('width', '32px'); // _$code.css('width', _width - 32 + 'px');


        t.css('width', _width - 40 + 'px');
      } else {
        _$lines.css('width', '48px'); // _$code.css('width', _width - 48 + 'px');


        t.css('width', _width - 51 + 'px');
      } // 黑魔法 dangerous


      if (_totalLine < 17) {
        _totalLine = t.height() / 15;
      } else if (_totalLine < 27) {
        _totalLine = (t.height() - 10) / 15;
      } else if (_totalLine < 55) {
        _totalLine = (t.height() - 20) / 15;
      } else if (_totalLine < 55) {
        _totalLine = (t.height() - 40) / 15;
      } else {
        _totalLine = (t.height() + 15) / 16;
      }

      for (var line = 1; line < _totalLine; line++) {
        var _h = '<p>' + line + '</p>';

        _$lines.append(_h);
      }

      _$lines.attr('unselectable', 'on') //禁止选中行号
      .css('user-select', 'none').on('selectstart', false); // 添加copy
      // var _$parent = _$wrap.parents('.widget-highlight');


      if (navigator.plugins['Shockwave Flash'] || new ActiveXObject('ShockwaveFlash.shockwaveFlash')) {
        var _$clip = $('<span class="widget-clipboard hidden"></span>');

        t.prepend(_$clip);
        ZeroClipboard.config({
          swfPath: '//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.6/ZeroClipboard.swf'
        });

        var _client = new ZeroClipboard(_$clip);

        var _e = $('#global-zeroclipboard-html-bridge');

        _client.on('load', function () {
          _e.data('placement', 'top').attr('title', 'Copy to clipboard').tooltip();
        });

        _client.on('copy', function (event) {
          var clipboard = event.clipboardData;
          clipboard.setData('text/plain', t.text());
          clipboard.setData('text/html', t.html());
          clipboard.setData('application/rtf', t.html());
        });

        _client.on('error', function () {
          _e.attr('title', 'Flash required').tooltip('fixTitle').tooltip('show');
        });

        _client.on('aftercopy', function () {
          _e.attr('title', 'Copied!').tooltip('fixTitle').tooltip('show').attr('title', 'Copy to clipboard').tooltip('fixTitle');
        });

        t.hover(function () {
          _$clip.removeClass('hidden');
        });
      }
    } // mathJax


    var _hasMath = null;

    if (!$wrap) {
      _hasMath = $('.fmt').text().match(/\$\$/);

      if (_hasMath && _hasMath.length) {
        math();
      }

      $('pre').each(function () {
        if (!this.parentNode || $(this).parents('.CodeMirror-scroll').length) {
          //codemirror不参加
          return;
        } else {
          myHighLight($(this));
        }
      });
    } else {
      _hasMath = $wrap.text().match(/\$\$/);

      if (_hasMath && _hasMath.length) {
        math($wrap);
      }

      $wrap.find('pre').each(function () {
        myHighLight($(this));
      });
    }
  };
});

/***/ }),

/***/ "./resources/js/edit/marked.js":
/*!*************************************!*\
  !*** ./resources/js/edit/marked.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */
(function () {
  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: noop,
    hr: /^( *[-*_]){3,} *(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
    nptable: noop,
    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
    blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
    list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
    table: noop,
    paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
    text: /^[^\n]+/
  };
  block.bullet = /(?:[*+-]|\d+\.)/;
  block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
  block.item = replace(block.item, "gm")(/bull/g, block.bullet)();
  block.list = replace(block.list)(/bull/g, block.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + block.def.source + ")")();
  block.blockquote = replace(block.blockquote)("def", block.def)();
  block._tag = "(?!(?:" + "a|em|strong|small|s|cite|q|dfn|abbr|data|time|code" + "|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo" + "|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";
  block.html = replace(block.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, block._tag)();
  block.paragraph = replace(block.paragraph)("hr", block.hr)("heading", block.heading)("lheading", block.lheading)("blockquote", block.blockquote)("tag", "<" + block._tag)("def", block.def)();
  block.normal = merge({}, block);
  block.gfm = merge({}, block.normal, {
    fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
    paragraph: /^/
  });
  block.gfm.paragraph = replace(block.paragraph)("(?!", "(?!" + block.gfm.fences.source.replace("\\1", "\\2") + "|" + block.list.source.replace("\\1", "\\3") + "|")();
  block.tables = merge({}, block.gfm, {
    nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
    table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
  });

  function Lexer(options) {
    this.tokens = [];
    this.tokens.links = {};
    this.options = options || marked.defaults;
    this.rules = block.normal;

    if (this.options.gfm) {
      if (this.options.tables) {
        this.rules = block.tables;
      } else {
        this.rules = block.gfm;
      }
    }
  }

  Lexer.rules = block;

  Lexer.lex = function (src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  };

  Lexer.prototype.lex = function (src) {
    src = src.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n");
    return this.token(src, true);
  };

  Lexer.prototype.token = function (src, top, bq) {
    var src = src.replace(/^ +$/gm, ""),
        next,
        loose,
        cap,
        bull,
        b,
        item,
        space,
        i,
        l;

    while (src) {
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);

        if (cap[0].length > 1) {
          this.tokens.push({
            type: "space"
          });
        }
      }

      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        cap = cap[0].replace(/^ {4}/gm, "");
        this.tokens.push({
          type: "code",
          text: !this.options.pedantic ? cap.replace(/\n+$/, "") : cap
        });
        continue;
      }

      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "code",
          lang: cap[2],
          text: cap[3]
        });
        continue;
      }

      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "heading",
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      }

      if (top && (cap = this.rules.nptable.exec(src))) {
        src = src.substring(cap[0].length);
        item = {
          type: "table",
          header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          cells: cap[3].replace(/\n$/, "").split("\n")
        };

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].split(/ *\| */);
        }

        this.tokens.push(item);
        continue;
      }

      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "heading",
          depth: cap[2] === "=" ? 1 : 2,
          text: cap[1]
        });
        continue;
      }

      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "hr"
        });
        continue;
      }

      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "blockquote_start"
        });
        cap = cap[0].replace(/^ *> ?/gm, "");
        this.token(cap, top, true);
        this.tokens.push({
          type: "blockquote_end"
        });
        continue;
      }

      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];
        this.tokens.push({
          type: "list_start",
          ordered: bull.length > 1
        });
        cap = cap[0].match(this.rules.item);
        next = false;
        l = cap.length;
        i = 0;

        for (; i < l; i++) {
          item = cap[i];
          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) +/, "");

          if (~item.indexOf("\n ")) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp("^ {1," + space + "}", "gm"), "") : item.replace(/^ {1,4}/gm, "");
          }

          if (this.options.smartLists && i !== l - 1) {
            b = block.bullet.exec(cap[i + 1])[0];

            if (bull !== b && !(bull.length > 1 && b.length > 1)) {
              src = cap.slice(i + 1).join("\n") + src;
              i = l - 1;
            }
          }

          loose = next || /\n\n(?!\s*$)/.test(item);

          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === "\n";
            if (!loose) loose = next;
          }

          this.tokens.push({
            type: loose ? "loose_item_start" : "list_item_start"
          });
          this.token(item, false, bq);
          this.tokens.push({
            type: "list_item_end"
          });
        }

        this.tokens.push({
          type: "list_end"
        });
        continue;
      }

      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize ? "paragraph" : "html",
          pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
          text: cap[0]
        });
        continue;
      }

      if (!bq && top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.links[cap[1].toLowerCase()] = {
          href: cap[2],
          title: cap[3]
        };
        continue;
      }

      if (top && (cap = this.rules.table.exec(src))) {
        src = src.substring(cap[0].length);
        item = {
          type: "table",
          header: cap[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
          align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          cells: cap[3].replace(/(?: *\| *)?\n$/, "").split("\n")
        };

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = item.cells[i].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
        }

        this.tokens.push(item);
        continue;
      }

      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "paragraph",
          text: cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1]
        });
        continue;
      }

      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: "text",
          text: cap[0]
        });
        continue;
      }

      if (src) {
        throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
      }
    }

    return this.tokens;
  };

  var inline = {
    escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
    autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
    url: noop,
    tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
    link: /^!?\[(inside)\]\(href\)/,
    reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
    nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
    strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
    em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
    code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    br: /^ {2,}\n(?!\s*$)/,
    del: noop,
    text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
  };
  inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
  inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
  inline.link = replace(inline.link)("inside", inline._inside)("href", inline._href)();
  inline.reflink = replace(inline.reflink)("inside", inline._inside)();
  inline.normal = merge({}, inline);
  inline.pedantic = merge({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
  });
  inline.gfm = merge({}, inline.normal, {
    escape: replace(inline.escape)("])", "~|])")(),
    url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    del: /^~~(?=\S)([\s\S]*?\S)~~/,
    text: replace(inline.text)("]|", "~]|")("|", "|https?://|")()
  });
  inline.breaks = merge({}, inline.gfm, {
    br: replace(inline.br)("{2,}", "*")(),
    text: replace(inline.gfm.text)("{2,}", "*")()
  });

  function InlineLexer(links, options) {
    this.options = options || marked.defaults;
    this.links = links;
    this.rules = inline.normal;
    this.renderer = this.options.renderer || new Renderer();
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error("Tokens array requires a `links` property.");
    }

    if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    } else if (this.options.pedantic) {
      this.rules = inline.pedantic;
    }
  }

  InlineLexer.rules = inline;

  InlineLexer.output = function (src, links, options) {
    var inline = new InlineLexer(links, options);
    return inline.output(src);
  };

  InlineLexer.prototype.output = function (src) {
    var out = "",
        link,
        text,
        href,
        cap;

    while (src) {
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += cap[1];
        continue;
      }

      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);

        if (cap[2] === "@") {
          text = cap[1].charAt(6) === ":" ? this.mangle(cap[1].substring(7)) : this.mangle(cap[1]);
          href = this.mangle("mailto:") + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }

        out += this.renderer.link(href, null, text);
        continue;
      }

      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        src = src.substring(cap[0].length);
        text = escape(cap[1]);
        href = text;
        out += this.renderer.link(href, null, text);
        continue;
      }

      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }

        src = src.substring(cap[0].length);
        out += this.options.sanitize ? escape(cap[0]) : cap[0];
        continue;
      }

      if (cap = this.rules.link.exec(src)) {
        src = src.substring(cap[0].length);
        this.inLink = true;
        out += this.outputLink(cap, {
          href: cap[2],
          title: cap[3]
        });
        this.inLink = false;
        continue;
      }

      if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, " ");
        link = this.links[link.toLowerCase()];

        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }

        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      }

      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[2] || cap[1]));
        continue;
      }

      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[2] || cap[1]));
        continue;
      }

      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape(cap[2], true));
        continue;
      }

      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      }

      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      }

      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);
        out += escape(this.smartypants(cap[0]));
        continue;
      }

      if (src) {
        throw new Error("Infinite loop on byte: " + src.charCodeAt(0));
      }
    }

    return out;
  };

  InlineLexer.prototype.outputLink = function (cap, link) {
    var href = escape(link.href),
        title = link.title ? escape(link.title) : null;
    return cap[0].charAt(0) !== "!" ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
  };

  InlineLexer.prototype.smartypants = function (text) {
    if (!this.options.smartypants) return text;
    return text.replace(/--/g, "—").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
  };

  InlineLexer.prototype.mangle = function (text) {
    var out = "",
        l = text.length,
        i = 0,
        ch;

    for (; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > .5) {
        ch = "x" + ch.toString(16);
      }

      out += "&#" + ch + ";";
    }

    return out;
  };

  function Renderer(options) {
    this.options = options || {};
  }

  Renderer.prototype.code = function (code, lang, escaped) {
    if (this.options.highlight) {
      var out = this.options.highlight(code, lang);

      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "\n</code></pre>";
    }

    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + "\n</code></pre>\n";
  };

  Renderer.prototype.blockquote = function (quote) {
    return "<blockquote>\n" + quote + "</blockquote>\n";
  };

  Renderer.prototype.html = function (html) {
    return html;
  };

  Renderer.prototype.heading = function (text, level, raw) {
    return "<h" + level + ' id="' + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, "-") + '">' + text + "</h" + level + ">\n";
  };

  Renderer.prototype.hr = function () {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  };

  Renderer.prototype.list = function (body, ordered) {
    var type = ordered ? "ol" : "ul";
    return "<" + type + ">\n" + body + "</" + type + ">\n";
  };

  Renderer.prototype.listitem = function (text) {
    return "<li>" + text + "</li>\n";
  };

  Renderer.prototype.paragraph = function (text) {
    return "<p>" + text + "</p>\n";
  };

  Renderer.prototype.table = function (header, body) {
    return "<table>\n" + "<thead>\n" + header + "</thead>\n" + "<tbody>\n" + body + "</tbody>\n" + "</table>\n";
  };

  Renderer.prototype.tablerow = function (content) {
    return "<tr>\n" + content + "</tr>\n";
  };

  Renderer.prototype.tablecell = function (content, flags) {
    var type = flags.header ? "th" : "td";
    var tag = flags.align ? "<" + type + ' style="text-align:' + flags.align + '">' : "<" + type + ">";
    return tag + content + "</" + type + ">\n";
  };

  Renderer.prototype.strong = function (text) {
    return "<strong>" + text + "</strong>";
  };

  Renderer.prototype.em = function (text) {
    return "<em>" + text + "</em>";
  };

  Renderer.prototype.codespan = function (text) {
    return "<code>" + text + "</code>";
  };

  Renderer.prototype.br = function () {
    return this.options.xhtml ? "<br/>" : "<br>";
  };

  Renderer.prototype.del = function (text) {
    return "<del>" + text + "</del>";
  };

  Renderer.prototype.link = function (href, title, text) {
    if (this.options.sanitize) {
      try {
        var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, "").toLowerCase();
      } catch (e) {
        return "";
      }

      if (prot.indexOf("javascript:") === 0) {
        return "";
      }
    }

    var out = '<a href="' + href + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += ">" + text + "</a>";
    return out;
  };

  Renderer.prototype.image = function (href, title, text) {
    var out = '<img src="' + href + '" alt="' + text + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += this.options.xhtml ? "/>" : ">";
    return out;
  };

  function Parser(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || marked.defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
  }

  Parser.parse = function (src, options, renderer) {
    var parser = new Parser(options, renderer);
    return parser.parse(src);
  };

  Parser.prototype.parse = function (src) {
    this.inline = new InlineLexer(src.links, this.options, this.renderer);
    this.tokens = src.reverse();
    var out = "";

    while (this.next()) {
      out += this.tok();
    }

    return out;
  };

  Parser.prototype.next = function () {
    return this.token = this.tokens.pop();
  };

  Parser.prototype.peek = function () {
    return this.tokens[this.tokens.length - 1] || 0;
  };

  Parser.prototype.parseText = function () {
    var body = this.token.text;

    while (this.peek().type === "text") {
      body += "\n" + this.next().text;
    }

    return this.inline.output(body);
  };

  Parser.prototype.tok = function () {
    switch (this.token.type) {
      case "space":
        {
          return "";
        }

      case "hr":
        {
          return this.renderer.hr();
        }

      case "heading":
        {
          return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
        }

      case "code":
        {
          return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
        }

      case "table":
        {
          var header = "",
              body = "",
              i,
              row,
              cell,
              flags,
              j;
          cell = "";

          for (i = 0; i < this.token.header.length; i++) {
            flags = {
              header: true,
              align: this.token.align[i]
            };
            cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
              header: true,
              align: this.token.align[i]
            });
          }

          header += this.renderer.tablerow(cell);

          for (i = 0; i < this.token.cells.length; i++) {
            row = this.token.cells[i];
            cell = "";

            for (j = 0; j < row.length; j++) {
              cell += this.renderer.tablecell(this.inline.output(row[j]), {
                header: false,
                align: this.token.align[j]
              });
            }

            body += this.renderer.tablerow(cell);
          }

          return this.renderer.table(header, body);
        }

      case "blockquote_start":
        {
          var body = "";

          while (this.next().type !== "blockquote_end") {
            body += this.tok();
          }

          return this.renderer.blockquote(body);
        }

      case "list_start":
        {
          var body = "",
              ordered = this.token.ordered;

          while (this.next().type !== "list_end") {
            body += this.tok();
          }

          return this.renderer.list(body, ordered);
        }

      case "list_item_start":
        {
          var body = "";

          while (this.next().type !== "list_item_end") {
            body += this.token.type === "text" ? this.parseText() : this.tok();
          }

          return this.renderer.listitem(body);
        }

      case "loose_item_start":
        {
          var body = "";

          while (this.next().type !== "list_item_end") {
            body += this.tok();
          }

          return this.renderer.listitem(body);
        }

      case "html":
        {
          var html = !this.token.pre && !this.options.pedantic ? this.inline.output(this.token.text) : this.token.text;
          return this.renderer.html(html);
        }

      case "paragraph":
        {
          return this.renderer.paragraph(this.inline.output(this.token.text));
        }

      case "text":
        {
          return this.renderer.paragraph(this.parseText());
        }
    }
  };

  function escape(html, encode) {
    return html.replace(!encode ? /&(?!#?\w+;)/g : /&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function unescape(html) {
    return html.replace(/&([#\w]+);/g, function (_, n) {
      n = n.toLowerCase();
      if (n === "colon") return ":";

      if (n.charAt(0) === "#") {
        return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return "";
    });
  }

  function replace(regex, opt) {
    regex = regex.source;
    opt = opt || "";
    return function self(name, val) {
      if (!name) return new RegExp(regex, opt);
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, "$1");
      regex = regex.replace(name, val);
      return self;
    };
  }

  function noop() {}

  noop.exec = noop;

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function marked(src, opt, callback) {
    if (callback || typeof opt === "function") {
      if (!callback) {
        callback = opt;
        opt = null;
      }

      opt = merge({}, marked.defaults, opt || {});
      var highlight = opt.highlight,
          tokens,
          pending,
          i = 0;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      pending = tokens.length;

      var done = function done() {
        var out, err;

        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!pending) return done();

      for (; i < tokens.length; i++) {
        (function (token) {
          if (token.type !== "code") {
            return --pending || done();
          }

          return highlight(token.text, token.lang, function (err, code) {
            if (code == null || code === token.text) {
              return --pending || done();
            }

            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }

      return;
    }

    try {
      if (opt) opt = merge({}, marked.defaults, opt);
      return Parser.parse(Lexer.lex(src, opt), opt);
    } catch (e) {
      e.message += "\nPlease report this to https://github.com/chjj/marked.";

      if ((opt || marked.defaults).silent) {
        return "<p>An error occured:</p><pre>" + escape(e.message + "", true) + "</pre>";
      }

      throw e;
    }
  }

  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    return marked;
  };

  marked.defaults = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: false,
    silent: false,
    highlight: null,
    langPrefix: "lang-",
    smartypants: false,
    headerPrefix: "",
    renderer: new Renderer(),
    xhtml: false
  };
  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.InlineLexer = InlineLexer;
  marked.inlineLexer = InlineLexer.output;
  marked.parse = marked;

  if (( false ? undefined : _typeof(exports)) === "object") {
    module.exports = marked;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return marked;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}).call(function () {
  return this || (typeof window !== "undefined" ? window : global);
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/edit/modal.js":
/*!************************************!*\
  !*** ./resources/js/edit/modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function temp(template, data) {
  var str = template || ''; // Convert the template into string

  $.each(data, function (key, val) {
    var _type = _typeof(val),
        re = new RegExp('{{\\s*' + key + '\\s*}}', 'g');

    if (_type === 'object' && val !== null) {
      $.each(val, function (k, v) {
        var r = new RegExp('{{\\s*' + key + '.' + k + '\\s*}}', 'g');
        str = str.replace(r, v);
      });
    } else {
      str = str.replace(re, val);
    }
  });
  return str;
}

;

function sfModal(option) {
  if (_typeof(option) !== 'object') {
    if (option === 'hide') {
      $('.sfmodal').modal('hide');
      return;
    } else if (option === 'toggle') {
      $('.sfmodal').modal('toggle');
      return;
    } else {
      option = {
        content: option,
        hideDone: true
      };
    }
  }

  var OPT = $.extend({
    hideTitle: false,
    title: '警告：前方高能！',
    content: '玩脱了',
    wrapper: null,
    //编辑器全屏时不能显示modal
    $content: null,
    hideClose: false,
    closeText: '取消',
    // closeFn : function() {},
    hideDone: false,
    doneText: '确认',
    doneFn: function doneFn() {
      $('.sfmodal').modal('hide');
    },
    show: function show() {},
    // 不明原因shown不触发(这个问题不知道这样解决是不是正确的，看下面×处)
    shown: function shown() {},
    hide: function hide() {},
    hidden: function hidden() {},
    loaded: function loaded() {}
  }, option);
  var dom = '<div class="sfmodal modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">\
  <div class="modal-dialog">\
    <div class="modal-content">\
      ' + (OPT.hideTitle ? '' : '<div class="modal-header">\
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\
        <h4 class="modal-title">{{title}}</h4>\
      </div>') + '<div class="modal-body">\
        <p class="sfModal-content">\
          </div>\
          <div class="modal-footer">' + (OPT.hideClose ? '' : '<button type="button" class="btn btn-default" data-dismiss="modal">{{closeText}}</button>') + (OPT.hideDone ? '' : '<button type="button" class="btn btn-primary done-btn">{{doneText}}</button>') + '</div>\
        </div>\
      </div>\
    </div>'; // 删掉已经存在的modal

  if ($('.sfmodal').length > 0) {
    $('.sfmodal').remove();
    $('.modal-backdrop').remove();
  } // 有$wrap时插到$wrap里面


  if (OPT.wrapper) {
    $(OPT.wrapper).append(temp(dom, OPT));
    $(OPT.wrapper).append('<div class="modal-backdrop in"></div>');
  } else {
    $('body').append(temp(dom, OPT));
  }

  if (OPT.$content) {
    // 优先使用$content
    $('.sfmodal .sfModal-content').append(OPT.$content);
  } else {
    $('.sfmodal .sfModal-content').html(OPT.content);
  } //× 文档上面写的是.modal('show')会在触发shown.bs.modal之前返回
  //所以我直接在这一句绑定事件,shown就有效果了
  //  参考 http://v3.bootcss.com/javascript/#modalshow


  $('.sfmodal').on('modal', OPT.shown).on('modal', OPT.show).on('modal', function (e) {
    OPT.hide(e);

    if (OPT.wrapper) {
      $('.modal-backdrop').remove();
    }
  }).on('modal', OPT.hidden).on('modal', OPT.loaded).modal({
    keyboard: true,
    show: true
  }); // $('.sfmodal')
  //     .on('shown.bs.modal' , OPT.shown)
  //     .on('show.bs.modal'  , OPT.show)
  //     .on('hide.bs.modal'  , function(e) {
  //         OPT.hide(e);
  //         if(OPT.wrapper) {
  //             $('.modal-backdrop').remove();
  //         }
  //     })
  //     .on('hidden.bs.modal', OPT.hidden)
  //     .on('loaded.bs.modal', OPT.loaded)
  //     .modal('show');     // 一定要先绑事件，然后再show

  $('.sfmodal .done-btn').click(function (e) {
    OPT.doneFn(e);

    if (OPT.wrapper) {
      $('.modal-backdrop').remove();
    }
  });
}

;

/***/ }),

/***/ "./resources/js/home_editor.js":
/*!*************************************!*\
  !*** ./resources/js/home_editor.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./edit/highlight */ "./resources/js/edit/highlight.js");

__webpack_require__(/*! ./edit/bootstrap3 */ "./resources/js/edit/bootstrap3.js");

__webpack_require__(/*! ./edit/marked */ "./resources/js/edit/marked.js");

__webpack_require__(/*! ./edit/codemirror */ "./resources/js/edit/codemirror.js");

__webpack_require__(/*! ./edit/ZeroClipboard */ "./resources/js/edit/ZeroClipboard.js");

__webpack_require__(/*! ./edit/highlight2 */ "./resources/js/edit/highlight2.js");

__webpack_require__(/*! ./edit/modal */ "./resources/js/edit/modal.js");

__webpack_require__(/*! ./edit/MIDI */ "./resources/js/edit/MIDI.js");

__webpack_require__(/*! ./edit/fileupload */ "./resources/js/edit/fileupload.js");

__webpack_require__(/*! ./edit/bacheditor */ "./resources/js/edit/bacheditor.js");

__webpack_require__(/*! ./edit/bootstrap3-typeahead */ "./resources/js/edit/bootstrap3-typeahead.js");

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./resources/js/home_editor.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\phpStudy\PHPTutorial\WWW\lijianguo\resources\js\home_editor.js */"./resources/js/home_editor.js");


/***/ })

/******/ });
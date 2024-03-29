/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import Proxy = require( './../../ctor' );

/**
* Interface describing the `proxy` namespace.
*/
interface Namespace {
	/**
	* Returns a proxied object.
	*
	* @param target - target object to wrap
	* @param handlers - object whose properties are functions defining proxy behavior
	* @returns proxied object
	*
	* @example
	* function get( obj, prop ) {
	*     return obj[ prop ] * 2.0;
	* }
	*
	* var handlers = {
	*     'get': get
	* };
	*
	* var p = new ns.Proxy( {}, handlers );
	*
	* p.a = 3.14;
	*
	* var x = p.a;
	* // returns 6.28
	*/
	Proxy: typeof Proxy;
}

/**
* Proxy.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;

/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

'use strict';

// MODULES //

var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var buffer = require( '@stdlib/ndarray-base-buffer' );
var format = require( '@stdlib/string-format' );
var ndarray = require( '@stdlib/ndarray-base-ctor' );
var numel = require( '@stdlib/ndarray-base-numel' );


// MAIN //

/**
* Creates a zero-filled ndarray having a specified shape and data type.
*
* @param {string} dtype - numeric data type
* @param {NonNegativeIntegerArray} shape - array shape
* @param {string} order - array order
* @throws {TypeError} first argument must be a recognized data type
* @returns {ndarray} ndarray
*
* @example
* var arr = zeros( 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var sh = arr.shape;
* // returns [ 2, 2 ]
*
* var dt = arr.dtype;
* // returns 'float32'
*/
function zeros( dtype, shape, order ) {
	var ndims;
	var buf;
	var len;
	var st;

	ndims = shape.length;
	if ( ndims > 0 ) {
		len = numel( shape );
		st = shape2strides( shape, order );
	} else {
		// For 0-dimensional arrays, the buffer should contain a single element...
		len = 1;
		st = [ 0 ];
	}
	buf = buffer( dtype, len );
	if ( buf === null ) {
		throw new TypeError( format( 'invalid argument. First argument must be a recognized data type. Value: `%s`.', dtype ) );
	}

	return new ndarray( dtype, buf, shape, st, strides2offset( shape, st ), order ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = zeros;

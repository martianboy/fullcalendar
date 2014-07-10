/*!
 * <%= meta.title %> v<%= meta.version %>
 * Docs & License: <%= meta.homepage %>
 * (c) <%= meta.copyright %>
 */

(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'jquery', 'moment-jalaali' ], factory);
	}
	else {
		factory(jQuery, moment);
	}
})(function($, moment) {

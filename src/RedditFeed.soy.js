/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from RedditFeed.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RedditFeed.
 * @public
 */

goog.module('RedditFeed.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    ie_open('h1');
      itext('/r/javascript');
    ie_close('h1');
    $controls(opt_data, null, opt_ijData);
    if (opt_data.error) {
      $error(opt_data, null, opt_ijData);
    } else {
      $feed(opt_data, null, opt_ijData);
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'RedditFeed.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $error(opt_data, opt_ignored, opt_ijData) {
  ie_open('h2');
    var dyn0 = opt_data.error;
    if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
  ie_close('h2');
}
exports.error = $error;
if (goog.DEBUG) {
  $error.soyTemplateName = 'RedditFeed.error';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $feed(opt_data, opt_ignored, opt_ijData) {
  ie_open('ul');
    var postList22 = opt_data.feed;
    var postListLen22 = postList22.length;
    for (var postIndex22 = 0; postIndex22 < postListLen22; postIndex22++) {
      var postData22 = postList22[postIndex22];
      ie_open('li');
        ie_open('a', null, null,
            'href', postData22.data.url);
          var dyn1 = postData22.data.title;
          if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
        ie_close('a');
      ie_close('li');
    }
  ie_close('ul');
}
exports.feed = $feed;
if (goog.DEBUG) {
  $feed.soyTemplateName = 'RedditFeed.feed';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $controls(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    ie_open_start('button');
        iattr('data-onclick', 'handleTypeClick');
        iattr('data-type', 'hot');
        if (opt_data.type == 'hot') {
          iattr('disabled', '');
        }
    ie_open_end();
      itext('Hot');
    ie_close('button');
    ie_open_start('button');
        iattr('data-onclick', 'handleTypeClick');
        iattr('data-type', 'new');
        if (opt_data.type == 'new') {
          iattr('disabled', '');
        }
    ie_open_end();
      itext('New');
    ie_close('button');
    ie_open_start('button');
        iattr('data-onclick', 'handleTypeClick');
        iattr('data-type', 'rising');
        if (opt_data.type == 'rising') {
          iattr('disabled', '');
        }
    ie_open_end();
      itext('Rising');
    ie_close('button');
  ie_close('div');
}
exports.controls = $controls;
if (goog.DEBUG) {
  $controls.soyTemplateName = 'RedditFeed.controls';
}

exports.render.params = ["error","feed"];
exports.render.types = {"error":"any","feed":"any"};
exports.error.params = ["error"];
exports.error.types = {"error":"any"};
exports.feed.params = ["feed"];
exports.feed.types = {"feed":"any"};
exports.controls.params = ["type"];
exports.controls.types = {"type":"any"};
templates = exports;
return exports;

});

class RedditFeed extends Component {}
Soy.register(RedditFeed, templates);
export { RedditFeed, templates };
export default templates;
/* jshint ignore:end */

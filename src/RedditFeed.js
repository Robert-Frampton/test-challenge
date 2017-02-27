'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './RedditFeed.soy';

/**
 * RedditFeed component, fetches posts made to the /r/javascript subreddit and
 * displays them in a list.
 */
class RedditFeed extends Component {
	/**
	 * @inheritDoc
	 */
	created() {
		this.fetchFeed();

		this.on('typeChanged', this.fetchFeed.bind(this));
	}

	/**
	 * Creates XMLHttpRequest and fetches reddit posts made to /r/javascript
	 */
	fetchFeed() {
		const {type} = this;

		var request = new XMLHttpRequest();

		request.onreadystatechange = this.handleRequest.bind(this, request);

		request.open('Get', `https://www.reddit.com/r/javascript/${type}.json`);
		request.send();
	}

	/**
	 * Handles response data from request.
	 * @param {Object} request
	 */
	handleRequest(request) {
		if (request.readyState === 4) {
			if (request.status === 200) {
				this.requestSuccess(request);
			}
			else {
				this.requestFailure(request);
			}
		}
	}

	/**
	 * Handles click event on type selectors and sets the `type` property.
	 * @param {!Event} event
	 */
	handleTypeClick(event) {
		const {target} = event;

		const type = target.getAttribute('data-type');

		this.type = type;
	}

	/**
	 * Handles request error and set the `error` property.
	 * @param {Object} request
	 */
	requestFailure(request) {
		this.error = `${request.status} ${request.statusText}`;
	}

	/**
	 * Handles request success and set the `feed` property, clears error
	 * property in case of prior request failure.
	 * @param {Object} request
	 */
	requestSuccess(request) {
		this.error = null;
		this.feed = JSON.parse(request.responseText).data.children;
	}
}

RedditFeed.STATE = {
	/**
	 * Error message from request.
	 * @type {string}
	 */
	error: {
		value: null
	},

	/**
	 * Array of reddit posts to /r/javascript.
	 * @type {Array}
	 */
	feed: {
		value: []
	},

	/**
	 * Type of posts to be requested from /r/javascript.
	 * @type {string}
	 */
	type: {
		value: 'hot'
	}
};

Soy.register(RedditFeed, templates);

export default RedditFeed;

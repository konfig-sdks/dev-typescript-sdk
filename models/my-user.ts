/*
Forem API V1

Access Forem articles, users and other resources via API.
        For a real-world example of Forem in action, check out [DEV](https://www.dev.to).
        All endpoints can be accessed with the 'api-key' header and a accept header, but
        some of them are accessible publicly without authentication.

        Dates and date times, unless otherwise specified, must be in
        the [RFC 3339](https://tools.ietf.org/html/rfc3339) format.

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The representation of a user when accessed by themselves
 * @export
 * @interface MyUser
 */
export interface MyUser {
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'summary'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'type_of'?: string;
    /**
     * 
     * @type {number}
     * @memberof MyUser
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'twitter_username'?: string;
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'github_username'?: string;
    /**
     * Email (if user allows displaying email on their profile) or nil
     * @type {string}
     * @memberof MyUser
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'website_url'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'location'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'joined_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof MyUser
     */
    'profile_image'?: string;
    /**
     * ids of the badges awarded to the user
     * @type {Array<number>}
     * @memberof MyUser
     */
    'badge_ids'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof MyUser
     */
    'followers_count'?: number;
}


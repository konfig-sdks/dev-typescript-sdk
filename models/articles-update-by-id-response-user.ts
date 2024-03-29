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
 * 
 * @export
 * @interface ArticlesUpdateByIdResponseUser
 */
export interface ArticlesUpdateByIdResponseUser {
    /**
     * 
     * @type {string}
     * @memberof ArticlesUpdateByIdResponseUser
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticlesUpdateByIdResponseUser
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticlesUpdateByIdResponseUser
     */
    'twitter_username'?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticlesUpdateByIdResponseUser
     */
    'github_username'?: string;
    /**
     * 
     * @type {number}
     * @memberof ArticlesUpdateByIdResponseUser
     */
    'user_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof ArticlesUpdateByIdResponseUser
     */
    'website_url'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ArticlesUpdateByIdResponseUser
     */
    'profile_image'?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticlesUpdateByIdResponseUser
     */
    'profile_image_90'?: string;
}


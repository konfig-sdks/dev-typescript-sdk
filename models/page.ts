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
 * Representation of a page object
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * Title of the page
     * @type {string}
     * @memberof Page
     */
    'title': string;
    /**
     * For internal use, helps similar pages from one another
     * @type {string}
     * @memberof Page
     */
    'description': string;
    /**
     * Used to link to this page in URLs, must be unique and URL-safe
     * @type {string}
     * @memberof Page
     */
    'slug': string;
    /**
     * The text (in markdown) of the ad (required)
     * @type {string}
     * @memberof Page
     */
    'body_markdown'?: string | null;
    /**
     * For JSON pages, the JSON body
     * @type {string}
     * @memberof Page
     */
    'body_json'?: string | null;
    /**
     * If true, the page is available at \'/{slug}\' instead of \'/page/{slug}\', use with caution
     * @type {boolean}
     * @memberof Page
     */
    'is_top_level_path'?: boolean;
    /**
     * 
     * @type {object}
     * @memberof Page
     */
    'social_image'?: object | null;
    /**
     * Controls what kind of layout the page is rendered in
     * @type {string}
     * @memberof Page
     */
    'template': PageTemplateEnum;
}

type PageTemplateEnum = 'contained' | 'full_within_layout' | 'nav_bar_included' | 'json'


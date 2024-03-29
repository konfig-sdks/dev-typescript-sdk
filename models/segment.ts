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
 * A manually managed audience segment
 * @export
 * @interface Segment
 */
export interface Segment {
    /**
     * The ID of the segment
     * @type {number}
     * @memberof Segment
     */
    'id'?: number;
    /**
     * Marks the segment as manually managed (other types are internal)
     * @type {string}
     * @memberof Segment
     */
    'type_of'?: SegmentTypeOfEnum;
    /**
     * The current number of users in the segment
     * @type {number}
     * @memberof Segment
     */
    'user_count'?: number;
}

type SegmentTypeOfEnum = 'manual'



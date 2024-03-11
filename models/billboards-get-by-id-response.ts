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
 * @interface BillboardsGetByIdResponse
 */
export interface BillboardsGetByIdResponse {
    /**
     * 
     * @type {number}
     * @memberof BillboardsGetByIdResponse
     */
    'id'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BillboardsGetByIdResponse
     */
    'approved'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'audience_segment_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'body_markdown'?: string;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'cached_tag_list'?: string;
    /**
     * 
     * @type {number}
     * @memberof BillboardsGetByIdResponse
     */
    'clicks_count'?: number;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'creator_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'custom_display_label'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'display_to'?: string;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'exclude_article_ids'?: string;
    /**
     * 
     * @type {number}
     * @memberof BillboardsGetByIdResponse
     */
    'impressions_count'?: number;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof BillboardsGetByIdResponse
     */
    'organization_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'placement_area'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BillboardsGetByIdResponse
     */
    'priority'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'processed_html'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BillboardsGetByIdResponse
     */
    'published'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'render_mode'?: string;
    /**
     * 
     * @type {number}
     * @memberof BillboardsGetByIdResponse
     */
    'success_rate'?: number;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'template'?: string;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'type_of'?: string;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'updated_at'?: string;
    /**
     * 
     * @type {number}
     * @memberof BillboardsGetByIdResponse
     */
    'weight'?: number;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'audience_segment_type'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BillboardsGetByIdResponse
     */
    'tag_list'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BillboardsGetByIdResponse
     */
    'target_geolocations'?: Array<string>;
}


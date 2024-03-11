/* tslint:disable */
/* eslint-disable */
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

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { VideoArticle } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * VideosApi - axios parameter creator
 * @export
 */
export const VideosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint allows the client to retrieve a list of articles that are uploaded with a video.  It will only return published video articles ordered by descending popularity.  It supports pagination, each page will contain 24 articles by default.
         * @summary Articles with a video
         * @param {number} [page] Pagination page
         * @param {number} [perPage] Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listByPopularity: async (page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/videos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/api/videos',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VideosApi - functional programming interface
 * @export
 */
export const VideosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VideosApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint allows the client to retrieve a list of articles that are uploaded with a video.  It will only return published video articles ordered by descending popularity.  It supports pagination, each page will contain 24 articles by default.
         * @summary Articles with a video
         * @param {VideosApiListByPopularityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listByPopularity(requestParameters: VideosApiListByPopularityRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<VideoArticle>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listByPopularity(requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VideosApi - factory interface
 * @export
 */
export const VideosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VideosApiFp(configuration)
    return {
        /**
         * This endpoint allows the client to retrieve a list of articles that are uploaded with a video.  It will only return published video articles ordered by descending popularity.  It supports pagination, each page will contain 24 articles by default.
         * @summary Articles with a video
         * @param {VideosApiListByPopularityRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listByPopularity(requestParameters: VideosApiListByPopularityRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<VideoArticle>> {
            return localVarFp.listByPopularity(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for listByPopularity operation in VideosApi.
 * @export
 * @interface VideosApiListByPopularityRequest
 */
export type VideosApiListByPopularityRequest = {
    
    /**
    * Pagination page
    * @type {number}
    * @memberof VideosApiListByPopularity
    */
    readonly page?: number
    
    /**
    * Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.
    * @type {number}
    * @memberof VideosApiListByPopularity
    */
    readonly perPage?: number
    
}

/**
 * VideosApiGenerated - object-oriented interface
 * @export
 * @class VideosApiGenerated
 * @extends {BaseAPI}
 */
export class VideosApiGenerated extends BaseAPI {
    /**
     * This endpoint allows the client to retrieve a list of articles that are uploaded with a video.  It will only return published video articles ordered by descending popularity.  It supports pagination, each page will contain 24 articles by default.
     * @summary Articles with a video
     * @param {VideosApiListByPopularityRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VideosApiGenerated
     */
    public listByPopularity(requestParameters: VideosApiListByPopularityRequest = {}, options?: AxiosRequestConfig) {
        return VideosApiFp(this.configuration).listByPopularity(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}

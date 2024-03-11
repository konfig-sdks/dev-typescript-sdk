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
import { ArticleIndex } from '../models';
// @ts-ignore
import { ReadinglistGetUserReadinglist401Response } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ReadinglistApi - axios parameter creator
 * @export
 */
export const ReadinglistApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.         It supports pagination, each page will contain `30` articles by default
         * @summary Readinglist
         * @param {number} [page] Pagination page
         * @param {number} [perPage] Page size (the number of items to return per page). The default maximum value can be overridden by \&quot;API_PER_PAGE_MAX\&quot; environment variable.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserReadinglist: async (page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/readinglist`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api-key required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "api-key", keyParamName: "apiKey", configuration })
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
                pathTemplate: '/api/readinglist',
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
 * ReadinglistApi - functional programming interface
 * @export
 */
export const ReadinglistApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReadinglistApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.         It supports pagination, each page will contain `30` articles by default
         * @summary Readinglist
         * @param {ReadinglistApiGetUserReadinglistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserReadinglist(requestParameters: ReadinglistApiGetUserReadinglistRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ArticleIndex>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserReadinglist(requestParameters.page, requestParameters.perPage, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReadinglistApi - factory interface
 * @export
 */
export const ReadinglistApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReadinglistApiFp(configuration)
    return {
        /**
         * This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.         It supports pagination, each page will contain `30` articles by default
         * @summary Readinglist
         * @param {ReadinglistApiGetUserReadinglistRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserReadinglist(requestParameters: ReadinglistApiGetUserReadinglistRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Array<ArticleIndex>> {
            return localVarFp.getUserReadinglist(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getUserReadinglist operation in ReadinglistApi.
 * @export
 * @interface ReadinglistApiGetUserReadinglistRequest
 */
export type ReadinglistApiGetUserReadinglistRequest = {
    
    /**
    * Pagination page
    * @type {number}
    * @memberof ReadinglistApiGetUserReadinglist
    */
    readonly page?: number
    
    /**
    * Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.
    * @type {number}
    * @memberof ReadinglistApiGetUserReadinglist
    */
    readonly perPage?: number
    
}

/**
 * ReadinglistApiGenerated - object-oriented interface
 * @export
 * @class ReadinglistApiGenerated
 * @extends {BaseAPI}
 */
export class ReadinglistApiGenerated extends BaseAPI {
    /**
     * This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.         It supports pagination, each page will contain `30` articles by default
     * @summary Readinglist
     * @param {ReadinglistApiGetUserReadinglistRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReadinglistApiGenerated
     */
    public getUserReadinglist(requestParameters: ReadinglistApiGetUserReadinglistRequest = {}, options?: AxiosRequestConfig) {
        return ReadinglistApiFp(this.configuration).getUserReadinglist(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
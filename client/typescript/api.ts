/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Token Metadata API
 * Service that indexes metadata for every SIP-009, SIP-010, and SIP-013 Token in the Stacks blockchain and exposes it via REST API endpoints.
 *
 * OpenAPI spec version: v0.1.0
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import * as isomorphicFetch from "isomorphic-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "https://api.hiro.so/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface ApiJobCount
 */
export interface ApiJobCount {
    /**
     * 
     * @type {number}
     * @memberof ApiJobCount
     */
    pending?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiJobCount
     */
    queued?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiJobCount
     */
    done?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiJobCount
     */
    failed?: number;
}
/**
 * 
 * @export
 * @interface ApiStatusResponse
 */
export interface ApiStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof ApiStatusResponse
     */
    server_version: string;
    /**
     * 
     * @type {string}
     * @memberof ApiStatusResponse
     */
    status: string;
    /**
     * 
     * @type {ApiTokenCount}
     * @memberof ApiStatusResponse
     */
    tokens?: ApiTokenCount;
    /**
     * 
     * @type {ApiTokenContractCount}
     * @memberof ApiStatusResponse
     */
    token_contracts?: ApiTokenContractCount;
    /**
     * 
     * @type {ApiJobCount}
     * @memberof ApiStatusResponse
     */
    job_queue?: ApiJobCount;
}
/**
 * 
 * @export
 * @interface ApiTokenContractCount
 */
export interface ApiTokenContractCount {
    /**
     * 
     * @type {number}
     * @memberof ApiTokenContractCount
     */
    sip_009?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiTokenContractCount
     */
    sip_010?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiTokenContractCount
     */
    sip_013?: number;
}
/**
 * 
 * @export
 * @interface ApiTokenCount
 */
export interface ApiTokenCount {
    /**
     * 
     * @type {number}
     * @memberof ApiTokenCount
     */
    ft?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiTokenCount
     */
    nft?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiTokenCount
     */
    sft?: number;
}
/**
 * 
 * @export
 * @interface FtMetadataResponse
 */
export interface FtMetadataResponse {
    /**
     * 
     * @type {string}
     * @memberof FtMetadataResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FtMetadataResponse
     */
    symbol?: string;
    /**
     * 
     * @type {number}
     * @memberof FtMetadataResponse
     */
    decimals?: number;
    /**
     * 
     * @type {string}
     * @memberof FtMetadataResponse
     */
    total_supply?: string;
    /**
     * 
     * @type {string}
     * @memberof FtMetadataResponse
     */
    token_uri?: string;
    /**
     * 
     * @type {string}
     * @memberof FtMetadataResponse
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof FtMetadataResponse
     */
    image_uri?: string;
    /**
     * 
     * @type {string}
     * @memberof FtMetadataResponse
     */
    image_canonical_uri?: string;
    /**
     * 
     * @type {string}
     * @memberof FtMetadataResponse
     */
    tx_id: string;
    /**
     * 
     * @type {string}
     * @memberof FtMetadataResponse
     */
    sender_address: string;
    /**
     * 
     * @type {Metadata}
     * @memberof FtMetadataResponse
     */
    metadata?: Metadata;
}
/**
 * 
 * @export
 * @interface Metadata
 */
export interface Metadata {
    /**
     * 
     * @type {number}
     * @memberof Metadata
     */
    sip: number;
    /**
     * 
     * @type {string}
     * @memberof Metadata
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Metadata
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Metadata
     */
    image?: string;
    /**
     * 
     * @type {string}
     * @memberof Metadata
     */
    cached_image?: string;
    /**
     * 
     * @type {Array<MetadataAttribute>}
     * @memberof Metadata
     */
    attributes?: Array<MetadataAttribute>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Metadata
     */
    properties?: { [key: string]: any; };
    /**
     * 
     * @type {MetadataLocalization}
     * @memberof Metadata
     */
    localization?: MetadataLocalization;
}
/**
 * 
 * @export
 * @interface MetadataAttribute
 */
export interface MetadataAttribute {
    /**
     * 
     * @type {string}
     * @memberof MetadataAttribute
     */
    trait_type: string;
    /**
     * 
     * @type {string}
     * @memberof MetadataAttribute
     */
    display_type?: string;
    /**
     * 
     * @type {any}
     * @memberof MetadataAttribute
     */
    value: any;
}
/**
 * 
 * @export
 * @interface MetadataLocalization
 */
export interface MetadataLocalization {
    /**
     * 
     * @type {string}
     * @memberof MetadataLocalization
     */
    uri: string;
    /**
     * 
     * @type {string}
     * @memberof MetadataLocalization
     */
    _default: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetadataLocalization
     */
    locales: Array<string>;
}
/**
 * 
 * @export
 * @interface NftMetadataResponse
 */
export interface NftMetadataResponse {
    /**
     * 
     * @type {string}
     * @memberof NftMetadataResponse
     */
    token_uri?: string;
    /**
     * 
     * @type {Metadata}
     * @memberof NftMetadataResponse
     */
    metadata?: Metadata;
}
/**
 * 
 * @export
 * @interface SftMetadataResponse
 */
export interface SftMetadataResponse {
    /**
     * 
     * @type {string}
     * @memberof SftMetadataResponse
     */
    token_uri?: string;
    /**
     * 
     * @type {number}
     * @memberof SftMetadataResponse
     */
    decimals?: number;
    /**
     * 
     * @type {string}
     * @memberof SftMetadataResponse
     */
    total_supply?: string;
    /**
     * 
     * @type {Metadata}
     * @memberof SftMetadataResponse
     */
    metadata?: Metadata;
}
/**
 * 
 * @export
 * @interface TokenErrorResponse
 */
export interface TokenErrorResponse {
}
/**
 * 
 * @export
 * @interface TokenNotFoundResponse
 */
export interface TokenNotFoundResponse {
    /**
     * 
     * @type {string}
     * @memberof TokenNotFoundResponse
     */
    error: TokenNotFoundResponse.ErrorEnum;
}

/**
 * @export
 * @namespace TokenNotFoundResponse
 */
export namespace TokenNotFoundResponse {
    /**
     * @export
     * @enum {string}
     */
    export enum ErrorEnum {
        TokenNotFound = <any> 'Token not found'
    }
}
/**
 * StatusApi - fetch parameter creator
 * @export
 */
export const StatusApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Displays the status of the API and its current workload
         * @summary API Status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiStatus(options: any = {}): FetchArgs {
            const localVarPath = `/metadata/v1/`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StatusApi - functional programming interface
 * @export
 */
export const StatusApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Displays the status of the API and its current workload
         * @summary API Status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiStatus(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ApiStatusResponse> {
            const localVarFetchArgs = StatusApiFetchParamCreator(configuration).getApiStatus(options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * StatusApi - factory interface
 * @export
 */
export const StatusApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Displays the status of the API and its current workload
         * @summary API Status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getApiStatus(options?: any) {
            return StatusApiFp(configuration).getApiStatus(options)(fetch, basePath);
        },
    };
};

/**
 * StatusApi - object-oriented interface
 * @export
 * @class StatusApi
 * @extends {BaseAPI}
 */
export class StatusApi extends BaseAPI {
    /**
     * Displays the status of the API and its current workload
     * @summary API Status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusApi
     */
    public getApiStatus(options?: any) {
        return StatusApiFp(this.configuration).getApiStatus(options)(this.fetch, this.basePath);
    }

}
/**
 * TokensApi - fetch parameter creator
 * @export
 */
export const TokensApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves metadata for a SIP-010 Fungible Token
         * @summary Fungible Token Metadata
         * @param {string} principal Principal for the contract which owns the SIP-010 token
         * @param {string} [locale] Metadata localization to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFtMetadata(principal: string, locale?: string, options: any = {}): FetchArgs {
            // verify required parameter 'principal' is not null or undefined
            if (principal === null || principal === undefined) {
                throw new RequiredError('principal','Required parameter principal was null or undefined when calling getFtMetadata.');
            }
            const localVarPath = `/metadata/v1/ft/{principal}`
                .replace(`{${"principal"}}`, encodeURIComponent(String(principal)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves metadata for a SIP-009 Non-Fungible Token
         * @summary Non-Fungible Token Metadata
         * @param {string} principal SIP-009 compliant smart contract principal
         * @param {number} token_id Token ID to retrieve
         * @param {string} [locale] Metadata localization to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNftMetadata(principal: string, token_id: number, locale?: string, options: any = {}): FetchArgs {
            // verify required parameter 'principal' is not null or undefined
            if (principal === null || principal === undefined) {
                throw new RequiredError('principal','Required parameter principal was null or undefined when calling getNftMetadata.');
            }
            // verify required parameter 'token_id' is not null or undefined
            if (token_id === null || token_id === undefined) {
                throw new RequiredError('token_id','Required parameter token_id was null or undefined when calling getNftMetadata.');
            }
            const localVarPath = `/metadata/v1/nft/{principal}/{token_id}`
                .replace(`{${"principal"}}`, encodeURIComponent(String(principal)))
                .replace(`{${"token_id"}}`, encodeURIComponent(String(token_id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves metadata for a SIP-013 Semi-Fungible Token
         * @summary Semi-Fungible Token Metadata
         * @param {string} principal SIP-013 compliant smart contract principal
         * @param {number} token_id Token ID to retrieve
         * @param {string} [locale] Metadata localization to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSftMetadata(principal: string, token_id: number, locale?: string, options: any = {}): FetchArgs {
            // verify required parameter 'principal' is not null or undefined
            if (principal === null || principal === undefined) {
                throw new RequiredError('principal','Required parameter principal was null or undefined when calling getSftMetadata.');
            }
            // verify required parameter 'token_id' is not null or undefined
            if (token_id === null || token_id === undefined) {
                throw new RequiredError('token_id','Required parameter token_id was null or undefined when calling getSftMetadata.');
            }
            const localVarPath = `/metadata/v1/sft/{principal}/{token_id}`
                .replace(`{${"principal"}}`, encodeURIComponent(String(principal)))
                .replace(`{${"token_id"}}`, encodeURIComponent(String(token_id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (locale !== undefined) {
                localVarQueryParameter['locale'] = locale;
            }

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokensApi - functional programming interface
 * @export
 */
export const TokensApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves metadata for a SIP-010 Fungible Token
         * @summary Fungible Token Metadata
         * @param {string} principal Principal for the contract which owns the SIP-010 token
         * @param {string} [locale] Metadata localization to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFtMetadata(principal: string, locale?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<FtMetadataResponse> {
            const localVarFetchArgs = TokensApiFetchParamCreator(configuration).getFtMetadata(principal, locale, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Retrieves metadata for a SIP-009 Non-Fungible Token
         * @summary Non-Fungible Token Metadata
         * @param {string} principal SIP-009 compliant smart contract principal
         * @param {number} token_id Token ID to retrieve
         * @param {string} [locale] Metadata localization to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNftMetadata(principal: string, token_id: number, locale?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<NftMetadataResponse> {
            const localVarFetchArgs = TokensApiFetchParamCreator(configuration).getNftMetadata(principal, token_id, locale, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Retrieves metadata for a SIP-013 Semi-Fungible Token
         * @summary Semi-Fungible Token Metadata
         * @param {string} principal SIP-013 compliant smart contract principal
         * @param {number} token_id Token ID to retrieve
         * @param {string} [locale] Metadata localization to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSftMetadata(principal: string, token_id: number, locale?: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<SftMetadataResponse> {
            const localVarFetchArgs = TokensApiFetchParamCreator(configuration).getSftMetadata(principal, token_id, locale, options);
            return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * TokensApi - factory interface
 * @export
 */
export const TokensApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Retrieves metadata for a SIP-010 Fungible Token
         * @summary Fungible Token Metadata
         * @param {string} principal Principal for the contract which owns the SIP-010 token
         * @param {string} [locale] Metadata localization to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFtMetadata(principal: string, locale?: string, options?: any) {
            return TokensApiFp(configuration).getFtMetadata(principal, locale, options)(fetch, basePath);
        },
        /**
         * Retrieves metadata for a SIP-009 Non-Fungible Token
         * @summary Non-Fungible Token Metadata
         * @param {string} principal SIP-009 compliant smart contract principal
         * @param {number} token_id Token ID to retrieve
         * @param {string} [locale] Metadata localization to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNftMetadata(principal: string, token_id: number, locale?: string, options?: any) {
            return TokensApiFp(configuration).getNftMetadata(principal, token_id, locale, options)(fetch, basePath);
        },
        /**
         * Retrieves metadata for a SIP-013 Semi-Fungible Token
         * @summary Semi-Fungible Token Metadata
         * @param {string} principal SIP-013 compliant smart contract principal
         * @param {number} token_id Token ID to retrieve
         * @param {string} [locale] Metadata localization to retrieve
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSftMetadata(principal: string, token_id: number, locale?: string, options?: any) {
            return TokensApiFp(configuration).getSftMetadata(principal, token_id, locale, options)(fetch, basePath);
        },
    };
};

/**
 * TokensApi - object-oriented interface
 * @export
 * @class TokensApi
 * @extends {BaseAPI}
 */
export class TokensApi extends BaseAPI {
    /**
     * Retrieves metadata for a SIP-010 Fungible Token
     * @summary Fungible Token Metadata
     * @param {string} principal Principal for the contract which owns the SIP-010 token
     * @param {string} [locale] Metadata localization to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public getFtMetadata(principal: string, locale?: string, options?: any) {
        return TokensApiFp(this.configuration).getFtMetadata(principal, locale, options)(this.fetch, this.basePath);
    }

    /**
     * Retrieves metadata for a SIP-009 Non-Fungible Token
     * @summary Non-Fungible Token Metadata
     * @param {string} principal SIP-009 compliant smart contract principal
     * @param {number} token_id Token ID to retrieve
     * @param {string} [locale] Metadata localization to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public getNftMetadata(principal: string, token_id: number, locale?: string, options?: any) {
        return TokensApiFp(this.configuration).getNftMetadata(principal, token_id, locale, options)(this.fetch, this.basePath);
    }

    /**
     * Retrieves metadata for a SIP-013 Semi-Fungible Token
     * @summary Semi-Fungible Token Metadata
     * @param {string} principal SIP-013 compliant smart contract principal
     * @param {number} token_id Token ID to retrieve
     * @param {string} [locale] Metadata localization to retrieve
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public getSftMetadata(principal: string, token_id: number, locale?: string, options?: any) {
        return TokensApiFp(this.configuration).getSftMetadata(principal, token_id, locale, options)(this.fetch, this.basePath);
    }

}

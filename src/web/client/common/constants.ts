/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

export const PORTAL_LANGUAGES = 'adx_portallanguages';
export const WEBSITE_LANGUAGES = 'adx_websitelanguages';
export const WEBSITEID_LANGUAGE = 'adx_websites';
export const WEBPAGES = 'adx_webpages';
export const WEBSITES = 'adx_websites';
export const PORTAL_LANGUAGES_URL_KEY = 'requestUrlForportalLanguage';
export const WEBSITE_LANGUAGES_URL_KEY = 'requestUrlForWebsitelanguage';
export const SINGLE_ENTITY_FETCH_URL_KEY = 'fetchUrlSingleEntity';
export const SINGLE_ENTITY_SAVE_URL_KEY = 'saveUrlSingleEntity';
export const FETCH_URL_ENTITY_ROOT = 'fetchUrlForEntityRoot';
export const WEBPAGEID_URL_KEY = 'requestUrlForWebsiteId';
export const PORTAL_LANGUAGE_DEFAULT = '1033';
export const PORTALSFOLDERNAME = 'StarterPortal';
export const PORTALSURISCHEME = 'portals';
export const PORTALSWORKSPACENAME = 'Power Portals';
export const WEBPAGES_FILENAME = 'web-pages';
export const WEBTEMPLATES = 'web-templates';
export const WEBFILES = 'webfiles';
export const CONTENTPAGES = 'contentpages';
export const SCHEMAFILENAME = "PortalSchema.json";
export const DEFAULT_LANGUAGE_CODE = 'en_US';
export const DEFAULT_CONTENT = ' ';
export const ORG_URL = 'orgUrl';
export const ADX_WEBTEMPLATES = 'adx_webtemplates';
export const DEFAULT_FILE_NAME = 'defaultfilename';
export const FILE_NAME_FIELD = '_primarynamefield';

export const FILE_EXTENSION_REGEX = /(?<extension>\.[0-9a-z]+$)/i;

export const columnextensionMap = new Map([
    ["adx_CustomCss", "customcss.cs"],
    ["adx_CustomJavascript", "customjs.js"],
    ["adx_Copy", "webpage.copy.html"]
]);

export const entityFolderMap = new Map([
    ["webpages", "web-pages"],
    ["webtemplates", "web-templates"],
    ["webfiles", "web-files"],
    ["contentpages", "content-pages"]
]);

export enum appTypes {
    portal = 0,
    default = 1
}

export enum dataSource {
    dataverse = 0,
    github = 1
}

export enum fileExtension {
    html = 0,
    css = 1,
    js = 2
}

export const pathparam_schemaMap = new Map([
    ["webpages", "adx_webpages"],
    ["webtemplates", "adx_webtemplates"],
    ["adx_webpages", "adx_webpage"],
    ["adx_webtemplates", "adx_templates"],
    ["webfiles", "adx_webfiles"],
    ["adx_webfiles", "adx_webfile"],
    ["adx_copy", "adx_copy"]
]);
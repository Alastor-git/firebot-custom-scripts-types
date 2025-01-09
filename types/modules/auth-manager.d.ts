export interface AuthProviderDefinition {
    id: string;
    name: string;
    client: {
        id: string;
        secret?: string;
    };
    auth: {
        type: "code" | "token" | "device";
        authorizeHost?: string;
        tokenHost: string;
        authorizePath: string;
        tokenPath?: string;
    };
    options?: {
        body?: {
            [key: string]: string | string[];
        };
        query?: {
            [key: string]: string | string[];
        };
        headers?: {
            [key: string]: string | string[];
        };
    };
    redirectUriHost?: string;
    scopes?: string[] | string | undefined;
    autoRefreshToken: boolean;
}

// RFC6749 defines the following fields:
// - access_token : REQUIRED
// - refresh_token: OPTIONNAL
// - token_type : REQUIRED
// - expires_in: RECOMENDED
// - scope: OPTIONNAL. REQUIRED if different from client's request
// - state: REQUIRED
export interface AuthDetails {
    /** The access token */
    access_token: string;

    /** The refresh token */
    refresh_token?: string;

    /** The type of access token */
    token_type: string;

    /** OAuth scopes of the access token */
    scope?: string[];

    /** Timestamp of when the token has been created */
    created_at?: number;

    /** How many seconds before the token expires */
    expires_in?: number;

    /** Timestamp of when access token expires */
    expires_at?: number;

    /** Extra fields to be compatible with Type ClientOAuth2.Data */
    [key: string]: unknown;
}
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:8000/api/v1',
  SSO_BSC_URL: 'https://apiuat.bsc.com.vn/sso/oauth/authorize',
  SSO_BSC_CLIENT_ID: 'W8S20W8Q7Y',
  SSO_BSC_CALLBACK_URL: 'http://localhost:5678/auth',
};

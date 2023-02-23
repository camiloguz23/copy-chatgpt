export interface OpenAiContent {
  data: Data;
  status: number;
  statusText: string;
  headers: OpenAicontentHeaders;
  config: Config;
  request: Request;
}

export interface Config {
  transitional: Transitional;
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  headers: ConfigHeaders;
  method: string;
  data: string;
  url: string;
}

export interface ConfigHeaders {
  Accept: string;
  'Content-Type': string;
  'User-Agent': string;
  Authorization: string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Data {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
}

export interface Choice {
  text: string;
  index: number;
  logprobs: null;
  finish_reason: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface OpenAicontentHeaders {
  'cache-control': string;
  'content-type': string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Request {}

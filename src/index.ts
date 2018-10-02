export * from './actFuncs';

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer R> ? Array<DeepPartial<R>> : DeepPartial<T[K]>
};

/**
 * Alias of Extract<keyof T, string>.
 */
export type StringKeys<T> = Extract<keyof T, string>;

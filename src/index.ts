export * from './actFuncs';

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer R> ? Array<DeepPartial<R>> : DeepPartial<T[K]>
};

/**
 * Alias of Extract<keyof T, string>.
 */
export type StringKeys<T> = Extract<keyof T, string>;

/**
 * Two items tuple has the same type.
 */
export type Twin<T> = [T, T];

/**
 * Sync or Async type of T
 */
export type AsyncOrSync<T> = T | Promise<T>;

/**
 * Remove readonly flags from all fields, make it mutable.
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

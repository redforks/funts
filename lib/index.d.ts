export * from './actFuncs';
export declare type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends Array<infer R> ? Array<DeepPartial<R>> : DeepPartial<T[K]>;
};
/**
 * Alias of Extract<keyof T, string>.
 */
export declare type StringKeys<T> = Extract<keyof T, string>;
/**
 * Two items tuple has the same type.
 */
export declare type Twin<T> = [T, T];
/**
 * Sync or Async type of T
 */
export declare type AsyncOrSync<T> = T | Promise<T>;
/**
 * Remove readonly flags from all fields, make it mutable.
 */
export declare type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
};

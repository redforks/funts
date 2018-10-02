export * from './actFuncs';
export declare type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends Array<infer R> ? Array<DeepPartial<R>> : DeepPartial<T[K]>;
};
/**
 * Alias of Extract<keyof T, string>.
 */
export declare type StringKeys<T> = Extract<keyof T, string>;

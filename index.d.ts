// index.d.ts

/**
 * Decodes a URI-encoded string into an object.
 * The input string should be in the format: "key1-value1_key2-value2" (URI encoded).
 *
 * @param param - The URI-encoded string to decode.
 * @returns The decoded object with key-value pairs.
 */
export function decode(param: string): Record<string, string>;

/**
 * Encodes an object into a URI-encoded string.
 * The object should have key-value pairs that will be converted into the format: "key1-value1_key2-value2".
 *
 * @param param - The object to encode into a string.
 * @returns The URI-encoded string representation of the object.
 */
export function encode(param: Record<string, string>): string;

declare const paramUtils: {
  decode: typeof decode;
  encode: typeof encode;
};

export default paramUtils;

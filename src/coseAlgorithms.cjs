// File generated automatically from data from:
// <https://www.iana.org/assignments/cose/cose.xhtml#algorithms>

/* eslint-disable */

/**
 * @description RSASSA-PKCS1-v1_5 using SHA-1
 * Capabilities: [kty]
 * Change Controller: IESG
 * Recommended: Deprecated
 * @see {@link https://www.iana.org/go/rfc8812|RFC8812}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.RS1 = -65535;

/**
 * @description AES-CTR w/ 128-bit key
 * Capabilities: [kty]
 * Change Controller: IETF
 * Recommended: Deprecated
 * @see {@link https://www.iana.org/go/rfc9459|RFC9459}
 * @const @type {number} @deprecated
 */
exports.A128CTR = -65534;

/**
 * @description AES-CTR w/ 192-bit key
 * Capabilities: [kty]
 * Change Controller: IETF
 * Recommended: Deprecated
 * @see {@link https://www.iana.org/go/rfc9459|RFC9459}
 * @const @type {number} @deprecated
 */
exports.A192CTR = -65533;

/**
 * @description AES-CTR w/ 256-bit key
 * Capabilities: [kty]
 * Change Controller: IETF
 * Recommended: Deprecated
 * @see {@link https://www.iana.org/go/rfc9459|RFC9459}
 * @const @type {number} @deprecated
 */
exports.A256CTR = -65532;

/**
 * @description AES-CBC w/ 128-bit key
 * Capabilities: [kty]
 * Change Controller: IETF
 * Recommended: Deprecated
 * @see {@link https://www.iana.org/go/rfc9459|RFC9459}
 * @const @type {number} @deprecated
 */
exports.A128CBC = -65531;

/**
 * @description AES-CBC w/ 192-bit key
 * Capabilities: [kty]
 * Change Controller: IETF
 * Recommended: Deprecated
 * @see {@link https://www.iana.org/go/rfc9459|RFC9459}
 * @const @type {number} @deprecated
 */
exports.A192CBC = -65530;

/**
 * @description AES-CBC w/ 256-bit key
 * Capabilities: [kty]
 * Change Controller: IETF
 * Recommended: Deprecated
 * @see {@link https://www.iana.org/go/rfc9459|RFC9459}
 * @const @type {number} @deprecated
 */
exports.A256CBC = -65529;

/**
 * @description WalnutDSA signature
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: No
 * @see {@link https://www.iana.org/go/rfc9021|RFC9021}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.WalnutDSA = -260;

/**
 * @description RSASSA-PKCS1-v1_5 using SHA-512
 * Capabilities: [kty]
 * Change Controller: IESG
 * Recommended: No
 * @see {@link https://www.iana.org/go/rfc8812|RFC8812}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.RS512 = -259;

/**
 * @description RSASSA-PKCS1-v1_5 using SHA-384
 * Capabilities: [kty]
 * Change Controller: IESG
 * Recommended: No
 * @see {@link https://www.iana.org/go/rfc8812|RFC8812}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.RS384 = -258;

/**
 * @description RSASSA-PKCS1-v1_5 using SHA-256
 * Capabilities: [kty]
 * Change Controller: IESG
 * Recommended: No
 * @see {@link https://www.iana.org/go/rfc8812|RFC8812}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.RS256 = -257;

/**
 * @description ECDSA using secp256k1 curve and SHA-256
 * Capabilities: [kty]
 * Change Controller: IESG
 * Recommended: No
 * @see {@link https://www.iana.org/go/rfc8812|RFC8812}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.ES256K = -47;

/**
 * @description HSS/LMS hash-based digital signature
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc8778|RFC8778}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.HSS_LMS = -46;

/**
 * @description SHAKE-256 512-bit Hash Value
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9054|RFC9054}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.SHAKE256 = -45;

/**
 * @description SHA-2 512-bit Hash
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9054|RFC9054}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.SHA_512 = -44;

/**
 * @description SHA-2 384-bit Hash
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9054|RFC9054}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.SHA_384 = -43;

/**
 * @description RSAES-OAEP w/ SHA-512
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc8230|RFC8230}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.RSAES_OAEPw_s_SHA_512 = -42;

/**
 * @description RSAES-OAEP w/ SHA-256
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc8230|RFC8230}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.RSAES_OAEPw_s_SHA_256 = -41;

/**
 * @description RSAES-OAEP w/ SHA-1
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc8230|RFC8230}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.RSAES_OAEPw_s_RFC8017defaultparameters = -40;

/**
 * @description RSASSA-PSS w/ SHA-512
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc8230|RFC8230}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.PS512 = -39;

/**
 * @description RSASSA-PSS w/ SHA-384
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc8230|RFC8230}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.PS384 = -38;

/**
 * @description RSASSA-PSS w/ SHA-256
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc8230|RFC8230}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.PS256 = -37;

/**
 * @description ECDSA w/ SHA-512
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ES512 = -36;

/**
 * @description ECDSA w/ SHA-384
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ES384 = -35;

/**
 * @description ECDH SS w/ Concat KDF and AES Key Wrap w/ 256-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_SS_and_A256KW = -34;

/**
 * @description ECDH SS w/ Concat KDF and AES Key Wrap w/ 192-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_SS_and_A192KW = -33;

/**
 * @description ECDH SS w/ Concat KDF and AES Key Wrap w/ 128-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_SS_and_A128KW = -32;

/**
 * @description ECDH ES w/ Concat KDF and AES Key Wrap w/ 256-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_ES_and_A256KW = -31;

/**
 * @description ECDH ES w/ Concat KDF and AES Key Wrap w/ 192-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_ES_and_A192KW = -30;

/**
 * @description ECDH ES w/ Concat KDF and AES Key Wrap w/ 128-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_ES_and_A128KW = -29;

/**
 * @description ECDH SS w/ HKDF - generate key directly
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_SS_and_HKDF_512 = -28;

/**
 * @description ECDH SS w/ HKDF - generate key directly
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_SS_and_HKDF_256 = -27;

/**
 * @description ECDH ES w/ HKDF - generate key directly
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_ES_and_HKDF_512 = -26;

/**
 * @description ECDH ES w/ HKDF - generate key directly
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ECDH_ES_and_HKDF_256 = -25;

/**
 * @description SHAKE-128 256-bit Hash Value
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9054|RFC9054}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.SHAKE128 = -18;

/**
 * @description SHA-2 512-bit Hash truncated to 256-bits
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9054|RFC9054}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.SHA_512_s_256 = -17;

/**
 * @description SHA-2 256-bit Hash
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9054|RFC9054}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.SHA_256 = -16;

/**
 * @description SHA-2 256-bit Hash truncated to 64-bits
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Filter Only
 * @see {@link https://www.iana.org/go/rfc9054|RFC9054}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.SHA_256_s_64 = -15;

/**
 * @description SHA-1 Hash
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Filter Only
 * @see {@link https://www.iana.org/go/rfc9054|RFC9054}
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.SHA_1 = -14;

/**
 * @description Shared secret w/ AES-MAC 256-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.direct_and_HKDF_AES_256 = -13;

/**
 * @description Shared secret w/ AES-MAC 128-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.direct_and_HKDF_AES_128 = -12;

/**
 * @description Shared secret w/ HKDF and SHA-512
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.direct_and_HKDF_SHA_512 = -11;

/**
 * @description Shared secret w/ HKDF and SHA-256
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.direct_and_HKDF_SHA_256 = -10;

/**
 * @description EdDSA
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.EdDSA = -8;

/**
 * @description ECDSA w/ SHA-256
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ES256 = -7;

/**
 * @description Direct use of CEK
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.direct = -6;

/**
 * @description AES Key Wrap w/ 256-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.A256KW = -5;

/**
 * @description AES Key Wrap w/ 192-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.A192KW = -4;

/**
 * @description AES Key Wrap w/ 128-bit key
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.A128KW = -3;

/**
 * @description Reserved
 * Capabilities: -
 * Change Controller: -
 * Recommended: No
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.Reserved = 0;

/**
 * @description AES-GCM mode w/ 128-bit key, 128-bit tag
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.A128GCM = 1;

/**
 * @description AES-GCM mode w/ 192-bit key, 128-bit tag
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.A192GCM = 2;

/**
 * @description AES-GCM mode w/ 256-bit key, 128-bit tag
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.A256GCM = 3;

/**
 * @description HMAC w/ SHA-256 truncated to 64 bits
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.HMAC256_s_64 = 4;

/**
 * @description HMAC w/ SHA-256
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.HMAC256_s_256 = 5;

/**
 * @description HMAC w/ SHA-384
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.HMAC384_s_384 = 6;

/**
 * @description HMAC w/ SHA-512
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.HMAC512_s_512 = 7;

/**
 * @description AES-CCM mode 128-bit key, 64-bit tag, 13-byte nonce
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_CCM_16_64_128 = 10;

/**
 * @description AES-CCM mode 256-bit key, 64-bit tag, 13-byte nonce
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_CCM_16_64_256 = 11;

/**
 * @description AES-CCM mode 128-bit key, 64-bit tag, 7-byte nonce
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_CCM_64_64_128 = 12;

/**
 * @description AES-CCM mode 256-bit key, 64-bit tag, 7-byte nonce
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_CCM_64_64_256 = 13;

/**
 * @description AES-MAC 128-bit key, 64-bit tag
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_MAC128_s_64 = 14;

/**
 * @description AES-MAC 256-bit key, 64-bit tag
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_MAC256_s_64 = 15;

/**
 * @description ChaCha20/Poly1305 w/ 256-bit key, 128-bit tag
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.ChaCha20_s_Poly1305 = 24;

/**
 * @description AES-MAC 128-bit key, 128-bit tag
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_MAC128_s_128 = 25;

/**
 * @description AES-MAC 256-bit key, 128-bit tag
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_MAC256_s_128 = 26;

/**
 * @description AES-CCM mode 128-bit key, 128-bit tag, 13-byte nonce
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_CCM_16_128_128 = 30;

/**
 * @description AES-CCM mode 256-bit key, 128-bit tag, 13-byte nonce
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_CCM_16_128_256 = 31;

/**
 * @description AES-CCM mode 128-bit key, 128-bit tag, 7-byte nonce
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_CCM_64_128_128 = 32;

/**
 * @description AES-CCM mode 256-bit key, 128-bit tag, 7-byte nonce
 * Capabilities: [kty]
 * Change Controller: -
 * Recommended: Yes
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number}
 */
exports.AES_CCM_64_128_256 = 33;

/**
 * @description For doing IV generation for symmetric algorithms.
 * Capabilities: -
 * Change Controller: -
 * Recommended: No
 * @see {@link https://www.iana.org/go/rfc9053|RFC9053}
 * @const @type {number} @deprecated
 */
exports.IV_GENERATION = 34;

🔒 **Identifiers from IANA's COSE Algorithms Registry**

 [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Exact-Realty_ts-cose-algorithms&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Exact-Realty_ts-cose-algorithms)
 [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Exact-Realty_ts-cose-algorithms&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Exact-Realty_ts-cose-algorithms)
 [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Exact-Realty_ts-cose-algorithms&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Exact-Realty_ts-cose-algorithms)
 [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Exact-Realty_ts-cose-algorithms&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Exact-Realty_ts-cose-algorithms)
 [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Exact-Realty_ts-cose-algorithms&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Exact-Realty_ts-cose-algorithms)
 [![NPM Downloads](https://img.shields.io/npm/dw/%40exact-realty/cose-algorithms?style=flat-square)](https://www.npmjs.com/package/%40exact-realty/cose-algorithms)

---
### 🚀 Features

- Implements all assigined entries in [IANA's COSE Algorithm](https://www.iana.org/assignments/cose/cose.xhtml#algorithms) that have a name and a value.
- Simple exported constants, with no code to execute.
- Some name transformations were required to make them valid JS identifiers.
  - For example, `HMAC 256/64` becomes `HMAC256_s_64` and `ECDH-SS + HKDF-256`
    becomes `ECDH_SS_and_HKDF_256`.
- Incudes `JSDoc` with a description as well as a note as to whether the value
  is currently deprecated or recommended.
- It does _not_ support reverse lookups. For example, there is not built in way
  to find the name for, for example, the value `0` (a reverse lookup would yield
  `Reserved`).

### 💻 Installation

To install the package, you can use npm or yarn:

```sh
npm install @exact-realty/cose-algorithms
```

or

```sh
yarn add @exact-realty/cose-algorithms
```

### 📚 Usage

#### Decrypting Data

```javascript
import { encodings, decrypt } from '@exact-realty/cose-algorithms';

```

### 🤝 Contributing

We welcome any contributions and feedback! Please feel free to submit pull
requests, bug reports or feature requests to our GitHub repository.

### 📜 License

This project is dedicated to the public domain, and you may do with it as you
wish. Check out the `LICENSE.txt` file for more information.

If you download the full sources, note that some support files might (such as
`.prettierrc.cjs`) might have a different license. In those cases, that license
applies.

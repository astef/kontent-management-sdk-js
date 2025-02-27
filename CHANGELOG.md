# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.8.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.7.0...v2.8.0) (2022-06-30)


### Features

* Adds support for default values in text, taxonomy, date time, multiple choice and number elements ([eb22c57](https://github.com/Kentico/kontent-management-sdk-js/commit/eb22c577d7e93c242c14c4f1c8b6cabb2b874dec))
* updates all dev dependencies ([24a8c89](https://github.com/Kentico/kontent-management-sdk-js/commit/24a8c895ed2bd6dba8cac392f1ae3f86a25f9f4e))

## [2.7.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.6.0...v2.7.0) (2022-05-24)


### Features

* adds additional properties to add webhook model ([3426c7f](https://github.com/Kentico/kontent-management-sdk-js/commit/3426c7ff642d45a5fa11a18209d33809da47bbbc))


### Bug Fixes

* makes webhook triggers optional ([fc83181](https://github.com/Kentico/kontent-management-sdk-js/commit/fc8318124a5ade9604022217cdd5d1a0a6cc927a))

## [2.6.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.5.0...v2.6.0) (2022-05-19)


### Features

* Adds support for 'Update workflow' query (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/78) ([c98fb2e](https://github.com/Kentico/kontent-management-sdk-js/commit/c98fb2efda5a840a36a0b14a00d876f00fef5202))
* Adds support for allowed link types ([2fc7689](https://github.com/Kentico/kontent-management-sdk-js/commit/2fc768933b47d47c346412028ddb920be26af04d))
* updates dependencies ([2686a9b](https://github.com/Kentico/kontent-management-sdk-js/commit/2686a9b64001f69198e8833788ccc5195c2a5b80))

## [2.5.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.4.0...v2.5.0) (2022-04-14)


### Features

* Implements new workflow endpoints (https://github.com/Kentico/kontent-management-sdk-js/issues/74) ([2931924](https://github.com/Kentico/kontent-management-sdk-js/commit/29319246bde19dc841e49f343b8e2c31bbf88e86))
* updates dev dependencies ([447de8d](https://github.com/Kentico/kontent-management-sdk-js/commit/447de8d68c2c6f24fb9744b226b416aab19b7991))

## [2.4.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.2.0...v2.4.0) (2022-03-28)


### Features

* updates deps ([5f4f394](https://github.com/Kentico/kontent-management-sdk-js/commit/5f4f3946169f87bd8b3326a686936ebf16ec444d))


### Bug Fixes

* Adds missing IAssetElement to ContentTypeElementModel type ([12f9a9e](https://github.com/Kentico/kontent-management-sdk-js/commit/12f9a9eb018c8f5c6c8417e4c748ef3ab40359b0))

## [2.3.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.2.0...v2.3.0) (2022-03-23)


### Features

* updates deps ([5f4f394](https://github.com/Kentico/kontent-management-sdk-js/commit/5f4f3946169f87bd8b3326a686936ebf16ec444d))

## [2.2.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.1.0...v2.2.0) (2022-03-17)


### Features

* adds is_non_localizable property to type elements ([5ef6096](https://github.com/Kentico/kontent-management-sdk-js/commit/5ef609646ae258dd3746dbdc6b60efc918d166e1))

## [2.1.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.0.2...v2.1.0) (2022-03-10)

### New add / upsert asset query syntax

The `upsertAsset` and `addAsset` queries now use `builder` that helps setting new asset's `elements` property. Currently, only `taxonomy` element is supported. You may need to update your syntax to following format: 

```typescript
    client.addAsset()
        .withData((builder) => {
            return {
                descriptions: [],
                elements: [
                   builder.taxonomyElement({
                    element: {
                        codename: 'taxonomy-categories'
                    },
                    value: [
                        {
                            codename: 'coffee'
                        },
                        {
                            codename: 'brewing'
                        }
                    ]
                })
                ],
                    file_reference: {
                        id: 'x',
                        type: 'internal'
                    }
                };
            })
        .toPromise();
```


### Features

* adds support for Environment endpoints
* adds support for asset rendition endpoints (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/68) ([9e22f6e](https://github.com/Kentico/kontent-management-sdk-js/commit/9e22f6e4167bbe75199f1e7228d79c70ff98bc6c))
* adds support for taxonomy elements (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/71) ([d8f3f21](https://github.com/Kentico/kontent-management-sdk-js/commit/d8f3f21419050a7335d2fd4e812ac02d7c13a24f))
* updates deps ([945ad06](https://github.com/Kentico/kontent-management-sdk-js/commit/945ad06e9647414a3f3a7ab1e3c415794e5411df))

### [2.0.2](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.0.2-0...v2.0.2) (2022-01-20)

### [2.0.2-0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.0.1...v2.0.2-0) (2022-01-20)


### Bug Fixes

* Return `urlSlugElement()` to elements builder ([41e63c2](https://github.com/Kentico/kontent-management-sdk-js/commit/41e63c2b6ae818ed495869a8bf805f0cc78fccb5))

### [2.0.1](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.0.1-0...v2.0.1) (2022-01-19)

### Bug Fixes

* Correct the generic `get()` HTTP method ([65946d8](https://github.com/Kentico/kontent-management-sdk-js/commit/65946d8dea3ab7903ceb88a50afa3b7b74d98c35))

## [2.0.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v2.0.0-1...v2.0.0) (2022-01-13)

### Features

* Adds management client factory and updates docs to use it ([14aa84e](https://github.com/Kentico/kontent-management-sdk-js/commit/14aa84eda137f940662dc152aa858478b57c380f))
* Adds support for listing project roles ([1aae040](https://github.com/Kentico/kontent-management-sdk-js/commit/1aae040bccbd049f4d757ae045de96be587877ec))
* Adds support for project user endpoints ([abe35f9](https://github.com/Kentico/kontent-management-sdk-js/commit/abe35f9ba890229e4902901d48f939d3f85cc820))
* Adds support for Subscription API (subscription projects & users), updates client configuration by separating management & subscription endpoints ([e43ccc3](https://github.com/Kentico/kontent-management-sdk-js/commit/e43ccc3f3221cdc5f75ca2697988a9c70dc2e6d5))
* Adds support for view role ([acb653c](https://github.com/Kentico/kontent-management-sdk-js/commit/acb653c58a4f867faf0ad3c6a692bf3d3562273e))
* updates all dependencies to latest versions ([4bc7fcd](https://github.com/Kentico/kontent-management-sdk-js/commit/4bc7fcda2e2dbe29977418b9128ce1c1eb975315))
* Uses list query for taxonomy list endpoint and removes temporary taxonomy response included due to a breaking change in API some time ago ([827279d](https://github.com/Kentico/kontent-management-sdk-js/commit/827279d07d5a29bee6e047fd8fcb62217b6ea998))


### Bug Fixes

* fixes scripts & cuts prerelease ([3c25601](https://github.com/Kentico/kontent-management-sdk-js/commit/3c256011b82a5a8fbfa16f303a3ce78e10c12225))

## [2.0.0-0](https://github.com/Kentico/kontent-management-sdk-js/compare/v1.8.0...v2.0.0-0) (2022-01-13)

### Features

* Adds management client factory and updates docs to use it ([14aa84e](https://github.com/Kentico/kontent-management-sdk-js/commit/14aa84eda137f940662dc152aa858478b57c380f))
* Adds support for listing project roles ([1aae040](https://github.com/Kentico/kontent-management-sdk-js/commit/1aae040bccbd049f4d757ae045de96be587877ec))
* Adds support for project user endpoints ([abe35f9](https://github.com/Kentico/kontent-management-sdk-js/commit/abe35f9ba890229e4902901d48f939d3f85cc820))
* Adds support for Subscription API (subscription projects & users), updates client configuration by separating management & subscription endpoints ([e43ccc3](https://github.com/Kentico/kontent-management-sdk-js/commit/e43ccc3f3221cdc5f75ca2697988a9c70dc2e6d5))
* Adds support for view role ([acb653c](https://github.com/Kentico/kontent-management-sdk-js/commit/acb653c58a4f867faf0ad3c6a692bf3d3562273e))
* updates all dependencies to latest versions ([4bc7fcd](https://github.com/Kentico/kontent-management-sdk-js/commit/4bc7fcda2e2dbe29977418b9128ce1c1eb975315))
* Uses list query for taxonomy list endpoint and removes temporary taxonomy response included due to a breaking change in API some time ago ([827279d](https://github.com/Kentico/kontent-management-sdk-js/commit/827279d07d5a29bee6e047fd8fcb62217b6ea998))

## [1.8.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v1.7.0...v1.8.0) (2021-12-16)

* Adds validation message to Text element regex property

## [1.7.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v1.6.0...v1.7.0) (2021-11-29)


### Features

* adds guidelines to taxonomy element data model ([9f436cd](https://github.com/Kentico/kontent-management-sdk-js/commit/9f436cd4d2c085acb6b7b83822a4183e76df70ed))
* adds support for subpages element & uses type in favor of enum for some models ([5713d8f](https://github.com/Kentico/kontent-management-sdk-js/commit/5713d8f5ae75023040dd2d0b60dc7d7b77c0755f))
* adds validation_regex support for text element ([ac81a48](https://github.com/Kentico/kontent-management-sdk-js/commit/ac81a48e910e8efc74b020540a00fe555397364d))
* improves types for element builders ([0c076c6](https://github.com/Kentico/kontent-management-sdk-js/commit/0c076c60bf5ce06e2b6e6a874435962b73529d96))
* removes unnecessary builder code by extending content type snippet builder ([728a5e1](https://github.com/Kentico/kontent-management-sdk-js/commit/728a5e1b37b46314eba7ff04d73bdab53b05a8dc))
* updates dependencies ([391b29b](https://github.com/Kentico/kontent-management-sdk-js/commit/391b29b610b004bd225d016a70277fa482896688))

## [1.6.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v1.5.0...v1.6.0) (2021-11-02)


### Features

* updates deps ([1d0a095](https://github.com/Kentico/kontent-management-sdk-js/commit/1d0a0958e1fa3f3ea73f5080818a810a6c4d5bef))
* updates deps ([1144509](https://github.com/Kentico/kontent-management-sdk-js/commit/1144509873cb8a3e059b716d6d28708b1ef92c74))

## [1.5.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v1.4.0...v1.5.0) (2021-09-24)


### Features

* updates dependencies ([93b80c7](https://github.com/Kentico/kontent-management-sdk-js/commit/93b80c719d52750f1bff5f110535b356b7c3179d))

## [1.4.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v1.3.0...v1.4.0) (2021-08-25)


### Features

* updates deps ([e306ba6](https://github.com/Kentico/kontent-management-sdk-js/commit/e306ba6c80973f90380d51280a39c7d3df4e6f87))


### Bug Fixes

* adds 'id' property to component rich text model (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/50) ([e038feb](https://github.com/Kentico/kontent-management-sdk-js/commit/e038feb1467637498307dacf92f55efba500585d))

## [1.3.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v1.2.0...v1.3.0) (2021-08-12)


### Features

* updates dependencies ([4031f16](https://github.com/Kentico/kontent-management-sdk-js/commit/4031f162efe4a74c019717bd396656b5e6d7721b))

## [1.2.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v1.1.0...v1.2.0) (2021-07-30)


### Features

* adds environment to project information (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/49) ([3b49ccf](https://github.com/Kentico/kontent-management-sdk-js/commit/3b49ccf5b3dea4ec0c6b8299e7d99bc2904ca4ff))

## [1.1.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v1.0.0...v1.1.0) (2021-07-19)

### Migration from 0.x.y

There are some notable changes when migrating from `0.x.y` (latest release `0.4.10`) version of sdk:

* `Rxjs` was removed from dependencies and is no longer included with this SDK. One major benefit is reduced complexity & size of this library (about 30-40% size reduction).
* `toObservable` was removed without replacement in favor of `toPromise`. If you need to keep using `Observable`, use `from` operator that comes with `rxjs` (https://www.learnrxjs.io/learn-rxjs/operators/creation/from)
* Distributed files, formats and paths were modified. Available outputs: `dist/bundles`, `dist/cjs`, `dist/es6`, `dist/es2020`, `dist/esnext`
* `isDeveloper` configuration option was removed without replacement
* `retryStrategy` configuration was updated and simplifies. New options are listed at https://github.com/Kentico/kontent-core-js/blob/7ec7faaa779a4aa55802ade927f296cc3619a720/lib/http/http.models.ts#L16
* Support for additional endpoints:
    - Create, update & list of collections
    - List language variants by collection
    - Create asset + binary file from external URL
* Improved typings for content type elements
* Other minor improvements & bug fixes

### Features

* adds mode & searchableValue to variant element model and contract ([13d9b84](https://github.com/Kentico/kontent-management-sdk-js/commit/13d9b84ac36663a3689dbd9f6ea19c5293d10247))
* adds support for constructing edit urls (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/10) ([ba2fc2e](https://github.com/Kentico/kontent-management-sdk-js/commit/ba2fc2e5949bcba840b69e72cd928ec3719ea29a))
* adds support for creating & updating collections ([db2a1d2](https://github.com/Kentico/kontent-management-sdk-js/commit/db2a1d2ea3e2ee7d8a904d64ce4472c32e0d4fc7))
* adds support for listing collections ([01bcc2b](https://github.com/Kentico/kontent-management-sdk-js/commit/01bcc2b1e38a4554b437cae0505f228b5cbb8538))
* adds support for listing language variants by collection ([f12a877](https://github.com/Kentico/kontent-management-sdk-js/commit/f12a877d392f984c0e2c3eb1d675581e7706e69b))
* adds support for taxonomy 'term_count_limit' option (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/48) ([f19aae4](https://github.com/Kentico/kontent-management-sdk-js/commit/f19aae46acfee855d8a3edccd918647685af3cfb))
* adds support for uploading assets & binary files from url (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/18), adds automatic mime type detection support ([d54a0b8](https://github.com/Kentico/kontent-management-sdk-js/commit/d54a0b8ab94d411056bccb194a87fcd19bf86592))
* adds types support for content type elements (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/46) ([01f7c82](https://github.com/Kentico/kontent-management-sdk-js/commit/01f7c8225ac318b41a6d40b9acc98bb6733f34e9))
* removes 'isDeveloperMode' config property as its not utilized anymore ([986cc40](https://github.com/Kentico/kontent-management-sdk-js/commit/986cc408984601da3db4e2cd9dc6c7e480909eab))
* removes "_" from dist folder names ([079c1f6](https://github.com/Kentico/kontent-management-sdk-js/commit/079c1f6156a1f70a4409a229c8ea4b35680a804f))
* updates deps ([43e857c](https://github.com/Kentico/kontent-management-sdk-js/commit/43e857c3576930680f46537e160c16e95c43c088))
* updates deps ([6123ea0](https://github.com/Kentico/kontent-management-sdk-js/commit/6123ea087eda96364b1f4903e1d8c394ec5c9b36))
* updates deps ([fe0778d](https://github.com/Kentico/kontent-management-sdk-js/commit/fe0778d4a673fa113bdb790965062d1754c5e948))
* updates deps (fixes retry strategy) ([946f864](https://github.com/Kentico/kontent-management-sdk-js/commit/946f86438a0f4ebce6e3e607ef5237eb189c33ae))
* updates kontent-core dependency to v9 ([dd25dd4](https://github.com/Kentico/kontent-management-sdk-js/commit/dd25dd431d76f11104eb057b734942ce5a927af3))
* use 'mime' npm instead of 'mime-type' due to browser compatibility support ([2200b73](https://github.com/Kentico/kontent-management-sdk-js/commit/2200b73155110d21f8d5a1e49d45da8e5f3f58e8))


### Bug Fixes

* fixes cjs folder name ([d470214](https://github.com/Kentico/kontent-management-sdk-js/commit/d470214401188a9bc08c851cbe3a839cf6cf5acc))
* fixes commonjs folder output ([5abf59f](https://github.com/Kentico/kontent-management-sdk-js/commit/5abf59f170b17cd7f5a3a0afbf535f2afb896c6a))
* fixes package.json entry modules ([0fa0176](https://github.com/Kentico/kontent-management-sdk-js/commit/0fa01762cdda432611be3cff4a36236bfc3e2f20))

### [0.4.10](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.9...v0.4.10) (2021-04-21)


### Features

* adds support for enabling / disabling webhooks ([485cfe0](https://github.com/Kentico/kontent-management-sdk-js/commit/485cfe0da81c435958fc39359a4485261a1285d3))

### [0.4.9](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.8...v0.4.9) (2021-04-21)


### Features

* adds support for codename in workflow related endpoints & queries (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/35) ([98f1ddf](https://github.com/Kentico/kontent-management-sdk-js/commit/98f1ddf020663beb325759fba10ed9f175c0dda8))
* adds url encoding tests & changes name of internal base query props ([6413d3f](https://github.com/Kentico/kontent-management-sdk-js/commit/6413d3f8696d2ff2008b6f916557abd5e9deb1e3))
* simplifies scripts & update dependencies ([b948be5](https://github.com/Kentico/kontent-management-sdk-js/commit/b948be5dab88398dc1f9b7bed9e40ff307e2ff19))


### Bug Fixes

* fixes contract for 'type' in 'UpsertContentItem' query (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/39) ([a9e72ab](https://github.com/Kentico/kontent-management-sdk-js/commit/a9e72abfdff7d7c6ec08637216e29563ea7aff5a))

### [0.4.8](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.7...v0.4.8) (2021-01-08)


### Features

* updates dependencies ([bdde42c](https://github.com/Kentico/kontent-management-sdk-js/commit/bdde42cc9bc27139efecc57622d466abfa6dd523))

### [0.4.7](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.6...v0.4.7) (2020-12-15)


### Features

* adds 'cancel scheduled unpublish' endpoint support ([9860c1b](https://github.com/Kentico/kontent-management-sdk-js/commit/9860c1bd346ac7b52d46deafcd5abf4502474716))

### [0.4.6](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.5...v0.4.6) (2020-12-14)


### Features

* adds support for new unpublish / schedule unpublish endpoint & removes deprecated unpublish endpoint (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/28) ([4da0b6b](https://github.com/Kentico/kontent-management-sdk-js/commit/4da0b6b646e21899cc19c892e40e5f23474d487b))
* unifies publish / unpublish naming convention, removes unsused query models ([cc78e90](https://github.com/Kentico/kontent-management-sdk-js/commit/cc78e90829e0e7b9b378ced4e4684908230ff510))
* updates all dependencies ([6b2e7c1](https://github.com/Kentico/kontent-management-sdk-js/commit/6b2e7c14721131a0e917faba7d7962e234856f4d))


### Bug Fixes

* makes 'item_count_limit' optional (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/29) ([826a0eb](https://github.com/Kentico/kontent-management-sdk-js/commit/826a0ebfc4156f99d64c961e9edc3bcf35b3f21f))

### [0.4.5](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.4...v0.4.5) (2020-11-23)


### Features

* updates all dependencies, uses axios models directly instead of proxy models ([53837e1](https://github.com/Kentico/kontent-management-sdk-js/commit/53837e1cf64635d827b0407af6f5e5892cb35925))

### [0.4.4](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.3...v0.4.4) (2020-11-12)


### Bug Fixes

* uses correct query identifier for upsert content item query ([6079c04](https://github.com/Kentico/kontent-management-sdk-js/commit/6079c0496f5088ef510afc9aa2f47dd3b2ef057f))

### [0.4.3](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.2...v0.4.3) (2020-10-23)


### Bug Fixes

* fixes interface typo (applied_to -> applies_to) in content type elements builder ([b019338](https://github.com/Kentico/kontent-management-sdk-js/commit/b0193384edc7179d09ed424a2e721a11297d0184))

### [0.4.2](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.1...v0.4.2) (2020-10-21)


### Bug Fixes

* encodes url by default. Fixes errors when url contained special characters (such as space in filename within uploadBinaryFile method) ([7c318f5](https://github.com/Kentico/kontent-management-sdk-js/commit/7c318f5f33d00b3f4b5bf142e29877fb234d3df4))

### [0.4.1](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.4.0...v0.4.1) (2020-10-07)


### Features

* adds 'responseFetched' callback configuration property to IContentManagementListQueryConfig ([f2371f8](https://github.com/Kentico/kontent-management-sdk-js/commit/f2371f886b4eb1eb5c3f07dcd823dbfcd675707a))

## [0.4.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.20...v0.4.0) (2020-09-30)


### ⚠ BREAKING CHANGES

* adds new rich text element properties and removes class mapping of content type element properties. Reason for this removal is that the model class was missing many of existing properties (e.g. rich text element & text element properties are very different) and there was no benefit in using this class.
* refactors language variants query - adds builder similar to addContentType query which gives developers intellisense and better control over creating variants

### Features

* adds new rich text element properties and removes class mapping of content type element properties. Reason for this removal is that the model class was missing many of existing properties (e.g. rich text element & text element properties are very different) and there was no benefit in using this class. ([fec3fc4](https://github.com/Kentico/kontent-management-sdk-js/commit/fec3fc4b84180da2078b22931afcda408467d0f7))
* adds support for collections (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/26) ([9f653b0](https://github.com/Kentico/kontent-management-sdk-js/commit/9f653b0ac8084ea1488838ff76a512f7fc32078e))
* refactors language variants query - adds builder similar to addContentType query which gives developers intellisense and better control over creating variants ([e4c003e](https://github.com/Kentico/kontent-management-sdk-js/commit/e4c003edf9dcf191d23ca17a289b1fed0a2d45f2))
* updates deps + refactors content management error handling ([9b5ca5b](https://github.com/Kentico/kontent-management-sdk-js/commit/9b5ca5bba36d328549ebe9fa28325bedcb9d1ffc))

### [0.3.20](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.19...v0.3.20) (2020-06-24)


### Features

* adds missing type properties to content item contract (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/12) ([022e267](https://github.com/Kentico/kontent-management-sdk-js/commit/022e2679864fcce6dde36f2da34a48f98198196f))
* adds support for generic queries (POST, PATCH, GET, PUT & PATCH) ([ce00b49](https://github.com/Kentico/kontent-management-sdk-js/commit/ce00b4946963855ae0016da2e9514bfb248ddfd7))
* adds support for modify taxonomy query (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/15) ([fd96edc](https://github.com/Kentico/kontent-management-sdk-js/commit/fd96edc0ef6412cef48a45f6f2723c30158ffc46))
* hints file reference 'internal' type ([0ad6476](https://github.com/Kentico/kontent-management-sdk-js/commit/0ad6476ac14bce06f4449d60263e1cdb69a96482))
* updates deps ([db94674](https://github.com/Kentico/kontent-management-sdk-js/commit/db946746593ddf4f0c2c89107de3a53154c27a6b))


### Bug Fixes

* uses correct url property for add taxonomy query ([7ba17dc](https://github.com/Kentico/kontent-management-sdk-js/commit/7ba17dc18e8d265356d529e18ff44abd3081b719))

### [0.3.19](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.18...v0.3.19) (2020-04-08)


### Features

* updates dependencies ([69262d1](https://github.com/Kentico/kontent-management-sdk-js/commit/69262d1a279e46b75642c780c1d61c3e940cfc67))

### [0.3.18](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.17...v0.3.18) (2020-02-25)


### Features

* adds 'codename' to content item upsert model & makes 'type' optional ([2c2b4fa](https://github.com/Kentico/kontent-management-sdk-js/commit/2c2b4fa16ad7eef077b2217259816ce8eca6f024))
* removes deprecated sitemap locations ([71bda7e](https://github.com/Kentico/kontent-management-sdk-js/commit/71bda7e5132413abcfb03aa96b3df3974d70af64))


### Bug Fixes

* removes data processing in asset update request data ([7898689](https://github.com/Kentico/kontent-management-sdk-js/commit/78986895f9068cda6b8e6dc9a8161c9ef62adf36))
* uses proper model without additional processing for adding taxonomies ([585fd4e](https://github.com/Kentico/kontent-management-sdk-js/commit/585fd4e6860c849f3ed3d69e1d50fb9299150a3c))

### [0.3.17](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.16...v0.3.17) (2020-01-23)


### Features

* adds support for content groups in content types and adds missing external id props to content type & snippet ([20a71fd](https://github.com/Kentico/kontent-management-sdk-js/commit/20a71fde570acb072e107ad9f00d5ae2ef1fba70))

### [0.3.16](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.15...v0.3.16) (2020-01-22)


### Features

* adds support for 'modifyContentTypeSnippet' endpoint ([a326689](https://github.com/Kentico/kontent-management-sdk-js/commit/a3266892e391aadb1d6ae9da8f6fa6d67b5974fe))

### [0.3.15](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.14...v0.3.15) (2020-01-21)

### Features

* Added is_required to ILinkedItemsInType

### [0.3.14](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.13...v0.3.14) (2020-01-15)


### Bug Fixes

* assigns raw data to asset folders correctly ([654ef6b](https://github.com/Kentico/kontent-management-sdk-js/commit/654ef6b027dac040219a90f02e58d89208e78395))

### [0.3.13](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.12...v0.3.13) (2020-01-15)


### Bug Fixes

* re-release due to leftover files in dist folder (no code changes) ([eb84a96](https://github.com/Kentico/kontent-management-sdk-js/commit/eb84a96f3750f5b95d33d274fc7619d12b35f692))

### [0.3.12](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.11...v0.3.12) (2020-01-15)


### Bug Fixes

* fixes typo in 'ILinkedITemsInType' elements builder interface ([fc36157](https://github.com/Kentico/kontent-management-sdk-js/commit/fc361577082bfe9ceb2f8ddb775a6434ec6776cb))
* removes obsolete update asset query in favor of upsert query which is now in sync with other endpoints and use proper input data and indentifiers ([9308880](https://github.com/Kentico/kontent-management-sdk-js/commit/93088802df6a4312e5586ff4413ad2837d304971))

### [0.3.11](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.10...v0.3.11) (2020-01-14)


### Features

* adds '_raw' property to language variant with component ([58fcb6b](https://github.com/Kentico/kontent-management-sdk-js/commit/58fcb6be07f4647112d74c110f7fef347c7198be))

### [0.3.10](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.9...v0.3.10) (2020-01-13)


### Features

* adds new url property to asset contract & models ([fd188c1](https://github.com/Kentico/kontent-management-sdk-js/commit/fd188c1652a488bd836825fcc0472b856bc275ee))

### [0.3.9](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.8...v0.3.9) (2020-01-09)


### Bug Fixes

* assigns raw data to language model ([e09e7c1](https://github.com/Kentico/kontent-management-sdk-js/commit/e09e7c11703e532f2f89fd0203c947a96c0ce402))
* fixes model for adding assets ([f938501](https://github.com/Kentico/kontent-management-sdk-js/commit/f938501f895fa56a3cf0f129747be94c5cf2d46d))

### [0.3.8](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.7...v0.3.8) (2020-01-09)


### Bug Fixes

* removes elements query data from delete language variant query ([f7cee7a](https://github.com/Kentico/kontent-management-sdk-js/commit/f7cee7ad0a9a7fa4abdd88dc9566621df1510e6e))

### [0.3.7](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.6...v0.3.7) (2020-01-09)


### Features

* adds support delete language variant API endpoint ([90188c7](https://github.com/Kentico/kontent-management-sdk-js/commit/90188c747fd2b3d6c84823116d869be3ca1330ef))

### [0.3.6](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.5...v0.3.6) (2020-01-07)


### Features

* updates all dependencies (reworks retryStrategy options to give more control over what errors should be retried) ([29dc496](https://github.com/Kentico/kontent-management-sdk-js/commit/29dc4965cc56f58d830895a96ada20ecbb1de075))

### [0.3.5](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.4...v0.3.5) (2020-01-06)


### Features

* exposes more mapping methods (e.g. mapping contentType instead of whole response) ([c01804f](https://github.com/Kentico/kontent-management-sdk-js/commit/c01804fa694e0be83b80a233edb78cd09f6c5f36))

### [0.3.4](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.3...v0.3.4) (2020-01-06)


### Features

* adds '_raw' property with original data to base models & fixes incorrect model for content type snippes responses ([c4606c8](https://github.com/Kentico/kontent-management-sdk-js/commit/c4606c82e7ed8c84e3a7a012413d5c638d8eacce))

### [0.3.3](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.2...v0.3.3) (2020-01-06)


### Bug Fixes

* fixes return type of 'toAllPromise' so that it matched original 'toAllPromise'. Adds type check test for items in listing query. ([212829e](https://github.com/Kentico/kontent-management-sdk-js/commit/212829e3da730b37486265034fc5a42aa730c2c5))

### [0.3.2](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.1...v0.3.2) (2019-12-19)


### Features

* creates MappingService and exposes it via ManagementClient. This service can be used for mapping raw data to SDK models. ([146b4b7](https://github.com/Kentico/kontent-management-sdk-js/commit/146b4b72b502f3047d56e15b330398a896789cc0))

### [0.3.1](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.3.0...v0.3.1) (2019-12-19)


### Features

* adds ability to set delay between requests made by listing queries to prevent being rate limited by CM API ([b561d10](https://github.com/Kentico/kontent-management-sdk-js/commit/b561d102c1feff443d42ffdba3274cddc06f5209))

## [0.3.0](https://github.com/Kentico/kontent-management-sdk-js/compare/v0.2.8...v0.3.0) (2019-12-18)


### ⚠ BREAKING CHANGES

* implements ability to get all items with automatic paging using `toAllPromise` and `toAllPromise` extension methods. This commit changes names of some responses and also changes name of property holding paged items to 'items'.

### Features

* adds support for list/add/modify asset folders endpoints ([b35b08d](https://github.com/Kentico/kontent-management-sdk-js/commit/b35b08d6391f0ae6cbfb988499ec6bbe05213a0e))
* implements ability to get all items with automatic paging using `toAllPromise` and `toAllPromise` extension methods. This commit changes names of some responses and also changes name of property holding paged items to 'items'. ([c77353f](https://github.com/Kentico/kontent-management-sdk-js/commit/c77353f460cfe8a6f85f8e4a02a14fbaaf9eed3e))


### Bug Fixes

* fixes incorrect import source in readme ([5642343](https://github.com/Kentico/kontent-management-sdk-js/commit/5642343dbdbfec2b0347cfab627cc3195b22a16b))
* uses base github url in package.json to fix automatic commit url generation ([38b243e](https://github.com/Kentico/kontent-management-sdk-js/commit/38b243ec1f7e2079f40ead553254e611d45b4084))

### [0.2.8](https://github.com///compare/v0.2.7...v0.2.8) (2019-12-16)


### Features

* adds codename to add taxonomy data model ([7bb118b](https://github.com/Kentico/kontent-management-sdk-js/commit/7bb118b8ea429856f50de6095488744e0a554486))
* adds support for add/get/list webhooks endpoints ([5744e94](https://github.com/Kentico/kontent-management-sdk-js/commit/5744e943fd44e13dc10bd173f290e2eeb33dcd0e))
* adds support for project information endpoint ([234f175](https://github.com/Kentico/kontent-management-sdk-js/commit/234f175865ea3dcf0e4852c91cbec19e1f2119e1))
* adds support for retrieving single taxonomy items ([0cdb48f](https://github.com/Kentico/kontent-management-sdk-js/commit/0cdb48fc54e43d95f7c029d9e8dca8c46d4f1e1c))
* adds support for setting content item codename during  creation ([94c1f94](https://github.com/Kentico/kontent-management-sdk-js/commit/94c1f940fb9bf99b43ca69a2c49a48c8ac6e8753))
* adds support for updating conten item codename ([9c7786e](https://github.com/Kentico/kontent-management-sdk-js/commit/9c7786e6cf6904c065a77ca06f77b0938ee78f1a))


### Bug Fixes

* uses internal id for content type identifier instead of external id ([bb6d46b](https://github.com/Kentico/kontent-management-sdk-js/commit/bb6d46b0233d1951bc0931a699b70fd3ee629caa))

### [0.2.7](https://github.com///compare/v0.2.6...v0.2.7) (2019-11-21)


### Features

* add support for 'ListLanguageVariantsOfContentTypeWithVariants' API endpoint ([008f5e5](https://github.com/Kentico/kontent-management-sdk-js/commit/008f5e5dc5bd3dd9f5d7619b6ca4ed3c32d4d6fd))
* adds additional language reference properties and fixes filename ([73109ad](https://github.com/Kentico/kontent-management-sdk-js/commit/73109adc058054ee3eeff3fd82e7cc799ed7ce0a))

### [0.2.6](https://github.com///compare/v0.2.5...v0.2.6) (2019-11-21)


### Bug Fixes

* uses reference contract instead of reference object ([5df58b1](https://github.com/Kentico/kontent-management-sdk-js/commit/5df58b17a196d09c20584207d4ec17455e8f4b86))

### [0.2.5](https://github.com///compare/v0.2.4...v0.2.5) (2019-11-20)


### Bug Fixes

* updates @kentico/kontent-core dep which removes testing warn logging in console ([cf38dbe](https://github.com/Kentico/kontent-management-sdk-js/commit/cf38dbe307beeaefe5d3e4a96ab3d4ec2aaf0fe3))

### [0.2.4](https://github.com///compare/v0.2.3...v0.2.4) (2019-11-13)


### Features

* adds codename property to 'addContentType' and 'addContentTypeSnippet' queries, adds 'content_groups' property to 'addContentType' ([bec6a8c](https://github.com/Kentico/kontent-management-sdk-js/commit/bec6a8c9b64da104d2066ef10451b549caea87ac))

### [0.2.3](https://github.com///compare/v0.2.2...v0.2.3) (2019-11-13)


### Features

* adds 'isDeveloperMode' client configuration option. If this option is enabled, additional errors are logged in console. ([7d64864](https://github.com/Kentico/kontent-management-sdk-js/commit/7d648648f467e0f356e073e134910c7dd7ebea4c))
* adds optional data query builder class and uses it for 'publishOrScheduleLanguageVariant' method to allow for skipping data. Fixes https://github.com/Kentico/kontent-management-sdk-js/issues/5 ([e5cb868](https://github.com/Kentico/kontent-management-sdk-js/commit/e5cb868689b0c9699b344c6ae316d644d9f47ce0))
* adds support for pagination with x-continuation header token, adds ability to set headers in query config, internally refactors the way headers are retrieved, changes debug response type to include strongly typed properties ([7efafc0](https://github.com/Kentico/kontent-management-sdk-js/commit/7efafc002dbfba00f218b39377c82b6233b833a4))
* internal - separates query builders from queries ([513d058](https://github.com/Kentico/kontent-management-sdk-js/commit/513d05848990b5fbf10b34f0c02750447110ba2e))


### Bug Fixes

* removes the ability to set entire query config to prevent overriding headers ([8115e2a](https://github.com/Kentico/kontent-management-sdk-js/commit/8115e2a4037c0d1f45d289458fb825be80fccc23))
* sets correct data model for modifying language (fixes https://github.com/Kentico/kontent-management-sdk-js/issues/7) ([ae740e4](https://github.com/Kentico/kontent-management-sdk-js/commit/ae740e4af92efe1f3ab9897a0cb7236d4a33334d))

### [0.2.2](https://github.com///compare/v0.2.1...v0.2.2) (2019-11-05)


### Features

* adds elements builder for add content type snippet query ([74249a9](https://github.com/Kentico/kontent-management-sdk-js/commit/74249a9b3f2f7d129cfead97c2f39610b8ae6584))
* adds elements builder with models for convenient creation of new content types ([6b0128e](https://github.com/Kentico/kontent-management-sdk-js/commit/6b0128ea5482e23cf310c6c1743e4f7062b226b6))


### Bug Fixes

* updates kontent-core package which fixes http retry requests ([5545f10](https://github.com/Kentico/kontent-management-sdk-js/commit/5545f10f663287a5cea1aff8a87864d250d5bc6e))

### [0.2.1](https://github.com///compare/v0.2.0...v0.2.1) (2019-10-31)


### Bug Fixes

* Fixes modifyLanguage request type (https://github.com/Kentico/kontent-management-sdk-js/issues/3) ([cc989ce](https://github.com/Kentico/kontent-management-sdk-js/commit/cc989cefb26ddd45324e15710dfd5a02a76b0166))
* Updates kontent-core package which fixes patch requests incorrectly using put callback ([e9faa5d](https://github.com/Kentico/kontent-management-sdk-js/commit/e9faa5d8d4f1b8293fc01b9d809458c12964f498))

## 0.2.0 (2019-10-25)


### ⚠ BREAKING CHANGES

* implements 'modifyContentType' endpoint, uses new retry policy & uses standard versioning

### Features

* implements 'modifyContentType' endpoint, uses new retry policy & uses standard versioning ([75a9e74](https://github.com/Kentico/kontent-management-sdk-js/commit/75a9e7439b6f87fe71cd6118ec7eb4e57099c210))

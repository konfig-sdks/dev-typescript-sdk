<div align="left">

[![Visit Dev](./header.png)](https://dev.to)

# [Dev](https://dev.to)<a id="dev"></a>

Access Forem articles, users and other resources via API.
        For a real-world example of Forem in action, check out [DEV](https://www.dev.to).
        All endpoints can be accessed with the 'api-key' header and a accept header, but
        some of them are accessible publicly without authentication.

        Dates and date times, unless otherwise specified, must be in
        the [RFC 3339](https://tools.ietf.org/html/rfc3339) format.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`dev.articles.createNewArticle`](#devarticlescreatenewarticle)
  * [`dev.articles.getAllUserArticles`](#devarticlesgetalluserarticles)
  * [`dev.articles.getById`](#devarticlesgetbyid)
  * [`dev.articles.getByPath`](#devarticlesgetbypath)
  * [`dev.articles.getPublishedList`](#devarticlesgetpublishedlist)
  * [`dev.articles.getPublishedList_0`](#devarticlesgetpublishedlist_0)
  * [`dev.articles.getUnpublishedList`](#devarticlesgetunpublishedlist)
  * [`dev.articles.listArticles`](#devarticleslistarticles)
  * [`dev.articles.listByPopularity`](#devarticleslistbypopularity)
  * [`dev.articles.listLatestPublished`](#devarticleslistlatestpublished)
  * [`dev.articles.listPublishedArticles`](#devarticleslistpublishedarticles)
  * [`dev.articles.unpublishById`](#devarticlesunpublishbyid)
  * [`dev.articles.updateById`](#devarticlesupdatebyid)
  * [`dev.billboards.createNewBillboard`](#devbillboardscreatenewbillboard)
  * [`dev.billboards.getById`](#devbillboardsgetbyid)
  * [`dev.billboards.getList`](#devbillboardsgetlist)
  * [`dev.billboards.unpublishBillboard`](#devbillboardsunpublishbillboard)
  * [`dev.billboards.updateById`](#devbillboardsupdatebyid)
  * [`dev.comments.getAllThreaded`](#devcommentsgetallthreaded)
  * [`dev.comments.getThreadedComment`](#devcommentsgetthreadedcomment)
  * [`dev.followedTags.getTagList`](#devfollowedtagsgettaglist)
  * [`dev.followers.getList`](#devfollowersgetlist)
  * [`dev.organizations.createNewOrganization`](#devorganizationscreateneworganization)
  * [`dev.organizations.deleteById`](#devorganizationsdeletebyid)
  * [`dev.organizations.getById`](#devorganizationsgetbyid)
  * [`dev.organizations.getByUsername`](#devorganizationsgetbyusername)
  * [`dev.organizations.listArticles`](#devorganizationslistarticles)
  * [`dev.organizations.listOfDev`](#devorganizationslistofdev)
  * [`dev.organizations.listUsers`](#devorganizationslistusers)
  * [`dev.organizations.updateById`](#devorganizationsupdatebyid)
  * [`dev.pages.createNewPage`](#devpagescreatenewpage)
  * [`dev.pages.getDetails`](#devpagesgetdetails)
  * [`dev.pages.listAllDetails`](#devpageslistalldetails)
  * [`dev.pages.removePageById`](#devpagesremovepagebyid)
  * [`dev.pages.updatePageDetails`](#devpagesupdatepagedetails)
  * [`dev.podcastEpisodes.listByDescendingPublicationDate`](#devpodcastepisodeslistbydescendingpublicationdate)
  * [`dev.profileImages.getByUsername`](#devprofileimagesgetbyusername)
  * [`dev.reactions.createReaction`](#devreactionscreatereaction)
  * [`dev.reactions.toggleUserReaction`](#devreactionstoggleuserreaction)
  * [`dev.readinglist.getUserReadinglist`](#devreadinglistgetuserreadinglist)
  * [`dev.segments.addUsersToSegment`](#devsegmentsadduserstosegment)
  * [`dev.segments.createManuallyManagedSegment`](#devsegmentscreatemanuallymanagedsegment)
  * [`dev.segments.deleteManuallyManagedSegment`](#devsegmentsdeletemanuallymanagedsegment)
  * [`dev.segments.getById`](#devsegmentsgetbyid)
  * [`dev.segments.getUserListInSegment`](#devsegmentsgetuserlistinsegment)
  * [`dev.segments.listAudienceSegments`](#devsegmentslistaudiencesegments)
  * [`dev.segments.removeUsersFromSegment`](#devsegmentsremoveusersfromsegment)
  * [`dev.tags.getTagList`](#devtagsgettaglist)
  * [`dev.tags.listByPopularity`](#devtagslistbypopularity)
  * [`dev.users.addLimitedRole`](#devusersaddlimitedrole)
  * [`dev.users.addTrustedRole`](#devusersaddtrustedrole)
  * [`dev.users.assignSpamRole`](#devusersassignspamrole)
  * [`dev.users.getAllUserArticles`](#devusersgetalluserarticles)
  * [`dev.users.getByIdOrUsername`](#devusersgetbyidorusername)
  * [`dev.users.getInformation`](#devusersgetinformation)
  * [`dev.users.getPublishedList`](#devusersgetpublishedlist)
  * [`dev.users.getPublishedList_0`](#devusersgetpublishedlist_0)
  * [`dev.users.getUnpublishedList`](#devusersgetunpublishedlist)
  * [`dev.users.inviteUser`](#devusersinviteuser)
  * [`dev.users.listUsers`](#devuserslistusers)
  * [`dev.users.removeLimits`](#devusersremovelimits)
  * [`dev.users.removeSpamRole`](#devusersremovespamrole)
  * [`dev.users.removeTrustedRole`](#devusersremovetrustedrole)
  * [`dev.users.suspendUser`](#devuserssuspenduser)
  * [`dev.users.unpublishUserArticlesAndComments`](#devusersunpublishuserarticlesandcomments)
  * [`dev.videos.listByPopularity`](#devvideoslistbypopularity)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=DEV&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Dev } from "dev-typescript-sdk";

const dev = new Dev({
  // Defining the base path is optional and defaults to https://dev.to/api
  // basePath: "https://dev.to/api",
  apiKey: "API_KEY",
});

const createNewArticleResponse = await dev.articles.createNewArticle({});

console.log(createNewArticleResponse);
```

## Reference<a id="reference"></a>


### `dev.articles.createNewArticle`<a id="devarticlescreatenewarticle"></a>

This endpoint allows the client to create a new article.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewArticleResponse = await dev.articles.createNewArticle({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### article: [`ArticleArticle`](./models/article-article.ts)<a id="article-articlearticlemodelsarticle-articlets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ArticlesCreateNewArticleResponse](./models/articles-create-new-article-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.getAllUserArticles`<a id="devarticlesgetalluserarticles"></a>

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

It will return both published and unpublished articles with pagination.

Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.

By default a page will contain 30 articles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserArticlesResponse = await dev.articles.getAllUserArticles({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/me/all` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.getById`<a id="devarticlesgetbyid"></a>

This endpoint allows the client to retrieve a single published article given its `id`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dev.articles.getById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.getByPath`<a id="devarticlesgetbypath"></a>

This endpoint allows the client to retrieve a single published article given its `path`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByPathResponse = await dev.articles.getByPath({
  username: "username_example",
  slug: "slug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

##### slug: `string`<a id="slug-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/{username}/{slug}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.getPublishedList`<a id="devarticlesgetpublishedlist"></a>

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPublishedListResponse = await dev.articles.getPublishedList({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.getPublishedList_0`<a id="devarticlesgetpublishedlist_0"></a>

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPublishedList_0Response = await dev.articles.getPublishedList_0({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/me/published` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.getUnpublishedList`<a id="devarticlesgetunpublishedlist"></a>

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Unpublished articles will be in reverse chronological creation order.

It will return unpublished articles with pagination. By default a page will contain 30 articles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnpublishedListResponse = await dev.articles.getUnpublishedList({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/me/unpublished` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.listArticles`<a id="devarticleslistarticles"></a>

This endpoint allows the client to retrieve a list of Articles belonging to the organization

It supports pagination, each page will contain `30` users by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listArticlesResponse = await dev.articles.listArticles({
  organizationIdOrUsername: "organizationIdOrUsername_example",
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### organizationIdOrUsername: `string`<a id="organizationidorusername-string"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations/{organization_id_or_username}/articles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.listByPopularity`<a id="devarticleslistbypopularity"></a>

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.

It will only return published video articles ordered by descending popularity.

It supports pagination, each page will contain 24 articles by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByPopularityResponse = await dev.articles.listByPopularity({
  page: 1,
  perPage: 24,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[VideoArticle](./models/video-article.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.listLatestPublished`<a id="devarticleslistlatestpublished"></a>

This endpoint allows the client to retrieve a list of articles. ordered by descending publish date.

It supports pagination, each page will contain 30 articles by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLatestPublishedResponse = await dev.articles.listLatestPublished({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/latest` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.listPublishedArticles`<a id="devarticleslistpublishedarticles"></a>

This endpoint allows the client to retrieve a list of articles.

"Articles" are all the posts that users create on DEV that typically
show up in the feed. They can be a blog post, a discussion question,
a help thread etc. but is referred to as article within the code.

By default it will return featured, published articles ordered
by descending popularity.

It supports pagination, each page will contain `30` articles by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPublishedArticlesResponse = await dev.articles.listPublishedArticles({
  page: 1,
  perPage: 30,
  state: "fresh",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

##### tag: `string`<a id="tag-string"></a>

Using this parameter will retrieve articles that contain the requested tag. Articles will be ordered by descending popularity.This parameter can be used in conjuction with `top`.

##### tags: `string`<a id="tags-string"></a>

Using this parameter will retrieve articles with any of the comma-separated tags. Articles will be ordered by descending popularity.

##### tagsExclude: `string`<a id="tagsexclude-string"></a>

Using this parameter will retrieve articles that do _not_ contain _any_ of comma-separated tags. Articles will be ordered by descending popularity.

##### username: `string`<a id="username-string"></a>

Using this parameter will retrieve articles belonging             to a User or Organization ordered by descending publication date.             If `state=all` the number of items returned will be `1000` instead of the default `30`.             This parameter can be used in conjuction with `state`.

##### state: `'fresh' | 'rising' | 'all'`<a id="state-fresh--rising--all"></a>

Using this parameter will allow the client to check which articles are fresh or rising.             If `state=fresh` the server will return fresh articles.             If `state=rising` the server will return rising articles.             This param can be used in conjuction with `username`, only if set to `all`.

##### top: `number`<a id="top-number"></a>

Using this parameter will allow the client to return the most popular articles in the last `N` days. `top` indicates the number of days since publication of the articles returned. This param can be used in conjuction with `tag`.

##### collectionId: `number`<a id="collectionid-number"></a>

Adding this will allow the client to return the list of articles belonging to the requested collection, ordered by ascending publication date.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.unpublishById`<a id="devarticlesunpublishbyid"></a>

This endpoint allows the client to unpublish an article.

The user associated with the API key must have any 'admin' or 'moderator' role.

The article will be unpublished and will no longer be visible to the public. It will remain
in the database and will set back to draft status on the author's posts dashboard. Any
notifications associated with the article will be deleted. Any comments on the article
will remain.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unpublishByIdResponse = await dev.articles.unpublishById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the article to unpublish.

##### note: `string`<a id="note-string"></a>

Content for the note that\'s created along with unpublishing

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/{id}/unpublish` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.articles.updateById`<a id="devarticlesupdatebyid"></a>

This endpoint allows the client to update an existing article.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await dev.articles.updateById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the user to unpublish.

##### article: [`ArticleArticle`](./models/article-article.ts)<a id="article-articlearticlemodelsarticle-articlets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ArticlesUpdateByIdResponse](./models/articles-update-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.billboards.createNewBillboard`<a id="devbillboardscreatenewbillboard"></a>

This endpoint allows the client to create a new billboard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewBillboardResponse = await dev.billboards.createNewBillboard([
  {
    name: "name_example",
    body_markdown: "body_markdown_example",
    placement_area: "sidebar_left",
    audience_segment_type: "manual",
    display_to: "all",
    type_of: "in_house",
  },
]);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`Billboard`](./models/billboard.ts)[]

#### 🔄 Return<a id="🔄-return"></a>

[Billboard](./models/billboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/billboards` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.billboards.getById`<a id="devbillboardsgetbyid"></a>

This endpoint allows the client to retrieve a single billboard, via its id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dev.billboards.getById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the billboard.

#### 🔄 Return<a id="🔄-return"></a>

[BillboardsGetByIdResponse](./models/billboards-get-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/billboards/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.billboards.getList`<a id="devbillboardsgetlist"></a>

This endpoint allows the client to retrieve a list of all billboards.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await dev.billboards.getList();
```

#### 🔄 Return<a id="🔄-return"></a>

[Billboard](./models/billboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/billboards` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.billboards.unpublishBillboard`<a id="devbillboardsunpublishbillboard"></a>

This endpoint allows the client to remove a billboard from rotation by un-publishing it.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unpublishBillboardResponse = await dev.billboards.unpublishBillboard({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the billboard to unpublish.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/billboards/{id}/unpublish` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.billboards.updateById`<a id="devbillboardsupdatebyid"></a>

This endpoint allows the client to update the attributes of a single billboard, via its id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await dev.billboards.updateById([
  {
    name: "name_example",
    body_markdown: "body_markdown_example",
    placement_area: "sidebar_left",
    audience_segment_type: "manual",
    display_to: "all",
    type_of: "in_house",
  },
]);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the billboard.

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`Billboard`](./models/billboard.ts)[]

#### 🔄 Return<a id="🔄-return"></a>

[Billboard](./models/billboard.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/billboards/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.comments.getAllThreaded`<a id="devcommentsgetallthreaded"></a>

This endpoint allows the client to retrieve all comments belonging to an article or podcast episode as threaded conversations.

It will return the all top level comments with their nested comments as threads. See the format specification for further details.

It supports pagination, each page will contain `50` top level comments (and as many child comments they have) by default.

If the page parameter is not passed, all comments of an article or podcast will be returned.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllThreadedResponse = await dev.comments.getAllThreaded({
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

##### aId: `string`<a id="aid-string"></a>

Article identifier.

##### pId: `string`<a id="pid-string"></a>

Podcast Episode identifier.

##### page: `number`<a id="page-number"></a>

Pagination page

#### 🔄 Return<a id="🔄-return"></a>

[Comment](./models/comment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/comments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.comments.getThreadedComment`<a id="devcommentsgetthreadedcomment"></a>

This endpoint allows the client to retrieve a comment as well as his descendants comments.

  It will return the required comment (the root) with its nested descendants as a thread.

  See the format specification for further details.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getThreadedCommentResponse = await dev.comments.getThreadedComment({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

Comment identifier.

#### 🔄 Return<a id="🔄-return"></a>

[CommentsGetThreadedCommentResponse](./models/comments-get-threaded-comment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/comments/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.followedTags.getTagList`<a id="devfollowedtagsgettaglist"></a>

This endpoint allows the client to retrieve a list of the tags they follow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTagListResponse = await dev.followedTags.getTagList();
```

#### 🔄 Return<a id="🔄-return"></a>

[FollowedTag](./models/followed-tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/follows/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.followers.getList`<a id="devfollowersgetlist"></a>

This endpoint allows the client to retrieve a list of the followers they have.
        "Followers" are users that are following other users on the website.
        It supports pagination, each page will contain 80 followers by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await dev.followers.getList({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

##### sort: `string`<a id="sort-string"></a>

Default is \'created_at\'. Specifies the sort order for the created_at param of the follow                                 relationship. To sort by newest followers first (descending order) specify                                 ?sort=-created_at.

#### 🔄 Return<a id="🔄-return"></a>

[FollowersGetListResponseInner](./models/followers-get-list-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/followers/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.organizations.createNewOrganization`<a id="devorganizationscreateneworganization"></a>

This endpoint allows the client to create an organization with the provided parameters.
        It requires a token from a user with `admin` privileges.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewOrganizationResponse =
  await dev.organizations.createNewOrganization({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### summary: `string`<a id="summary-string"></a>

##### type_of: `string`<a id="type_of-string"></a>

##### username: `string`<a id="username-string"></a>

##### name: `string`<a id="name-string"></a>

##### twitter_username: `string`<a id="twitter_username-string"></a>

##### github_username: `string`<a id="github_username-string"></a>

##### url: `string`<a id="url-string"></a>

##### location: `string`<a id="location-string"></a>

##### joined_at: `string`<a id="joined_at-string"></a>

##### tech_stack: `string`<a id="tech_stack-string"></a>

##### tag_line: `string`<a id="tag_line-string"></a>

##### story: `string`<a id="story-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationsCreateNewOrganizationResponse](./models/organizations-create-new-organization-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.organizations.deleteById`<a id="devorganizationsdeletebyid"></a>

This endpoint allows the client to delete a single organization, specified by id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await dev.organizations.deleteById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the organization.

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationsDeleteByIdResponse](./models/organizations-delete-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.organizations.getById`<a id="devorganizationsgetbyid"></a>

This endpoint allows the client to retrieve a single organization by their id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dev.organizations.getById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Organization](./models/organization.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.organizations.getByUsername`<a id="devorganizationsgetbyusername"></a>

This endpoint allows the client to retrieve a single organization by their username

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUsernameResponse = await dev.organizations.getByUsername({
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Organization](./models/organization.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations/{username}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.organizations.listArticles`<a id="devorganizationslistarticles"></a>

This endpoint allows the client to retrieve a list of Articles belonging to the organization

It supports pagination, each page will contain `30` users by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listArticlesResponse = await dev.organizations.listArticles({
  organizationIdOrUsername: "organizationIdOrUsername_example",
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### organizationIdOrUsername: `string`<a id="organizationidorusername-string"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations/{organization_id_or_username}/articles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.organizations.listOfDev`<a id="devorganizationslistofdev"></a>

This endpoint allows the client to retrieve a list of Dev organizations.

  It supports pagination, each page will contain 10 tags by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listOfDevResponse = await dev.organizations.listOfDev({
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[Organization](./models/organization.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.organizations.listUsers`<a id="devorganizationslistusers"></a>

This endpoint allows the client to retrieve a list of users belonging to the organization

It supports pagination, each page will contain `30` users by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUsersResponse = await dev.organizations.listUsers({
  organizationIdOrUsername: "organizationIdOrUsername_example",
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### organizationIdOrUsername: `string`<a id="organizationidorusername-string"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations/{organization_id_or_username}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.organizations.updateById`<a id="devorganizationsupdatebyid"></a>

This endpoint allows the client to update an existing organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await dev.organizations.updateById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the organization to update.

##### summary: `string`<a id="summary-string"></a>

##### type_of: `string`<a id="type_of-string"></a>

##### username: `string`<a id="username-string"></a>

##### name: `string`<a id="name-string"></a>

##### twitter_username: `string`<a id="twitter_username-string"></a>

##### github_username: `string`<a id="github_username-string"></a>

##### url: `string`<a id="url-string"></a>

##### location: `string`<a id="location-string"></a>

##### joined_at: `string`<a id="joined_at-string"></a>

##### tech_stack: `string`<a id="tech_stack-string"></a>

##### tag_line: `string`<a id="tag_line-string"></a>

##### story: `string`<a id="story-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationsUpdateByIdResponse](./models/organizations-update-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.pages.createNewPage`<a id="devpagescreatenewpage"></a>

This endpoint allows the client to create a new page.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewPageResponse = await dev.pages.createNewPage({
  template: "contained",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title of the page

##### description: `string`<a id="description-string"></a>

For internal use, helps similar pages from one another

##### slug: `string`<a id="slug-string"></a>

Used to link to this page in URLs, must be unique and URL-safe

##### body_markdown: `string`<a id="body_markdown-string"></a>

The text (in markdown) of the ad (required)

##### body_json: `string`<a id="body_json-string"></a>

For JSON pages, the JSON body

##### is_top_level_path: `boolean`<a id="is_top_level_path-boolean"></a>

If true, the page is available at \\\'/{slug}\\\' instead of \\\'/page/{slug}\\\', use with caution

##### template: `string`<a id="template-string"></a>

Controls what kind of layout the page is rendered in

#### 🔄 Return<a id="🔄-return"></a>

[PagesCreateNewPageResponse](./models/pages-create-new-page-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/pages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.pages.getDetails`<a id="devpagesgetdetails"></a>

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await dev.pages.getDetails({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the page.

#### 🔄 Return<a id="🔄-return"></a>

[Page](./models/page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/pages/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.pages.listAllDetails`<a id="devpageslistalldetails"></a>

This endpoint allows the client to retrieve details for all Page objects.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllDetailsResponse = await dev.pages.listAllDetails();
```

#### 🔄 Return<a id="🔄-return"></a>

[Page](./models/page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/pages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.pages.removePageById`<a id="devpagesremovepagebyid"></a>

This endpoint allows the client to delete a single Page object, specified by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePageByIdResponse = await dev.pages.removePageById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the page.

#### 🔄 Return<a id="🔄-return"></a>

[Page](./models/page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/pages/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.pages.updatePageDetails`<a id="devpagesupdatepagedetails"></a>

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePageDetailsResponse = await dev.pages.updatePageDetails({
  id: 1,
  title: "title_example",
  description: "description_example",
  slug: "slug_example",
  template: "contained",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title of the page

##### description: `string`<a id="description-string"></a>

For internal use, helps similar pages from one another

##### slug: `string`<a id="slug-string"></a>

Used to link to this page in URLs, must be unique and URL-safe

##### template: `string`<a id="template-string"></a>

Controls what kind of layout the page is rendered in

##### id: `number`<a id="id-number"></a>

The ID of the page.

##### body_markdown: `string`<a id="body_markdown-string"></a>

The text (in markdown) of the ad (required)

##### body_json: `string`<a id="body_json-string"></a>

For JSON pages, the JSON body

##### is_top_level_path: `boolean`<a id="is_top_level_path-boolean"></a>

If true, the page is available at \\\'/{slug}\\\' instead of \\\'/page/{slug}\\\', use with caution

##### social_image: `object`<a id="social_image-object"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Page](./models/page.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/pages/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.podcastEpisodes.listByDescendingPublicationDate`<a id="devpodcastepisodeslistbydescendingpublicationdate"></a>

This endpoint allows the client to retrieve a list of podcast episodes.
        "Podcast episodes" are episodes belonging to podcasts.
        It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.
        It supports pagination, each page will contain 30 articles by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByDescendingPublicationDateResponse =
  await dev.podcastEpisodes.listByDescendingPublicationDate({
    page: 1,
    perPage: 30,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

##### username: `string`<a id="username-string"></a>

Using this parameter will retrieve episodes belonging to a specific podcast.

#### 🔄 Return<a id="🔄-return"></a>

[PodcastEpisodeIndex](./models/podcast-episode-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/podcast_episodes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.profileImages.getByUsername`<a id="devprofileimagesgetbyusername"></a>

This endpoint allows the client to retrieve a user or organization profile image information by its
        corresponding username.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByUsernameResponse = await dev.profileImages.getByUsername({
  username: "username_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

The parameter is the username of the user or the username of the organization.

#### 🔄 Return<a id="🔄-return"></a>

[ProfileImage](./models/profile-image.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/profile_images/{username}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.reactions.createReaction`<a id="devreactionscreatereaction"></a>

This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will return the previous "like"

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createReactionResponse = await dev.reactions.createReaction({
  category: "like",
  reactableId: 1,
  reactableType: "Comment",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `'like' | 'unicorn' | 'exploding_head' | 'raised_hands' | 'fire'`<a id="category-like--unicorn--exploding_head--raised_hands--fire"></a>

##### reactableId: `number`<a id="reactableid-number"></a>

##### reactableType: `'Comment' | 'Article' | 'User'`<a id="reactabletype-comment--article--user"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ReactionsCreateReactionResponse](./models/reactions-create-reaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/reactions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.reactions.toggleUserReaction`<a id="devreactionstoggleuserreaction"></a>

This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will remove the "like" from the user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const toggleUserReactionResponse = await dev.reactions.toggleUserReaction({
  category: "like",
  reactableId: 1,
  reactableType: "Comment",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### category: `'like' | 'unicorn' | 'exploding_head' | 'raised_hands' | 'fire'`<a id="category-like--unicorn--exploding_head--raised_hands--fire"></a>

##### reactableId: `number`<a id="reactableid-number"></a>

##### reactableType: `'Comment' | 'Article' | 'User'`<a id="reactabletype-comment--article--user"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ReactionsToggleUserReactionResponse](./models/reactions-toggle-user-reaction-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/reactions/toggle` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.readinglist.getUserReadinglist`<a id="devreadinglistgetuserreadinglist"></a>

This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.
        It supports pagination, each page will contain `30` articles by default

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserReadinglistResponse = await dev.readinglist.getUserReadinglist({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/readinglist` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.segments.addUsersToSegment`<a id="devsegmentsadduserstosegment"></a>

This endpoint allows the client to add users in bulk to an audience segment specified by ID.

Successes are users that were included in the segment (even if they were already in it), and failures are users that could not be added to the segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUsersToSegmentResponse = await dev.segments.addUsersToSegment({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### user_ids: `number`[]<a id="user_ids-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SegmentsAddUsersToSegmentResponse](./models/segments-add-users-to-segment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/segments/{id}/add_users` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.segments.createManuallyManagedSegment`<a id="devsegmentscreatemanuallymanagedsegment"></a>

This endpoint allows the client to create a new audience segment.

An audience segment is a group of users that can be targeted by a Billboard. This API only permits managing segments you create and maintain yourself.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createManuallyManagedSegmentResponse =
  await dev.segments.createManuallyManagedSegment();
```

#### 🔄 Return<a id="🔄-return"></a>

[SegmentsCreateManuallyManagedSegmentResponse](./models/segments-create-manually-managed-segment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/segments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.segments.deleteManuallyManagedSegment`<a id="devsegmentsdeletemanuallymanagedsegment"></a>

This endpoint allows the client to delete an audience segment specified by ID.

Audience segments cannot be deleted if there are still any Billboards using them.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteManuallyManagedSegmentResponse =
  await dev.segments.deleteManuallyManagedSegment({
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SegmentsDeleteManuallyManagedSegmentResponse](./models/segments-delete-manually-managed-segment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/segments/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.segments.getById`<a id="devsegmentsgetbyid"></a>

This endpoint allows the client to retrieve a single manually-managed audience segment specified by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await dev.segments.getById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Segment](./models/segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/segments/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.segments.getUserListInSegment`<a id="devsegmentsgetuserlistinsegment"></a>

This endpoint allows the client to retrieve a list of the users in an audience segment specified by ID. The endpoint supports pagination, and each page will contain `30` users by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserListInSegmentResponse = await dev.segments.getUserListInSegment({
  id: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/segments/{id}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.segments.listAudienceSegments`<a id="devsegmentslistaudiencesegments"></a>

This endpoint allows the client to retrieve a list of audience segments.

An audience segment is a group of users that can be targeted by a Billboard. This API only permits managing segments you create and maintain yourself.

The endpoint supports pagination, and each page will contain `30` segments by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAudienceSegmentsResponse = await dev.segments.listAudienceSegments({
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[Segment](./models/segment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/segments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.segments.removeUsersFromSegment`<a id="devsegmentsremoveusersfromsegment"></a>

This endpoint allows the client to remove users in bulk from an audience segment specified by ID.

Successes are users that were removed; failures are users that weren't a part of the segment.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUsersFromSegmentResponse =
  await dev.segments.removeUsersFromSegment({
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

##### user_ids: `number`[]<a id="user_ids-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SegmentsRemoveUsersFromSegmentResponse](./models/segments-remove-users-from-segment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/segments/{id}/remove_users` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.tags.getTagList`<a id="devtagsgettaglist"></a>

This endpoint allows the client to retrieve a list of the tags they follow.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTagListResponse = await dev.tags.getTagList();
```

#### 🔄 Return<a id="🔄-return"></a>

[FollowedTag](./models/followed-tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/follows/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.tags.listByPopularity`<a id="devtagslistbypopularity"></a>

This endpoint allows the client to retrieve a list of tags that can be used to tag articles.

It will return tags ordered by popularity.

It supports pagination, each page will contain 10 tags by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByPopularityResponse = await dev.tags.listByPopularity({
  page: 1,
  perPage: 10,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[Tag](./models/tag.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.addLimitedRole`<a id="devusersaddlimitedrole"></a>

This endpoint allows the client to limit a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user will be assigned the 'limited' role. Limiting a user will limit notifications
generated from new posts and comments. It doesn't delete any of the user's content or prevent them
from generating new content while limited. Users are not notified of their limits
in the UI, so if you want them to know about this, you must notify them.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addLimitedRoleResponse = await dev.users.addLimitedRole({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the user to limit.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/{id}/limited` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.addTrustedRole`<a id="devusersaddtrustedrole"></a>

This endpoint allows the client to add the trusted role to a user.
          The user associated with the API key must have an 'admin' or 'moderator' role.
          The specified user will be assigned the 'trusted' role. Adding the trusted role to a user
          allows them to upvote and downvote posts and flag content that needs investigating by admins.
          Users are notified of this change in the UI, and by email.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTrustedRoleResponse = await dev.users.addTrustedRole({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the user to assign the trusted role.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/{id}/trusted` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.assignSpamRole`<a id="devusersassignspamrole"></a>

This endpoint allows the client to add the spam role to a user.

          The user associated with the API key must have any 'admin' or 'moderator' role.

          This specified user will be assigned the 'spam' role. Addding the spam role to a user will stop the
          user from posting new posts and comments. It doesn't delete any of the user's content, just
          prevents them from creating new content while having the spam role. Users are not notified of their spaminess
          in the UI, so if you want them to know about this, you must notify them

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignSpamRoleResponse = await dev.users.assignSpamRole({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the user to assign the spam role.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/{id}/spam` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.getAllUserArticles`<a id="devusersgetalluserarticles"></a>

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

It will return both published and unpublished articles with pagination.

Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.

By default a page will contain 30 articles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserArticlesResponse = await dev.users.getAllUserArticles({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/me/all` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.getByIdOrUsername`<a id="devusersgetbyidorusername"></a>

This endpoint allows the client to retrieve a single user, either by id
or by the user's username.

For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdOrUsernameResponse = await dev.users.getByIdOrUsername({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ExtendedUser](./models/extended-user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.getInformation`<a id="devusersgetinformation"></a>

This endpoint allows the client to retrieve information about the authenticated user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInformationResponse = await dev.users.getInformation();
```

#### 🔄 Return<a id="🔄-return"></a>

[MyUser](./models/my-user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.getPublishedList`<a id="devusersgetpublishedlist"></a>

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPublishedListResponse = await dev.users.getPublishedList({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.getPublishedList_0`<a id="devusersgetpublishedlist_0"></a>

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPublishedList_0Response = await dev.users.getPublishedList_0({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/me/published` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.getUnpublishedList`<a id="devusersgetunpublishedlist"></a>

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Unpublished articles will be in reverse chronological creation order.

It will return unpublished articles with pagination. By default a page will contain 30 articles.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUnpublishedListResponse = await dev.users.getUnpublishedList({
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[ArticleIndex](./models/article-index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/articles/me/unpublished` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.inviteUser`<a id="devusersinviteuser"></a>

This endpoint allows the client to trigger an invitation to the provided email address.

        It requires a token from a user with `super_admin` privileges.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteUserResponse = await dev.users.inviteUser({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

##### name: `string`<a id="name-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/admin/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.listUsers`<a id="devuserslistusers"></a>

This endpoint allows the client to retrieve a list of users belonging to the organization

It supports pagination, each page will contain `30` users by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUsersResponse = await dev.users.listUsers({
  organizationIdOrUsername: "organizationIdOrUsername_example",
  page: 1,
  perPage: 30,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### organizationIdOrUsername: `string`<a id="organizationidorusername-string"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/organizations/{organization_id_or_username}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.removeLimits`<a id="devusersremovelimits"></a>

This endpoint allows the client to remove limits for a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user will be restored to 'general' status. Users are not notified
of limits in the UI, so if you want them to know about this, you must
notify them.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeLimitsResponse = await dev.users.removeLimits({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the user to un-limit.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/{id}/limited` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.removeSpamRole`<a id="devusersremovespamrole"></a>

This endpoint allows the client to remove the spam role for a user.

          The user associated with the API key must have any 'admin' or 'moderator' role.

          This specified user will be restored to 'general' status. Users are not notified
          of removing their spam role in the UI, so if you want them to know about this, you must
          notify them.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeSpamRoleResponse = await dev.users.removeSpamRole({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the user to remove the spam role from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/{id}/spam` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.removeTrustedRole`<a id="devusersremovetrustedrole"></a>

This endpoint allows the client to remove the trusted role for a user.
          The user associated with the API key must have an 'admin' or 'moderator' role.
          The specified user will be restored to 'general' status. Users are not notified
          of removing their trusted role in the UI, so if you want them to know about this, you must
          notify them.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTrustedRoleResponse = await dev.users.removeTrustedRole({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the user to remove the trusted role from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/{id}/trusted` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.suspendUser`<a id="devuserssuspenduser"></a>

This endpoint allows the client to suspend a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user will be assigned the 'suspended' role. Suspending a user will stop the
user from posting new posts and comments. It doesn't delete any of the user's content, just
prevents them from creating new content while suspended. Users are not notified of their suspension
in the UI, so if you want them to know about this, you must notify them.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const suspendUserResponse = await dev.users.suspendUser({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the user to suspend.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/{id}/suspend` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.users.unpublishUserArticlesAndComments`<a id="devusersunpublishuserarticlesandcomments"></a>

This endpoint allows the client to unpublish all of the articles and
comments created by a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user's articles and comments will be unpublished and will no longer be
visible to the public. They will remain in the database and will set back to draft status
on the specified user's  dashboard. Any notifications associated with the specified user's
articles and comments will be deleted.

Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT
status code immediately, but the articles and comments will not be unpublished until the
request is completed on the server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unpublishUserArticlesAndCommentsResponse =
  await dev.users.unpublishUserArticlesAndComments({
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

The ID of the user to unpublish.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/users/{id}/unpublish` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `dev.videos.listByPopularity`<a id="devvideoslistbypopularity"></a>

This endpoint allows the client to retrieve a list of articles that are uploaded with a video.

It will only return published video articles ordered by descending popularity.

It supports pagination, each page will contain 24 articles by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByPopularityResponse = await dev.videos.listByPopularity({
  page: 1,
  perPage: 24,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Pagination page

##### perPage: `number`<a id="perpage-number"></a>

Page size (the number of items to return per page). The default maximum value can be overridden by \"API_PER_PAGE_MAX\" environment variable.

#### 🔄 Return<a id="🔄-return"></a>

[VideoArticle](./models/video-article.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/videos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)

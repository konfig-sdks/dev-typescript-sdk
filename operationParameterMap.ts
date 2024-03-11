type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/articles-POST': {
        parameters: [
            {
                name: 'article'
            },
        ]
    },
    '/api/articles/me/all-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/articles/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/articles/{username}/{slug}-GET': {
        parameters: [
            {
                name: 'username'
            },
            {
                name: 'slug'
            },
        ]
    },
    '/api/articles/me-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/articles/me/published-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/articles/me/unpublished-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/organizations/{organization_id_or_username}/articles-GET': {
        parameters: [
            {
                name: 'organization_id_or_username'
            },
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/videos-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/articles/latest-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/articles-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
            {
                name: 'tag'
            },
            {
                name: 'tags'
            },
            {
                name: 'tags_exclude'
            },
            {
                name: 'username'
            },
            {
                name: 'state'
            },
            {
                name: 'top'
            },
            {
                name: 'collection_id'
            },
        ]
    },
    '/api/articles/{id}/unpublish-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'note'
            },
        ]
    },
    '/api/articles/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'article'
            },
        ]
    },
    '/api/billboards-POST': {
        parameters: [
        ]
    },
    '/api/billboards/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/billboards-GET': {
        parameters: [
        ]
    },
    '/api/billboards/{id}/unpublish-PUT': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/billboards/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/comments-GET': {
        parameters: [
            {
                name: 'per_page'
            },
            {
                name: 'a_id'
            },
            {
                name: 'p_id'
            },
            {
                name: 'page'
            },
        ]
    },
    '/api/comments/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/follows/tags-GET': {
        parameters: [
        ]
    },
    '/api/followers/users-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
            {
                name: 'sort'
            },
        ]
    },
    '/api/organizations-POST': {
        parameters: [
            {
                name: 'summary'
            },
            {
                name: 'type_of'
            },
            {
                name: 'username'
            },
            {
                name: 'name'
            },
            {
                name: 'twitter_username'
            },
            {
                name: 'github_username'
            },
            {
                name: 'url'
            },
            {
                name: 'location'
            },
            {
                name: 'joined_at'
            },
            {
                name: 'tech_stack'
            },
            {
                name: 'tag_line'
            },
            {
                name: 'story'
            },
        ]
    },
    '/api/organizations/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/organizations/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/organizations/{username}-GET': {
        parameters: [
            {
                name: 'username'
            },
        ]
    },
    '/api/organizations/{organization_id_or_username}/articles-GET': {
        parameters: [
            {
                name: 'organization_id_or_username'
            },
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/organizations-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/organizations/{organization_id_or_username}/users-GET': {
        parameters: [
            {
                name: 'organization_id_or_username'
            },
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/organizations/{id}-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'summary'
            },
            {
                name: 'type_of'
            },
            {
                name: 'username'
            },
            {
                name: 'name'
            },
            {
                name: 'twitter_username'
            },
            {
                name: 'github_username'
            },
            {
                name: 'url'
            },
            {
                name: 'location'
            },
            {
                name: 'joined_at'
            },
            {
                name: 'tech_stack'
            },
            {
                name: 'tag_line'
            },
            {
                name: 'story'
            },
        ]
    },
    '/api/pages-POST': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'slug'
            },
            {
                name: 'body_markdown'
            },
            {
                name: 'body_json'
            },
            {
                name: 'is_top_level_path'
            },
            {
                name: 'template'
            },
        ]
    },
    '/api/pages/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/pages-GET': {
        parameters: [
        ]
    },
    '/api/pages/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/pages/{id}-PUT': {
        parameters: [
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'slug'
            },
            {
                name: 'template'
            },
            {
                name: 'id'
            },
            {
                name: 'body_markdown'
            },
            {
                name: 'body_json'
            },
            {
                name: 'is_top_level_path'
            },
            {
                name: 'social_image'
            },
        ]
    },
    '/api/podcast_episodes-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
            {
                name: 'username'
            },
        ]
    },
    '/api/profile_images/{username}-GET': {
        parameters: [
            {
                name: 'username'
            },
        ]
    },
    '/api/reactions-POST': {
        parameters: [
            {
                name: 'category'
            },
            {
                name: 'reactable_id'
            },
            {
                name: 'reactable_type'
            },
        ]
    },
    '/api/reactions/toggle-POST': {
        parameters: [
            {
                name: 'category'
            },
            {
                name: 'reactable_id'
            },
            {
                name: 'reactable_type'
            },
        ]
    },
    '/api/readinglist-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/segments/{id}/add_users-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'user_ids'
            },
        ]
    },
    '/api/segments-POST': {
        parameters: [
        ]
    },
    '/api/segments/{id}-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/segments/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/segments/{id}/users-GET': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/segments-GET': {
        parameters: [
            {
                name: 'per_page'
            },
        ]
    },
    '/api/segments/{id}/remove_users-PUT': {
        parameters: [
            {
                name: 'id'
            },
            {
                name: 'user_ids'
            },
        ]
    },
    '/api/follows/tags-GET': {
        parameters: [
        ]
    },
    '/api/tags-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/users/{id}/limited-PUT': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/users/{id}/trusted-PUT': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/users/{id}/spam-PUT': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/articles/me/all-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/users/{id}-GET': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/users/me-GET': {
        parameters: [
        ]
    },
    '/api/articles/me-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/articles/me/published-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/articles/me/unpublished-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/admin/users-POST': {
        parameters: [
            {
                name: 'email'
            },
            {
                name: 'name'
            },
        ]
    },
    '/api/organizations/{organization_id_or_username}/users-GET': {
        parameters: [
            {
                name: 'organization_id_or_username'
            },
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
    '/api/users/{id}/limited-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/users/{id}/spam-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/users/{id}/trusted-DELETE': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/users/{id}/suspend-PUT': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/users/{id}/unpublish-PUT': {
        parameters: [
            {
                name: 'id'
            },
        ]
    },
    '/api/videos-GET': {
        parameters: [
            {
                name: 'page'
            },
            {
                name: 'per_page'
            },
        ]
    },
}
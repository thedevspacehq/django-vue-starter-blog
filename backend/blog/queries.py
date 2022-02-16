import graphene
from blog import models
from blog import types


# The Query class
class Query(graphene.ObjectType):
    site = graphene.Field(types.SiteType)
    all_posts = graphene.List(types.PostType)
    all_categories = graphene.List(types.CategoryType)
    all_tags = graphene.List(types.TagType)
    posts_by_category = graphene.List(types.PostType, category=graphene.String())
    posts_by_tag = graphene.List(types.PostType, tag=graphene.String())
    post_by_slug = graphene.Field(types.PostType, slug=graphene.String())
    current_user = graphene.Field(types.UserType, id=graphene.ID())

    def resolve_site(root, info):
        return (
            models.Site.objects.first()
        )

    def resolve_all_posts(root, info):
        return (
            models.Post.objects.all()
        )

    def resolve_all_categories(root, info):
        return (
            models.Category.objects.all()
        )

    def resolve_all_tags(root, info):
        return (
            models.Tag.objects.all()
        )

    def resolve_posts_by_category(root, info, category):
        return (
            models.Post.objects.filter(category__slug__iexact=category)
        )

    def resolve_posts_by_tag(root, info, tag):
        return (
            models.Post.objects.filter(tag__slug__iexact=tag)
        )

    def resolve_post_by_slug(root, info, slug):
        return (
            models.Post.objects.get(slug__iexact=slug)
        )

    def resolve_current_user(self, info, id):
        return (
            models.User.objects.get(pk=id)
        )
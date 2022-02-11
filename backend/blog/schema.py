from graphene_django import DjangoObjectType
import graphene
from blog import models


# Register GraphQL types
class UserType(DjangoObjectType):
    class Meta:
        model = models.User


class CategoryType(DjangoObjectType):
    class Meta:
        model = models.Category


class TagType(DjangoObjectType):
    class Meta:
        model = models.Tag


class PostType(DjangoObjectType):
    class Meta:
        model = models.Post


class CommentType(DjangoObjectType):
    class Meta:
        model = models.Comment


# The Query class
class Query(graphene.ObjectType):
    all_posts = graphene.List(PostType)
    all_categories = graphene.List(CategoryType)
    all_tags = graphene.List(TagType)

    posts_by_category = graphene.List(PostType, category=graphene.String())
    posts_by_tag = graphene.List(PostType, tag=graphene.String())
    
    post_by_slug = graphene.Field(PostType, slug=graphene.String())

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


schema = graphene.Schema(query=Query)

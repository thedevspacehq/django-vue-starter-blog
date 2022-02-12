from graphene_django import DjangoObjectType
from blog import models


class SiteType(DjangoObjectType):
    class Meta:
        model = models.Site


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

import graphene
from blog import queries, mutations


schema = graphene.Schema(query=queries.Query, mutation=mutations.Mutation)

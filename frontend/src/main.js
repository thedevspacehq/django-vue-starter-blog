import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://127.0.0.1:8000/graphql', // Matches the port that Django is using
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

createApp(App).use(router).use(apolloProvider).mount('#app')

# Providers util integrations

here we do all the behind the scenes integration work for each platform
Keys, tokens and limits will all be handled for each provider. 
`util/providers/index` is designed as a general entrypoint for handling all providers.

These should have their own set of unit tests for each provider, perhaps even a service of its own.
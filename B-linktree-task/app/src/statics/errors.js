module.exports = {
    ProviderTypeNotFound: (name) => new Error(`Provider "${name}" is not a provider type`),
    ProviderNotFound: (name) => new Error(`Provider "${name}" is not an accepted provider type`),
    UserNotFound: (uid) => new Error(`Tree for user ${uid} is not found`),

}
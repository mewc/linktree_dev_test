module.exports = {
    NoLinksFound: (uid) => new Error(`No links for @${uid} found.`),
    ProviderNotSupported: (type, provider) => new Error(`Provider "${provider}" is not a supported ${type} provider type`),
    ProviderTypeNotFound: (name) => new Error(`Provider "${name}" is not a provider type`),
    ProviderNotFound: (name) => new Error(`Provider "${name}" is not a known provider`),
    UserNotFound: (uid) => new Error(`Tree for user @${uid} is not found`),
    LinkTypeNotValid: (type) => new Error(`Link type ${type} is not a valid link type`),
    LinkFormatNotValid: (validationIssue) => new Error(`Link object format is invalid. ${JSON.stringify(validationIssue)}`),
    ProviderDataNotFound: (providerDetails) => new Error(`Provider details were not found when attempting integration.  ${JSON.stringify(providerDetails)}`)
}
module.exports = {
    NoLinksFound: (uid) => new Error(`No links for @${uid} found.`),
    ProviderTypeNotFound: (name) => new Error(`Provider "${name}" is not a provider type`),
    ProviderNotFound: (name) => new Error(`Provider "${name}" is not an accepted provider type`),
    UserNotFound: (uid) => new Error(`Tree for user @${uid} is not found`),
    LinkTypeNotValid: (type) => new Error(`Link type ${type} is not a valid link type`),
    LinkFormatNotValid: (validationIssue) => new Error(`Link format is not valid. ${JSON.stringify(validationIssue)}`)
}
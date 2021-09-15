function generateVerbContent(verb) {
    return `## ${verb.verb}
    Current Weight: ${verb.weight}

    Rubie Value: ${verb.rubies}
    `;
}

module.exports = {
    generateVerbContent
};
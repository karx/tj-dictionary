function generateVerbContent(verb) {
    return `# ${verb.verb}
${verb.description}

## Value Exchange
Current Weight: ${verb.weight}

Rubie Value: ${verb.rubies}

## Expected Value
${verb.expected_value}
\`\`\`json
${verb.value_example}
\`\`\`

## Expected Actor
${verb.user_by}
\`\`\`
${verb.user_by_example}
\`\`\`

`;
}

module.exports = {
    generateVerbContent
};
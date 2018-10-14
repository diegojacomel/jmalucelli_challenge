const normalizeCnpj = value => {
    if (!value) {
        return value
    }

    const onlyNums = value.replace(/[^\d]/g, '')

    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(5, 8)}/${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 14)}`
}

export {
    normalizeCnpj
}
export const stringToClassNamesObject = (string) => {
    if (typeof string == 'string' && string.length > 0) {
        let classes = {};
        string.split(' ').map(c => classes[c] = true);
        return classes;
    } else {
        return {};
    }
} 
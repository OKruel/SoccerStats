const stringToDate = (dateString: string): Date => {
    
    const dateNumberParts = dateString
        .split('/')
        .map((value: string) => parseInt(value))

    return new Date(dateNumberParts[2], dateNumberParts[1] - 1, dateNumberParts[0]);
};

export { stringToDate };
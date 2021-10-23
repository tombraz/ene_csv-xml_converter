const renameHeaders = (headers: string[]) => {
  let newHeaders: string[] = [];

  headers.forEach((header) => {
    if (newHeaders.includes(header)) {
      const newHeader = `PPE_${header}`;
      newHeaders.push(newHeader);
    } else {
      newHeaders.push(header);
    }
  });

  return newHeaders;
};

export default renameHeaders;

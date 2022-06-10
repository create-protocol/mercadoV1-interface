export const getEllipsisTxt = (str, n = 6) => {
    if (str) {
      return `${str.substr(0, n)}...${str.substr(str.length - n, str.length)}`;
    }
    return "";
  };


  export const createURI = (uri) =>
    uri.slice(0, 7) === "ipfs://"
      ? "https://ipfs.infura.io/ipfs/" + uri.slice(7)
      : uri;

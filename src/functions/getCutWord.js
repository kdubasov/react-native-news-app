export const getCutWord = (str, length = 20) => {
    if (!str) return "";
    if (str.length <= length) return str;
    return str.slice(0, length) + "...";
}

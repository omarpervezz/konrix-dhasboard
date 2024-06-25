export function reverseQuery(element, query) {
    while (element) {
        if (element.parentElement) {
            if (element.parentElement.querySelector(query) === element) return element;
        }
        element = element.parentElement;
    }
    return null;
}

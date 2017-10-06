/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */

let typeCache: { [label: string]: boolean } = {};
export function type<T>(label: T | ''): T {
    if (typeCache[<string>label]) {
        throw new Error(`Action type "${label}" is not unique"`);
    }

    typeCache[<string>label] = true;

    return <T>label;
}

/**
 * Return the elements top and left position relative to the document
 * @param {HTMLElement} element to calculate coordinates
 * @returns {{top: number, left: number}}
 */
export const getElementPosition = (element: HTMLElement) => {
    if (element && window && document) {
        const box = element.getBoundingClientRect();

        const body = document.body;
        const docElement = document.documentElement;

        const scrollTop = window.pageYOffset || docElement.scrollTop || body.scrollTop;
        const scrollLeft = window.pageXOffset || docElement.scrollLeft || body.scrollLeft;

        const clientTop = docElement.clientTop || body.clientTop || 0;
        const clientLeft = docElement.clientLeft || body.clientLeft || 0;

        const top = box.top + scrollTop - clientTop;
        const left = box.left + scrollLeft - clientLeft;

        return {top: Math.round(top), left: Math.round(left)};
    }

    return {top: 0, left: 0};
};

/**
 * Recursively move scroll position until reach to value
 * @param {number} to Scroll position
 * @param {number} duration Scroll duration
 * @param {number} cycles
 */
export const scrollTo = (to, duration, cycles) => {
    if (duration < 0) {
        return;
    }
    let i = cycles || 0;
    const doc = document.documentElement;
    const scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const difference = to - scrollTop;
    const perTick = duration ? difference / duration * 10 : 0;

    requestAnimationFrame(() => {
        i++;
        window.scroll(0, scrollTop + perTick);

        if ((scrollTop === to) && (i > 2)) return;

        scrollTo(to, duration - 10, i);
    });
};

/**
 * Scroll to element by id
 * @param {string} elementId Html id of the target element
 * @param {number} offset of the scroll position
 */
export const scrollToElementId = (elementId, offset = 0) => {
    const targetElement = document.getElementById(elementId);
    const scrollTop = getElementPosition(targetElement).top - offset;
    scrollTo(scrollTop, 250, 0);
};

/**
 * @public {function}
 * @param {Element} element
 * @return {Element}
 */
const targetElement = (element) => {
    const TARGET_ATTRIBUTE = 'target';
    const target = element.getAttribute(TARGET_ATTRIBUTE);
    if (!target) {
        return null;
    }
    const TARGET_PARENT_ATTRIBUTE = 'target-parent';
    const targetParent = element.hasAttribute(TARGET_PARENT_ATTRIBUTE)
        ? element.closest(element.getAttribute(TARGET_PARENT_ATTRIBUTE))
        : element.parentElement;
    if (!targetParent) {
        return null;
    }
    return targetParent.querySelector(target);
};

export {targetElement};

export function hideBackdrop() {
    const backdrop = document.getElementById('backdrop');
    if (backdrop) {
        document.body.removeChild(backdrop);
        document.body.style.overflow = null;
        document.body.style.paddingRight = null;
    }
}

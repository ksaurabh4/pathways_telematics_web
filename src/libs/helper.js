export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function openGraph({
    siteName,
    templateTitle,
    description,
    banner,
    logo = 'http://pathwaystelematics.com/wp-content/uploads/2021/12/cropped-kumar170x60px.png',
    isBlog = false,
}) {
    const ogLogo = encodeURIComponent(logo);
    const ogSiteName = encodeURIComponent(siteName.trim());
    const ogTemplateTitle = templateTitle
        ? encodeURIComponent(templateTitle.trim())
        : undefined;
    const ogDesc = encodeURIComponent(description.trim());


    return `https://og.thcl.dev/api/gradient?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ''
        }`;
}

/**
 * Remove `id-` prefix
 */
export const cleanBlogPrefix = (slug) => {
    if (slug.slice(0, 3) === 'id-') {
        return slug.slice(3);
    } else {
        return slug;
    }
};

/**
 * Access session storage on browser
 */
export function getFromSessionStorage(key) {
    if (typeof sessionStorage !== 'undefined') {
        return sessionStorage.getItem(key);
    }
    return null;
}

export function getFromLocalStorage(key) {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(key);
    }
    return null;
}
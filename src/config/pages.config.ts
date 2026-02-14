 
export const PAGES = {
    HOME: `/`,
    EXPLORE: `/explore`,
    LOCAL_PROFILE: `/profile`,
    LOCAL_SHOP: `/shop`,

    ISR: `/shop/isr`,
    SSG: `/shop/ssg`,


    PROFILE: (username:string) => `/profile/${username}`,
} as const;

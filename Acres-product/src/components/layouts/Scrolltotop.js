import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * The router keeps scroll position across navigations, so opening a listing
 * from halfway down the search results would land you halfway down the listing.
 * Reset to the top whenever the path changes.
 */
function Scrolltotop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default Scrolltotop;

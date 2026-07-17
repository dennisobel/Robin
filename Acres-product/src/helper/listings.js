/**
 * Search logic for the listings dataset.
 *
 * Everything runs client-side against src/data/listings.json — there is no API
 * yet. Keeping the rules here (rather than inside the search page) means the
 * map, the results grid and the result count all filter through one function
 * and cannot disagree with each other.
 */

// Filter labels come from src/data/select.json; the "Any ..." option in each
// list means "no constraint".
const ANY = /^Any\b/;

const BUDGETS = {
    'Under $2,000/mo': [0, 1999],
    '$2,000 - $3,000/mo': [2000, 3000],
    '$3,000 - $4,500/mo': [3000, 4500],
    '$4,500 - $6,000/mo': [4500, 6000],
    '$6,000+/mo': [6000, Infinity],
};

// Must match the first entry of each list in src/data/select.json — that entry
// is the "no constraint" option, and ANY below is what recognises it.
export const defaultFilters = {
    neighbourhood: 'Any',
    budget: 'Any',
    beds: 'Any',
    furnishing: 'Any',
    type: 'Any',
    school: 'Any',
    lease: 'Any',
    sort: 'Most relevant',
};

function matches(item, f) {
    if (!ANY.test(f.neighbourhood) && item.neighbourhood !== f.neighbourhood) return false;
    if (!ANY.test(f.furnishing) && item.furnished !== f.furnishing) return false;
    if (!ANY.test(f.type) && item.propertyType !== f.type) return false;

    if (!ANY.test(f.budget)) {
        const range = BUDGETS[f.budget];
        if (range && (item.monthlyprice < range[0] || item.monthlyprice > range[1])) return false;
    }

    if (!ANY.test(f.beds)) {
        const min = parseInt(f.beds, 10); // "3+ bedrooms" -> 3
        if (!Number.isNaN(min) && item.beds < min) return false;
    }

    // "12 months" means: show homes whose minimum lease is 12 months or shorter,
    // i.e. homes this tenant can actually commit to.
    if (!ANY.test(f.lease)) {
        const max = parseInt(f.lease, 10);
        if (!Number.isNaN(max) && item.leaseMin > max) return false;
    }

    if (!ANY.test(f.school)) {
        const near = (item.nearby || []).some((n) => n.type === 'school' && n.name === f.school);
        if (!near) return false;
    }

    return true;
}

function availabilityRank(item) {
    if (/^Immediately$/i.test(item.available)) return 0;
    const t = Date.parse(item.available);
    return Number.isNaN(t) ? Number.MAX_SAFE_INTEGER : t;
}

const SORTS = {
    'Price: low to high': (a, b) => a.monthlyprice - b.monthlyprice,
    'Price: high to low': (a, b) => b.monthlyprice - a.monthlyprice,
    'Most bedrooms': (a, b) => b.beds - a.beds,
    'Available soonest': (a, b) => availabilityRank(a) - availabilityRank(b),
    // "Most relevant" keeps the curated order, but floats featured homes up.
    'Most relevant': (a, b) => Number(b.featured) - Number(a.featured) || a.id - b.id,
};

export function searchListings(listings, filters) {
    const f = { ...defaultFilters, ...filters };
    const out = listings.filter((item) => matches(item, f));
    const cmp = SORTS[f.sort] || SORTS['Most relevant'];
    return out.sort(cmp);
}

/** How many filters the user has actually set — drives the "Clear" affordance. */
export function activeFilterCount(filters) {
    const f = { ...defaultFilters, ...filters };
    return ['neighbourhood', 'budget', 'beds', 'furnishing', 'type', 'school', 'lease']
        .filter((k) => !ANY.test(f[k])).length;
}

export function usd(n) {
    return '$' + new Intl.NumberFormat('en-US').format(n);
}

export function kes(n) {
    return 'KSh ' + new Intl.NumberFormat('en-US').format(n);
}

export function findListing(listings, id) {
    return listings.find((l) => String(l.id) === String(id));
}

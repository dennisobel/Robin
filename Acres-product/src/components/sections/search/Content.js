import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Select2 from '../../layouts/Select2';
import Listingcard from '../../layouts/Listingcard';
import Searchmap from './Searchmap';
import listings from '../../../data/listings.json';
import {
    neighbourhoodlist, budgetlist, bedslist,
    furnishinglist, typelist, schoollist, leaselist, sortbylist,
} from '../../../data/select.json';
import { searchListings, defaultFilters, activeFilterCount } from '../../../helper/listings';

// Filter key -> the option list that feeds it, in the order they appear.
const FIELDS = [
    { key: 'neighbourhood', label: 'Neighbourhood', list: neighbourhoodlist, col: 'col-lg-2 col-md-4 col-6' },
    { key: 'budget', label: 'Budget', list: budgetlist, col: 'col-lg-2 col-md-4 col-6' },
    { key: 'beds', label: 'Bedrooms', list: bedslist, col: 'col-lg-2 col-md-4 col-6' },
    { key: 'furnishing', label: 'Furnishing', list: furnishinglist, col: 'col-lg-2 col-md-4 col-6' },
    { key: 'school', label: 'Near school', list: schoollist, col: 'col-lg-2 col-md-4 col-6' },
    { key: 'lease', label: 'Lease', list: leaselist, col: 'col-lg-1 col-md-4 col-6' },
    { key: 'type', label: 'Type', list: typelist, col: 'col-lg-1 col-md-4 col-6' },
];

/**
 * Map + results, filtered client-side.
 *
 * Filters live in the query string rather than component state so a consultant
 * can send "here are the four Gigiri houses under $4.5k" as a link — and so the
 * homepage hero can hand its selections straight through.
 */
function Content() {
    const [params, setParams] = useSearchParams();
    const [activeId, setActiveId] = useState(null);

    const filters = useMemo(() => {
        const f = { ...defaultFilters };
        for (const k of Object.keys(defaultFilters)) {
            const v = params.get(k);
            if (v) f[k] = v;
        }
        return f;
    }, [params]);

    const results = useMemo(() => searchListings(listings, filters), [filters]);
    const activeCount = activeFilterCount(filters);

    function set(key, value) {
        const next = new URLSearchParams(params);
        // "Any ..." is the absence of a filter — drop it from the URL entirely.
        if (/^Any\b|^Most relevant$/.test(value)) next.delete(key);
        else next.set(key, value);
        setParams(next, { replace: true });
    }

    return (
        <div className="cxp-search">
            {/* Filters */}
            <div className="cxp-filterbar">
                <div className="row align-items-end">
                    {FIELDS.map((f) => (
                        <div key={f.key} className={`${f.col} acr-custom-select mb-2 mb-lg-0`}>
                            <label>{f.label}</label>
                            <Select2
                                data={f.list}
                                value={filters[f.key]}
                                onChange={(e) => set(f.key, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="cxp-search-body">
                {/* Results */}
                <div className="cxp-search-results">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="cxp-resultcount">
                            <strong>{results.length}</strong> {results.length === 1 ? 'home' : 'homes'}
                            {activeCount > 0 && (
                                <>
                                    {' '}·{' '}
                                    <button
                                        type="button"
                                        className="btn-link p-0 border-0 bg-transparent"
                                        onClick={() => setParams(new URLSearchParams(), { replace: true })}
                                    >
                                        Clear {activeCount} {activeCount === 1 ? 'filter' : 'filters'}
                                    </button>
                                </>
                            )}
                        </span>
                        <div className="acr-custom-select" style={{ minWidth: 180 }}>
                            <Select2
                                data={sortbylist}
                                value={filters.sort}
                                onChange={(e) => set('sort', e.target.value)}
                            />
                        </div>
                    </div>

                    {results.length === 0 ? (
                        <div className="cxp-empty">
                            <i className="fas fa-map-signs" />
                            <h5>Nothing matches that yet</h5>
                            <p>
                                Try widening the budget or the neighbourhood. Our consultants also
                                place homes that never reach the site — tell us the brief and we'll look.
                            </p>
                            <button
                                type="button"
                                className="btn-custom primary"
                                onClick={() => setParams(new URLSearchParams(), { replace: true })}
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        results.map((item) => (
                            <Listingcard
                                key={item.id}
                                item={item}
                                active={item.id === activeId}
                                onHover={setActiveId}
                            />
                        ))
                    )}
                </div>

                {/* Map */}
                <div className="cxp-search-map">
                    <Searchmap items={results} activeId={activeId} onHover={setActiveId} />
                </div>
            </div>
        </div>
    );
}

export default Content;

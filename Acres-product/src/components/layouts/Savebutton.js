import React from 'react';
import { toggleShortlist, useShortlist } from '../../helper/shortlist';

/** Heart toggle. Reads live shortlist state so every instance stays in sync. */
function Savebutton({ id, className = '' }) {
    const ids = useShortlist();
    const saved = ids.includes(id);

    function onClick(e) {
        e.preventDefault();
        e.stopPropagation(); // the card is a link — don't navigate on save
        toggleShortlist(id);
    }

    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={saved}
            aria-label={saved ? 'Remove from shortlist' : 'Save to shortlist'}
            title={saved ? 'Remove from shortlist' : 'Save to shortlist'}
            className={`cxp-save ${saved ? 'is-saved' : ''} ${className}`.trim()}
        >
            <i className={saved ? 'fas fa-heart' : 'far fa-heart'} />
        </button>
    );
}

export default Savebutton;

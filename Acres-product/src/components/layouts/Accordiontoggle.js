import React from 'react';
import { useAccordionButton } from 'react-bootstrap';

/**
 * Drop-in replacement for react-bootstrap v1's <Accordion.Toggle>, which v2
 * removed in favour of the useAccordionButton hook. Keeping the original
 * `as` / `eventKey` API means the surrounding Card markup — and every style
 * rule in style.css that depends on it — stays exactly as the template
 * authored it.
 *
 * A component (not a hook call at each site) because the consumers are class
 * components, which cannot call hooks themselves.
 */
function Accordiontoggle({ as: Component = 'button', eventKey, onClick, children, ...props }) {
    const handleClick = useAccordionButton(eventKey, onClick);
    return (
        <Component onClick={handleClick} {...props}>
            {children}
        </Component>
    );
}

export default Accordiontoggle;

import React, { Component } from 'react';

/**
 * Drop-in replacement for `react-select2-wrapper`, which was abandoned in 2018
 * and depends on jQuery + React 16 internals.
 *
 * Keeps the original call signature — <Select2 data={[...]} options={{ placeholder }} /> —
 * so the six existing call sites did not need to change. `.acr-select2` is the
 * template's own class and already carries the identical styling that style.css
 * applies to select2's generated markup, so the closed control looks the same.
 * `data` accepts plain strings or { id, text } objects.
 */
class Select2 extends Component {
    render() {
        const { data = [], options = {}, className = '', ...rest } = this.props;
        const { placeholder } = options;

        // Every list in select.json already leads with its own "Any ..." entry,
        // so only add a placeholder prompt when it would not duplicate that.
        const firstLabel = typeof data[0] === 'object' ? data[0]?.text : data[0];
        const showPlaceholder = placeholder && firstLabel !== placeholder;

        // Callers may drive this as a controlled select (value + onChange).
        // Setting defaultValue as well would make React complain that the
        // element is switching between controlled and uncontrolled.
        const controlled = rest.value !== undefined;

        return (
            <select
                className={`acr-select2 ${className}`.trim()}
                defaultValue={!controlled && showPlaceholder ? '' : undefined}
                {...rest}
            >
                {showPlaceholder && <option value="" disabled>{placeholder}</option>}
                {data.map((item, i) => {
                    const value = typeof item === 'object' ? item.id : item;
                    const label = typeof item === 'object' ? item.text : item;
                    return <option key={i} value={value}>{label}</option>;
                })}
            </select>
        );
    }
}

export default Select2;

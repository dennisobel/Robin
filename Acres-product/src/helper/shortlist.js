import { useEffect, useState } from 'react';

/**
 * Shortlist state, kept in localStorage.
 *
 * There is no backend, but a shortlist that forgets itself when you open a
 * listing is worse than none — so it persists locally and notifies every
 * mounted component, which keeps the heart icons in the header, the map and
 * the results grid in sync.
 */
const KEY = 'cxp.shortlist';
const listeners = new Set();

function read() {
    try {
        const raw = window.localStorage.getItem(KEY);
        const ids = raw ? JSON.parse(raw) : [];
        return Array.isArray(ids) ? ids : [];
    } catch {
        return []; // private mode / disabled storage — degrade to empty
    }
}

function write(ids) {
    try {
        window.localStorage.setItem(KEY, JSON.stringify(ids));
    } catch {
        /* ignore quota / disabled storage */
    }
    listeners.forEach((fn) => fn(ids));
}

export function getShortlist() {
    return read();
}

export function toggleShortlist(id) {
    const ids = read();
    const next = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
    write(next);
    return next;
}

export function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

/** Live shortlist ids for function components. */
export function useShortlist() {
    const [ids, setIds] = useState(read);
    useEffect(() => subscribe(setIds), []);
    return ids;
}

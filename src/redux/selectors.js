import { createSelector } from '@reduxjs/toolkit';

// boilerplate (заменяем на нужные нам селекторы):
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

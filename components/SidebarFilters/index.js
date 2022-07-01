import React from 'react';
import { SideBarContainer } from './style';

function SidebarFilters() {
    return (
        <SideBarContainer>
            <h2>Refine sua busca</h2>
            <h4>Por preço</h4>
            <form>
                <label htmlFor="40">
                    <input type="radio" id="40" name="sidebar-filter" /> Até R$ 40
                </label>
                <label htmlFor="40-60">
                    <input type="radio" id="40-60" name="sidebar-filter" /> R$ 40 a R$ 60
                </label>
                <label htmlFor="100-200">
                    <input type="radio" id="100-200" name="sidebar-filter" /> R$ 100 a R$ 200
                </label>
                <label htmlFor="200-500">
                    <input type="radio" id="200-500" name="sidebar-filter" /> R$ 200 a R$ 500
                </label>
                <label htmlFor="above500">
                    <input type="radio" id="above500" name="sidebar-filter" /> Acima de R$ 500
                </label>
            </form>
        </SideBarContainer>
    );
}

export default SidebarFilters;

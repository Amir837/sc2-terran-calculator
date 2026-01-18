import React from 'react';
import './App.css';
import entitiesData from './data/entities.json';
import { EntityData } from './types';
import { EntityTooltip } from './components/EntityTooltip';

const entities = entitiesData as EntityData;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SC2 Terran Entities</h1>
      </header>
      
      <main className="App-main">
        <section className="entity-section">
          <h2>Units</h2>
          <div className="entity-column">
            {Object.entries(entities.units).map(([key, unit]) => (
              <EntityTooltip key={key} entity={unit} category="unit" />
            ))}
          </div>
        </section>

        <section className="entity-section">
          <h2>Structures</h2>
          <div className="entity-column">
            {Object.entries(entities.structures).map(([key, structure]) => (
              <EntityTooltip key={key} entity={structure} category="structure" />
            ))}
          </div>
        </section>

        <section className="entity-section">
          <h2>Upgrades</h2>
          <div className="entity-column">
            {Object.entries(entities.upgrades).map(([key, upgrade]) => (
              <EntityTooltip key={key} entity={upgrade} category="upgrade" />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

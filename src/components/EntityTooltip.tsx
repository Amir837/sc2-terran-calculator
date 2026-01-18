import React, { useState } from 'react';
import { Entity } from '../types';
import './EntityTooltip.css';

interface EntityTooltipProps {
  entity: Entity;
  category: string;
}

export const EntityTooltip: React.FC<EntityTooltipProps> = ({ entity, category }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="entity-tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="entity-name">{entity.name}</div>
      {isVisible && (
        <div className="entity-tooltip">
          <div className="tooltip-header">{entity.name}</div>
          <div className="tooltip-category">({category})</div>
          <div className="tooltip-content">
            <div className="tooltip-row">
              <span className="tooltip-label">Minerals:</span>
              <span className="tooltip-value">{entity.mineralCost}</span>
            </div>
            <div className="tooltip-row">
              <span className="tooltip-label">Gas:</span>
              <span className="tooltip-value">{entity.gasCost}</span>
            </div>
            <div className="tooltip-row">
              <span className="tooltip-label">Build Time:</span>
              <span className="tooltip-value">{entity.buildTime}s</span>
            </div>
            {'supplyCost' in entity && (
              <div className="tooltip-row">
                <span className="tooltip-label">Supply:</span>
                <span className="tooltip-value">{(entity as any).supplyCost}</span>
              </div>
            )}
            <div className="tooltip-row">
              <span className="tooltip-label">Produced From:</span>
              <span className="tooltip-value">{entity.producedFrom}</span>
            </div>
            {entity.prerequisites.length > 0 && (
              <div className="tooltip-row">
                <span className="tooltip-label">Prerequisites:</span>
                <span className="tooltip-value">{entity.prerequisites.join(', ')}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

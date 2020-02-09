import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import './LocationSearchInput.css'
import { Dimmer, Loader } from 'semantic-ui-react';

const LocationSearchInput = () => {
  const [address, setAddress] = useState('')

  const handleChange = address => {
    setAddress(address)
  }

  const handleSelect = address => {
    setAddress(address)
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={'location-search-input-container'}>
          <input
            {...getInputProps({
              placeholder: 'Enter Location',
              className: suggestions.length ? 'location-search-input-active' : 'location-search-input',
            })}
          />
          {suggestions.length > 0 && (
            <div className="autocomplete-dropdown-container">
              {loading && (
                <Dimmer active inverted>
                  <Loader inverted />
                </Dimmer>
              )}
              {suggestions.map(suggestion => {
                const { active, id, matchedSubstrings, formattedSuggestion: { mainText, secondaryText }} = suggestion
                console.log(suggestion)
                const className = active
                  ? 'suggestion-item-active'
                  : 'suggestion-item'
                return (
                  <div
                    key={id}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span className="suggestion-main-text-bold">{mainText.slice(0, matchedSubstrings[0].length)}</span>
                    <span className="suggestion-main-text">{mainText.slice(matchedSubstrings[0].length)}</span>
                    <span className="suggestion-secondary-text">{secondaryText}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput

import { useState, useEffect, useRef } from 'react';

const HAS_BACKDROP_CLASSNAME = 'hasBackdrop'; // for the body element to hide overflow

const BACKDROP_ENABLED_CLASSNAME = 'enabled';

export const backdropTransitionDuration = 300; // align with transition duration

const enableBackdrop = () => {
  const currentWidth = document.body.offsetWidth;
  document.body.classList.add(HAS_BACKDROP_CLASSNAME);
  const widthWithOverflowHidden = document.body.offsetWidth;

  const backdropElement = document.createElement('div');
  backdropElement.classList.add('backdrop');
  document.body.append(backdropElement);

  // Add this after appending to the dom for the transition
  window.setTimeout(() => {
    backdropElement.classList.add(BACKDROP_ENABLED_CLASSNAME);
  });

  // Set padding-right with width of scrollbar as replacement for removed scrollbar to prevent content jumping
  // Caution: this only works if the body element doesn't have any default padding!
  const scrollbarWidth = widthWithOverflowHidden - currentWidth;
  document.body.style.paddingRight = scrollbarWidth + 'px';

  return backdropElement;
};

const disableBackdrop = (backdropElement?: HTMLDivElement) => {
  if (!backdropElement) {
    return;
  }

  backdropElement.classList.remove(BACKDROP_ENABLED_CLASSNAME);
  window.setTimeout(() => {
    document.body.classList.remove(HAS_BACKDROP_CLASSNAME);
    document.body.style.removeProperty('padding-right');
    backdropElement.remove();
  }, backdropTransitionDuration);
};

export function useBackdrop(enabled: boolean) {
  const backdrop = useRef<HTMLDivElement>();
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (enabled) {
      backdrop.current = enableBackdrop();
      window.setTimeout(() => {
        setRendered(true);
      }, backdropTransitionDuration);
    } else {
      disableBackdrop(backdrop.current);
      setRendered(false);
    }
  }, [enabled]);

  useEffect(() => {
    // Make sure the backdrop is removed when the component is removed
    return () => {
      disableBackdrop(backdrop.current);
    };
  }, []);

  return rendered;
}

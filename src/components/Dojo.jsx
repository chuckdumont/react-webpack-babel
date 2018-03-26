import React from 'react';
import domStyle from 'dojo/dom-style'

const Sample = () => (
  <div>
    {domStyle.set(document.body, "background-color", "#7FFFD4") && ""}
    Background color set using domStyle.set(...)
  </div>
);

export default Sample;

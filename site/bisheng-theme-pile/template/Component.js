import React from 'react';
import collect from 'bisheng/collect';


const ComponentDoc = (props) => {
  console.log('props:', props);
  return (
    <p>
      hello ComponentDoc
    </p>
  )
}

export default collect(async (nextProps) => {
  console.log('nextProps:', nextProps)
  const { pathname } = nextProps.location;
  const pageDataFn = nextProps.utils.get(nextProps.data, pathname);
  if (!pageDataFn) {
    throw 404; // eslint-disable-line no-throw-literal
  }
  const pageData = await pageDataFn();
  return { pageData };
})(ComponentDoc);

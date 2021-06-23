import React, { useState } from 'react';

import { LinkButton } from '.';

// Component rendered when user is redirected back to site from Oauth institution site.
// It initiates link immediately with the original link token that was set in local storage
// from the initial link initialization.
const OAuthLink = () => {
  const [token, setToken] = useState<string>();
  const [userId, setUserId] = useState<number>(-100); // set for typescript
  const [itemId, setItemId] = useState<number>();

  const oauthObject = localStorage.getItem('oauthConfig');
  if (typeof oauthObject === 'string') {
    setUserId(JSON.parse(oauthObject).userId);
    setItemId(JSON.parse(oauthObject).itemId);
    setToken(JSON.parse(oauthObject).token);
  }

  return (
    <>
      {token != null && (
        <LinkButton
          isOauth // this will initiate link immediately
          userId={userId}
          itemId={itemId}
          token={token}
        />
      )}
    </>
  );
};

export default OAuthLink;

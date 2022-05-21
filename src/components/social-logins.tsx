import { useState } from 'react';

const SocialLogins = ({ onSubmit }) => {
  const providers = ['google', 'discord', 'twitch'];
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <div className='or-login-with font-oxanium-medium'>Or login with</div>
      {providers.map((provider) => {
        return (
          <div key={provider}>
            <button
              type='submit'
              className='social-btn text-cloudy-day'
              onClick={() => {
                setIsRedirecting(true);
                onSubmit(provider);
              }}
              key={provider}
              style={{ backgroundImage: `url(${provider}.png)` }}
            >
            {provider.replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          </div>
        );
      })}
      {isRedirecting && <div className='redirecting'>Redirecting...</div>}
    </>
  );
};

export default SocialLogins;

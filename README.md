# Netlify redirector

This is a tiny edge function in Netlify to redirect visitors to another domain,
if your DNS provider does not provide that option for you, or if it does and
you just don't want to use it!&nbsp;🤷

I wrote about my own use-case for this function in this [blog post][blog].

## Setup

1. Either [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/adriangoransson/netlify-redirector)
   or fork the repo and set it up on Netlify yourself.

2. Configure the `REDIRECT_HOST` environment variable to set your redirect target.

3. Set up your DNS entries to point to Netlify.
   https://docs.netlify.com/create/domain-management/

[blog]: https://adrg.se/blog/using-netlify-edge-functions-for-domain-redirects

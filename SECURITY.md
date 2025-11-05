# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Below are the versions of this project that are currently being supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of My Stack Template seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please Do Not

- Open a public GitHub issue for security vulnerabilities
- Disclose the vulnerability publicly before it has been addressed

### Please Do

1. **Email** your findings to the maintainers (create an issue privately if email is not available)
2. Provide detailed information about the vulnerability:
   - Type of vulnerability (e.g., XSS, SQL injection, authentication bypass)
   - Full paths of source file(s) related to the vulnerability
   - The location of the affected source code (tag/branch/commit or direct URL)
   - Any special configuration required to reproduce the issue
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the issue, including how an attacker might exploit it

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Communication**: We will keep you informed about the progress of fixing the vulnerability
- **Credit**: We will give you credit for the discovery in the security advisory (unless you prefer to remain anonymous)
- **Timeline**: We aim to address critical vulnerabilities within 7 days and other vulnerabilities within 30 days

## Security Best Practices for Users

When using this template in production:

1. **Environment Variables**
   - Never commit `.env.local` or `.env` files to version control
   - Use strong, unique values for all secrets
   - Rotate credentials regularly

2. **Supabase Security**
   - Enable Row Level Security (RLS) on all tables
   - Use Supabase's built-in authentication
   - Never expose your service role key in client-side code
   - Review and restrict API permissions

3. **Dependencies**
   - Regularly update dependencies: `npm audit` and `npm update`
   - Monitor for security advisories
   - Use `npm audit fix` to automatically fix vulnerabilities

4. **Code Security**
   - Validate and sanitize all user inputs
   - Use parameterized queries to prevent SQL injection
   - Implement proper CORS policies
   - Use HTTPS in production
   - Enable Content Security Policy (CSP) headers

5. **Authentication**
   - Implement proper session management
   - Use secure password hashing (handled by Supabase)
   - Enable multi-factor authentication when possible
   - Implement rate limiting on authentication endpoints

6. **Deployment**
   - Use environment-specific configurations
   - Enable security headers (Next.js provides some by default)
   - Monitor application logs for suspicious activity
   - Keep your deployment platform updated

## Known Security Considerations

This template includes:

- **Supabase Authentication**: Ensure you configure RLS policies appropriately
- **Client-Side Routing**: Protect sensitive routes with middleware
- **Environment Variables**: Follow the `.env.example` for proper configuration

## Security Updates

Security updates will be released as soon as possible after a vulnerability is confirmed. Updates will be announced through:

- GitHub Security Advisories
- Release notes
- CHANGELOG.md

## Additional Resources

- [Next.js Security Best Practices](https://nextjs.org/docs/pages/building-your-application/configuring/content-security-policy)
- [Supabase Security Documentation](https://supabase.com/docs/guides/platform/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

Thank you for helping keep My Stack Template and its users safe!

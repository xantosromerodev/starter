import { getStaticFile } from './utils.ts';

export default async ({ req, res }) => {
  
  if (req.method === 'GET' && req.path === '/') {
    return res.text(getStaticFile('resume.html'), 200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
  }
};

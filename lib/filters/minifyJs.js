import { minify } from 'terser';

export default async(code) => {
  if (process.env.NODE_ENV === 'production') {
    const minified = await minify(code);

    if (minified.error) {
      console.error('Terser error: ', minified.error);

      return code;
    }

    return minified.code;
  }

  return code;
};

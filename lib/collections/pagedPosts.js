import siteData from '../../src/_data/site.js';
import getPosts from './posts.js';

export default function (coll) {
  const allPosts = getPosts(coll);

  const maxPostsPerPage = siteData.paginate;
  const numberOfPages = Math.ceil(allPosts.length / maxPostsPerPage);
  const pagedPosts = [];

  for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
    const sliceFrom = (pageNum - 1) * maxPostsPerPage;
    const sliceTo = sliceFrom + maxPostsPerPage;

    pagedPosts.push({
      number: pageNum,
      posts: allPosts.slice(sliceFrom, sliceTo),
      first: pageNum === 1,
      last: pageNum === numberOfPages
    });
  }

  return pagedPosts;
};

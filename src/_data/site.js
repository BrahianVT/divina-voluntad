export default  {
  title: 'divina voluntad',
  description: 'Dar a conocer las verdades de la divina voluntad',
  keywords: ['divina voluntad', 'libro de cielo', 'tercer fiat', 'Luisa Piccarreta', "tercer fiat","horas de la pasión"],
  url: 'tips-ai.com', // your site url without trailing slash
  paginate: 12,
  // uncomment the next line if you want to add disqus to your site
  // disqusShortname: "your-shortname"
  currentYear() {
    const today = new Date();
    return today.getFullYear();
  }
};
